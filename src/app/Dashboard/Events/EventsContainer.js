import React from 'react'
import {connect} from 'react-redux'
import EventsComponent from './Component'
import {getEventsList, Events} from './EventsAction'

class EventsContainer extends React.Component {
  componentWillMount() {+
    this.props.getEventsList()
    this.props.Events()
  }

  render() {
    return (
      <EventsComponent
        updateData={(data) => this.props.getEventsList(data)}
        eventsList={this.props.events.eventsList}
        intl={this.props.intl} />
    )
  }
}

const mapStateToProps = (state) => {
  return {
    events: state.events,
    intl: state.intl.messages.events
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getEventsList: (data) => dispatch(getEventsList(data)),
    Events: (data) => dispatch(Events(data))
  }
}

const EventsReduxContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(EventsContainer)

export default EventsReduxContainer
