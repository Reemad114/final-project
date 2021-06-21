const header = require('../../parts/header/HeaderController.js')
const footer = require('../../parts/footer/FooterController.js')

let AboutPageJson = async() => {
    return JSON.parse('{"Header":'+JSON.stringify(await header.HeaderJson())
                      +',"Footer":'+JSON.stringify(await footer.FooterJson())+"}" )
  }
  module.exports.AboutPage = () => {
    return AboutPageJson()
  }