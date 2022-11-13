import {
  LOGIN_USER,
  LOGOUT_USER,
  REGISTER_USER, USER_INFO
} from "../../constants/constants";

export const registerUser = (payload) => {
  return {
    type: REGISTER_USER,
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

export const infoAction = (payload) => {
  return {
    type: USER_INFO,
    payload,
  };
};

