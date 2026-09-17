# ⚡ Quick Start - Deploy in 5 Minutes

## Step 1: Create GitHub Repository (2 minutes)

1. Go to https://github.com/new
2. Name: `portfolio`
3. Choose: **Public**
4. Click: **Create repository**

## Step 2: Push Your Code (1 minute)

Run these commands (replace `YOUR_USERNAME` with your GitHub username):

```bash
cd c:\Users\jegan\OneDrive\Desktop\jegan
git remote add origin https://github.com/YOUR_USERNAME/portfolio.git
git branch -M main
git push -u origin main
```

## Step 3: Deploy on Vercel (2 minutes)

1. Go to https://vercel.com
2. Click **"Sign up with GitHub"**
3. Click **"Add New..."** → **"Project"**
4. Find your `portfolio` repository
5. Click **"Import"**
6. Add Environment Variables:
   - `EMAIL_PASSWORD` = Your Gmail App Password
   - `EMAIL_USER` = jegannaathan4@gmail.com
7. Click **"Deploy"**

## ✅ Done!

Your portfolio is now live! 🎉

---

## 🔑 Get Gmail App Password

1. Go to https://myaccount.google.com/apppasswords
2. Select "Mail" → "Other"
3. Generate password
4. Copy and use in Vercel

---

## 📱 Test Your Site

1. Click the URL Vercel gives you
2. Test the contact form
3. Share your portfolio!

---

**Total time: ~5 minutes**

See `DEPLOYMENT.md` for detailed instructions.
