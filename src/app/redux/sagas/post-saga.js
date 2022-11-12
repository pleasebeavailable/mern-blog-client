import {call, put, takeEvery} from "redux-saga/effects";
import {getAllPosts} from "../../services/post-service";
import {GET_POSTS, GET_POSTS_SUCCESS} from "../../constants/constants";

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
