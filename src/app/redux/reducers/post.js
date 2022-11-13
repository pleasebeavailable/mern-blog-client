import {
  GET_POSTS,
  GET_POSTS_SUCCESS,
  READ_POST_SUCCESS
} from "../../constants/constants";

const initialState = {
  posts: [],
  selectedPost: {},
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
    case READ_POST_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        selectedPost: action.payload.payload.post
      }
    }
    default:
      return state;
  }
}
