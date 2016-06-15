'use strict';
import 'babel-polyfill';

import React from 'react';
import ReactDOM from 'react-dom';
import Index from './pages/Index';
import AuthPage from './pages/AuthPage';
import NotebookPage from './pages/NotebookPage';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';
import promise from 'redux-promise';
import cookie from 'cookie';
import store from './store/configureStore';
import { Router, Route, browserHistory } from 'react-router'
import { syncHistoryWithStore, routerMiddleware } from 'react-router-redux'

// const createStoreWithMiddleware = applyMiddleware(
//   thunk,
//   promise,
//   routerMiddleware(browserHistory),
//   createLogger()
// )(createStore);

// const store = createStoreWithMiddleware(reducers);

const history = syncHistoryWithStore(browserHistory, store)

const cookies = cookie.parse(document.cookie)

function requireAuth(nextState, replace) {
  if (!cookies.user_id)
    replace('/auth')
}

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={Index} />
        <Route path="/auth" component={AuthPage} />
        <Route path="/notebook" component={NotebookPage} onEnter={requireAuth} />
    </Router>
  </Provider>,
  document.getElementById('root')
);

