const profiledb = require('./ProfileDB.js')

module.exports.ProfilePage = (req, res) => {
  res.json(profiledb.ProfileDB());
}
