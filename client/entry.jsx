'use strict';
import 'babel-polyfill';

import React from 'react';
import ReactDOM from 'react-dom';
import Index from './pages/Index';
import AuthPage from './pages/AuthPage';
// import jss from 'jss';
// import jssVendorPrefixer from 'jss-vendor-prefixer';
// import jssPx from 'jss-px';
// import jssNested from 'jss-nested';
// import jssCamelCase from 'jss-camel-case';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';
import promise from 'redux-promise';

import { Router, Route, browserHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'

// jss.use(jssVendorPrefixer());
// jss.use(jssPx());
// jss.use(jssNested());
// jss.use(jssCamelCase());

const createStoreWithMiddleware = applyMiddleware(
  thunk,
  promise,
  createLogger()
)(createStore);

const store = createStoreWithMiddleware(reducers);

const history = syncHistoryWithStore(browserHistory, store)

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={Index}/>
    </Router>
  </Provider>,
  document.getElementById('root')
);