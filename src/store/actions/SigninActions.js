export const SIGNIN = "SIGNIN";
export const SIGNIN_SUCCESS = "SIGNIN_SUCCESS";
export const SIGNIN_FAIL = "SIGNIN_FAIL";

export function signin(payload) {
  return {
    type: SIGNIN,
    payload,
  };
}

export function signinSuccess(data) {
  return {
    type: SIGNIN_SUCCESS,
    data,
  };
}

export function signinFail(error) {
  return {
    type: SIGNIN_FAIL,
    error,
  };
}
