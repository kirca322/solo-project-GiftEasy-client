import { combineReducers } from "redux";
import { reducer as login } from "./SigninReducer";
import { reducer as submit } from "./SurveySubmitReducer";
import { reducer as optionSelect } from "./OptionSelectReducer";
import { reducer as giftSelect } from "./GiftSelectReducer";

const rootReducer = combineReducers({
  login,
  submit,
  optionSelect,
  giftSelect,
});

export default rootReducer;
