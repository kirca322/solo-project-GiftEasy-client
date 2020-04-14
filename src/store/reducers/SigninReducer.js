import * as actions from "../actions/SigninActions";

const initialState = {
  isLogin: false,
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.SIGNIN:
      return {
        ...state,
        payload: action.payload,
      };
    case actions.SIGNIN_SUCCESS:
      return {
        ...state,
        isLogin: true,
      };
    case actions.SIGNIN_FAIL:
      return {
        ...state,
        error: action.error,
      };
    default:
      return state;
  }
};
