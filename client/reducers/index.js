import { combineReducers } from 'redux';
import notes from './notes';
import accounts from './accounts';

const reducers = combineReducers({
  notes,
  accounts
});

export default reducers;
