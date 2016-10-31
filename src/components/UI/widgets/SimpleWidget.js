import React from 'react'

export default (props) => {
  const {title, text, count} = props
  return (
    <div className="widget p-md clearfix">
      <div className="pull-left">
        <h3 className="widget-title">{title || 'n/a'}</h3>
        <small className="text-color">{text || 'n/a'}</small>
      </div>
      <span className="pull-right fz-lg fw-500 counter">{count || 0}</span>
    </div>
  )
}
