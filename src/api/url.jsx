const URL = "https://capcards-api.herokuapp.com/v1.0";

const BASEURL = URL;

export const routes = {
  GET_ALL_TAGS: `${BASEURL}/api/tag/`,
  GET_ALL_CAPTIONS: `${BASEURL}/api/caption/`,
  GET_CAPTIONS_TAGS: id => { return `${BASEURL}/api/caption/withTag?tagId=${id}`;},

  ADD_CAPTION: `${BASEURL}/api/caption/`,
  ADD_TAGS: `${BASEURL}/api/tag/`,
  ADD_TAGS_TO_CAPTIONS: `${BASEURL}/api/caption/add-tag`,
  CREATE_CAPTION_TAGS: `${BASEURL}/api/caption/multi`,
  CAPTION_MULTIPLE_TAGS: `${BASEURL}/api/tag/array`,
};


