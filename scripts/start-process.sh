#!/bin/bash

# Login to Amazon ECR in ap-southeast-1 region
sudo -u root aws ecr get-login-password --region us-east-1 | docker login --username AWS --password-stdin 823712965653.dkr.ecr.us-east-1.amazonaws.com

sudo -u root docker rm -f `docker ps -q -a`
sudo -u root docker rmi -f `docker images -q`

# Sleep for 3 seconds to ensure clean-up is complete
sleep 3

# Pull the latest image from ECR for jewel-cartoon-repo
sudo -u root docker pull 823712965653.dkr.ecr.us-east-1.amazonaws.com/jewel-cartoon-repo:latest

# If the pull command fails, try logging in again and pulling the image
if [[ $? != 0 ]]; then
    sudo -u root aws ecr get-login-password --region us-east-1 | docker login --username AWS --password-stdin 823712965653.dkr.ecr.us-east-1.amazonaws.com
    sudo -u root docker pull 823712965653.dkr.ecr.us-east-1.amazonaws.com/jewel-cartoon-repo:latest
fi

# Run the Docker container with the pulled image
sudo -u root docker run -d -p 3000:3000 --name jewel-cartoon-repo 823712965653.dkr.ecr.us-east-1.amazonaws.com/jewel-cartoon-repo:latest

