import { handleActions } from "redux-actions";

const TEST = "TEST";

const initialState = {
  test: true,
};

export const test = () => (dispatch) => {
  return dispatch({
    type: TEST,
  });
};

export default handleActions(
  {
    [TEST]: (state, action) => {
      return {
        ...state,
      };
    },
  },
  initialState
);
