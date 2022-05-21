import { NextApiRequest, NextApiResponse } from 'next'

export default function handler(req: NextApiRequest, res: NextApiResponse) {
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
    subject: `Feedback from ${req.body.name} on ${req.body.id}`,
    text: req.body.message + ' | Sent from: ' + req.body.email,
    html: `<div>${req.body.message}</div><p>Sent from:
    ${req.body.email}</p>`
  }

  transporter.sendMail(mailData, function (err: any, info: any) {
    if (err) console.log(err)
    else console.log(info)
    res.send('200')
  })
}