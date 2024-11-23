#!/bin/bash
# Check if NGINX is running and serving the build folder
echo "Validating NGINX service..."
if systemctl is-active --quiet nginx; then
  echo "NGINX is running."

  # Validate that the build folder is accessible
  curl -I http://localhost | grep "200 OK" > /dev/null
  if [ $? -eq 0 ]; then
    echo "Build folder is being served successfully."
    exit 0
  else
    echo "Build folder is not being served. Check the NGINX configuration."
    exit 1
  fi
else
  echo "NGINX is not running!"
  exit 1
fi

