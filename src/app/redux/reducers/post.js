import {
  CREATE_POST_SUCCESS,
  DELETE_COMMENT_SUCCESS,
  GET_POSTS,
  GET_POSTS_SUCCESS,
  GET_SECTION_POSTS,
  GET_SECTION_POSTS_SUCCESS,
  HANDLE_POST_CHANGE_SUCCESS,
  POST_COMMENT_SUCCESS,
  READ_POST_SUCCESS
} from "../../constants/constants";

const initialState = {
  posts: [],
  newPost: {},
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
  const {type} = action;
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
      return {
        ...state,
        isLoading: false,
        selectedPost: action.response.post,
        comments: action.response.comments
      }
    }
    case POST_COMMENT_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        comments: action.comments
      }
    }
    case DELETE_COMMENT_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        comments: action.comments
      }
    }
    case CREATE_POST_SUCCESS: {
      return {
        ...state,
        posts: action.posts,
        newPost: {}
      }
    }
    case HANDLE_POST_CHANGE_SUCCESS: {
      return {
        ...state,
        newPost: action.payload.payload
      }
    }

    default:
      return state;
  }
}
