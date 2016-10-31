import {browserHistory} from 'react-router'
import cookie from 'react-cookie'

//Check auth
//true - only auth
//false - only guests
export default (user, type) => {
  if(type === true && !cookie.load('token')) browserHistory.push('/sign')
  else if(type === false && cookie.load('token')) browserHistory.push('/dashboard')
}
