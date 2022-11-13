import {
  LOGIN_USER_SUCCESS,
  LOGOUT_USER_SUCCESS,
  USER_INFO
} from "../../constants/constants";

const initialState = {
  user: {}, token: null, isAuthenticated: false
};

export default function user(
    state: typeof initialState = initialState,
    action: Object,
) {
  const {type, payload} = action;

  switch (type) {
    case LOGIN_USER_SUCCESS: {
      return Object.assign({}, state,
          {
            isAuthenticated: action.user.success,
            user: action.user.user,
            token: action.user.token
          })
    }
    case LOGOUT_USER_SUCCESS: {
      return Object.assign({}, state, initialState)
    }
    case USER_INFO: {
      return Object.assign({}, state, payload)
    }
    default:
      return state;
  }
}


