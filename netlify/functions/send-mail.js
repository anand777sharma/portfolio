const nodemailer = require('nodemailer');
const password = import.meta.env.VITE_PASS;
exports.handler = async (event) => {
    const { fullname, email, message } = JSON.parse(event.body);

    try {
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: 'matrixmind777@gmail.com',
                pass: password,
            },
        });

        await transporter.sendMail({
            from: email,
            to: `matrixmind777@gmail.com`,
            subject: `Message from ${fullname}`,
            text: `Name:${fullname} Email: ${email}\n\nMessage: ${message}`,
        });

        return {
            statusCode: 200,
            body: JSON.stringify({ message: 'Message sent successfully!' }),
        };
    } catch (error) {
        console.error(error);
        return {
            statusCode: 500,
            body: JSON.stringify({ error: 'Failed to send message' }),
        };
    }
};
