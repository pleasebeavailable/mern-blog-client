import {
  LOGIN_USER,
  LOGIN_USER_SUCCESS,
  LOGOUT_USER, LOGOUT_USER_SUCCESS,
  USER_INFO
} from "../../constants/constants";

const initialState = {
  isAuthenticated: false, user: {},
};

export default function user(
    state: typeof initialState = initialState,
    action: Object,
) {
  const {type, payload} = action;

  switch (type) {
    case LOGIN_USER_SUCCESS: {
      return Object.assign({}, state, payload)
    }
    case LOGOUT_USER_SUCCESS: {
      return Object.assign({}, state, payload)
    }
    case USER_INFO: {
      return Object.assign({}, state, payload)
    }
    default:
      return state;
  }
}


