#!/bin/bash
set -e

# Reload Nginx to apply changes
echo "Restarting Nginx..."
sudo systemctl reload nginx

# Confirm Nginx is running
if systemctl status nginx | grep "active (running)" > /dev/null; then
    echo "Nginx restarted successfully!"
else
    echo "Error: Nginx failed to restart." >&2
    exit 1
fi

