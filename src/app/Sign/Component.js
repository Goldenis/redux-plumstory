import React from 'react'
import {Link} from 'react-router'

import SignIn from './SignIn'
import SignUp from './SignUp'
import Reset  from './Reset'
import Footer from './Footer'

import {auth} from './userActions'

export default class SignComponent extends React.Component {
  constructor(props) {
    super(props)
    this.toggleStatus = this.toggleStatus.bind(this)
  }

  componentWillMount() {
    this.setState({
      status: 'in',
      replaceBodyClass: document.body.className,
      email: '',
      password: '',
      password_confirm: ''
    })
    document.body.className = 'simple-page'
  }


  componentWillUnmount() {
    document.body.className = this.state.replaceBodyClass
  }

  toggleStatus(status) {
    this.setState({
      status: status,
      email: '',
      password: '',
      password_confirm: ''
    })
  }

  render() {
    return (
      <div>
        <div id={"back-to-home"}>
          <Link to="/" className="btn btn-outline btn-default"><i className="fa fa-home animated zoomIn"></i></Link>
        </div>
        <div className="simple-page-wrap">
          <div className="simple-page-logo animated swing">
            <Link to="/">
              <span><i className="fa fa-gg"></i></span>
              <span>Infinity</span>
            </Link>
          </div>
          {this.state.status ==='in' &&
            <SignIn
              isLoading={this.props.isLoading}
              errorStatus={this.props.errorStatus}
              message={this.props.message}
              changeEmail={value => this.setState({email: value})}
              changePassword={value => this.setState({password: value})}
              submitAuth={() => this.props.auth(this.state.email, this.state.password)}/>
          }
          {this.state.status ==='up' &&
            <SignUp/>
          }
          {this.state.status ==='reset' &&
            <Reset/>
          }
      </div>
      <Footer
        status={this.state.status}
        toggle={(s) => this.toggleStatus(s)}/>
    </div>
    )
  }
}
