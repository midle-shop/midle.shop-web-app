import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import createHistory from 'history/createBrowserHistory';
import { routerMiddleware } from 'react-router-redux';

import reducers from './reducers';
import i18nextConfig from '../constants/i18next-config';


const middleware = [ thunk ];
const history = createHistory();
middleware.push(routerMiddleware(history));

export default function configureStore(initialState) {
  const store = createStore(
    combineReducers(reducers),
    Object.assign({}, initialState, {i18next: i18nextConfig}),
    compose(
      applyMiddleware(...middleware)
    )
  );

  return { store: store, history: history };
}
