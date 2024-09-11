const nodemailer = require('nodemailer');

// Create a transporter object
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'your-email@gmail.com', // your email
        pass: 'your-email-password'   // your email password or app-specific password
    }
});

// Setup email data
const mailOptions = {
    from: 'your-email@gmail.com',
    to: 'your-email@gmail.com', // recipient email
    subject: 'Test Email from Node.js',
    text: 'Hello, this is a test email sent from Node.js!'
};

// Send email
transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
        return console.log(error);
    }
    console.log('Email sent: ' + info.response);
});
