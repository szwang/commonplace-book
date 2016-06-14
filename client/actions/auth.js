import * as actionTypes from '../actionTypes/auth';
import { get, post, del } from '../utils/api';
import { transitionTo } from 'react-router';

export function loginUser(data) {
  return async dispatch => {
    dispatch({
      type: actionTypes.LOGIN_USER
    });

    try {
      const result = await post('/api/auth/login', data);
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

export function registerUser(data) {
  return async dispatch => {
    dispatch({
      type: actionTypes.REGISTER_USER
    });

    console.log(data)

    try {
      const result = await post('/api/auth/signup', data);
      console.log(result)
      
      dispatch({
        type: actionTypes.REGISTER_USER_SUCCESS
      })

    } catch(e) {
      dispatch({
        type: actionTypes.REGISTER_USER_ERROR
      })
    }
  }
}

export function logoutUser(data) {
  return async dispatch => {
    dispatch({
      type: actionTypes.LOGOUT_USER
    });

    console.log('in logout user', data)

    try {
      const result = await post('/api/auth/logout', data);
      console.log('result')
      dispatch({
        type: actionTypes.LOGOUT_USER_SUCCESS
      })
    } catch(e) {
      dispatch({
        type: actionTypes.LOGOUT_USER_ERROR
      })
    }
  }
}