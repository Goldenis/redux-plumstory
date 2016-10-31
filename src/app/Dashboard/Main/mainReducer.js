import {GET_EVENTS_LIST, ADD_EVENT, ADD_MANY_EVENTS} from './events.js'

let initialState = {
  eventsList: []
}

let updateItem = (list = [], item) => list.map(c => c.id !== item.id ? c : item)

export default function user(state = initialState, action) {
  switch (action.type) {
    case GET_EVENTS_LIST:
      return Object.assign({}, state, {
        eventsList: []
      })
    case ADD_EVENT:
      return Object.assign({}, state, {
        eventsList: [
          ...state.eventsList,
          action.item
        ]
      })
    case ADD_MANY_EVENTS:
      return Object.assign({}, state, {
        eventsList: state.eventsList.concat(action.items)
      })
    default:
      return state
  }
}
