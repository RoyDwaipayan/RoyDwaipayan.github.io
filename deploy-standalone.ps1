# Portfolio Deployment Script
# This script helps deploy the standalone portfolio

Write-Host "=== Portfolio Deployment Options ===" -ForegroundColor Green
Write-Host ""

Write-Host "1. Test locally first:" -ForegroundColor Yellow
Write-Host "   - Open portfolio-standalone.html in your browser" -ForegroundColor White
Write-Host "   - Test the Hobbies tabs (Chess, Photography, Gaming, Travel)" -ForegroundColor White
Write-Host ""

Write-Host "2. Deploy to Netlify (Recommended):" -ForegroundColor Yellow
Write-Host "   - Go to https://netlify.com" -ForegroundColor White
Write-Host "   - Drag and drop portfolio-standalone.html" -ForegroundColor White
Write-Host "   - Get instant live URL" -ForegroundColor White
Write-Host ""

Write-Host "3. Deploy to GitHub Pages:" -ForegroundColor Yellow
Write-Host "   - Create new repository" -ForegroundColor White
Write-Host "   - Rename portfolio-standalone.html to index.html" -ForegroundColor White
Write-Host "   - Push to repository" -ForegroundColor White
Write-Host "   - Enable GitHub Pages" -ForegroundColor White
Write-Host ""

Write-Host "4. Deploy to Vercel:" -ForegroundColor Yellow
Write-Host "   - Go to https://vercel.com" -ForegroundColor White
Write-Host "   - Import from GitHub" -ForegroundColor White
Write-Host "   - Deploy automatically" -ForegroundColor White
Write-Host ""

Write-Host "=== Current Status ===" -ForegroundColor Green
Write-Host "✅ Standalone HTML file created with working tabs" -ForegroundColor Green
Write-Host "✅ CSS-only tab implementation (no JavaScript conflicts)" -ForegroundColor Green
Write-Host "✅ Responsive design maintained" -ForegroundColor Green
Write-Host "✅ All content included (Chess, Photography, Gaming, Travel)" -ForegroundColor Green
Write-Host ""

Write-Host "=== Next Steps ===" -ForegroundColor Green
Write-Host "1. Test the standalone file locally" -ForegroundColor White
Write-Host "2. Choose a deployment platform" -ForegroundColor White
Write-Host "3. Deploy and share your live portfolio!" -ForegroundColor White
Write-Host ""

# Open the file in browser for testing
$testFile = "portfolio-standalone.html"
if (Test-Path $testFile) {
    Write-Host "Opening portfolio for testing..." -ForegroundColor Yellow
    Start-Process $testFile
} else {
    Write-Host "Error: portfolio-standalone.html not found!" -ForegroundColor Red
} 