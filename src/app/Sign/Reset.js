import React from 'react'

export default () => {
  return (
    <div className="simple-page-form animated flipInY" id="login-form">
      <h4 className="form-title m-b-xl text-center">Reset your password</h4>
        <form action="#">
          <div className="form-group">
            <input id="sign-in-email" type="email" className="form-control" placeholder="Email"/>
          </div>
          <button className="btn btn-primary">RESET PASSWORD</button>
        </form>
      </div>
  )
}
