import {UNAUTHORIZED, AUTHORIZED, FORBIDDEN} from '../middleware/api';

const initialState = {
  isAuthenticated: false,
  forbidden: false
};

export default function auth(state = initialState, action = {}) {
  switch (action.type) {
    case UNAUTHORIZED:
      return Object.assign({}, state, {isAuthenticated: false});
    case AUTHORIZED:
      return Object.assign({}, state, {isAuthenticated: true});
    case FORBIDDEN:
      return Object.assign({}, state, {forbidden: true});
    default:
      return initialState;
  }
}
