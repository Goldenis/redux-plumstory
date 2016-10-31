import React from 'react'
import {Link} from 'react-router'
import { connect } from 'react-redux'
import Component from './Component'
import {auth, checkToken} from './userActions'
import authRedirection from './../../helpers/authRedirection'

class SignContainer extends React.Component {
  constructor(props) {
    super(props)
  }

  componentWillMount() {
    authRedirection(this.props.user, false)
  }

  componentWillReceiveProps(nextProps) {
    authRedirection(nextProps.user, false)
  }

  render() {
    return (
      <Component
        isLoading={this.props.user.isLoading}
        errorStatus={this.props.user.error}
        message={this.props.user.message}
        auth={(e, p) => this.props.auth(e, p)}/>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    auth: (email, password) => {
      dispatch(auth(email, password))
    },
    checkToken: () => {
      dispatch(checkToken())
    }
  }
}

const SignReduxContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(SignContainer)

export default SignReduxContainer
