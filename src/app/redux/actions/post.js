import {GET_POSTS} from "../../constants/constants";

export const getPosts = (payload) => {
  return {
    type: GET_POSTS,
  };
};

export default getPosts;
