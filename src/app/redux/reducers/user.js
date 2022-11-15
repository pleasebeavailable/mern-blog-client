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
  loggedUser: {},
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
            isAuthenticated: action.res.success,
            user: {},
            loggedUser: action.res.user,
            token: action.res.token,
            errors: {
              global: "",
              username: "",
              email: "",
              password: "",
              pwconfirm: ""
            }
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
      let res = action.res;
      return res === undefined ?
          Object.assign({}, state, {errors: action.payload.payload}) :
          Object.assign({}, state, {
            errors: {
              global: res.msg,
              username: "",
              email: "",
              password: "",
              pwconfirm: ""
            }
          })

    }
    case USER_INFO: {
      return Object.assign({}, state, payload)
    }
    default:
      return state;
  }
}


