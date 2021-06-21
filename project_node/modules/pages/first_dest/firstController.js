const firstdb = require('./firstDB');


module.exports.FirstPage = async(req, res) => {
  res.json(await firstdb.firstPageJson());
}