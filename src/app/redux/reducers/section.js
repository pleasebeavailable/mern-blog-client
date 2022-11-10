import {GET_SECTIONS, GET_SECTIONS_SUCCESS} from "../actions/section";

const initialState = {
  sections: [], isLoading: false
};

export default function section(
    state: typeof initialState = initialState,
    action: Object
) {
  switch (action.type) {
    case GET_SECTIONS:
      return {...state, sections: [], isLoading: true}
    case GET_SECTIONS_SUCCESS: {
      return {...state, sections: action.sections, isLoading: false};
    }
    default:
      return state;
  }
}
