export const SUBMIT = "SUBMIT";
export const SUBMIT_SUCCESS = "SUBMIT_SUCCESS";
export const SUBMIT_FAIL = "SUBMIT_FAIL";

export function submit(payload) {
  return {
    type: SUBMIT,
    payload,
  };
}

export function submitSuccess(data) {
  return {
    type: SUBMIT_SUCCESS,
    data,
  };
}

export function submitFail(error) {
  return {
    type: SUBMIT_FAIL,
    error,
  };
}
