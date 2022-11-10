import {call, put, takeEvery} from "redux-saga/effects";
import {getAllSections} from "../../services/section-service";
import {GET_SECTIONS, GET_SECTIONS_SUCCESS} from "../actions/section";

function* getSections() {
  const sections = yield call(getAllSections);
  yield put({type: GET_SECTIONS_SUCCESS, sections});
}

function* sectionSaga() {
  try {
    yield takeEvery(GET_SECTIONS, getSections);

  } catch (e) {
    console.log(e)
  }
}

export default sectionSaga;
