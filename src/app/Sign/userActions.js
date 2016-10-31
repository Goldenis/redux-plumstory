import api from './../../helpers/api'
import cookie from 'react-cookie'
import fetch from 'isomorphic-fetch'
import axios from 'axios'

export const AUTHORIZATION = 'users/authorization'
export const AUTHORIZATION_REQUEST = 'users/authorization_request'
export const AUTHORIZATION_SUCCESS = 'users/authorization_success'
export const AUTHORIZATION_FAILURE = 'users/authorization_failure'
export const CHECK_TOKEN           = 'users/check_token'

// email: `anton1@mevalim.co.il`,
// password: `anton123`

export function checkToken(token) {
  return (dispatch, state, api) => {
    console.log(api('test'))
    dispatch({
      type: CHECK_TOKEN
    })
    return api('test').post(`/auth/validate_token`, {
      token
    })
    .then(data => dispatch(authSuccess(data.data)))
    .catch(error => dispatch(authFailure(error.data)))
  }
}

export function auth(email, password) {
  return (dispatch, state, api) => {
    dispatch({
      type: AUTHORIZATION_REQUEST,
    })
    return api('test').post(`/login`, {
      email: email,
      password: password
    })
    .then(data => {
      cookie.save('token', data.data.token, { path: '/' });
      dispatch(authSuccess(data.data))
    })
    .catch(err => dispatch(authFailure(err.data)))
  }
}

function authSuccess(data) {

  return {
    type: AUTHORIZATION_SUCCESS,
    data
  }
}

function authFailure(error) {
  return {
    type: AUTHORIZATION_FAILURE,
    error: error
  }
}
// export function auth(email, password) {
//   return {
//     type: AUTHORIZATION,
//     promise: request.post(`http://mvl-api-staging.herokuapp.com/api/login`, {
//       email: email,
//       password: password
//     })
//   }
// }
