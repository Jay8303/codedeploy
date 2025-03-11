#!/bin/bash
echo "Starting application with PM2..."
cd /home/ec2-user/my-app
pm2 start app.js --name my-app
