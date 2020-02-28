import { combineReducers } from "redux";
import caption from "./caption";
import tag from "./tag";
import general from "./general";

export default combineReducers({
  caption: caption,
  tag: tag,
  getCaption: general
});
