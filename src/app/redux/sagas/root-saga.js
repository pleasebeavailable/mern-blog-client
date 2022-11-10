import {all, fork} from "redux-saga/effects";
import postSaga from "./post-saga";
import sectionSaga from "./section-saga";

export default function* rootSaga() {
  yield all([fork(postSaga), fork(sectionSaga)]);
}
