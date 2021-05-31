const profiledb = require('./ProfileDB.js')

module.exports.ProfilePage = async(req, res) => {
  res.json(await profiledb.ProfileDB());
}
