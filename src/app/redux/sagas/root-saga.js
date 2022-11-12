import {all, fork} from "redux-saga/effects";
import postSaga from "./post-saga";
import sectionSaga from "./section-saga";
import userSaga from "./user-saga";

export default function* rootSaga() {
  yield all([fork(postSaga), fork(sectionSaga), fork(userSaga)]);
}
