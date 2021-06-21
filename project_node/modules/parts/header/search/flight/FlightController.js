const flightdb = require('./FlightDB.js')

module.exports.FlightJson = async() => {
  return (await flightdb.FlightDB());
}

