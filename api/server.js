const nodemailer = require('nodemailer');
const fs = require('fs');
const path = require('path');

// Email configuration
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER || 'jegannaathan4@gmail.com',
    pass: process.env.EMAIL_PASSWORD
  }
});

module.exports = async (req, res) => {
  // Enable CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  // Handle OPTIONS request
  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  // Handle contact form submission
  if (req.url === '/send-message' && req.method === 'POST') {
    try {
      const { name, email, subject, message } = req.body;
      
      // Send email to yourself
      const mailToYou = {
        from: 'jegannaathan4@gmail.com',
        to: 'jegannaathan4@gmail.com',
        subject: `Portfolio Contact: ${subject}`,
        html: `
          <h2>New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Subject:</strong> ${subject}</p>
          <p><strong>Message:</strong></p>
          <p>${message}</p>
        `
      };
      
      await transporter.sendMail(mailToYou);
      
      // Send confirmation email to sender
      const mailToSender = {
        from: 'jegannaathan4@gmail.com',
        to: email,
        subject: 'Thank you for contacting me!',
        html: `
          <h2>Thank You, ${name}!</h2>
          <p>I have received your message and will get back to you as soon as possible.</p>
          <p><strong>Your message:</strong></p>
          <p>${message}</p>
          <br>
          <p>Best regards,</p>
          <p>Jegannaathan S.J</p>
          <p>Computer Science Engineering Student</p>
          <p>Email: jegannaathan4@gmail.com</p>
          <p>Phone: +91 9750577725</p>
        `
      };
      
      await transporter.sendMail(mailToSender);
      
      res.status(200).json({ 
        success: true, 
        message: 'Message sent successfully!' 
      });
      
    } catch (error) {
      console.error('Error sending email:', error);
      res.status(500).json({ 
        success: false, 
        message: 'Failed to send message. Please try again.' 
      });
    }
    return;
  }

  // Serve static files
  let filePath = req.url === '/' ? '/index.html' : req.url;
  
  const extname = String(path.extname(filePath)).toLowerCase();
  const mimeTypes = {
    '.html': 'text/html',
    '.js': 'text/javascript',
    '.css': 'text/css',
    '.json': 'application/json',
    '.png': 'image/png',
    '.jpg': 'image/jpg',
    '.gif': 'image/gif',
    '.svg': 'image/svg+xml',
  };

  const contentType = mimeTypes[extname] || 'application/octet-stream';

  try {
    const content = fs.readFileSync(path.join(process.cwd(), filePath.slice(1)));
    res.setHeader('Content-Type', contentType);
    res.status(200).send(content);
  } catch (error) {
    if (error.code === 'ENOENT') {
      res.status(404).send('<h1>404 Not Found</h1>');
    } else {
      res.status(500).send('Server Error');
    }
  }
};
