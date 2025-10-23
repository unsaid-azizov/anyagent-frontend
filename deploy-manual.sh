#!/bin/bash

# Speech0.com Manual Deployment Script
# Run this script and enter your sudo password when prompted

set -e

echo "🚀 Starting Speech0.com deployment..."

# 1. Copy nginx config
echo "📝 Step 1: Copying nginx configuration..."
sudo cp /tmp/speech0.com.conf /etc/nginx/sites-available/speech0.com.conf
echo "✓ Nginx config copied"

# 2. Enable the site
echo "📝 Step 2: Enabling nginx site..."
sudo ln -sf /etc/nginx/sites-available/speech0.com.conf /etc/nginx/sites-enabled/speech0.com.conf
echo "✓ Site enabled"

# 3. Test nginx configuration
echo "📝 Step 3: Testing nginx configuration..."
sudo nginx -t

# 4. Setup SSL with certbot
echo "📝 Step 4: Setting up SSL certificate..."
if [ ! -d "/etc/letsencrypt/live/speech0.com" ]; then
    sudo certbot --nginx -d speech0.com -d www.speech0.com
else
    echo "✓ SSL certificate already exists"
fi

# 5. Setup systemd service
echo "📝 Step 5: Setting up systemd service..."
sudo cp /tmp/speech0.service /etc/systemd/system/speech0.service
sudo systemctl daemon-reload
sudo systemctl enable speech0
sudo systemctl restart speech0
echo "✓ Service configured and started"

# 6. Reload nginx
echo "📝 Step 6: Reloading nginx..."
sudo systemctl reload nginx
echo "✓ Nginx reloaded"

# 7. Check status
echo "📝 Step 7: Checking service status..."
sudo systemctl status speech0 --no-pager -l

echo ""
echo "✅ Deployment complete!"
echo "🌐 Your site should be live at: https://speech0.com"
echo ""
echo "Useful commands:"
echo "  - Check logs: sudo journalctl -u speech0 -f"
echo "  - Restart app: sudo systemctl restart speech0"
echo "  - Stop app: sudo systemctl stop speech0"
echo "  - Check nginx: sudo nginx -t"
