import React from 'react'

export default (props) => {
  const {toggle, status} = props;
  return (
    <div className="simple-page-footer">
      {status !== 'reset' && <p>
        <a href="javscript:void(0);" onClick={() => toggle('reset')}>FORGOT YOUR PASSWORD ?</a>
      </p>}
      {status !== 'up' && <p>
        <small>Don't have an account ?</small>
        <a href="javscript:void(0);" onClick={() => toggle('up')}>CREATE AN ACCOUNT</a>
      </p>}
      {status !== 'in' && <p>
        <small>Already have account ?</small>
        <a href="javscript:void(0);" onClick={() => toggle('in')}>SIGN IN</a>
      </p>}

    </div>
  )
}
