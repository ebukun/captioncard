import React from "react";
import SearchInput from "./../components/app/SearchInput";
import TagData from "../components/app/tags/TagData";
import Captions from "../components/app/caption/Captions";

export default function Dashboard() {
  return (
    <React.Fragment>
      <SearchInput />
      <TagData />
      <Captions />
    </React.Fragment>
  );
}
