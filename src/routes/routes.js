import React from "react";
import { Switch, Route } from "react-router-dom";

import Dashboard from "../views/Dashboard";
import Home from "../views/Home";
import AboutUs from "../views/AboutUs";
import Pages from "../views/Dashboard/views/Pages";
import Posts from "../views/Dashboard/views/Posts";
import Users from "../views/Dashboard/views/Users";
import SignIn from "../views/SignIn";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/about-us" component={AboutUs} />
      <Route exact path="/dashboard" component={Dashboard} />
      <Route path="/dashboard/pages" component={Pages} />
      <Route path="/dashboard/posts" component={Posts} />
      <Route path="/dashboard/users" component={Users} />
      <Route path="/sign-in" component={SignIn} />
    </Switch>
  );
};

export default Routes;
