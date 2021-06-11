const header = require('../../../parts/header/HeaderController.js')
const footer = require('../../../parts/footer/FooterController.js')
const DB = require('../../../../database')


module.exports.signupdbPageJson = async() => {
  return JSON.parse('{"Header":'+JSON.stringify(await header.HeaderJson())
                    +',"Footer":'+JSON.stringify(await footer.FooterJson())+"}" )
}