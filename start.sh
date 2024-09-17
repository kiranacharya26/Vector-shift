#!/bin/bash

# the script for stratin the backend
echo "Starting backend..."
cd backend || exit
source myenv/bin/activate
uvicorn main:app --reload &

# the script for stratin the frontend
echo "Starting frontend..."
cd ../frontend || exit
npm start
