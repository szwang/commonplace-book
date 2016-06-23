'use strict';
import 'babel-polyfill';

import React from 'react';
import ReactDOM from 'react-dom';
import Index from './pages/Index';
import AuthPage from './pages/AuthPage';
import NotebookPage from './pages/NotebookPage';
import DragPage from './pages/DragPage';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';
import promise from 'redux-promise';
import cookie from 'cookie';
import { UserAuthWrapper } from 'redux-auth-wrapper'
import { Router, Route, browserHistory } from 'react-router'
import { syncHistoryWithStore, routerMiddleware, routerActions, push } from 'react-router-redux'

const createStoreWithMiddleware = applyMiddleware(
  thunk,
  promise,
  routerMiddleware(browserHistory),
  createLogger()
)(createStore);

const store = createStoreWithMiddleware(reducers);

const history = syncHistoryWithStore(browserHistory, store)

const cookies = cookie.parse(document.cookie)

const requireAuthentication = UserAuthWrapper({
  authSelector: state => state.accounts,
  predicate: user => user.isAuthenticated,
  redirectAction: function({ pathname, query }){
    return push('auth')
  },
  wrapperDisplayName: 'UserIsAuthenticated'
})

const requireLoggedOut = UserAuthWrapper({
  authSelector: state => state.accounts,
  predicate: user => !user.isAuthenticated,
  redirectAction: function({ pathname, query }){
    return push('notebook')
  },
  wrapperDisplayName: 'UserIsLoggedOut'
})

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={Index} />
        <Route path="/auth" component={requireLoggedOut(AuthPage)} />
        <Route path="/notebook" component={requireAuthentication(NotebookPage)} />
        <Route path="/drag" component={DragPage} />
    </Router>
  </Provider>,
  document.getElementById('root')
);

