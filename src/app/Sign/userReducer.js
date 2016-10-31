import {AUTHORIZATION_REQUEST, AUTHORIZATION_FAILURE, AUTHORIZATION_SUCCESS, CHECK_TOKEN} from './userActions.js'

let initialState = {
  user: {},
  token: '',
  error: false,
  message: '',
  isLoading: false
}

let updateItem = (list = [], item) => list.map(c => c.id !== item.id ? c : item)

export default function user(state = initialState, action) {
  switch (action.type) {
    case CHECK_TOKEN: {
      return Object.assign({}, state, {
      })
    }
    case AUTHORIZATION_REQUEST: {
      return Object.assign({}, state, {
        token: '',
        user: {},
        message: '',
        isLoading: true
      })
    }
    case AUTHORIZATION_SUCCESS:
      return Object.assign({}, state, {
        ...action.data,
        isLoading: false,
        error: false
      })
    case AUTHORIZATION_FAILURE:
      return Object.assign({}, state, {
        ...action.error,
        isLoading: false,
        error: true
      })
    default:
      return state
  }
}
