const express = require('express')
const router = express.Router()
const controller = require('../controller/couponController')

router.route('/')
  .post(controller.queryCouponHandler)

module.exports = router