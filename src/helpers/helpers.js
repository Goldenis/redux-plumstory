import cookie from 'react-cookie'

export const baseURL = 'http://mvl-api-staging.herokuapp.com/api'

export function getHTTPHeaderAuth() {
  return {
    headers: {
      'Authorization': `JWT ${cookie.load('token')}`,
      'Account-Id': process.env.API_ACCOUNT_ID	|| `57b0c8285356483f0e9eec2d`
    }
  }
}
