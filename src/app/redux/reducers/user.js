import {
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
      console.log(action)
      return action.res.msg === undefined ?
          Object.assign({}, state, initialState) :
          Object.assign({}, state, {errors: action.res.msg})
    }
    case USER_ERROR_SUCCESS: {
      let type = "";
      if (action.payload) {
        type = Object.keys(action.payload.payload)[0];
      }
      let newState;
      switch (type) {
        case 'email':
          newState = {...state};
          newState.errors.email = action.payload.payload[type];
          return Object.assign({}, state, newState)
        case 'username':
          newState = {...state};
          newState.errors.username = action.payload.payload[type];
          return Object.assign({}, state, newState)
        case 'password':
          newState = {...state};
          newState.errors.password = action.payload.payload[type];
          return Object.assign({}, state, newState)
        case 'pwconfirm':
          newState = {...state};
          newState.errors.pwconfirm = action.payload.payload[type];
          return Object.assign({}, state, newState)
        default:
          newState = {...state};
          state.errors.global = action.res.msg;
      }

    }
    case USER_INFO: {
      return Object.assign({}, state, payload)
    }
    default:
      return state;
  }
}


