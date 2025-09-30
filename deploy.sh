#!/bin/bash

# GitHub Pages Deployment Script for React Portfolio
# This script builds the React app and deploys it to GitHub Pages

set -e  # Exit on any error

echo "🚀 Starting deployment to GitHub Pages..."

# Navigate to frontend directory
cd frontend

# Install dependencies (in case they're not installed)
echo "📦 Installing dependencies..."
npm install

# Build the React app
echo "🔨 Building React app..."
npm run build

# Navigate back to root
cd ..

# Remove old build files from root (except .git and source folders)
echo "🧹 Cleaning old build files..."
find . -maxdepth 1 -name "*.html" -not -name "README.md" -delete 2>/dev/null || true
find . -maxdepth 1 -name "*.js" -delete 2>/dev/null || true
find . -maxdepth 1 -name "*.css" -delete 2>/dev/null || true
find . -maxdepth 1 -name "*.json" -not -name "package*.json" -delete 2>/dev/null || true
find . -maxdepth 1 -name "*.pdf" -delete 2>/dev/null || true
rm -rf static 2>/dev/null || true

# Copy new build files to root
echo "📁 Copying build files to root..."
cp -r frontend/build/* .

# Add, commit, and push to GitHub
echo "📤 Deploying to GitHub Pages..."
git add .
git commit -m "Deploy updated portfolio website - $(date '+%Y-%m-%d %H:%M:%S')"
git push origin master

echo "✅ Deployment complete!"
echo "🌐 Your website will be available at: https://snigdhaghosh.github.io"
echo "⏱️  GitHub Pages may take a few minutes to update."
