@echo off
echo.
echo ========================================
echo   STEP 2: PUSH TO GITHUB
echo ========================================
echo.
echo Enter your GitHub repository URL
echo Example: https://github.com/jeg1303/portfolio.git
echo.
set /p REPO_URL="Your repository URL: "
echo.
echo ========================================
echo.
echo Running Git commands...
echo.

git remote add origin %REPO_URL%
if %errorlevel% neq 0 (
    echo Warning: Remote 'origin' might already exist
    echo Removing and re-adding...
    git remote remove origin
    git remote add origin %REPO_URL%
)

echo.
echo Renaming branch to main...
git branch -M main

echo.
echo Pushing to GitHub...
git push -u origin main

if %errorlevel% equ 0 (
    echo.
    echo ========================================
    echo   ✓ SUCCESS! Code pushed to GitHub!
    echo ========================================
    echo.
    echo Next Step: Deploy to Vercel
    echo Open: deploy-step3-vercel.txt
    echo.
) else (
    echo.
    echo ========================================
    echo   ✗ ERROR: Push failed
    echo ========================================
    echo.
    echo Possible solutions:
    echo 1. Make sure you created the GitHub repository
    echo 2. Check your repository URL is correct
    echo 3. Make sure you're logged in to GitHub
    echo.
    echo To login to GitHub, run:
    echo   gh auth login
    echo.
)

pause
