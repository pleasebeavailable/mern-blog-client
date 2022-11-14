import {
  GET_POSTS,
  GET_POSTS_SUCCESS,
  GET_SECTION_POSTS,
  GET_SECTION_POSTS_SUCCESS,
  POST_COMMENT_SUCCESS,
  READ_POST_SUCCESS
} from "../../constants/constants";

const initialState = {
  posts: [],
  selectedPost: {},
  selectedSection: "",
  comments: [],
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
    case GET_SECTION_POSTS: {
      return {...state, isLoading: true, posts: []};
    }
    case GET_POSTS_SUCCESS: {
      return {...state, isLoading: false, posts: action.posts}
    }
    case GET_SECTION_POSTS_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        posts: action.res.posts,
        selectedSection: action.res.section
      }
    }
    case READ_POST_SUCCESS: {
      console.log(action)
      return {
        ...state,
        isLoading: false,
        selectedPost: action.response.post,
        comments: action.response.comments
      }
    }
    case POST_COMMENT_SUCCESS: {
      console.log("kad se desava?")
      console.log(action)
      return {
        ...state,
        isLoading: false,
        comments: action.comments
      }
    }
    default:
      return state;
  }
}
