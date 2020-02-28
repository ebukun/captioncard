import * as actionTypes from "../constants/actionTypes";
import axios from "axios";
import { routes } from "../../api/url";

export const getTag = () => {
  return {
    type: actionTypes.GET_ALL_TAGS_PENDING
  };
};

export const getTagSuccess = tag => {
  return {
    type: actionTypes.GET_ALL_TAGS_SUCCESS,
    tag: tag
  };
};

export const getTagFailed = error => {
  return {
    type: actionTypes.GET_ALL_TAGS_FAILED,
    error
  };
};

export const tag = () => dispatch => {
  dispatch(getTag());

  axios
    .get(routes.GET_ALL_TAGS)
    .then(response => {
      const { tags } = response.data.data;
      dispatch(getTagSuccess(tags));
    })
    .catch(error => {
      dispatch(getTagFailed(error));
    });
};



export const AddTags = () => {
  return {
    type: actionTypes.ADD_TAGS_PENDING
  };
};

export const AddTagSuccess = data => {
  return {
    type: actionTypes.ADD_TAGS_SUCCESS,
    tag: data
  };
};

export const AddTagFailed = error => {
  return {
    type: actionTypes.ADD_TAGS_FAILED,
    error
  };
};

export const Addtag = tag => dispatch => {
  dispatch(AddTags());

  const TagData = {
    tag: tag
  };

  axios
    .post(routes.ADD_TAGS, TagData)
    .then(response => {
      const { tag } = response.data.data;
      // const tagg = { tag, id };
      dispatch(AddTagSuccess(tag));
    })
    .catch(error => {
      dispatch(AddTagFailed(error.message));
    });
};






