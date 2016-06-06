import * as actionTypes from '../actionTypes/auth';

const DEFAULT_STATE = [];

const loginUser = (state, action) => ([
  ...state,
  action.user
])


export default function accounts(state = DEFAULT_STATE, action) {
  return ({
    [actionTypes.LOGIN_USER_SUCCESS]: loginUser
  }[action.type] || (s => s))(state, action);
}
