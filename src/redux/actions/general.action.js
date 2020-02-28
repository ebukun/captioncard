import * as actionTypes from "../constants/actionTypes";
import axios from "axios";
import { routes } from "../../api/url";
import { GET_ALL_CAPTIONS_TAGS_PENDING } from "./../constants/actionTypes";
import caption from "../reducers/caption";

export const getMultipleTags = () => {
  return {
    type: actionTypes.CAPTION_MULTIPLE_TAGS_PENDING
  };
};

export const getMultipleTagsSuccess = captions => {
  return {
    type: actionTypes.CAPTION_MULTIPLE_TAGS_SUCCESS,
    captions
  };
};

export const getMultipleTagsFailed = error => {
  return {
    type: actionTypes.CAPTION_MULTIPLE_TAGS_FAILED,
    error
  };
};

export const getMultipleTag = tag => dispatch => {
  dispatch(getMultipleTags());

  const TagData = {
    tags: [tag]
  };

  axios
    .post(routes.CAPTION_MULTIPLE_TAGS, TagData)
    .then(response => {
      const { captions } = response.data.data;
      dispatch(getMultipleTagsSuccess(captions));
    })
    .catch(error => {
      dispatch(getMultipleTagsFailed(error.message));
    });
};

// export const GetCaptionTagStart = () => {
//   return {
//     type: actionTypes.GET_ALL_CAPTIONS_TAGS_PENDING
//   };
// };

// export const GetCaptionTagSuccess = data => {
//   return {
//     type: actionTypes.GET_ALL_CAPTIONS_TAGS_SUCCESS,
//     payload: data
//   };
// };

// export const GetCaptionTagFailed = error => {
//   return {
//     type: actionTypes.GET_ALL_CAPTIONS_TAGS_FAILED,
//     error
//   };
// };

// export const GetCaptionTag = tag_id => dispatch => {
//   dispatch(GetCaptionTagStart());

//   axios
//     .get(routes.GET_CAPTIONS_TAGS(tag_id))
//     .then(response => {
//       const { data } = response.data;
//       // const tagg = { tag, id };
//       dispatch(GetCaptionTagSuccess(data));
//     })
//     .catch(error => {
//       dispatch(GetCaptionTagFailed(error.message));
//     });
// };
