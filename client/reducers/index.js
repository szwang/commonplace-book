import { combineReducers } from 'redux';
import notes from './notes';
// import accounts from './accounts';
import { routerReducer } from 'react-router-redux'


const reducers = combineReducers({
  notes,
  routing: routerReducer
});

export default reducers;
