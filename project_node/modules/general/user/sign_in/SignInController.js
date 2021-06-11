var express = require('express')
var router = express.Router()
const profile = require('../../../pages/profile/ProfileController.js')
const signindb = require('./SignInDB.js')

module.exports.SignInPage = async(req, res) => {
  res.json(await signindb.signindbPageJson());
}
// router.get('/', SignInPage)
// router.get('/profile', profile.ProfilePage)


// module.exports = router
