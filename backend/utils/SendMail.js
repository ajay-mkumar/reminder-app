const asyncHandler = require('../middleware/asyncHandler');
const nodemailer = require('nodemailer');

const SendMail = asyncHandler(async (reminder, email, subject) => {
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: "ajsha0409@gmail.com",
            pass: "ebpm mdov fsbn kvub"
        },
    });

    const mailOptions = {
        from: "ajsha0409@gmail.com",
        to: email,
        subject: "testing mail",
        text: reminder,
        html: `<h1>${reminder}</h1>`

    };

    let info = await transporter.sendMail(mailOptions);
    console.log('mail sent: ', info);
})


module.exports = { SendMail }