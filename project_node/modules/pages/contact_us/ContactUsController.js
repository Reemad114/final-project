const contactJson = require('./ContactUsJson.json')
const header = require('../../parts/header/HeaderController.js')
const footer = require('../../parts/footer/FooterController.js')


let Form = () => {
  return(contactJson)
}

let ContactUsPageJson = () => {
  return JSON.parse('{"Header":'+JSON.stringify(header.HeaderJson())+
                    ',"Content":'+JSON.stringify(Form())+
                    ',"Footer":'+JSON.stringify(footer.FooterJson())+"}" )
}
module.exports.ContactUsPage = (req, res) => {
  res.json(ContactUsPageJson());
}
