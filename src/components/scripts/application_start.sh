#!/bin/bash

cd /home/ec2-user/my-app  # Navigate to your app directory

# Install node modules
npm install

# Install serve globally with sudo to avoid permission issues
sudo npm install -g serve

# Build React app
npm run build

# Serve build (adjust port if needed)
serve -s build -l 3000
