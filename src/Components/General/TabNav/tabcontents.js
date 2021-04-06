import Flight from '../Search/flight/flight.js'
import Hotel from '../Search/hotel/hotel.js'
import Car from '../Search/car/car.js'

const TabContentItems = [
  {
    id : 'flights',
    className : 'tab-pane active',
    content : <Flight />
  },
  {
    id : 'hotels',
    className : 'tab-pane fade',
    content : <Hotel />
  },
  {
    id : 'car-rental',
    className : 'tab-pane fade',
    content : <Car />
  }
]

export default TabContentItems;
