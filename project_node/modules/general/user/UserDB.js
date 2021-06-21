const DB = require('../../../database')

// Insertion to DB using INSERT query
module.exports.GetUserDetails = (field, val) => {
    let DbQuery = "SELECT `username`"+
                  "FROM `user`"+
                  "WHERE "+ field +" LIKE '"+ val +"';";
    let DbRes = DB.DBquery(DbQuery);
    return DbRes;
  }

module.exports.InsertUserDetails = (user) =>{
  let DbQuery = "INSERT INTO `user` ( `first_name`, `last_name`, `username`, `password`, `email`, `address`, `DOB`)"+
                " VALUES ( NULL,NULL, '"+ user.username + "',"+
                " '" + user.password +"', '"+user.email+"',NULL,NULL);";
  let DbRes = DB.DBquery(DbQuery);
  return DbRes;
}