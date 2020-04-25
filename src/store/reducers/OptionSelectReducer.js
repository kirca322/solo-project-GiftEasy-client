import * as actions from "../actions/OptionSelectActions";

const initialState = {
  giftList: [],
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.OPTION_SELECT:
      return {
        ...state,
        payload: action.payload,
      };
    case actions.OPTION_SELECT_SUCCESS:
      return {
        ...state,
        giftList: action.data.giftList,
      };
    case actions.OPTION_SELECT_FAIL:
      return {
        ...state,
        error: action.error,
      };
    default:
      return state;
  }
};
