import {
  SIGNUP_LOADING,
  SIGNUP_SUCCESS,
  SIGNUP_FAILURE,
  LOGIN_LOADING,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  USER_LOGOUT,
} from '../actions/userActions';

const initialState = {
  user_id: '',
  username: '',
  isLoading: false,
  token: window.localStorage.getItem() || '',
  error: '',
  isLoggedIn: false,
  isSignedUp: false,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case SIGNUP_LOADING:
      return {
        ...state,
        isLoading: true,
        error: '',
      };
    case SIGNUP_SUCCESS:
      return {
        ...state,
        isLoading: false,
        username: action.payload.username,
        user_id: action.payload.user_id,
        isSignedUp: true,
      };
    case SIGNUP_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
        isSignedUp: false,
      };
    case LOGIN_LOADING:
      return {
        ...state,
        isLoading: true,
        error: '',
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isLoggedIn: true,
        user_id: action.payload.user_id,
        username: action.payload.username,
        token: action.payload.token,
      };
    case LOGIN_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
        isLoggedIn: false,
      };
    case USER_LOGOUT:
      return {
        ...state,
        user_id: '',
        username: '',
        token: '',
        isLoggedIn: false,
        isSignedUp: false,
      };
    default:
      return state;
  }
};

export default userReducer;
