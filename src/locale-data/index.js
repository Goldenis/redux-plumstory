import objectAssignDeep from 'object-assign-deep'

import OrdersIntl from './../app/Dashboard/Orders/intl'
import EventsIntl from './../app/Dashboard/Events/intl'

const messages = objectAssignDeep(OrdersIntl, EventsIntl)

export default messages
