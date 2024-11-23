#!/bin/bash

# Restart Nginx service to reflect the new deployment
sudo systemctl restart nginx

# Log the action
echo "Nginx restarted successfully after deployment" >> /var/log/deploy.log

