const header = require('../../parts/header/HeaderController.js')
const footer = require('../../parts/footer/FooterController.js')
const DB = require('../../../database.js');

let Cards = () => {
  let DBQuery = "SELECT * FROM `contest`";
  let DBres = DB.DBquery(DBQuery);
  return DBres;
}
module.exports.ContestDB= async() => {
  return JSON.parse('{"Header":'+JSON.stringify(await header.HeaderJson())+
                    ',"Content":'+JSON.stringify(await Cards())+
                    ',"Footer":'+JSON.stringify(footer.FooterJson())+"}" )
}
