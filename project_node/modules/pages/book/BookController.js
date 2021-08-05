const bookdb = require('./BookDB.js')

module.exports.BookPage = async(req, res) => {
  res.json(await bookdb.BookPageJson());
}
