#!/bin/bash

# Build the React app
cd frontend
npm install
npm run build

# Copy build files to root
cd ..
cp -r frontend/build/* .

# Clean up - remove build directory
rm -rf frontend/build

echo "Build complete! Files are ready for GitHub Pages."
echo "Make sure to commit and push the built files to deploy."