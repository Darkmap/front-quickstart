import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

/**
 * Actions
 */

const initialState = {};

const myApp = (state = initialState, action) => {
  const newState = Object.assign({}, state);
  switch (action.type) {
    default:
      break;
  }
  return newState;
};


/**
 * Store
 */
// eslint-disable-next-line no-underscore-dangle
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(myApp, composeEnhancers(applyMiddleware(thunk)));

export default store;
