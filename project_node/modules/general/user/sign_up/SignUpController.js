const signupdb = require('./SignUpDB.js');


module.exports.SignUpPage = async(req, res) => {
  res.json(await signupdb.signupdbPageJson());
}




