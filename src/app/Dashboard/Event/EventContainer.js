import React from 'react'
import {connect} from 'react-redux'
import { Link } from 'react-router'

require ("./stylesheet.scss")

class EventContainer extends React.Component {
  componentWillMount() {
  }

  render() {
    const {id} = this.props
    return (
      <div>
        <h1>{this.props.location.query.title}</h1>
        <ul className="nav nav-tabs">
          <li activeClassName="selected">
            <Link to={`/dashboard/event/${id}/details`} activeClassName="selected">Event Details</Link>
          </li>
          <li>
            <Link to={`/dashboard/event/${id}/orders`} activeClassName="selected">Event Orders</Link>
          </li>
        </ul>
        <div>
          {this.props.children}
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    id: ownProps.params.id,
    event: state.event
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getOrdersList: (data) => dispatch(getOrdersList(data))
  }
}

const EventReduxContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(EventContainer)

export default EventReduxContainer
