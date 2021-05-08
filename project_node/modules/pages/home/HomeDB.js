const contest = require('./HomeJson/ContestJson.json')
const destinations = require('./HomeJson/DestinationJson.json')
const discounts = require('./HomeJson/DiscountJson.json')
const ideas = require('./HomeJson/IdeasJson.json')
const feedback = require('./HomeJson/FeedbackJson.json')
const header = require('../../parts/header/HeaderController.js')
const footer = require('../../parts/footer/FooterController.js')

let Contest = () =>{
  return(contest)
}
let Destinations = () => {
  return(destinations)
}
let Discounts = () => {
  return(discounts)
}
let Ideas = () => {
  return(ideas)
}
let Feedback = () => {
  return(feedback)
}

let Content = () => {
  return JSON.parse('{"Contest":'+JSON.stringify(Contest())+',"Destinations":'+JSON.stringify(Destinations())+',"Discounts":'+JSON.stringify(Discounts())
                    +',"Ideas":'+JSON.stringify(Ideas())+',"Feedback":'+JSON.stringify(Feedback())+"}" )
}

module.exports.HomePageJson = () => {
  return JSON.parse('{"Header":'+JSON.stringify(header.HeaderJson())+',"Content":'+JSON.stringify(Content())
                    +',"Footer":'+JSON.stringify(footer.FooterJson())+"}" )
}
