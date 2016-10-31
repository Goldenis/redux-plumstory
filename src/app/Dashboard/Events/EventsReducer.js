import {GET_EVENTS_LIST, ADD_EVENT, ADD_MANY_EVENTS, CALL_API_EVENTS_REQUEST, CALL_API_EVENTS_SUCCESS, CALL_API_EVENTS_FAILURE} from './EventsAction.js'

let initialState = {
  eventsList: []
}

let updateItem = (list = [], item) => list.map(c => c.id !== item.id ? c : item)

export default function events(state = initialState, action) {
  switch (action.type) {
    case GET_EVENTS_LIST:
      return Object.assign({}, state, {
        eventsList: []
      })
    case ADD_EVENT:
      return Object.assign({}, state, {
        eventsList: [
          ...state.eventsList,
          action.payload
        ]
      })
    case ADD_MANY_EVENTS:
      return Object.assign({}, state, {
        eventsList: state.eventsList.concat(action.payload)
      })
    case CALL_API_EVENTS_REQUEST:
      console.log(action)
      return state      
    case CALL_API_EVENTS_SUCCESS:
      console.log(action)
      return state
    case CALL_API_EVENTS_FAILURE:
      console.log(action)
      return state
    default:
      return state
  }
}
