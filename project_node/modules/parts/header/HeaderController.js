// const menu = require('./menu/MenuController.js')
// const search = require('./search/SearchController.js')
//
// let FinalHeaderJson = () => {
//   return JSON.parse('{"Menu":'+JSON.stringify(menu.MenuJson())+',"Search":'+JSON.stringify(search.Search())+"}" )
// }
// module.exports.HeaderJson = () => {
//   return(FinalHeaderJson());
// }
const headerdb = require('./HeaderDb.js')

module.exports.HeaderJson = () => {
  return(headerdb.HeaderDB())
}
