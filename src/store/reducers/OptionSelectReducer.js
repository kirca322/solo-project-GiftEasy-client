import * as actions from "../actions/OptionSelectActions";

const initialState = {
  isMan: true,
  age: "10",
  giftList: [],
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.SELECT:
      return {
        ...state,
        payload: action.payload,
      };
    case actions.SELECT_SUCCESS:
      return {
        ...state,
        isMan: action.data.isMan === "man" ? true : false,
        age: action.data.age,
        giftList: action.data.giftList,
      };
    case actions.SELECT_FAIL:
      return {
        ...state,
        error: action.error,
      };
    default:
      return state;
  }
};
