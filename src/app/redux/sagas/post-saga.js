import {call, put, takeEvery} from "redux-saga/effects";
import {getAllPosts} from "../../services/post-service";

export const GET_POSTS = 'GET_POSTS';
export const GET_POSTS_SUCCESS = 'GET_POSTS_SUCCESS';

function* getPosts() {
  try {
    const posts = yield call(getAllPosts);
    yield put({type: GET_POSTS_SUCCESS, posts});

  } catch (err) {
    console.log(err)
  }
}

function* postSaga() {
  yield takeEvery(GET_POSTS, getPosts);
}

export default postSaga;
