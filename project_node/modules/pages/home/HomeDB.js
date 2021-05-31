const contest = require('./HomeJson/ContestJson.json')
const discounts = require('./HomeJson/DiscountJson.json')
const feedback = require('./HomeJson/FeedbackJson.json')
const header = require('../../parts/header/HeaderController.js')
const footer = require('../../parts/footer/FooterController.js')
const DB = require('../../../database.js');

let Contest = () => {
  return(contest)
}
let Destinations = () => {
  let DBQuery = "SELECT * FROM `home_destinations`";
  let DBres = DB.DBquery(DBQuery);
  return DBres;
}
let Discounts = () => {
  let DBQuery = "SELECT * FROM `home_discounts` ";
  let DBres = DB.DBquery(DBQuery);
  return DBres;
}
let Ideas = () => {
  let DBQuery = "SELECT * FROM `home_ideas` ";
  let DBres = DB.DBquery(DBQuery);
  return DBres;
}
let Feedback = () => {
  let DBQuery = "SELECT * FROM `home_feedback` ";
  let DBres = DB.DBquery(DBQuery);
  return DBres;
}

let Content = async() => {
  return JSON.parse('{"Contest":'+JSON.stringify(Contest())+',"Destinations":'+JSON.stringify(await Destinations())+',"Discounts":'+JSON.stringify(await Discounts())
                    +',"Ideas":'+JSON.stringify(await Ideas())+',"Feedback":'+JSON.stringify(await Feedback())+"}" )
}

module.exports.HomePageJson = async() => {
  return JSON.parse('{"Header":'+JSON.stringify(await header.HeaderJson())+',"Content":'+JSON.stringify(await Content())
                    +',"Footer":'+JSON.stringify(footer.FooterJson())+"}" )
}
