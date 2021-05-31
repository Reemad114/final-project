const homedb = require('./HomeDB.js')

module.exports.HomePage = async(req, res) => {
  res.json(await homedb.HomePageJson());
}
