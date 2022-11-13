import {NAVIGATE_SUCCESS} from "../../constants/constants";

const initialState = {
  route: "/"
};

export default function section(
    state: typeof initialState = initialState,
    action: Object
) {
  switch (action.type) {
    case NAVIGATE_SUCCESS:
      return {...state, route: action.route}
    default:
      return state;
  }
}
