const aboutJson = require('./AboutUsJson.json')

module.exports.About = (req, res) => {
  res.json(aboutJson);
  console.log(aboutJson);
}
