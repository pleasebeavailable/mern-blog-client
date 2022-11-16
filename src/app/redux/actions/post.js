import {
  CREATE_POST,
  DELETE_COMMENT,
  GET_POSTS,
  GET_SECTION_POSTS,
  HANDLE_POST_CHANGE,
  POST_COMMENT,
  READ_POST
} from "../../constants/constants";

export const getPosts = () => {
  return {
    type: GET_POSTS,
  };
};

export const getSectionPosts = (payload) => {
  return {
    type: GET_SECTION_POSTS,
    payload
  };
};

export const createPost = (payload) => {
  return {
    type: CREATE_POST,
    payload
  };
};

export const postNewComment = (payload) => {
  return {
    type: POST_COMMENT,
    payload
  };
};

export const deleteComment = (payload) => {
  return {
    type: DELETE_COMMENT,
    payload
  };
};

export const readPost = (payload) => {
  return {
    type: READ_POST,
    payload
  }
}

export const handleChange = (payload) => {
  return {
    type: HANDLE_POST_CHANGE,
    payload
  };
};

export default getPosts;
