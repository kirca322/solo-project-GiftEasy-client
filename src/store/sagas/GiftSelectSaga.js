import { call, put, takeEvery } from "redux-saga/effects";
import * as actions from "../actions/GiftSelectActions";
import axios from "axios";

const url = "http://localhost:3002";

function* fetchGiftSelectSaga(action) {
  try {
    const giftId = action.payload;
    const headerParams = {
      Authorization: localStorage.getItem("token"),
    };
    const { data } = yield call([axios, "get"], `${url}/api/gift/${giftId}`, {
      headers: headerParams,
    });
    yield put(actions.giftSelectSuccess(data));
  } catch (error) {
    yield put(actions.giftSelectFail(error.response));
  }
}

export default function* watchGiftSelect() {
  yield takeEvery(actions.GIFT_SELECT, fetchGiftSelectSaga);
}
