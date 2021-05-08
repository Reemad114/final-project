const footerdb = require('./FooterDB.js')

module.exports.FooterJson = () => {
  return (footerdb.FooterDB());
}
