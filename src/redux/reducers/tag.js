import * as actionTypes from "../constants/actionTypes";

const initialState = {
  loading: false,
  errorMessage: null,
  tags: [],
  Isloading: null
};

export default function(state = initialState, action) {
  switch (action.type) {
    case actionTypes.GET_ALL_TAGS_PENDING:
      return {
        ...state,
        loading: true
      };
    case actionTypes.GET_ALL_TAGS_SUCCESS:
      return {
        ...state,
        loading: false,
        tags: action.tag
      };
    case actionTypes.GET_ALL_TAGS_FAILED:
      return {
        ...state,
        loading: true,
        errorMessage: action.error
      };

    case actionTypes.ADD_TAGS_PENDING:
      return {
        ...state,
        Isloading: true
      };
    case actionTypes.ADD_TAGS_SUCCESS:
      return {
        ...state,
        Isloading: false,
        tags: [action.tag, ...state.tags]
      };
    case actionTypes.ADD_TAGS_FAILED:
      return {
        ...state,
        Isloading: "Pending",
        errorMessage: action.error
      };
    default:
      return state;
  }
}
