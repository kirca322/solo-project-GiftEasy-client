import { spawn } from "redux-saga/effects";
import watchSearch from "./SigninSaga";

export default function* rootSaga() {
  yield spawn(watchSearch);
}
