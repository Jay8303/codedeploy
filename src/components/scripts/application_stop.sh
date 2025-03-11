#!/bin/bash
echo "Stopping application using pm2..."
pm2 stop my-app || true
pm2 delete my-app || true
