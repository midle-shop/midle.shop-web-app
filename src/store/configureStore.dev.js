import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import createHistory from 'history/createBrowserHistory';
import { routerMiddleware } from 'react-router-redux';

import reducers from './reducers';
import i18nextConfig from '../constants/i18next-config';

import { createLogger } from 'redux-logger';
import { persistState } from 'redux-devtools';
import DevTools from '../components/DevTools';



const middleware = [ thunk ];
const history = createHistory();
middleware.push(routerMiddleware(history));

middleware.push(createLogger());
const enhancer = compose(
  persistState(getDebugSessionKey()),
  DevTools.instrument()
);
function getDebugSessionKey () {
  // You can write custom logic here!
  // By default we try to read the key from ?debug_session=<key> in the address bar
  const matches = window.location.href.match(/[?&]debug_session=([^&#]+)\b/);
  return (matches && matches.length > 0) ? matches[1] : null;
}

export default function configureStore(initialState) {
  const store = createStore(
    combineReducers(reducers),
    Object.assign({}, initialState, {i18next: i18nextConfig}),
    compose(
      applyMiddleware(...middleware),
      window.__REDUX_DEVTOOLS_EXTENSION__
        ? window.__REDUX_DEVTOOLS_EXTENSION__()
        : enhancer
    )
  );
  /*
  if (module.hot) {
    module.hot.accept('./reducers', function () {
      store.replaceReducer(require('./reducers'));
    });
  }
  */

  return { store: store, history: history };
}
