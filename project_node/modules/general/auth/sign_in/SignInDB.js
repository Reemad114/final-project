const form = require('./SignInJson.json')
const header = require('../../../parts/header/HeaderController.js')
const footer = require('../../../parts/footer/FooterController.js')

let Content = () => {
  return (form)
}
module.exports.signindbPageJson = async() => {
  return JSON.parse('{"Header":'+JSON.stringify(await header.HeaderJson())+',"Content":'+JSON.stringify(Content())
                    +',"Footer":'+JSON.stringify(footer.FooterJson())+"}" )
}
