const userdb = require('../UserDB');
const signupdb = require('./SignUpDB')

let HandleUserData = async (user) =>{
  let query = await userdb.GetUserDetails('username', user.username);
  if(query.length > 0)
    return ('username already exists');
  else 
    userdb.InsertUserDetails(user);
    return ('WELCOME ' + user.username +'you have signed up successfuly,Please sign in')
}

module.exports.SignUpPage = async(req, res) => {
  res.json(await signupdb.signupdbPageJson());
}

module.exports.SignUpFormHandler = async (req,res) =>{
  console.log(req.body.input);
  let str = await HandleUserData(req.body.input);
  console.log(str)
  res.send(str)
}



