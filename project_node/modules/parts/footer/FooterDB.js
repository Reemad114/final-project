const DB = require('../../../database.js');

module.exports.FooterDB = () => {
  let DBQuery = "SELECT menuitems.id, menuitems.url, menuitems.className, menuitems.icon FROM `menuitems` INNER JOIN `menulist` ON `menuitems`.`menu_id` =  `menulist`.`id` WHERE `menulist`.`id`= 2";
  let DBres = DB.DBquery(DBQuery);
  return DBres;
}


