// import * as actionTypes from '../actionTypes/auth';

// const DEFAULT_STATE = [];

// const loginUser = (state, action) => ([
//   ...state,
//   action.user
// ])


// export default function accounts(state = DEFAULT_STATE, action) {
//   return ({
//     [actionTypes.LOGIN_USER_SUCCESS]: loginUser
//   }[action.type] || (s => s))(state, action);
// }


import {
  REGISTER_USER_SUCCESS,
  LOGIN_USER_SUCCESS,
  LOGOUT_USER_SUCCESS
} from '../actionTypes/auth';

import cookie from 'cookie';
import { push } from 'react-router-redux';

// array of notes, with structure

const cookies = cookie.parse(document.cookie)

const INITIAL_STATE = {
  id: cookies.user_id || '',
  username: cookies.username || '',
  email: cookies.email || '',
  isAuthenticated: !!cookies.user_id
}; 

const user = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case REGISTER_USER_SUCCESS: 
      return Object.assign({}, state, { isAuthenticated: true });

    case LOGIN_USER_SUCCESS:
      return Object.assign({}, state, { isAuthenticated: true });

    case LOGOUT_USER_SUCCESS:
      return {
        id: '',
        username: '',
        email: '',
        isAuthenticated: false
      }

    default:
      return state
  }
}

export default user;
