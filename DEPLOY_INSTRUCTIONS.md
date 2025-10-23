# Speech0.com Deployment Instructions

The build is complete! Now run these commands to deploy:

## Step 1: Copy nginx configuration

```bash
sudo cp /tmp/speech0.com.conf /etc/nginx/sites-available/speech0.com.conf
sudo ln -s /etc/nginx/sites-available/speech0.com.conf /etc/nginx/sites-enabled/speech0.com.conf
```

## Step 2: Test nginx configuration

```bash
sudo nginx -t
```

## Step 3: Setup SSL certificate with Let's Encrypt

```bash
sudo certbot --nginx -d speech0.com -d www.speech0.com
```

## Step 4: Setup systemd service

```bash
sudo cp /tmp/speech0.service /etc/systemd/system/speech0.service
sudo systemctl daemon-reload
sudo systemctl enable speech0
sudo systemctl start speech0
```

## Step 5: Reload nginx

```bash
sudo systemctl reload nginx
```

## Step 6: Check status

```bash
sudo systemctl status speech0
```

## Useful Commands

Check application logs:
```bash
sudo journalctl -u speech0 -f
```

Restart application:
```bash
sudo systemctl restart speech0
```

Check nginx status:
```bash
sudo systemctl status nginx
```

Test nginx config:
```bash
sudo nginx -t
```

Your site will be live at: **https://speech0.com**
