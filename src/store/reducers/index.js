import { combineReducers } from "redux";
import { reducer as login } from "./SigninReducer";
import { reducer as submit } from "./SurveySubmitReducer";
import { reducer as select } from "./OptionSelectReducer";

const rootReducer = combineReducers({
  login,
  submit,
  select,
});

export default rootReducer;
