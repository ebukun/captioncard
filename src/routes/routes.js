import React from "react";
import { Route, Switch } from "react-router-dom";
import Dashboard from "./Dashboard";
import AddTags from "../components/app/tags/AddTags";
import Navbar from "./../components/layout/Navbar";
import AddCaption from "./../components/app/caption/AddCaption";
import addCaptionTag from "../components/app/caption/addCaptionTag";

export default () => (
  <div>
    <Navbar />
    <Switch>
      <Route exact path="/" component={Dashboard} />
      <Route exact path="/add-tags" component={AddTags} />
      <Route exact path="/add-caption-tags" component={addCaptionTag} />
      <Route exact path="/add-cap" component={AddCaption} />
    </Switch>
  </div>
);
