import {GET_USER} from './action.js';

let initialState = {  
};

export default function users(state = initialState, action) {
  switch (action.type) {
    case GET_USER:
      return Object.assign({}, state, {
        ...action.payload
      })
    default:
      return state
  }
}
