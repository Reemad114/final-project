var mysql = require('mysql');
var config = require('./config.json');

module.exports.DBTreatment = function(DBquery) {
  var con = mysql.createConnection({
    host: config.DB_USER_CREDENTIALS.HOST,
    user: config.DB_USER_CREDENTIALS.USERNAME,
    password: config.DB_USER_CREDENTIALS.PASSWORD,
    database : config.DB_USER_CREDENTIALS.DBNAME
  });
  con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
    con.query(DBquery, function (err, result) {
      if (err) throw err;
      console.log("Database created");
    });
  });
}
