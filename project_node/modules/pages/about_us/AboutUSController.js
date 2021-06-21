const aboutdb = require('./AboutUSDB')

module.exports.AboutPage = async(req, res) => {
  res.json(await aboutdb.AboutPage());
}
