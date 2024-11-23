#!/bin/bash
# Start and enable NGINX
echo "Starting NGINX..."
sudo systemctl start nginx
sudo systemctl enable nginx

# Reload NGINX to apply configuration changes
echo "Reloading NGINX configuration..."
sudo systemctl reload nginx

