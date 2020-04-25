import { spawn } from "redux-saga/effects";
import watchSignin from "./SigninSaga";
import watchSubmit from "./SurveySubmitSaga";
import watchOptionSelect from "./OptionSelectSaga";
import watchGiftSelect from "./GiftSelectSaga";

export default function* rootSaga() {
  yield spawn(watchSignin);
  yield spawn(watchSubmit);
  yield spawn(watchOptionSelect);
  yield spawn(watchGiftSelect);
}
