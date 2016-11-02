import React from 'react';
import {connect} from 'react-redux';
import {pushState} from 'redux-router';
import NotificationSystem from 'react-notification-system';
import * as Notification from '../actions/notification';
import { Row, Col, Button } from 'react-bootstrap'

@connect(state => {
  return {global: state.global};
}, {pushState, remove: Notification.remove})
export default class App extends React.Component {
  static propTypes = {
    global: React.PropTypes.object.isRequired,
    pushState: React.PropTypes.func.isRequired,
    //children: React.PropTypes.node.isRequired,
    remove: React.PropTypes.func.isRequired
  };

  constructor(props) {
    super(props);
    this.ns = null;
    this.handleSigninClick = this.handleSigninClick.bind(this)
  }

  componentDidMount() {
    this.ns = this.refs.ns;
  }

  handleSigninClick(e) {
    console.log('handleSigninClick');
    this.props.pushState(null, '/signin');
  };

  render() {
    const { children } = this.props;
    this.props.global.notifications.map(notification => {
      const {
        title = null,
        message,
        level = Notification.INFO,
        position = 'tc',
        autoDismiss = 30,
        action = null
      } = notification;
      let onRemove = () => this.props.remove(notification);
      if (notification.onRemove) {
        onRemove = () => {
          this.props.remove(notification);
          notification.onRemove();
        };
      }
      const msg = {title, message, level, position, autoDismiss, onRemove, action, uid: notification.id};
      if (this.ns) {
        this.ns.addNotification(msg);
      }
    });

    return (
      <div>
        <div>
          <Button bsStyle="default" onClick={this.handleSigninClick}>Signin</Button>
          <Button bsStyle="default" onClick={ () => {this.props.pushState(null, '/profile');} }>Profile</Button>
          <Button bsStyle="default" onClick={ () => {this.props.pushState(null, '/info');} }>About Us</Button>
        </div>
        {children}
        <NotificationSystem ref="ns" />
      </div>
    );
  }
}
