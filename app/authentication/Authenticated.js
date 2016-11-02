import React from 'react';
import {connect} from 'react-redux';
import {pushState} from 'redux-router';
import {autobind} from 'core-decorators'
import { encode } from 'querystring';
import Store from '@comynli/store';
import * as Notification from '../actions/notification';
import * as settings from './settings';

@connect(state => ({users: state.users, router: state.router}),
  {pushState, notify: Notification.add})
export default class Authenticated extends React.Component {
  static propTypes = {
    router: React.PropTypes.object.isRequired,
    users: React.PropTypes.object.isRequired,
    pushState: React.PropTypes.func.isRequired,
    children: React.PropTypes.node.isRequired,
    notify: React.PropTypes.func.isRequired
  };

  constructor(props) {
    super(props);
  }

  componentWillMount() {
    if (this.props.users.token == undefined ) {
      this.props.pushState(null, '/signin')
    }
  }


  render() {
    return (
      <div>
        {this.props.children}
      </div>
    );
  }
}
