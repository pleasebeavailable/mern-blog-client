import {call, put, takeEvery} from "redux-saga/effects";
import {signup} from "../../services/registration-service";
import {LOGIN_USER_SUCCESS, REGISTER_USER} from "../../constants/constants";


function* registerUser(payload) {
  const posts = yield call(signup(payload));
  yield put({type: LOGIN_USER_SUCCESS}, posts);
}

function* userSaga() {
  yield takeEvery(REGISTER_USER, registerUser);
};

export default userSaga;
