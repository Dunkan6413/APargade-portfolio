const nodemailer = require("nodemailer");
const express = require("express");

const router = express.Router();

async function sendContactMail(lastName, firstName, email, content) {

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS
        }
    })

    const mailOptions = {
        from: process.env.EMAIL_USER,
        to: process.env.EMAIL_TO,
        subject: 'Demande de contact',
        html: `
            <h1>Nom : ${lastName}</h1>
            <h1>Prénom : ${firstName}</h1>
            <h2>Mail : ${email}</h2>
            <p>Message :</p>
            <p>${content}</p>
        `
    }

    try {
        await transporter.sendMail(mailOptions)
        console.log('E-mail envoyé avec succès !')

    } catch (err) {
        console.error("Erreur lors de l'envoi de l'e-mail :", err)
    }
}

router.post('/contact', async(req, res) => {
    const { lastName, firstName, email, content } = req.body;
    sendContactMail(lastName, firstName, email, content);
    res.status(200).json({ message: "Mail envoyé" });
})

module.exports = router;