require('isomorphic-fetch');

export const GET_USER = 'user/get'
import {AUTHORIZED} from '../../middleware/api';

export function getUser(user) {
  return {
    type: GET_USER,
    payload: user
  }
}

export function Login(user = {email: '', password: ''}) {
  return (dispatch, getState) => {
    const state = getState()

    fetch('http://212.47.246.115:9510/login', {
      method: "POST",
      body: JSON.stringify(user),
      headers: {
        "Content-Type": "application/json"
      }
    })
    .then(function(response) {
        if (response.status >= 400) {
            throw new Error("Bad response from server");
        }
        dispatch({ type: AUTHORIZED });
        response.json().then(function(res) {          
          dispatch(getUser(res.data));
        });
    })
    .then(function(error) {
        console.log(error);
    });
  }
}
