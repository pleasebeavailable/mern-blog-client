import {call, put, takeEvery} from "redux-saga/effects";
import {
  getAllPosts,
  getAllSectionPosts,
  postNewComment
} from "../../services/post-service";
import {
  GET_POSTS,
  GET_POSTS_SUCCESS,
  GET_SECTION_POSTS,
  GET_SECTION_POSTS_SUCCESS, POST_COMMENT,
  POST_COMMENT_SUCCESS,
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

function* getSectionPosts(payload) {
  try {
    const posts = yield call(() => getAllSectionPosts(payload));
    const res = {posts: posts, section: payload};
    yield put(push(SECTION_POSTS))
    yield put({type: GET_SECTION_POSTS_SUCCESS, res});
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

function* postComment(payload) {
  try {
    yield call(() => postNewComment(payload))
    yield put({type: POST_COMMENT_SUCCESS, payload});
  } catch (err) {
    console.log(err)
  }
}

function* postSaga() {
  yield takeEvery(GET_POSTS, getPosts);
  yield takeEvery(READ_POST, readPost);
  yield takeEvery(POST_COMMENT, postComment);
  yield takeEvery(GET_SECTION_POSTS, getSectionPosts);
}

export default postSaga;
