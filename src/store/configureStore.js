// import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
// import rootReducer from './../reducers';
// import {intlReducer} from 'react-intl-redux'
// import thunk from 'redux-thunk'
// import persistState from 'redux-localstorage'
// import promiseMiddleware from './../api/promiseMiddleware'
//
// const enhancer = compose(
//   applyMiddleware(thunk),
//   // persistState()
// );
//
// // const reducer = combineReducers({
// //   ...rootReducer,
// //   intl: intlReducer
// // })
//
// export default function configureStore(initialState) {
//
//   const store = createStore(rootReducer, initialState, enhancer );//enhancer
//   if (module.hot) {
//     module.hot.accept('../reducers', () =>
//       store.replaceReducer(require('../reducers')/*.default if you use Babel 6+ */)
//     );
//   }
//   return store;
// }

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./configureStore.prod');
} else {
  module.exports = require('./configureStore.dev');
}
