#!/bin/bash
echo "Running before_install.sh..."

# Take ownership of the directory (recursive)
sudo chown -R ec2-user:ec2-user /home/ec2-user/my-app

# Now it's safe to remove contents
rm -rf /home/ec2-user/my-app/*

echo "Cleaned up old files in /home/ec2-user/my-app"
