// import { createStore, applyMiddleware, compose } from 'redux';
// import rootReducer from '../reducers';
// import thunk from 'redux-thunk'
// import persistState from 'redux-localstorage'
// import promiseMiddleware from './../api/promiseMiddleware'
// import api from './../helpers/api'
//
// const enhancer = compose(
//   applyMiddleware(thunk.withExtraArgument({api})),
//   // persistState()
// );
//
// export default function configureStore(initialState) {
//   const store = createStore(rootReducer, initialState, enhancer);
//   return store;
// }

import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from '../reducers';
import thunk from 'redux-thunk'
import persistState from 'redux-localstorage'
import promiseMiddleware from './../api/promiseMiddleware'
import api from './../helpers/api'
import { apiMiddleware } from 'redux-api-middleware';


const enhancer = compose(
  applyMiddleware(thunk.withExtraArgument(api)),
  window.devToolsExtension ? window.devToolsExtension() : f => f,
  // persistState(),
);

const createStoreWithMiddleware = applyMiddleware(apiMiddleware)(createStore);

export default function configureStore(initialState) {

  const store = createStoreWithMiddleware(rootReducer, initialState, enhancer);
  if (module.hot) {
    module.hot.accept('../reducers', () =>
      store.replaceReducer(require('../reducers')/*.default if you use Babel 6+ */)
    );
  }
  return store;
}
