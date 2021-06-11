const header = require('../../parts/header/HeaderController.js')
const footer = require('../../parts/footer/FooterController.js')
const DB = require('../../../database.js');

let Content = () => {
  let DBQuery = "SELECT * FROM `formitems`";
  let DBres = DB.DBquery(DBQuery);
  return DBres;
}
module.exports.ContactUsPageJson = async() => {
  return JSON.parse('{"Header":'+JSON.stringify(await header.HeaderJson())
                    +',"Content":'+JSON.stringify(await Content())
                    +',"Footer":'+JSON.stringify(await footer.FooterJson())+"}" )
}
