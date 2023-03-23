const nodemailer = require("nodemailer")

const transporter = nodemailer.createTransport({
  service: 'Gmail',
  auth: {
    user: process.env.EMAIL_SERVICE_AUTH_USER,
    pass: process.env.EMAIL_SERVICE_AUTH_PW
  }
})


const sendMail = ({ title, content, to, cc, bcc }) => {
  const options = {
    from: process.env.EMAIL_DEFAULT_FROM,
    to: to,
    subject: title,
    text: content
  }
  if (cc !== undefined) {
    options['cc'] = cc
  }
  if (bcc !== undefined) {
    options['bcc'] = bcc
  }
  return new Promise((resolve, reject) => {
    transporter.sendMail(options, (err, info) => {
      if (err) {
        reject([err, undefined])
      } else {
        resolve([undefined, info])
      }
    })
  })
}

module.exports = sendMail