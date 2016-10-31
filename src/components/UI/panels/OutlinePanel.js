import React from 'react'

export default props => {
  const {title, body, style, type} = props
  return (
    <div className={`panel panel-${style || `primary`} panel-${type || `custom`}`}>
      <div className="panel-heading">
        <h4 className="panel-title">{title || 'n/a'}</h4>
      </div>
      <div className="panel-body">
        {body || `No content`}
      </div>
    </div>
  )
}
