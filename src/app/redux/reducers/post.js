import {GET_POSTS, GET_POSTS_SUCCESS} from "../sagas/post-saga";

const initialState = {
  posts: [],
  isLoading: false,
  error: ""
};

export default function postReducer(
    state: typeof initialState = initialState,
    action: Object
) {
  const {type, payload} = action;
  switch (type) {
    case GET_POSTS: {
      return {...state, isLoading: true, posts: []};
    }
    case GET_POSTS_SUCCESS: {
      return {...state, isLoading: false, posts: action.posts}
    }
    default:
      return state;
  }
}
