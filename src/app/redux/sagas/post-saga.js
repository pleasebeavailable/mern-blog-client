import {call, put, takeEvery} from "redux-saga/effects";
import {
  createNewPost,
  deleteSelectedComment,
  getAllPosts,
  getAllSectionPosts,
  getPostComments,
  postNewComment
} from "../../services/post-service";
import {
  CREATE_POST,
  CREATE_POST_SUCCESS,
  DELETE_COMMENT,
  DELETE_COMMENT_SUCCESS,
  GET_POSTS,
  GET_POSTS_SUCCESS,
  GET_SECTION_POSTS,
  GET_SECTION_POSTS_SUCCESS,
  HANDLE_POST_CHANGE,
  HANDLE_POST_CHANGE_SUCCESS,
  POST_COMMENT,
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
    const comments = yield call(() => getPostComments(payload.payload.post._id))
    var response = {post: payload.payload.post, comments: comments};
    yield put({type: READ_POST_SUCCESS, response});
  } catch (err) {
    console.log(err)
  }
}

function* createPost(payload) {
  try {
    yield call(() => createNewPost(payload))
    const posts = yield call(() => getAllPosts())
    yield put(push("/"));
    yield put({type: CREATE_POST_SUCCESS, posts});
  } catch (err) {
    console.log(err)
  }
}

function* postComment(payload) {
  try {
    yield call(() => postNewComment(payload))
    const comments = yield call(() => getPostComments(payload.payload.postId))
    yield put({type: POST_COMMENT_SUCCESS, comments});
  } catch (err) {
    console.log(err)
  }
}

function* deleteComment(payload) {
  try {
    yield call(() => deleteSelectedComment(payload))
    const comments = yield call(() => getPostComments(payload.payload.postId))
    yield put({type: DELETE_COMMENT_SUCCESS, comments});
  } catch (err) {
    console.log(err)
  }
}

function* handlePostChange(payload) {
  try {
    yield put({type: HANDLE_POST_CHANGE_SUCCESS, payload});
  } catch (e) {
    console.log(e);
  }
}

function* postSaga() {
  yield takeEvery(GET_POSTS, getPosts);
  yield takeEvery(READ_POST, readPost);
  yield takeEvery(POST_COMMENT, postComment);
  yield takeEvery(DELETE_COMMENT, deleteComment);
  yield takeEvery(GET_SECTION_POSTS, getSectionPosts);
  yield takeEvery(CREATE_POST, createPost);
  yield takeEvery(HANDLE_POST_CHANGE, handlePostChange);
}

export default postSaga;
