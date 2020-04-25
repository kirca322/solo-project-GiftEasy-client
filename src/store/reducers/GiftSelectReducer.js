import * as actions from "../actions/GiftSelectActions";

const initialState = {
  url: {},
  bestComment: {},
  userThumbsList: [],
  commentList: [],
};

/*
{
  url: {
    coupang:
    eleven:
    wemap:
    gmarket:
  }
  bestComment: {}
  userThumbsList: [1, 3]
  commentList:[
    {
      commentId:
      userName:
      content:
      createdAt:
      thumb:
    }
  ]
}
*/

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.GIFT_SELECT:
      return {
        ...state,
        payload: action.payload,
      };
    case actions.GIFT_SELECT_SUCCESS:
      return {
        ...state,
        url: action.data.url,
        bestComment: action.data.bestComment,
        userThumbsList: action.data.userThumbsList,
        commentList: action.data.commentList,
      };
    case actions.GIFT_SELECT_FAIL:
      return {
        ...state,
        error: action.error,
      };
    default:
      return state;
  }
};
