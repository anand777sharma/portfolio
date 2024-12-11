import express from 'express';
import bodyParser from 'body-parser';
import nodemailer from 'nodemailer';
import cors from 'cors';

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Email transport configuration
const transporter = nodemailer.createTransport({
    service: 'Gmail', // Or use another SMTP provider
    auth: {
        user: 'matrixmind777@gmail.com', // Replace with your email
        pass: '--------------'  // Replace with your email password or app-specific password
    }
});

// API Route
app.post('/send-mail', (req, res) => {
    const { fullname, email, message } = req.body;

    const mailOptions = {
        from: email,
        to: 'matrixmind777@gmail.com', // Replace with your email
        subject: `Contact Form Submission from ${fullname}`,
        text: `You have a new message from ${fullname} (${email}): \n\n${message}`
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error(error);
            return res.status(500).json({ error: 'Failed to send email.' });
        }
        res.status(200).json({ message: 'Email sent successfully!' });
    });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
