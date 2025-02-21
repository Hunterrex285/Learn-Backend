import nodemailer from 'nodemailer'

const sendEmail = async(options)=>{
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        host: 'smtp.gmail.com',
        secure: false,
        port: '587',
        auth:{
            user: process.env.SMTP_EMAIL,
            pass: process.env.SMTP_PASSWORD
        },
    });

    const mailOptions= {
        from: process.env.SMTP_EMAIL,
        to: options.to, // Ensure correct key is used
        subject: options.subject,
        html: options.message,
    };
    

    await transporter.sendMail(mailOptions);
}

export {sendEmail};