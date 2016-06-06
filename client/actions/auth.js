import * as actionTypes from '../actionTypes/auth';
import { get, post, del } from '../utils/api';

export function loginUser() {
  return async dispatch => {
    dispatch({
      type: actionTypes.LOGIN_USER
    });

    //test data
    var data = {
      username: 'suzanne',
      password: '1234'
    }

    try {
      const result = await post('/api/auth', data);

      dispatch({
        type: actionTypes.LOGIN_USER_SUCCESS
      })
    } catch(e) {
      dispatch({
        type: actionTypes.LOGIN_USER_ERROR
      })
    }
  }
}

export function registerUser() {

}