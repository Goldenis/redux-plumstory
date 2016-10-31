import React from 'react'
import {connect} from 'react-redux'
import {Orders} from './actions'

import Component from './../../../components/Common/OrderTable/OrderTable'

class OrdersContainer extends React.Component {
  componentWillMount() {
    this.props.Orders()
  }

  render() {
    return (
      <div>
        <Component
          page={(this.props.location.query.page - 1) || 0}
          searchField={(this.props.location.query.q || '')}
          status={(this.props.location.query.status || 'COMPLETED')}
          intl={this.props.intl}
          columns={['buyer_orderID', 'order_date', 'buyer_name', 'buyer_contact', 'buyer_event', 'buyer_ticket', 'buyer_amount', 'buyer_action']}
          sortable={['buyer_orderID','order_date', 'buyer_ticket', 'buyer_amount']}
          updateData={(data) => this.props.Orders(data)}
          ordersList={this.props.orders.ordersList}/>
    </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    orders: state.orders,
    intl: state.intl.messages.orders
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    Orders: (data) => dispatch(Orders(data))
  }
}

const OrdersReduxContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(OrdersContainer)

export default OrdersReduxContainer
