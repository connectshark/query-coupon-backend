const express = require('express')
const router = express.Router()
const controller = require('../controller/mailController')

router.route('/')
  .post(controller.sendMailHandler)

module.exports = router