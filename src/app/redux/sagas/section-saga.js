import {call, put, takeEvery} from "redux-saga/effects";
import {getAllSections} from "../../services/section-service";
import {GET_SECTIONS, GET_SECTIONS_SUCCESS} from "../../constants/constants";

function* getSections() {
  try {
    const sections = yield call(getAllSections);
    yield put({type: GET_SECTIONS_SUCCESS, sections});

  } catch (e) {
    console.log(e);
  }
}

function* sectionSaga() {
    yield takeEvery(GET_SECTIONS, getSections);
}

export default sectionSaga;
