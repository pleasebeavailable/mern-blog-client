import {call, put, takeEvery} from "redux-saga/effects";
import {login, signup} from "../../services/user-service";
import {
  HANDLE_USER_CHANGE,
  HANDLE_USER_CHANGE_SUCCESS,
  LOGIN_USER,
  LOGIN_USER_SUCCESS,
  LOGOUT_USER,
  LOGOUT_USER_SUCCESS,
  SIGN_UP,
  SIGN_UP_SUCCESS,
  USER_ERROR,
  USER_ERROR_SUCCESS
} from "../../constants/constants";
import {push} from "redux-first-history";

function* registerUser(payload) {
  try {
    const res = yield call(() => signup(payload));
    if (res.msg === undefined) {
      yield put(push("/"));
      yield put({type: SIGN_UP_SUCCESS, res});
    } else {
      yield put({type: USER_ERROR_SUCCESS, res})
    }

  } catch (e) {
    console.log(e);
  }
}

function* loginUser(payload) {
  try {
    const res = yield call(() => login(payload));
    if (res.msg === undefined) {
      yield put(push("/"));
      yield put({type: LOGIN_USER_SUCCESS, res});
    } else {
      console.log(res)
      yield put({type: USER_ERROR_SUCCESS, res})
    }
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

function* userError(payload) {
  try {
    yield put({type: USER_ERROR_SUCCESS, payload});
  } catch (e) {
    console.log(e);
  }
}

function* handleUserChange(payload) {
  try {
    yield put({type: HANDLE_USER_CHANGE_SUCCESS, payload});
  } catch (e) {
    console.log(e);
  }
}

function* userSaga() {
  try {
    yield takeEvery(LOGIN_USER, loginUser);
    yield takeEvery(SIGN_UP, registerUser);
    yield takeEvery(LOGOUT_USER, logoutUser);
    yield takeEvery(USER_ERROR, userError);
    yield takeEvery(HANDLE_USER_CHANGE, handleUserChange);
  } catch (e) {
    console.error(e)
  }
}

export default userSaga;
