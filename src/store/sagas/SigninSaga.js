import { call, put, takeEvery } from "redux-saga/effects";
import * as actions from "../actions/SigninActions";
import axios from "axios";

const url = "http://localhost:3002";

function* fetchSigninSaga(action) {
  try {
    const json = {
      tokenId: action.payload,
    };
    const { data } = yield call([axios, "post"], `${url}/api/signin`, json);
    localStorage.setItem("token", data.token);
    yield put(actions.signinSuccess(data));
  } catch (error) {
    yield put(actions.signinFail(error.response));
  }
}

export default function* watchSignin() {
  yield takeEvery(actions.SIGNIN, fetchSigninSaga);
}
