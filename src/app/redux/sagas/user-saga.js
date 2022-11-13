import {call, put, takeEvery} from "redux-saga/effects";
import {login, signup} from "../../services/user-service";
import {
  LOGIN_USER,
  LOGIN_USER_SUCCESS,
  LOGOUT_USER, LOGOUT_USER_SUCCESS,
  REGISTER_USER
} from "../../constants/constants";
import {push} from "redux-first-history";

function* registerUser(payload) {
  try {
    yield call(signup(payload));
  } catch (e) {
    console.log(e);
  }
}

function* loginUser(payload) {
  try {
    const user = yield call(() => login(payload));
    yield put(push("/"));
    yield put({type: LOGIN_USER_SUCCESS, user});
  } catch (e) {
    console.log(e);
  }
}

function* logoutUser() {
  try {
    yield put(push("/"));
    yield put({type: LOGOUT_USER_SUCCESS});
  } catch (e) {
    console.log(e);
  }
}

function* userSaga() {
  try {
    yield takeEvery(LOGIN_USER, loginUser);
    yield takeEvery(REGISTER_USER, registerUser);
    yield takeEvery(LOGOUT_USER, logoutUser);
  } catch (e) {
    console.error(e)
  }
}

export default userSaga;
