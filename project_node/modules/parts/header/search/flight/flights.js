var express = require('express')
var router = express.Router()
const oneway = require('./oneway/OneWayController.js')
const bodyParser = require('body-parser')

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({extended: true}));

router.post('/oneway',oneway.OneWayFormHandler);


module.exports = router