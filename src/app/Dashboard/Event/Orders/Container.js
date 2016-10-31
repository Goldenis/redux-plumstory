import React, {PropTypes} from 'react'
import {connect} from 'react-redux'
import Component from './../../../../components/Common/OrderTable/OrderTable'
import {getOrdersList, getOrdersListByID} from './Action'
import Notifications from 'react-notification-system-redux';

const notificationOpts = {
  // uid: 'once-please', // you can specify your own uid if required
  title: 'Hey, it\'s good to see you!',
  message: 'Now you can see how easy it is to use notifications in React!',
  position: 'tr',
  autoDismiss: 0,
  action: {
    label: 'Click me!!',
    callback: () => alert('clicked!')
  }
};


class EventOrderContainer extends React.Component {
  componentWillMount() {

    this.props.getOrdersListByID(this.props.id)
    this.context.store.dispatch(
      Notifications.success(notificationOpts)
    );
  }

  render() {
    const {notifications} = this.props;
    return (
      <Component
          page={(this.props.location.query.page - 1) || 0}
          searchField={(this.props.location.query.q || '')}
          status={(this.props.location.query.status || 'COMPLETED')}
          intl={this.props.intl}
          updateData={(data) => this.props.getOrdersList(data)}
          ordersList={this.props.orders.ordersList}/>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    id: ownProps.params.id,
    orders: state.eventOrders,
    intl: state.intl.messages.orders
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getOrdersList: (data) => {
      dispatch(getOrdersList(data))
    }, 
    getOrdersListByID: (data) => {
      dispatch(getOrdersListByID(data))
    }
  }
}

EventOrderContainer.contextTypes = {
  store: PropTypes.object
};

const EventOrdersReduxContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(EventOrderContainer)

export default EventOrdersReduxContainer
