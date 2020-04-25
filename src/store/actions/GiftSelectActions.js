export const GIFT_SELECT = "GIFT_SELECT";
export const GIFT_SELECT_SUCCESS = "GIFT_SELECT_SUCCESS";
export const GIFT_SELECT_FAIL = "GIFT_SELECT_FAIL";

export function giftSelect(payload) {
  return {
    type: GIFT_SELECT,
    payload,
  };
}

export function giftSelectSuccess(data) {
  return {
    type: GIFT_SELECT_SUCCESS,
    data,
  };
}

export function giftSelectFail(error) {
  return {
    type: GIFT_SELECT_FAIL,
    error,
  };
}
