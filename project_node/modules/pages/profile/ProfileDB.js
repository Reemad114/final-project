const nextcar = require('./ProfileJson/NextCarJson.json')
const nextflight = require('./ProfileJson/NextFlightJson.json')
const nexthotel = require('./ProfileJson/NextHotelJson.json')
const prevcar = require('./ProfileJson/PrevCarJson.json')
const prevflight = require('./ProfileJson/PrevFlightJson.json')
const prevhotel = require('./ProfileJson/PrevHotelJson.json')
const help = require('./ProfileJson/HelpJson.json')
const recdest = require('./ProfileJson/RecDesJson.json')
const header = require('../../parts/header/HeaderController.js')
const footer = require('../../parts/footer/FooterController.js')

let NextCar = () =>{
  return(nextcar)
}
let NextFlight = () => {
  return(nextflight)
}
let NextHotel = () => {
  return(nexthotel)
}
let Next = () => {
  return JSON.parse('{"Car":'+JSON.stringify(NextCar())
                    +',"Flight":'+JSON.stringify(NextFlight())
                    +',"Hotel":'+JSON.stringify(NextHotel())+"}" )
}


let PrevCar = () =>{
  return(prevcar)
}
let PrevFlight = () =>{
  return(prevflight)
}
let PrevHotel = () =>{
  return(prevhotel)
}
let Prev = () => {
  return JSON.parse('{"Car":'+JSON.stringify(PrevCar())
                    +',"Flight":'+JSON.stringify(PrevFlight())
                    +',"Hotel":'+JSON.stringify(PrevHotel())+"}" )
}

let Help = () =>{
  return(help)
}
let RecDests = () =>{
  return(recdest)
}

let Content = () => {
  return JSON.parse('{"Help":'+JSON.stringify(Help())
                      +',"Next":'+JSON.stringify(Next())
                      +',"Prev":'+JSON.stringify(Prev())
                      +',"RecDests":'+JSON.stringify(RecDests())
                      +"}" )
}

let ProfilePageJson = async() => {
  return JSON.parse('{"Header":'+JSON.stringify(await header.HeaderJson())+',"Content":'+JSON.stringify(Content())
                    +',"Footer":'+JSON.stringify(await footer.FooterJson())+"}" )
}
module.exports.ProfileDB = () => {
  return ProfilePageJson()
}
