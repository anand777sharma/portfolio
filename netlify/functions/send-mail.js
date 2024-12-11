const nodemailer = require('nodemailer');

exports.handler = async (event) => {
    const { fullname, email, message } = JSON.parse(event.body);

    try {
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: 'matrixmind777@gmail.com',
                pass: 'ofzk nvvg kfsc juof',
            },
        });

        await transporter.sendMail({
            from: email,
            to: `${email}`,
            subject: `Message from ${fullname}`,
            text: `Email: ${email}\n\nMessage: ${message}`,
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
