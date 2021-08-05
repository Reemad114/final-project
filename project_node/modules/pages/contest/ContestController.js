var express = require('express')
var router = express.Router()
const contestdb = require('./ContestDb.js')


module.exports.ContestPage = async(req, res) => {
  res.json(await contestdb.ContestDB());
}
