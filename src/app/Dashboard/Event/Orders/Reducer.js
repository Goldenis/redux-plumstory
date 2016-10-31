import {GET_ORDERS_LIST, ADD_MANY_ORDERS} from './Action.js'

let initialState = {
  ordersList: []
}

let updateItem = (list = [], item) => list.map(c => c.id !== item.id ? c : item)

export default function events(state = initialState, action) {
  switch (action.type) {
    case GET_ORDERS_LIST:
      return Object.assign({}, state, {
        ordersList: []
      })
    case ADD_MANY_ORDERS:
      return Object.assign({}, state, {
        ordersList: state.ordersList.concat(action.payload)
      })
    default:
      return state
  }
}
