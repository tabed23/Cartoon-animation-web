#!/bin/bash
# Install NGINX
echo "Installing NGINX..."
sudo apt-get install -y nginx

# Ensure proper permissions for /var/www/html
echo "Setting permissions for /var/www/html..."
sudo chown -R www-data:www-data /var/www/html
sudo chmod -R 755 /var/www/html

# Create NGINX configuration to serve the build folder
echo "Configuring NGINX to serve /var/www/html/build..."
cat <<EOT | sudo tee /etc/nginx/sites-available/default
server {
    listen 80;
    server_name localhost;

    root /var/www/html/build;
    index index.html;

    location / {
        try_files \$uri /index.html;
    }

    error_page 404 /404.html;
    location = /404.html {
        root /var/www/html/build;
    }
}
EOT

