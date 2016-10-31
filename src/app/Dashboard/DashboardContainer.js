import React from 'react'
import {connect} from 'react-redux'
import {checkToken} from './../Sign/userActions'
import {FormattedMessage} from 'react-intl'

import Header         from './../../components/Common/Header/Header.js'
import Appside        from './../../components/Common/Appside/Appside.js'
import Footer         from './../../components/Common/Footer/Footer.js'

class DashboardContainer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  componentWillMount() {
    this.props.checkToken(this.props.user.token)
  }

  render() {
    return (
      <div>
        <Appside
          menuItems={[
            {
              title: 'Dashboard',
              url: '/dashboard',
              icon: 'zmdi-home',
              childs: [
                {title: 'Events', url: '/dashboard/events'}
              ]
            },
            {
              title: 'Events',
              url: '/dashboard/events',
              icon: 'zmdi-home'
            },
            {
              title: 'Orders',
              url: '/dashboard/orders',
              icon: 'zmdi-home'
            }
          ]}/>
        <Header />
        <main id="app-main" className="app-main in">
          <div className="container">
            <div className="wrap">
              {this.props.user.user && this.props.user.user.first_name && <section className="app-content">
                {this.props.children}
              </section>}
            </div>
            <Footer />
          </div>
        </main>
      </div>
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
    checkToken: (token) => {
      dispatch(checkToken(token))
    }
  }
}

const DashboardReduxContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(DashboardContainer)

export default DashboardReduxContainer
