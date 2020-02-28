import * as actionTypes from "../constants/actionTypes";

const initialState = {
  isFetching: false,
  errorMessage: null,
  captions: [],
  captags: [],
  loading: null
};

export default function(state = initialState, action) {
  switch (action.type) {
    case actionTypes.CAPTION_MULTIPLE_TAGS_PENDING:
      return {
        ...state,
        isFetching: true
      };
    case actionTypes.CAPTION_MULTIPLE_TAGS_SUCCESS:
      return {
        ...state,
        isFetching: false,
        captions: action.captions
      };
    case actionTypes.CAPTION_MULTIPLE_TAGS_FAILED:
      return {
        ...state,
        isFetching: true,
        errorMessage: action.error
      };
    case actionTypes.CAPTION_MULTIPLE_TAGS_CLEAR:
      return {
        ...state,
        captions: []
      };

    // case actionTypes.GET_ALL_CAPTIONS_TAGS_PENDING:
    //   return {
    //     ...state,
    //     loading: true
    //   };
    // case actionTypes.GET_ALL_CAPTIONS_TAGS_SUCCESS:
    //   return {
    //     ...state,
    //     loading: false,
    //     captags: action.payload.captions
    //   };
    // case actionTypes.GET_ALL_CAPTIONS_TAGS_FAILED:
    //   return {
    //     ...state,
    //     loading: true,
    //     errorMessage: action.error
    //   };
    // case actionTypes.GET_ALL_CAPTIONS_TAGS_CLEAR:
    //   return {
    //     ...state,
    //     captions: []
    //   };
    default:
      return state;
  }
}
