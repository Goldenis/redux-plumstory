import React from 'react'

export default () => {
  return (
    <div className="simple-page-form animated flipInY" id="login-form">
      <h4 className="form-title m-b-xl text-center">Register</h4>
        <form action="#">
          <div className="form-group">
            <input id="sign-in-email" type="email" className="form-control" placeholder="Email"/>
          </div>

          <div className="form-group">
            <input id="sign-in-password" type="password" className="form-control" placeholder="Password"/>
          </div>

          <div className="form-group">
            <input id="sign-in-password" type="password" className="form-control" placeholder="Confirm Password"/>
          </div>

          <button className="btn btn-primary">SIGN UP</button>
        </form>
      </div>
  )
}
