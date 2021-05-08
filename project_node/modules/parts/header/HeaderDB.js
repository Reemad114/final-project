const menu = require('./menu/MenuController.js')
const search = require('./search/SearchController.js')

let FinalHeaderJson = () => {
  return JSON.parse('{"Menu":'+JSON.stringify(menu.MenuJson())+',"Search":'+JSON.stringify(search.Search())+"}" )
}
module.exports.HeaderDB = () => {
  return(FinalHeaderJson());
}
