var express = require('express')
var router = express.Router()
var signup = require('../sign_up/SignUpController.js')
const profile = require('../../../pages/profile/ProfileController.js')
const signindb = require('./SignInDB.js')

let SignInPage = (req, res) => {
  res.json(signindb.signindbPageJson());
}
router.get('/', SignInPage)
router.get('/profile', profile.ProfilePage)
router.use('/newaccount', signup)

module.exports = router
