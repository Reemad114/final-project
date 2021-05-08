const form = require('./SignInJson.json')
const header = require('../../../parts/header/HeaderController.js')
const footer = require('../../../parts/footer/FooterController.js')

let Content = () => {
  return (form)
}
module.exports.signindbPageJson = () => {
  return JSON.parse('{"Header":'+JSON.stringify(header.HeaderJson())+',"Content":'+JSON.stringify(Content())
                    +',"Footer":'+JSON.stringify(footer.FooterJson())+"}" )
}
