import {
  HANDLE_USER_CHANGE_SUCCESS,
  LOGIN_USER_SUCCESS,
  LOGOUT_USER_SUCCESS,
  SIGN_UP_SUCCESS,
  USER_ERROR_SUCCESS,
  USER_INFO
} from "../../constants/constants";

const initialState = {
  user: {},
  token: null,
  isAuthenticated: false,
  errors: {global: "", username: "", email: "", password: "", pwconfirm: ""}
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
    case SIGN_UP_SUCCESS: {
      return Object.assign({}, state, initialState);
    }
    case HANDLE_USER_CHANGE_SUCCESS: {
      let user = {...state.user};
      let changedUser = action.payload.payload;
      let keys = Object.keys(action.payload.payload);
      let changedKey;
      for (const key of keys) {
        if (changedUser[key] !== user[key]) {
          changedKey = key;
        }
      }
      let newErrors = {...state.errors};
      newErrors[changedKey] = '';
      return Object.assign({}, state, {user: changedUser, errors: newErrors})
    }
    case USER_ERROR_SUCCESS: {
      let type = "";
      if (action.payload) {
        type = Object.keys(action.payload.payload)[0];
      }
      return Object.assign({}, state, {errors: action.payload.payload})

    }
    case USER_INFO: {
      return Object.assign({}, state, payload)
    }
    default:
      return state;
  }
}


