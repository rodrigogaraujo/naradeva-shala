import React from "react";
import { Switch, Route } from "react-router-dom";

import Home from "../views/Home";
import AboutUs from "../views/AboutUs";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/about-us" component={AboutUs} />
    </Switch>
  );
};

export default Routes;
