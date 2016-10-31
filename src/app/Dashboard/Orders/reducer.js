import {REQUEST, SUCCESS, FAILURE} from './actions.js';

let initialState = {
  ordersList: [],
  filterOptions: {}
};

export default function orders(state = initialState, action) {
  switch (action.type) {
    case REQUEST:
    case FAILURE:
      console.log(action);
      return state;
    case SUCCESS:
      return Object.assign({}, state, {
        ordersList: initialState.ordersList.concat(action.payload.data)
      })
    default:
      return state
  }
}
