import * as actionTypes from "../constants/actionTypes";

const initialState = {
  loading: false,
  errorMessage: null,
  captions: [],
  Isloading: false,
  errorMessage: null,
  caption: null,
  caption_message: "",
  isSending: null
};

export default function(state = initialState, action) {
  switch (action.type) {
    case actionTypes.GET_ALL_CAPTIONS_PENDING:
      return {
        ...state,
        loading: action.payload
      };
    case actionTypes.GET_ALL_CAPTIONS_SUCCESS:
      return {
        ...state,
        loading: false,
        captions: action.caption
      };
    case actionTypes.GET_ALL_CAPTIONS_FAILED:
      return {
        ...state,
        loading: action.payload,
        errorMessage: action.error
      };

    ///ADD CAPTIONS////
    case actionTypes.ADD_CAPTION_PENDING:
      return {
        ...state,
        Isloading: true
      };
    case actionTypes.ADD_CAPTION_SUCCESS:
      return {
        ...state,
        Isloading: false,
        captions: [action.payload, ...state.captions]
      };
    case actionTypes.GET_ALL_CAPTIONS_FAILED:
      return {
        ...state,
        Isloading: false,
        errorMessage: action.error
      };

    /////////
    case actionTypes.CREATE_CAPTION_TAGS_PENDING:
      return {
        ...state,
        isSending: true
      };
    case actionTypes.CREATE_CAPTION_TAGS_SUCCESS:
      return {
        ...state,
        caption_message: action.message,
        captions: [action.caption, ...state.captions],
        isSending: false
      };
    case actionTypes.CREATE_CAPTION_TAGS_FAILED:
      return {
        ...state,
        errorMessage: action.error,
        isSending: false
      };
    default:
      return state;
  }
}
