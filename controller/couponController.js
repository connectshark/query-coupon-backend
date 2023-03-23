const COUPON_API_URL = process.env.COUPON_API_URL

const queryCouponHandler = async (req, res) => {
  const { code } = req.body
  const form = new URLSearchParams({
    data: `{"Method":"QueryCoupon","CouponCode":"${code}","_XMLTable":"Coupon;Coupon_Product","_APIMethod":"GetData"}`
  })
  const fetch_response = await fetch(COUPON_API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
    },
    body: form
  })
  const response = await fetch_response.json()
  res.status(201).json(response)
}

module.exports = {
  queryCouponHandler
}