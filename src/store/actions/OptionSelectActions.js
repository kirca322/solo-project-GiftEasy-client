export const SELECT = "SELECT";
export const SELECT_SUCCESS = "SELECT_SUCCESS";
export const SELECT_FAIL = "SELECT_FAIL";

export function select(payload) {
  return {
    type: SELECT,
    payload,
  };
}

export function selectSuccess(data) {
  return {
    type: SELECT_SUCCESS,
    data,
  };
}

export function selectFail(error) {
  return {
    type: SELECT_FAIL,
    error,
  };
}
