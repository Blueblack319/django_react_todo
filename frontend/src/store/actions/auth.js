import axios from '../../axios-backend';
import { stopSubmit } from 'redux-form';

import {
  USER_LOADING,
  USER_LOADED,
  AUTH_ERROR,
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT_SUCCESS,
} from './types';

export const tokenConfig = (getState) => {
  const token = getState().auth.token;

  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };
  if (token) {
    config.headers['Authorization'] = `Token ${token}`;
  }
  return config;
};

// LOAD USER
export const loadUser = () => async (dispatch, getState) => {
  dispatch({ type: USER_LOADING });

  try {
    const res = await axios.get('/api/auth/user', tokenConfig(getState));
    // const res = await axios({
    //     url: '/api/auth/user',
    //     method: 'GET',
    //     tokenConfig
    // })
    dispatch({
      type: USER_LOADED,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: AUTH_ERROR,
    });
  }
};

// LOGIN USER
export const login = ({ username, password }) => async (dispatch) => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  const body = JSON.stringify({ username, password });

  try {
    const res = await axios.post('/api/auth/login', body, config);
    dispatch({
      type: LOGIN_SUCCESS,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: LOGIN_FAIL,
    });
    dispatch(stopSubmit('login', err.response.data));
  }
};

// LOGOUT USER
export const logout = () => async (dispatch, getState) => {
  await axios({
    method: 'POST',
    url: '/api/auth/logout',
    ...tokenConfig(getState),
  });
  dispatch({
    type: LOGOUT_SUCCESS,
  });
};

// REGISTER USER
export const register = ({
  first_name,
  last_name,
  username,
  email,
  password,
}) => async (dispatch) => {
  // Headers
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  // Request Body
  const body = JSON.stringify({
    first_name,
    last_name,
    username,
    email,
    password,
  });

  try {
    // const res = await axios.post('/api/auth/register', body, config);
    const res = await axios({
      method: 'Post',
      url: '/api/auth/register',
      data: body,
      ...config,
    });
    dispatch({
      type: REGISTER_SUCCESS,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: REGISTER_FAIL,
    });
    dispatch(stopSubmit('register', err.response.data));
  }
};
