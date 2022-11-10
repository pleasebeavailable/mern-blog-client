const initialState = {
  isAuthenticated: false, user: {},
};

export default function user(
    state: typeof initialState = initialState,
    action: Object,
) {
  const {type, payload} = action;

  switch (type) {
    case 'LOG_IN_USER': {
      return Object.assign({}, state, payload)
    }
    case 'LOG_OUT_USER': {
      return Object.assign({}, state, payload)
    }
    case 'USER_INFO': {
      return Object.assign({}, state, payload)
    }
    default:
      return state;
  }
}


