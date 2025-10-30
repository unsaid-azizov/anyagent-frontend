#!/bin/bash

# VocalBeam.com Deployment Script with SSL
set -e

echo "🚀 Starting VocalBeam.com deployment with HTTPS..."

# Step 1: Stop any service that might be using port 80/443
echo "📝 Step 1: Checking for services on port 80..."
if sudo lsof -ti:80 > /dev/null 2>&1; then
    echo "⚠️  Port 80 is in use. Temporarily stopping nginx..."
    sudo systemctl stop nginx
fi

# Step 2: Get SSL certificate using certbot standalone mode
echo "📝 Step 2: Obtaining SSL certificate..."
if [ ! -d "/etc/letsencrypt/live/vocalbeam.com" ]; then
    echo "Getting new SSL certificate..."
    sudo certbot certonly --standalone \
        -d vocalbeam.com \
        -d www.vocalbeam.com \
        --non-interactive \
        --agree-tos \
        --email admin@vocalbeam.com
    echo "✓ SSL certificate obtained"
else
    echo "✓ SSL certificate already exists"
fi

# Step 3: Copy nginx config with SSL
echo "📝 Step 3: Installing nginx configuration..."
sudo cp /tmp/vocalbeam.com.conf /etc/nginx/sites-available/vocalbeam.com.conf
sudo ln -sf /etc/nginx/sites-available/vocalbeam.com.conf /etc/nginx/sites-enabled/vocalbeam.com.conf
echo "✓ Nginx config installed"

# Step 4: Test nginx configuration
echo "📝 Step 4: Testing nginx configuration..."
sudo nginx -t

# Step 5: Setup systemd service
echo "📝 Step 5: Setting up systemd service..."
sudo cp /tmp/vocalbeam.service /etc/systemd/system/vocalbeam.service
sudo systemctl daemon-reload
sudo systemctl enable vocalbeam
sudo systemctl restart vocalbeam
echo "✓ Service configured and started"

# Step 6: Start/reload nginx
echo "📝 Step 6: Starting nginx..."
sudo systemctl start nginx 2>/dev/null || sudo systemctl reload nginx
echo "✓ Nginx started"

# Step 7: Check status
echo "📝 Step 7: Checking service status..."
echo ""
echo "--- VocalBeam Service Status ---"
sudo systemctl status vocalbeam --no-pager -l | head -20
echo ""
echo "--- Nginx Status ---"
sudo systemctl status nginx --no-pager | head -10

echo ""
echo "✅ Deployment complete!"
echo "🌐 Your site should be live at: https://vocalbeam.com"
echo ""
echo "Useful commands:"
echo "  - Check app logs: sudo journalctl -u vocalbeam -f"
echo "  - Check nginx logs: sudo tail -f /var/log/nginx/vocalbeam.com-access.log"
echo "  - Restart app: sudo systemctl restart vocalbeam"
echo "  - Check status: sudo systemctl status vocalbeam"
