# 🚀 Quick Start Guide

Get your portfolio running in 3 simple steps!

## Step 1: Install Dependencies
```bash
npm install
```

## Step 2: Set Up Email (Important!)

### Get Gmail App Password:
1. Visit: https://myaccount.google.com/apppasswords
2. Select "Mail" → "Other" → Type "Portfolio"
3. Click "Generate" and copy the password

### Set the password:

**Windows PowerShell:**
```powershell
$env:EMAIL_PASSWORD="paste-your-app-password-here"
```

**Windows CMD:**
```cmd
set EMAIL_PASSWORD=paste-your-app-password-here
```

**Linux/Mac:**
```bash
export EMAIL_PASSWORD="paste-your-app-password-here"
```

## Step 3: Run the Server
```bash
npm start
```

Then open: **http://localhost:3000**

## ✅ Test the Contact Form

1. Scroll to the bottom of the page
2. Fill out the contact form
3. Submit
4. You should receive:
   - Email to jegannaathan4@gmail.com (your inbox)
   - Confirmation email to the sender

## 🔧 Troubleshooting

**Email not working?**
- Make sure you set the EMAIL_PASSWORD environment variable
- Check you're using an App Password, not your regular Gmail password
- Enable 2-Factor Authentication in your Google Account first

**Port already in use?**
- Change the port in server.js or use:
```bash
$env:PORT=8080
npm start
```

## 📚 Need More Help?

See [EMAIL_SETUP.md](EMAIL_SETUP.md) for detailed email configuration instructions.

---

**Made with ❤️ by Jegannaathan S.J**
