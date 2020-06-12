import React from "react";
import { Route as ReactDOMRoute, Redirect } from "react-router-dom";

import { useAuth } from "../hooks/Auth";

const Route = ({ isPrivate = false, component: Component, ...rest }) => {
  const { token } = useAuth();
  return (
    <ReactDOMRoute
      {...rest}
      render={() => {
        return isPrivate === !!token ? (
          <Component />
        ) : (
          <Redirect to={{ pathname: isPrivate ? "/" : "/dashboard" }} />
        );
      }}
    />
  );
};

export default Route;
