const maintabitems = require('./SearchJson/MainTabItems.json')
const flight = require('./flight/FlightController.js')
const hotel = require('./hotel/HotelController.js')
const car = require('./car/CarController.js')

let Maintabitems = () => {
  return(maintabitems)
}
let Tabcontents = () => {
  return(tabcontents)
}
let SearchJson = async() => {
  return JSON.parse('{"Maintabitems":'+JSON.stringify(Maintabitems())
                    +',"Flight":'+JSON.stringify(await flight.FlightJson())+"}" )
}
module.exports.Search = async() => {
  return(await SearchJson());
}


