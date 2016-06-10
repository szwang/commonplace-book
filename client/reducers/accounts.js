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

// array of notes, with structure

const cookies = cookie.parse(document.cookie)

const INITIAL_STATE = {
  id: cookies.user_id || '',
  username: cookies.username || '',
  email: cookies.email || ''
}; 

const user = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case REGISTER_USER_SUCCESS: 
      console.log({...state})
    
      return {
        ...state
      }

    case LOGIN_USER_SUCCESS:
      console.log({...state})
      return {
        ...state
      }

    case LOGOUT_USER_SUCCESS:
      return {
        id: '',
        username: '',
        email: ''
      }

    default:
      return state
  }
}

export default user;
