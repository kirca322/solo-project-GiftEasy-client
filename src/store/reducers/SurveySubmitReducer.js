import * as actions from "../actions/SurveySubmitActions";

const initialState = {};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.SUBMIT:
      return {
        ...state,
        payload: action.payload,
      };
    case actions.SUBMIT_SUCCESS:
      return {
        ...state,
      };
    case actions.SUBMIT_FAIL:
      return {
        ...state,
        error: action.error,
      };
    default:
      return state;
  }
};
