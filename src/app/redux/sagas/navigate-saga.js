import {put, takeEvery} from "redux-saga/effects";
import {NAVIGATE} from "../../constants/constants";
import {push} from "redux-first-history";

function* dispatchNavigation(payload) {
  try {
    yield put(push(payload.payload.route))
  } catch (err) {
    console.log(err)
  }
}

function* navigate() {
  yield takeEvery(NAVIGATE, dispatchNavigation);
}

export default navigate;
