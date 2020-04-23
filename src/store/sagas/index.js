import { spawn } from "redux-saga/effects";
import watchSignin from "./SigninSaga";
import watchSubmit from "./SurveySubmitSaga";
import watchOptionSelect from "./OptionSelectSaga";

export default function* rootSaga() {
  yield spawn(watchSignin);
  yield spawn(watchSubmit);
  yield spawn(watchOptionSelect);
}
