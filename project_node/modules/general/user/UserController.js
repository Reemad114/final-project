var express = require('express')
var router = express.Router()
const signup  = require('./sign_up/SignUpController')
const signin  = require('./sign_in/SignInController')
const profile = require('../../pages/profile/ProfileController')
const userdb = require('./UserDB')
const bodyParser = require('body-parser')

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({extended: true}));

router.post('/create',signup.SignUpFormHandler);
router.get('/signup', signup.SignUpPage)
router.get('/signin', signin.SignInPage)
router.get('/profile', profile.ProfilePage)


module.exports = router