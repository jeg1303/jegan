# 🚀 Deployment Guide - GitHub & Vercel

Complete guide to push your portfolio to GitHub and deploy on Vercel.

---

## 📋 Prerequisites

- [x] Git installed on your computer
- [ ] GitHub account (create at https://github.com if you don't have one)
- [ ] Vercel account (sign up at https://vercel.com with GitHub)

---

## Part 1: Push to GitHub 🐙

### Step 1: Initialize Git Repository

```bash
cd c:\Users\jegan\OneDrive\Desktop\jegan
git init
```

### Step 2: Add All Files

```bash
git add .
```

### Step 3: Create Initial Commit

```bash
git commit -m "Initial commit: Portfolio with contact form"
```

### Step 4: Create Repository on GitHub

1. Go to https://github.com/new
2. Repository name: `portfolio` (or any name you prefer)
3. Description: "My professional portfolio website"
4. Choose **Public** or **Private**
5. **DO NOT** initialize with README, .gitignore, or license (we already have these)
6. Click **"Create repository"**

### Step 5: Connect Local to GitHub

Copy the commands from GitHub (they look like this):

```bash
git remote add origin https://github.com/jeg1303/portfolio.git
git branch -M main
git push -u origin main
```

**Replace `jeg1303/portfolio` with your actual username and repo name!**

### Step 6: Verify Upload

Go to your GitHub repository URL and verify all files are uploaded.

---

## Part 2: Deploy to Vercel 🔺

### Step 1: Sign Up / Login to Vercel

1. Go to https://vercel.com
2. Click **"Sign Up"** or **"Login"**
3. Choose **"Continue with GitHub"**
4. Authorize Vercel to access your GitHub account

### Step 2: Import Repository

1. On Vercel Dashboard, click **"Add New..."** → **"Project"**
2. Find your repository in the list (e.g., `jeg1303/portfolio`)
3. Click **"Import"**

### Step 3: Configure Project

**Framework Preset:** Leave as is (Vercel will auto-detect)

**Root Directory:** Leave as `./`

**Build Command:** Leave default or use:
```
npm install
```

**Output Directory:** Leave as `.`

**Environment Variables:** Click **"Add"** and add:

| Name | Value |
|------|-------|
| `EMAIL_PASSWORD` | Your Gmail App Password |
| `EMAIL_USER` | jegannaathan4@gmail.com |

⚠️ **Important:** Add your actual Gmail App Password here (see EMAIL_SETUP.md for how to get it)

### Step 4: Deploy

1. Click **"Deploy"**
2. Wait for deployment (usually 1-2 minutes)
3. Once complete, you'll see: **"Your project is live!"**
4. Click on the URL to view your live portfolio!

### Step 5: Test Your Deployment

1. Visit your Vercel URL (e.g., `https://your-project.vercel.app`)
2. Test the contact form
3. Verify all sections work correctly

---

## 🔧 Post-Deployment Configuration

### Custom Domain (Optional)

1. In Vercel project settings, go to **"Domains"**
2. Add your custom domain
3. Follow DNS configuration instructions

### Environment Variables Management

To update environment variables:
1. Go to Vercel Dashboard → Your Project → **Settings** → **Environment Variables**
2. Add/Edit variables
3. **Redeploy** after changes

---

## 📝 Git Workflow (For Future Updates)

### Making Changes

```bash
# 1. Make your changes to files
# 2. Check what changed
git status

# 3. Add changes
git add .

# 4. Commit changes
git commit -m "Description of changes"

# 5. Push to GitHub
git push
```

### Vercel Auto-Deploy

Vercel automatically deploys when you push to GitHub! 🎉

Every `git push` triggers a new deployment.

---

## 🚨 Troubleshooting

### Issue: Contact Form Not Working on Vercel

**Solution:** Make sure you added `EMAIL_PASSWORD` environment variable in Vercel settings.

### Issue: 404 Errors

**Solution:** Check `vercel.json` configuration is correct.

### Issue: Changes Not Reflecting

**Solution:** 
1. Clear browser cache
2. Check deployment logs in Vercel
3. Verify files were pushed to GitHub

### Issue: Environment Variables Not Loading

**Solution:**
1. Add variables in Vercel Dashboard
2. Redeploy the project
3. Check variable names match exactly

---

## 📊 Vercel Features

✅ **Automatic Deployments** - Push to GitHub = Auto deploy
✅ **Preview Deployments** - Every branch/PR gets a preview URL
✅ **Analytics** - Built-in analytics
✅ **SSL Certificate** - Free HTTPS
✅ **Global CDN** - Fast loading worldwide
✅ **Environment Variables** - Secure secret management

---

## 🎯 Quick Commands Reference

```bash
# Check git status
git status

# Add all changes
git add .

# Commit changes
git commit -m "Your message here"

# Push to GitHub
git push

# Pull latest changes
git pull

# Create new branch
git checkout -b feature-name

# Switch branches
git checkout main
```

---

## 📁 Files Included in Repository

✅ `index.html` - Main portfolio page
✅ `style.css` - Stylesheet
✅ `script.js` - JavaScript
✅ `server.js` - Node.js server (contact form)
✅ `package.json` - Dependencies
✅ `vercel.json` - Vercel configuration
✅ `.gitignore` - Files to ignore
✅ `README.md` - Project documentation
✅ `.env.example` - Environment variables template

❌ `.env` - Not included (in .gitignore)
❌ `node_modules/` - Not included (in .gitignore)

---

## 🔐 Security Notes

- ✅ `.env` is in `.gitignore` (secrets are safe)
- ✅ Use Vercel Environment Variables for production
- ✅ Never commit API keys or passwords
- ✅ Use Gmail App Passwords, not regular passwords

---

## 🎉 Success Checklist

- [ ] Git repository initialized
- [ ] All files committed
- [ ] Pushed to GitHub
- [ ] Vercel account created
- [ ] Repository imported to Vercel
- [ ] Environment variables added
- [ ] Project deployed
- [ ] Contact form tested
- [ ] Custom domain configured (optional)

---

## 📞 Your Live URLs

- **GitHub:** https://github.com/jeg1303/portfolio
- **Vercel:** https://your-project.vercel.app (after deployment)
- **Custom Domain:** (if configured)

---

## 💡 Tips

1. **Commit often** - Make small, focused commits
2. **Descriptive messages** - Write clear commit messages
3. **Test locally first** - Always test with `npm start` before pushing
4. **Check Vercel logs** - If deployment fails, check the logs
5. **Use branches** - Create feature branches for big changes

---

**Need Help?**

- GitHub Docs: https://docs.github.com
- Vercel Docs: https://vercel.com/docs
- Git Cheatsheet: https://education.github.com/git-cheat-sheet-education.pdf

---

**You're ready to deploy! 🚀**

Follow the steps above and your portfolio will be live in minutes!
