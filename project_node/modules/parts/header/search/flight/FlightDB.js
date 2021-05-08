const tabs = require('./FlightJson/FlightTabsJson.json')
const multi = require('./FlightJson/MultiJson.json')
const oneway = require('./FlightJson/OneWayJson.json')
const round = require('./FlightJson/RoundJson.json')

let Multi = () => {
  return(multi)
}
let Oneway = () => {
  return(oneway)
}
let Round = () => {
  return(round)
}
let Content = () => {
  return JSON.parse('{"Multi":'+JSON.stringify(Multi())+',"Oneway":'+JSON.stringify(Oneway())
                    +',"Round":'+JSON.stringify(Round())+"}" )
}
let Tabs = () => {
  return(tabs)
}

let Flight = () => {
  return JSON.parse('{"Tabs":'+JSON.stringify(Tabs())
                      +',"Content":'+JSON.stringify(Content())+"}" )
}
module.exports.FlightDB = () => {
  return (Flight());
}
