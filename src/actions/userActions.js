import axiosWithAuth from '../utils/axiosWithAuth';

export const SIGNUP_LOADING = 'SIGNUP_LOADING';
export const SIGNUP_SUCCESS = 'SIGNUP_SUCCESS';
export const SIGNUP_FAILURE = 'SIGNUP_FAILURE';

export const LOGIN_LOADING = 'LOGIN_LOADING';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';

export const USER_LOGOUT = 'USER_LOGOUT';

export const signUpUser = (signUpCreds) => (dispatch) => {
  dispatch({ type: SIGNUP_LOADING });
  axiosWithAuth()
    .post('/auth/register', signUpCreds)
    .then((res) => {
      dispatch({ type: SIGNUP_SUCCESS, payload: res.data });
    })
    .catch((err) => {
      dispatch({ type: SIGNUP_FAILURE, payload: err.response });
    });
};

export const loginUser = (loginCreds) => (dispatch) => {
  window.localStorage.removeItem('token');
  dispatch({ type: LOGIN_LOADING });
  axiosWithAuth()
    .post('/auth/login', loginCreds)
    .then((res) => {
      window.localStorage.setItem('token', res.data.token);
      dispatch({ type: LOGIN_SUCCESS, payload: res.data });
    })
    .catch((err) => {
      dispatch({ type: LOGIN_FAILURE, payload: err.response });
    });
};

export const logoutUser = () => {
  window.localStorage.removeItem('token');
  return { type: USER_LOGOUT };
};
