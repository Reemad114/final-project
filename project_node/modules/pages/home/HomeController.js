const homedb = require('./HomeDB.js')

module.exports.HomePage = (req, res) => {
  res.json(homedb.HomePageJson());
}
