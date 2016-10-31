import React from 'react'
import className from 'classnames'

export default (props) => {
  return (
    <div className="simple-page-form animated flipInY" id="login-form">
      <h4 className="form-title m-b-xl text-center">Sign In With Your Infinity Account</h4>
      {props.message && <div className={className("alert", {"alert-danger": props.errorStatus, "alert-primary": !props.errorStatus})}>
        <span>{props.message}</span>
      </div>}
      <div className="form-group">
        <input
          type="email"
          className="form-control"
          placeholder="Email"
          onChange={(e) => props.changeEmail(e.target.value)}/>
      </div>

      <div className="form-group">
        <input
          type="password"
          className="form-control"
          placeholder="Password"
          onChange={(e) => props.changePassword(e.target.value)}/>
      </div>

      <button className="btn btn-primary" onClick={props.submitAuth}>{props.isLoading && <i className="fa fa-spinner fa-spin"></i>} SIGN IN</button>
    </div>
  )
}
