import {
  LOGIN_USER,
  LOGOUT_USER,
  SIGN_UP, USER_ERROR,
  USER_INFO
} from "../../constants/constants";

export const signUp = (payload) => {
  return {
    type: SIGN_UP,
    payload,
  };
};

export const loginAction = (payload) => {
  return {
    type: LOGIN_USER,
    payload,
  };
};

export const logoutAction = () => {
  return {
    type: LOGOUT_USER,
  };
};

export const userError = (payload) => {
  return {
    type: USER_ERROR,
    payload,
  };
};

export const infoAction = (payload) => {
  return {
    type: USER_INFO,
    payload,
  };
};

