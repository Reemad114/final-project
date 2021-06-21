const tabs = require('./FlightJson/FlightTabsJson.json')
const DB = require('../../../../../database')

module.exports.GetFlightDetails = (field1, val1, field2, val2, field3, val3) => {
  let DbQuery = "SELECT *" + 
                " FROM `flight` " + 
                " WHERE " + field1 + " LIKE '"+ val1 +"' " + 
                " AND " + field2 + " LIKE '"+ val2 +"' " + 
                " AND " + field3 + " LIKE '"+ val3 +"';";
  let DbRes = DB.DBquery(DbQuery);
  return DbRes;
}

let Tabs = () => {
  return(tabs)
}

let Flight = async() => {
  return JSON.parse('{"Tabs":'+JSON.stringify(Tabs())+"}" )
}
module.exports.FlightDB = async() => {
  return (await Flight());
}
