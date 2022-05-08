export default function handler(req, res) {
  require('dotenv').config()

  const nodemailer = require('nodemailer')
  const transporter = nodemailer.createTransport({
    port: 465,
    host: 'smtp.gmail.com',
    service: 'gmail',
    auth: {
      type: 'login',
      user: 'private.rosekamallove@gmail.com',
      pass: process.env.password
    },
    secure: true
  })

  const mailData = {
    from: 'private.roseakamallove@gmail.com',
    to: 'rosekamallove@gmail.com',
    subject: `Contact form submission from ${req.body.name}`,
    text: req.body.message + ' | Sent from: ' + req.body.email,
    html: `<div>${req.body.message}</div><p>Sent from:
    ${req.body.email}</p>`
  }

  transporter.sendMail(mailData, function (err, info) {
    if (err) console.log(err)
    else console.log(info)
  })
  res.send('200')
}
