const sendMail = require('../nodemailer')

const sendMailHandler = async (req, res) => {
  const { title, content, to, cc, bcc } = req.body
  if (!title || !content || !to) {
    return res.status(400).json({ msg: 'title & content & to are required' })
  }
  try {
    const info = await sendMail({ title, content, to, cc, bcc })
    res.status(201).json(info)
  } catch (error) {
    res.status(409).json(error)
  }
}

module.exports = {
  sendMailHandler
}