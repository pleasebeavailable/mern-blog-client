import {GET_POSTS, READ_POST} from "../../constants/constants";

export const getPosts = () => {
  return {
    type: GET_POSTS,
  };
};

export const readPost = (payload) => {
  return {
    type: READ_POST,
    payload
  }
}

export default getPosts;
