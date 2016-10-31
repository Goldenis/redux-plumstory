import React from 'react'
import className from 'classnames'

export function Search(props) {
  const {click} = props;
  return (
    <li className="nav-item dropdown">
        <a href="javascript:void(0)" className="navbar-search-open" onClick={click}>
            <i className="zmdi zmdi-hc-lg zmdi-search"></i>
        </a>
    </li>
  )
}

export function SearchField(props) {
  const {toggle, click} = props;
  return (
    <div id={"navbar-search"} className={className('navbar-search', {'open': toggle})}>
        <form action="#">
            <span className="search-icon"><i className="fa fa-search"></i></span>
            <input className="search-field" type="search" placeholder="search..."/>
        </form>
        <button id={"search-close"} className="search-close">
            <i className="fa fa-close"></i>
        </button>
    </div>  )
}
