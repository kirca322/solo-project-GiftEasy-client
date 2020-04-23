import { call, put, takeEvery } from "redux-saga/effects";
import * as actions from "../actions/OptionSelectActions";
import axios from "axios";

const url = "http://localhost:3002";

function* fetchOptionSelectSaga(action) {
  try {
    const isMan = action.payload.isMan;
    const age = action.payload.age;
    const headerParams = {
      Authorization: localStorage.getItem("token"),
    };
    const { data } = yield call([axios, "get"], `${url}/${isMan}/${age}`, {
      headers: headerParams,
    });
    data.isMan = isMan;
    data.age = age;
    yield put(actions.selectSuccess(data));
  } catch (error) {
    yield put(actions.selectFail(error.response));
  }
}

export default function* watchOptionSelect() {
  yield takeEvery(actions.SELECT, fetchOptionSelectSaga);
}
