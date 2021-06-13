var express = require('express')
var router = express.Router()
const contestdb = require('./ContestDb.js')


router.post('/store-img', function(req, res){
  console.log(req.body)
  // var username = req.body;
  // userdb.InsertUserInfo(username);
  // res.send(username);

});

module.exports.ContestPage = async(req, res) => {
  res.json(await contestdb.ContestDB());
}
