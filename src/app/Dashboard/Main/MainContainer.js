import React from 'react'
import {connect} from 'react-redux'
import Component from './Component'
import {getEventsList} from './events'

class MainContainer extends React.Component {
  componentWillMount() {
    this.props.getEventsList()
  }

  render() {
    return (
      <Component
        events={this.props.home_events.eventsList}
        user={this.props.user}/>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user.user,
    home_events: state.home_events
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getEventsList: () => dispatch(getEventsList())
    // auth: (email, password) => {
    //   dispatch(auth(email, password))
    // },
  }
}

const MainReduxContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(MainContainer)

export default MainReduxContainer
