#!/bin/bash

# Speech0.com Deployment Script with SSL
set -e

echo "🚀 Starting Speech0.com deployment with HTTPS..."

# Step 1: Stop any service that might be using port 80/443
echo "📝 Step 1: Checking for services on port 80..."
if sudo lsof -ti:80 > /dev/null 2>&1; then
    echo "⚠️  Port 80 is in use. Temporarily stopping nginx..."
    sudo systemctl stop nginx
fi

# Step 2: Get SSL certificate using certbot standalone mode
echo "📝 Step 2: Obtaining SSL certificate..."
if [ ! -d "/etc/letsencrypt/live/speech0.com" ]; then
    echo "Getting new SSL certificate..."
    sudo certbot certonly --standalone \
        -d speech0.com \
        -d www.speech0.com \
        --non-interactive \
        --agree-tos \
        --email stazizovs@gmail.com
    echo "✓ SSL certificate obtained"
else
    echo "✓ SSL certificate already exists"
fi

# Step 3: Copy nginx config with SSL
echo "📝 Step 3: Installing nginx configuration..."
sudo cp /tmp/speech0.com.conf /etc/nginx/sites-available/speech0.com.conf
sudo ln -sf /etc/nginx/sites-available/speech0.com.conf /etc/nginx/sites-enabled/speech0.com.conf
echo "✓ Nginx config installed"

# Step 4: Test nginx configuration
echo "📝 Step 4: Testing nginx configuration..."
sudo nginx -t

# Step 5: Setup systemd service
echo "📝 Step 5: Setting up systemd service..."
sudo cp /tmp/speech0.service /etc/systemd/system/speech0.service
sudo systemctl daemon-reload
sudo systemctl enable speech0
sudo systemctl restart speech0
echo "✓ Service configured and started"

# Step 6: Start/reload nginx
echo "📝 Step 6: Starting nginx..."
sudo systemctl start nginx 2>/dev/null || sudo systemctl reload nginx
echo "✓ Nginx started"

# Step 7: Check status
echo "📝 Step 7: Checking service status..."
echo ""
echo "--- Speech0 Service Status ---"
sudo systemctl status speech0 --no-pager -l | head -20
echo ""
echo "--- Nginx Status ---"
sudo systemctl status nginx --no-pager | head -10

echo ""
echo "✅ Deployment complete!"
echo "🌐 Your site should be live at: https://speech0.com"
echo ""
echo "Useful commands:"
echo "  - Check app logs: sudo journalctl -u speech0 -f"
echo "  - Check nginx logs: sudo tail -f /var/log/nginx/speech0.com-access.log"
echo "  - Restart app: sudo systemctl restart speech0"
echo "  - Check status: sudo systemctl status speech0"
