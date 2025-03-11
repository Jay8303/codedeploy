#!/bin/bash
echo "Starting application with PM2..."
pm2 stop all
pm2 start /home/ec2-user/my-app/app.js  # Ensure this file exists
npm install
npm start
