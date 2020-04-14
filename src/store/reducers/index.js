import { combineReducers } from "redux";
import { reducer as login } from "./SigninReducer";

const rootReducer = combineReducers({
  login,
});

export default rootReducer;
