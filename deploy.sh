#!/bin/bash

# VocalBeam.com Deployment Script
set -e

echo "🚀 Starting VocalBeam.com deployment..."

# Colors
GREEN='\033[0;32m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# 1. Build the Next.js application
echo -e "${BLUE}📦 Building Next.js application...${NC}"
npm run build

# 2. Copy nginx config
echo -e "${BLUE}🔧 Setting up nginx configuration...${NC}"
sudo cp /tmp/vocalbeam.com.conf /etc/nginx/sites-available/vocalbeam.com.conf

# 3. Enable the site
if [ ! -L /etc/nginx/sites-enabled/vocalbeam.com.conf ]; then
    sudo ln -s /etc/nginx/sites-available/vocalbeam.com.conf /etc/nginx/sites-enabled/
    echo -e "${GREEN}✓ Nginx site enabled${NC}"
fi

# 4. Test nginx configuration
echo -e "${BLUE}🔍 Testing nginx configuration...${NC}"
sudo nginx -t

# 5. Setup SSL with certbot (if not already done)
if [ ! -d "/etc/letsencrypt/live/vocalbeam.com" ]; then
    echo -e "${BLUE}🔐 Setting up SSL certificate...${NC}"
    sudo certbot --nginx -d vocalbeam.com -d www.vocalbeam.com --non-interactive --agree-tos --email admin@vocalbeam.com
else
    echo -e "${GREEN}✓ SSL certificate already exists${NC}"
fi

# 6. Setup systemd service
echo -e "${BLUE}⚙️  Setting up systemd service...${NC}"
sudo cp /tmp/vocalbeam.service /etc/systemd/system/vocalbeam.service
sudo systemctl daemon-reload
sudo systemctl enable vocalbeam
sudo systemctl restart vocalbeam

# 7. Reload nginx
echo -e "${BLUE}🔄 Reloading nginx...${NC}"
sudo systemctl reload nginx

# 8. Check status
echo -e "${BLUE}📊 Checking service status...${NC}"
sudo systemctl status vocalbeam --no-pager

echo -e "${GREEN}✅ Deployment complete!${NC}"
echo -e "${GREEN}🌐 Your site should be live at: https://vocalbeam.com${NC}"
echo ""
echo "Useful commands:"
echo "  - Check logs: sudo journalctl -u vocalbeam -f"
echo "  - Restart app: sudo systemctl restart vocalbeam"
echo "  - Check nginx: sudo nginx -t"
