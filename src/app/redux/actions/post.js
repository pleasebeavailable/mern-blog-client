import {
  GET_POSTS,
  GET_SECTION_POSTS, POST_COMMENT,
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

export const postNewComment = (payload) => {
  return {
    type: POST_COMMENT,
    payload
  };
};

export const readPost = (payload) => {
  return {
    type: READ_POST,
    payload
  }
}

export default getPosts;
