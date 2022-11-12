import {call, put, takeEvery} from "redux-saga/effects";
import {login, signup} from "../../services/user-service";
import {
  LOGIN_USER,
  LOGIN_USER_SUCCESS,
  REGISTER_USER
} from "../../constants/constants";

function* registerUser(payload) {
  yield call(signup(payload));
}

function* loginUser(payload) {
  try {
    const user = yield call(() => login(payload));
    yield put({type: LOGIN_USER_SUCCESS, user});
  } catch (e) {
    console.log(e);
  }
}

function* userSaga() {
  try {
    yield takeEvery(LOGIN_USER, loginUser);
    yield takeEvery(REGISTER_USER, registerUser);
  } catch (e) {
    console.error(e)
  }
}

export default userSaga;
