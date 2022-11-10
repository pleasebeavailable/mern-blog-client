import {GET_SECTIONS_SUCCESS} from "../actions/section";

const initialState = {
  sections: []
};

export default function section(
    state: typeof initialState = initialState,
    action: Object
) {
  switch (action.type) {
    case GET_SECTIONS_SUCCESS: {
      return Object.assign({}, state, {
        sections: action.sections
      });
    }
    default:
      return state;
  }
}
