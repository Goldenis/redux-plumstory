import React from 'react'
import App from './App'
import Dashboard from './app/Dashboard/DashboardContainer';
import MainContainer from './app/Dashboard/Main/MainContainer';
import Events from './app/Dashboard/Events/EventsContainer';
import EventOrders from './app/Dashboard/Event/Orders/Container';
import EventDetails from './app/Dashboard/Event/Details/Container';
import Orders from './app/Dashboard/Orders/OrdersContainer'
import SignContainer from './app/Sign/SignContainer';
import Event from './app/Dashboard/Event/EventContainer';

import { Router, Route, browserHistory, IndexRoute } from 'react-router'

export default (store) => {
  return(
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <Route path="sign" component={SignContainer}/>
        <Route path="dashboard" component={Dashboard}>
          <IndexRoute component={MainContainer} />
          <Route path="events" component={Events} />
          <Route path="orders" component={Orders} />
          <Route path="event" component={Event} >
            <Route path=":id/orders" component={EventOrders} />
            <Route path=":id/details" component={EventDetails} />
          </Route>
        </Route>
        <IndexRoute component={SignContainer} />
      </Route>
    </Router>
  )
}
