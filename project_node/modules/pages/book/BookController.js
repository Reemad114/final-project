var express = require('express')
var router = express.Router()

router.get('/flight', function (req, res) {
  res.send('call flight from general')
})

router.get('/hotel', function (req, res) {
  res.send('call hotel from general')
})

router.get('/car-rental', function (req, res) {
  res.send('call car from general')
})

module.exports = router
