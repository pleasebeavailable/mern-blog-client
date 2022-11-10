import {call, put, takeEvery} from "redux-saga/effects";
import {signup} from "../../services/registration-service";

export const REGISTER_USER = 'REGISTER_USER';
export const REGISTER_USER_SUCCESS = 'REGISTER_USER_SUCCESS';
export const LOGIN_USER = 'LOGIN_USER';
export const LOGIN_USER_SUCCESS = 'LOGIN_USER_SUCCESS';

function* registerUser(payload) {
  const posts = yield call(signup(payload));
  yield put({type: LOGIN_USER_SUCCESS}, posts);
}

function* userSaga() {
  yield takeEvery(REGISTER_USER, registerUser);
};

export default userSaga;
