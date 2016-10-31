import React, {PropTypes}from 'react'
import SpinIcon from './components/Common/SpinIcon/container.js'
import Notifications from 'react-notification-system-redux'
import {connect} from 'react-redux';

require("./../assets/sass/app.scss")

class App extends React.Component {
  render() {
    console.log(process.env.API_ACCOUNT_ID);
    const {notifications} = this.props
    //Optional styling
    const style = {
      NotificationItem: { // Override the notification item
        DefaultStyle: { // Applied to every notification, regardless of the notification level
          margin: '10px 5px 2px 1px'
        },

        success: { // Applied only to the success notification item
          color: 'red'
        }
      }
    }

    return (
        <div>
          {this.props.children}
          <SpinIcon />
          <Notifications
            notifications={notifications}
            style={style}
          />
        </div>
    )
  }
}

App.contextTypes = {
  store: PropTypes.object
};

App.propTypes = {
  notifications: PropTypes.array
};

const mapStateToProps = (state) => {
  return {
    notifications: state.notifications
  }
}

const AppReduxContainer = connect(
  mapStateToProps
)(App)

export default AppReduxContainer
