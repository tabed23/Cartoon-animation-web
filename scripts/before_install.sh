#!/bin/bash
# Update package list and remove any existing NGINX
echo "Updating package list..."
sudo apt-get update -y

if dpkg -l | grep nginx; then
  echo "Removing existing NGINX installation..."
  sudo apt-get remove -y nginx
  sudo apt-get autoremove -y
fi

