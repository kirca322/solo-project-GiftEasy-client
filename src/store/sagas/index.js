import { spawn } from "redux-saga/effects";
import watchSignin from "./SigninSaga";
import watchSubmit from "./SurveySubmitSaga";

export default function* rootSaga() {
  yield spawn(watchSignin);
  yield spawn(watchSubmit);
}
