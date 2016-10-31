import React from 'react'
import className from 'classnames'
import MenuItem   from './MenuItem'
import UserBlock  from './../UserBlock/UserBlock'

export default class Appside extends React.Component {
  constructor(props) {
    super(props)
    this.toggleMobileMenu = this.toggleMobileMenu.bind(this)
  }
  componentWillMount() {
    this.setState({
      mobileMenu: false
    })
  }

  toggleMobileMenu() {
    this.setState({
      mobileMenu: !this.state.mobileMenu
    })
  }


  render() {
    const {menuItems} = this.props;
    return (
      <aside id="app-aside" className="app-aside top light in">
        <div className="container">
          <div className="aside-menu-wrapper">
            <div className="visible-xs-inline-block" id={"aside-top-menu-toggle"}>
              <button className="hamburger hamburger--spin js-hamburger" type="button" onClick={this.toggleMobileMenu}>
                <span className="hamburger-box">
                  <span className="hamburger-inner"></span>
                </span>
              </button>
            </div>
            <ul className={className('sf-menu aside-menu aside-top-menu', {'open': this.state.mobileMenu})}>
            {menuItems && menuItems.map(mi => {
              return (
                <MenuItem
                  title={mi.title}
                  icon={mi.icon}
                  url={mi.url}
                  childs={mi.childs}/>
              )
            })}
            </ul>
          </div>
          <UserBlock />
        </div>
      </aside>
    )
  }
}
