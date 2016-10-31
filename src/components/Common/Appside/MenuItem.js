import React from 'react'
import {Link} from 'react-router'

export default (props) => {
  const {icon, title, url, childs} = props;
  return (
    <li>
      <Link to={(url ? url : 'javascript:void(0);')} className="menu-link">
        <span className="menu-icon"><i className={"zmdi zmdi-hc-lg " + (icon ? icon : 'zmdi-home')}></i></span>
        <span className="menu-text">{title ? title : 'n/a'}</span>
      </Link>
      {childs && <ul>
        {childs.map(c => {
          return (<li><Link to={c.url}>{c.title}</Link></li>)
        })}
      </ul>}
    </li>
  )
}
