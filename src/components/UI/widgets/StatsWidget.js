import React from 'react'
import className from 'classnames'

export default (props) => {
  const {
    count, title, footer, icon,
    countStyle, footerStyle
  } = props
  return (
    <div className="widget stats-widget">
      <div className="widget-body clearfix">
        <div className="pull-left">
          <h3 className={`widget-title text-${countStyle || `primary`}`}>{count ? count : 0}</h3>
          <small className="text-color">{title || 'n/a'}</small>
        </div>
        <span className="pull-right big-icon watermark"><i className={icon || 'fa-globe'}></i></span>
      </div>
      <footer className={`widget-footer bg-${footerStyle || `primary`}`}>
        <small>{footer || 'n/a'}</small>
      </footer>
    </div>
  )
}
