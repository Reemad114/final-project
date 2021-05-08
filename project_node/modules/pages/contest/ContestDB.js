const contestJson = require('./ContestJson.json')
const header = require('../../parts/header/HeaderController.js')
const footer = require('../../parts/footer/FooterController.js')


let Cards = () => {
  return(contestJson)
}

let ContestPageJson = () => {
  return JSON.parse('{"Header":'+JSON.stringify(header.HeaderJson())+
                    ',"Content":'+JSON.stringify(Cards())+
                    ',"Footer":'+JSON.stringify(footer.FooterJson())+"}" )
}
module.exports.ContestDB = () => {
  return ContestPageJson()
}
