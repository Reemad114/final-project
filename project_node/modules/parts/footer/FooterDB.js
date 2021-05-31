const footer = require('./FooterJson.json')

module.exports.FooterDB = () => {
  return (footer);
}
// const DB = require('../../../database.js');
//
// module.exports.FooterDB = () => {
//   let DBQuery = "SELECT * FROM `menuitems` INNER JOIN `menulist` ON `menuitems`.`menu_id` =  `menulist`.`id` WHERE `menulist`.`id`=2";
//   let DBres = DB.DBquery(DBQuery);
//   return DBres;
// }
