# Email Setup Instructions

This portfolio includes a contact form that sends emails automatically. Follow these steps to set it up:

## Step 1: Generate Gmail App Password

1. Go to your Google Account: https://myaccount.google.com/
2. Navigate to **Security** → **2-Step Verification** (enable if not already)
3. Go to **App passwords**: https://myaccount.google.com/apppasswords
4. Select **Mail** and **Other (Custom name)** → Type "Portfolio Contact Form"
5. Click **Generate**
6. Copy the 16-character password (format: xxxx xxxx xxxx xxxx)

## Step 2: Set Environment Variable

### Option 1: Using .env file (Development)
1. Create a `.env` file in your project root (copy from `.env.example`)
2. Add: `EMAIL_PASSWORD=your-app-password-here` (remove spaces from the password)
3. Install dotenv: `npm install dotenv`
4. Add to server.js at the top: `require('dotenv').config();`

### Option 2: Using System Environment Variable (Production)

#### Windows PowerShell:
```powershell
$env:EMAIL_PASSWORD="your-app-password-here"
```

#### Windows Command Prompt:
```cmd
set EMAIL_PASSWORD=your-app-password-here
```

#### Linux/Mac:
```bash
export EMAIL_PASSWORD="your-app-password-here"
```

## Step 3: Install Dependencies

```bash
npm install
```

## Step 4: Run the Server

```bash
npm start
```

Or:

```bash
node server.js
```

The server will run on http://localhost:3000

## How It Works

1. **User fills the contact form** on your portfolio
2. **Email is sent to YOU** (jegannaathan4@gmail.com) with:
   - Sender's name
   - Sender's email
   - Subject
   - Message
3. **Confirmation email is sent to the SENDER** with:
   - Thank you message
   - Copy of their message
   - Your contact information

## Testing

Visit http://localhost:3000 and scroll to the contact form section. Fill it out and submit to test the functionality.

## Troubleshooting

- **Error: "Invalid login"**: Check your app password is correct
- **Error: "Connection refused"**: Enable "Less secure app access" in Gmail settings (not recommended) or use App Passwords instead
- **Email not received**: Check spam folder
- **Port already in use**: Change PORT in server.js or set `PORT=8080` environment variable

## Security Notes

- Never commit your `.env` file to git (add it to `.gitignore`)
- Use App Passwords, not your actual Gmail password
- For production, use environment variables through your hosting platform (Vercel, Heroku, etc.)

## Deployment Notes

For Vercel deployment, add the EMAIL_PASSWORD to your environment variables in the Vercel dashboard.
