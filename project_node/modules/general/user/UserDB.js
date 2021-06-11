const DB = require('../../../database')

// Insertion to DB using INSERT query
module.exports.InsertUserInfo = (user) => {
    let DBQuery = "INSERT INTO `user`( `username`, `password`, `email`)"+
                  " VALUES ('" + user.username + "," + user.password + "," + user.email +"')";
    let DBres = DB.DBquery(DBQuery);
    return DBres;
  }
  