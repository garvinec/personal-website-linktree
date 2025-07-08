#!/bin/bash

echo "🚀 Building for GitHub Pages deployment..."

# Clean previous build
rm -rf .next out

# Install dependencies
npm ci

# Build the project
npm run build

echo "✅ Build completed successfully!"
echo "📁 Static files generated in the 'out' directory"
echo ""
echo "To deploy to GitHub Pages:"
echo "1. Push these changes to your GitHub repository"
echo "2. Go to repository Settings > Pages"
echo "3. Select 'GitHub Actions' as the source"
echo "4. The workflow will automatically deploy on push to main branch"
echo ""
echo "For manual deployment, upload the contents of the 'out' directory to your web server."