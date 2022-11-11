import {LOGIN_USER, LOGOUT_USER, USER_INFO} from "../../constants/constants";

const initialState = {
  isAuthenticated: false, user: {},
};

export default function user(
    state: typeof initialState = initialState,
    action: Object,
) {
  const {type, payload} = action;

  switch (type) {
    case LOGIN_USER: {

      return Object.assign({}, state, payload)
    }
    case LOGOUT_USER: {
      return Object.assign({}, state, payload)
    }
    case USER_INFO: {
      return Object.assign({}, state, payload)
    }
    default:
      return state;
  }
}


