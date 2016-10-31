import React from 'react'
import {Link} from 'react-router'
import className from 'classnames'
import {Navbar, NavItem, NavDropdown, MenuItem, Nav} from 'react-bootstrap/lib'

import {Search, SearchField}  from './Search'
import Notifications          from './Notifications'

import styles from './styles.scss'

export default class Header extends React.Component {
  constructor(props) {
    super(props)
    this.toggleSearch         = this.toggleSearch.bind(this)
    this.toggleNotifications  = this.toggleNotifications.bind(this)
  }

  componentWillMount() {
    this.setState({
      searchToggle: false,
      notificationToggle: false
    })
  }

  toggleSearch() {
    this.setState({
      searchToggle: !this.state.searchToggle
    })
  }

  toggleNotifications() {
    this.setState({
      notificationToggle: !this.state.notificationToggle
    })
  }

  render() {
    return (
        <nav id={"app-navbar"} className="app-navbar bg-primary primary in">
            <div className="container">
                <div id={"navbar-header"} className="pull-left">
                    <div className="animated">
                        <Link to="/" id={"app-brand"} className="app-brand text-white">
                            <span id={"brand-icon"} className="brand-icon"><i className="fa fa-gg"></i></span>
                            <span id={"brand-name"} className="brand-icon foldable">Infinity</span>
                        </Link>
                    </div>
                </div>
                <div>
                    <ul id={"top-nav"} className="pull-right">
                        <Search click={this.toggleSearch}/>
                        <Notifications click={this.toggleNotifications} toggle={this.state.notificationToggle}/>
                    </ul>
                    <SearchField toggle={this.state.searchToggle} click={this.toggleSearch}/>
                    {this.state.searchToggle &&
                      <div className={className('search-backdrop', {'open': this.state.searchToggle})} onClick={this.toggleSearch}>
                      </div>}
                </div>
            </div>
        </nav>
    )
  }
}
