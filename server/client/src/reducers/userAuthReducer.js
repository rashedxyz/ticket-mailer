import {
  CREATE_USER_SUCCESS,
  CREATE_USER_REJECTED,
  CREATE_USER_PENDING,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_PENDING,
  LOGIN_USER_REJECTED,
  FETCHED_USER_SUCCESS,
  FETCHED_USER_REJECTED,
  FETCHED_USER_PENDING,
} from '../actions/types';

const initialState = {
  isAuthorized: true, // XXX: for testing only, default should be false
  createUserPending: undefined,
  createUserRejected: undefined,
  createUserSuccess: undefined,
  loginUserPending: undefined,
  loginUserRejected: undefined,
  loginUserSuccess: undefined,
  fetchedUserPending: undefined,
  fetchedUserRejected: undefined,
  fetchedUserResolved: undefined,
};

const userAuthReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_USER_PENDING: {
      const newState = {
        createUserRejected: undefined,
        createUserSuccess: undefined,
        createUserPending: action,
      };
      return { ...state, ...newState };
    }

    case CREATE_USER_REJECTED: {
      const newState = {
        createUserRejected: action,
        createUserSuccess: undefined,
        createUserPending: undefined,
      };
      return { ...state, ...newState };
    }
    case CREATE_USER_SUCCESS: {
      const newState = {
        createUserRejected: undefined,
        createUserSuccess: action,
        createUserPending: undefined,
      };
      return { ...state, ...newState };
    }
    case LOGIN_USER_PENDING: {
      const newState = {
        isAuthorized: false,
        loginUserRejected: undefined,
        loginUserSuccess: undefined,
        loginUserPending: action,
      };
      return { ...state, ...newState };
    }
    case LOGIN_USER_REJECTED: {
      const newState = {
        isAuthorized: false,
        loginUserRejected: action,
        loginUserSuccess: undefined,
        loginUserPending: undefined,
      };
      return { ...state, ...newState };
    }
    case LOGIN_USER_SUCCESS: {
      const newState = {
        isAuthorized: true,
        loginUserRejected: undefined,
        loginUserSuccess: action,
        loginUserPending: undefined,
      };
      return { ...state, ...newState };
    }
    case FETCHED_USER_PENDING: {
      const newState = {
        fetchedUserRejected: undefined,
        fetchedUserSuccess: undefined,
        fetchedUserPending: action,
      };
      return { ...state, ...newState };
    }
    case FETCHED_USER_REJECTED: {
      const newState = {
        fetchedUserRejected: action,
        fetchedUserSuccess: undefined,
        fetchedUserPending: undefined,
      };
      return { ...state, ...newState };
    }
    case FETCHED_USER_SUCCESS: {
      const newState = {
        fetchedUserRejected: undefined,
        fetchedUserSuccess: action,
        fetchedUserPending: undefined,
      };
      return { ...state, ...newState };
    }
    default:
      return state;
  }
};

export default userAuthReducer;