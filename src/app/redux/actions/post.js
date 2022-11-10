import {GET_POSTS} from "../sagas/post-saga";

export const getPosts = (payload) => {
  console.log(payload)
  return {
    type: GET_POSTS,
  };
};

export default getPosts;
