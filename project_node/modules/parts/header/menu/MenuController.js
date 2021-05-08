const menudb = require('./MenuDB.js')

module.exports.MenuJson =() => {
  return (menudb.MenuDB());
}
