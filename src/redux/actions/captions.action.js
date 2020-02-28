import * as actionTypes from "../constants/actionTypes";
import axios from "axios";
import { routes } from "../../api/url";

export const getCaption = () => {
  return {
    type: actionTypes.GET_ALL_CAPTIONS_PENDING,
    payload: true
  };
};

export const getCaptionSuccess = caption => {
  return {
    type: actionTypes.GET_ALL_CAPTIONS_SUCCESS,
    caption: caption
  };
};

export const getCaptionFailed = error => {
  return {
    type: actionTypes.GET_ALL_CAPTIONS_FAILED,
    error,
    payload: true
  };
};

export const caption = () => dispatch => {
  dispatch(getCaption());

  axios
    .get(routes.GET_ALL_CAPTIONS)
    .then(response => {
      const { captions } = response.data.data;
      dispatch(getCaptionSuccess(captions));
    })
    .catch(error => {
      dispatch(getCaptionFailed(error));
    });
};

export const AddCaptions = () => {
  return {
    type: actionTypes.ADD_CAPTION_PENDING
  };
};

export const AddCaptionSuccess = data => {
  return {
    type: actionTypes.ADD_CAPTION_SUCCESS,
    payload: data
  };
};

export const AddCaptionFailed = error => {
  return {
    type: actionTypes.ADD_CAPTION_FAILED,
    error
  };
};

export const addCaption = caption => dispatch => {
  dispatch(AddCaptions());

  const captionData = {
    caption: caption
  };

  axios
    .post(routes.ADD_CAPTION, captionData)
    .then(response => {
      const { caption, id } = response.data.data;
      const cap = { id, caption };
      dispatch(AddCaptionSuccess(cap));
    })
    .catch(error => {
      dispatch(AddCaptionFailed(error));
    });
};

export const CreateCaptionWithTags = () => {
  return {
    type: actionTypes.CREATE_CAPTION_TAGS_PENDING
  };
};

export const CreateCaptionWithTagSuccess = (data, caption, id) => {
  return {
    type: actionTypes.CREATE_CAPTION_TAGS_SUCCESS,
    message: data,
    caption: {
      caption,
      id
    }
  };
};

export const CreateCaptionWithTagFailed = error => {
  return {
    type: actionTypes.CREATE_CAPTION_TAGS_FAILED,
    error
  };
};

export const createCaptionWithTags = (caption, tag) => dispatch => {
  dispatch(CreateCaptionWithTags());

  const captionData = {
    caption: caption,
    tags: [tag]
  };

  axios
    .post(routes.CREATE_CAPTION_TAGS, captionData)
    .then(response => {
      const { message, createdCaption } = response.data.data;
      const { caption, id } = createdCaption;
      dispatch(CreateCaptionWithTagSuccess(message, caption, id));
    })
    .catch(error => {
      dispatch(CreateCaptionWithTagFailed(error.message));
    });
};
