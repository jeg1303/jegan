const nodemailer = require('nodemailer');

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
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  // Handle OPTIONS request
  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  // Only allow POST
  if (req.method !== 'POST') {
    res.status(405).json({ success: false, message: 'Method not allowed' });
    return;
  }

  try {
    const { name, email, subject, message } = req.body;
    
    // Validate input
    if (!name || !email || !subject || !message) {
      res.status(400).json({ 
        success: false, 
        message: 'All fields are required' 
      });
      return;
    }
    
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
};
