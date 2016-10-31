import {combineReducers} from 'redux'
import {reducer as notifications} from 'react-notification-system-redux'
import home_events from './../app/Dashboard/Main/mainReducer'
import events from './../app/Dashboard/Events/EventsReducer'
import eventOrders from './../app/Dashboard/Event/Orders/Reducer'
import orders from './../app/Dashboard/Orders/reducer'
import user   from './../app/Sign/userReducer'
import loading   from './../components/Common/SpinIcon/reducer'
import {intlReducer} from 'react-intl-redux'

const App = combineReducers({
	notifications,
  home_events,
  events,
  eventOrders,
  orders,
  user,
  loading,
  intl: intlReducer
})

export default App
