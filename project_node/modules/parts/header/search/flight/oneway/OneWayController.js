const flightdb = require('../FlightDB');

let HandleOneWayData = async (data) =>{
    console.log(data)
    let query = await flightdb.GetFlightDetails('Depart', data.depart, 'Fromdest', data.from, 'Destination' , data.to);
    console.log(query)
    if(query.length > 0)
        return (query);
    else 
      return ('There are no suitable flights for you')
  }

module.exports.OneWayFormHandler = async (req,res) =>{
    res.json(await HandleOneWayData(req.body.input));
}