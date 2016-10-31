import {START_LOADING, END_LOADING} from './actions.js'

let initialState = {
  loading: false
}


export default function orders(state = initialState, action) {
  switch (action.type) {
    case START_LOADING:
      return Object.assign({}, state, {
        loading: action.value
      })
    case END_LOADING:
      return Object.assign({}, state, {
        loading: action.value
      })    
    default:
      return state
  }
}
