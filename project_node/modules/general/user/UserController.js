var express = require('express')
var router = express.Router()
const signup  = require('./sign_up/SignUpController')
const signin  = require('./sign_in/SignInController')
const userdb = require('./UserDB')

router.post('/create', function(req, res){
    console.log(req.body)
    // var username = req.body;
    // userdb.InsertUserInfo(username);
    // res.send(username);

});
router.get('/signup', signup.SignUpPage)
router.get('/signin', signin.SignInPage)


module.exports = router