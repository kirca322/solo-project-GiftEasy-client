import { call, put, takeEvery } from "redux-saga/effects";
import * as actions from "../actions/SurveySubmitActions";
import axios from "axios";

const url = "http://localhost:3002";

function* fetchSurveySubmitSaga(action) {
  try {
    const json = action.payload;
    const headerParams = {
      Authorization: localStorage.getItem("token"),
    };
    const { data } = yield call([axios, "post"], `${url}/api/survey`, json, {
      headers: headerParams,
    });
    yield put(actions.submitSuccess(data));
  } catch (error) {
    yield put(actions.submitFail(error.response));
  }
}

export default function* watchSubmit() {
  yield takeEvery(actions.SUBMIT, fetchSurveySubmitSaga);
}
