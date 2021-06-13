const header = require('../../parts/header/HeaderController.js')
const footer = require('../../parts/footer/FooterController.js')
const DB = require('../../../database.js');

module.exports.ImgUpload = (img_file) =>{
  let DBQuery = "INSERT INTO `img_upload`(`id`, `file_name`) VALUES ('" + img_file.id + img_file.name +"')";
  let DBres = DB.DBquery(DBQuery);
  return DBres;
}

let Brochures = () => {
  let DBQuery = "SELECT * FROM `img_upload`";
  let DBres = DB.DBquery(DBQuery);
  return DBres;
}
module.exports.ContestDB= async() => {
  return JSON.parse('{"Header":'+JSON.stringify(await header.HeaderJson())+
                    ',"Content":'+JSON.stringify(await Brochures())+
                    ',"Footer":'+JSON.stringify(await footer.FooterJson())+"}" )
}

