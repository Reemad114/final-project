const header = require('../../parts/header/HeaderController')
const footer = require('../../parts/footer/FooterController.js')
const DB = require('../../../database');

let Content = () => {
  let DBQuery = "SELECT * FROM `destinations_items` INNER JOIN `destinations_list` ON `destinations_items`.`dest_id` =  `destinations_list`.`id` WHERE `destinations_list`.`id`= 1";
  let DBres = DB.DBquery(DBQuery);
  return DBres;
}
module.exports.firstPageJson = async() => {
  return JSON.parse('{"Header":'+JSON.stringify(await header.HeaderJson())
                    +',"Content":'+JSON.stringify(await Content())
                    +',"Footer":'+JSON.stringify(await footer.FooterJson())+"}" )
}