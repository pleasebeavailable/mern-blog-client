import {call, put, takeEvery} from "redux-saga/effects";
import {getAllPosts, getAllSectionPosts} from "../../services/post-service";
import {
  GET_POSTS,
  GET_POSTS_SUCCESS,
  GET_SECTION_POSTS,
  GET_SECTION_POSTS_SUCCESS,
  READ_POST,
  READ_POST_SUCCESS
} from "../../constants/constants";
import {push} from "redux-first-history";
import {POST_ROUTE, SECTION_POSTS} from "../../constants/routes";

function* getPosts() {
  try {
    const posts = yield call(getAllPosts);
    yield put({type: GET_POSTS_SUCCESS, posts});
  } catch (err) {
    console.log(err)
  }
}

function* getSectionPosts() {
  try {
    const posts = yield call(getAllPosts);
    yield put(push(SECTION_POSTS))
    yield put({type: GET_SECTION_POSTS_SUCCESS, posts});
  } catch (err) {
    console.log(err)
  }
}

function* readPost(payload) {
  try {
    yield put(push(POST_ROUTE))
    yield put({type: READ_POST_SUCCESS, payload});
  } catch (err) {
    console.log(err)
  }
}

function* postSaga() {
  yield takeEvery(GET_POSTS, getPosts);
  yield takeEvery(READ_POST, readPost);
  yield takeEvery(GET_SECTION_POSTS, getSectionPosts);
}

export default postSaga;
