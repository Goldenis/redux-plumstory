import React from 'react'
import className from 'classnames'
import cookie from 'react-cookie'
import authRedirection from './../../../helpers/authRedirection'
import { connect } from 'react-redux'

require ('./stylesheet.scss')

class UserBlock extends React.Component {
  constructor(props) {
    super(props)
    this.dropDownToggle = this.dropDownToggle.bind(this)
    this.logout = this.logout.bind(this)
    this.state = {opened: false}
  }

  componentWillMount() {
    if(this.props.opened) this.setState({opened: true})
  }

  dropDownToggle() {
    this.setState({opened: !this.state.opened})
  }

  logout() {
    cookie.remove('token', { path: '/' });
    authRedirection(this.props.user, true)
  }

  render() {
    return (
      <div className="aside-user">
        <ul>
          <li className={className('dropdown', {'open': this.state.opened})}>
            <a href="javascript:void(0);" onClick={this.dropDownToggle} className="dropdown-toggle usertitle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              <div className="avatar avatar-md avatar-circle">
                <img className="img-responsive" src="../assets/images/221.jpg" alt="avatar"/>
              </div>
            </a>
            <ul className="dropdown-menu animated flipInY">
              <li>
                <a className="text-color" href="/index.html">
                  <span className="m-r-xs"><i className="fa fa-home"></i></span>
                  <span>Home</span>
                </a>
              </li>
              <li>
                <a className="text-color" href="profile.html">
                  <span className="m-r-xs"><i className="fa fa-user"></i></span>
                  <span>Profile</span>
                </a>
              </li>
              <li>
                <a className="text-color" href="settings.html">
                  <span className="m-r-xs"><i className="fa fa-gear"></i></span>
                  <span>Settings</span>
                </a>
              </li>
              <li role="separator" className="divider"></li>
              <li>
                <a className="text-color " onClick={this.logout} >
                  <span className="m-r-xs"><i className="fa fa-power-off"></i></span>
                  <span>Log out</span>
                </a>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user
  }
}

const UserBlockReduxContainer = connect(
  mapStateToProps
)(UserBlock)

export default UserBlockReduxContainer
