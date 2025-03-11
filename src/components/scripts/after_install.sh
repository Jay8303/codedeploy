#!/bin/bash
echo "Running before_install.sh..."

# Navigate to home directory
cd /home/ec2-user

# If app directory exists, delete it to avoid conflicts
if [ -d "my-app" ]; then
  echo "Removing existing my-app directory..."
  sudo rm -rf my-app
fi

# Recreate the directory to ensure fresh deployment
mkdir my-app

# Set ownership to ec2-user
sudo chown -R ec2-user:ec2-user /home/ec2-user/my-app
sudo chmod -
