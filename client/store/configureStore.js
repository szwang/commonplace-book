import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import promise from 'redux-promise';
import { syncHistoryWithStore, routerMiddleware } from 'react-router-redux'
import { Router, Route, browserHistory } from 'react-router'
import createLogger from 'redux-logger';
import reducers from '../reducers/index';

const createStoreWithMiddleware = applyMiddleware(
  thunk,
  promise,
  routerMiddleware(browserHistory),
  createLogger()
)(createStore);

const store = createStoreWithMiddleware(reducers);

export default store;