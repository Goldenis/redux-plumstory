import React from 'react';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import App from './containers/App';
import Authenticated from './authentication/Authenticated';
import Redirect from './containers/Redirect';
import InfoContainer from './component/info/InfoContainer';
import SigninContainer from './component/signin/Container';
import ProfileContainer from './component/profile/Container';

export default (
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <Route component={Authenticated}>
        <Route path="profile" component={ProfileContainer}/>
        <IndexRoute component={ProfileContainer} />
      </Route>
      <Route path="signin" component={SigninContainer}/>
      <Route path="info" component={InfoContainer}/>
      <IndexRoute component={InfoContainer} />
    </Route>
  </Router>
);
