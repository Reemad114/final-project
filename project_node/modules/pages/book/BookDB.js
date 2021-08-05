const header = require('../../parts/header/HeaderController.js')
const footer = require('../../parts/footer/FooterController.js')


module.exports.BookPageJson = async() => {
    return JSON.parse('{"Header":'+JSON.stringify(await header.HeaderJson())
                      +',"Footer":'+JSON.stringify(await footer.FooterJson())+"}" )
  }
  