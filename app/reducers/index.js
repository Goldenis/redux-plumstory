import { combineReducers } from 'redux';
import { routerStateReducer as router } from 'redux-router';
import * as utils from './utils';
import global from './global';
import auth from '../authentication/reducer';

const rootReducer = combineReducers({
  global,
  auth,
  router
});

export default rootReducer;
