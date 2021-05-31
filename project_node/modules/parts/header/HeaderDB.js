const menu = require('./menu/MenuController.js')
const search = require('./search/SearchController.js')

let FinalHeaderJson = async() => {
  return JSON.parse('{"Menu":'+JSON.stringify(await menu.MenuJson())+',"Search":'+JSON.stringify(search.Search())+"}" )
}
module.exports.HeaderDB = () => {
  return(FinalHeaderJson());
}
