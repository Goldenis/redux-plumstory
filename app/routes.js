import React from 'react';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import App from './containers/App';
import Authenticated from './authentication/Authenticated';
import Redirect from './containers/Redirect';
import InfoContainer from './component/info/InfoContainer';


export default (
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <Route component={Authenticated}>

      </Route>
      <Route path="info" component={InfoContainer}/>
      <IndexRoute component={InfoContainer} />
    </Route>
    <Route path="/r" component={Redirect}/>
  </Router>
);
