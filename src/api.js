var nodemailer = require('nodemailer');
var express = require('express');
var router = express.Router();

router.post('/cart', async (req, res) => {
    try {
      const transporter = nodemailer.createTransport({
        host: "sandbox.smtp.mailtrap.io",
        port: 2525,
        secure: true,
        auth: {
            user: "c41869e0cc3234",
            pass: "e7a7bfd758c78a"
            }
      });
  
      const mail = {
        to: '21santinoguarino@gmail.com',
        subject: 'Orden web',
        html: `${req.body.name} ha realizado una compra, su email es: ${req.body.email} y su tel: ${req.body.phone}`
      };
  
      await transporter.sendMail(mail);
  
      res.status(200).json({ message: 'Correo electrónico enviado con éxito' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Error al enviar el correo electrónico' });
    }
  });
  
  module.exports = router;