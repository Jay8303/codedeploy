#!/bin/bash
cd /home/ec2-user/my-app  # Make sure this is the correct path where files are extracted
npm install
npm run build
serve -s build -l 3000  # This will serve on port 3000
