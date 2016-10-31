import React from 'react'
import {connect} from 'react-redux'

class EventDetailsContainer extends React.Component {
  componentWillMount() {
  }

  render() {
    return (
      <h1>Details</h1>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  }
}

const EventDetailsReduxContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(EventDetailsContainer)

export default EventDetailsReduxContainer
