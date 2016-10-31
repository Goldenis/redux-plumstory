import React from 'react'
import {connect} from 'react-redux'
import {getOrdersList} from './actions'
import className from 'classnames'
import Component from './../../../components/Common/OrderTable/OrderTable'

require ("./stylesheet.scss")

class SpinIconContainer extends React.Component {
  componentWillMount() {
  }

  render() {
    const {loading} = this.props
    return (
      <div className={className("spinner-container", {'spinner-visible': loading})}>
        <div className="spinner">
          <div className="rect1"></div>
          <div className="rect2"></div>
          <div className="rect3"></div>
          <div className="rect4"></div>
          <div className="rect5"></div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    loading: state.loading.loading
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  }
}

const SpinIconReduxContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(SpinIconContainer)

export default SpinIconReduxContainer
