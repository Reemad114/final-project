const header = require('../../parts/header/HeaderController.js')
const footer = require('../../parts/footer/FooterController.js')
const DB = require('../../../database.js');


module.exports.ContestDB= async() => {
  return JSON.parse('{"Header":'+JSON.stringify(await header.HeaderJson())+
                    // ',"Content":'+JSON.stringify(await Brochures())+
                    ',"Footer":'+JSON.stringify(await footer.FooterJson())+"}" )
}

