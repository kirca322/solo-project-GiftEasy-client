export const OPTION_SELECT = "OPTION_SELECT";
export const OPTION_SELECT_SUCCESS = "OPTION_SELECT_SUCCESS";
export const OPTION_SELECT_FAIL = "OPTION_SELECT_FAIL";

export function optionSelect(payload) {
  return {
    type: OPTION_SELECT,
    payload,
  };
}

export function optionSelectSuccess(data) {
  return {
    type: OPTION_SELECT_SUCCESS,
    data,
  };
}

export function optionSelectFail(error) {
  return {
    type: OPTION_SELECT_FAIL,
    error,
  };
}
