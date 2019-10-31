import { Route } from "react-router-dom";
import React from "react";
import { withRouter, Redirect } from "react-router-dom";
import useSimpleAuth from "../ui/useSimpleAuth";
import Register from "./auth/Register";
import Login from "./auth/Login";
import Runner from "./runner/RunnerList";
import NewRunner from "./runner/NewRunner"

const ApplicationViews = () => {
  const { isAuthenticated } = useSimpleAuth();

  return (
    <React.Fragment>
      {/* <Route
                exact path="/" render={props => {
                    return <HomePage {...props} />
                }}
            /> */}
      <Route
        path="/register"
        render={props => {
          return <Register {...props} />;
        }}
      />
      <Route
        path="/login"
        render={props => {
          return <Login {...props} />;
        }}
      />
      <Route
        exact
        path="/runners"
        render={props => {
          if (isAuthenticated()) return <Runner {...props} />;
          else return <Redirect to="/login" />;
        }}
      />
      <Route
        exact
        path="/addrunner"
        render={props => {
          return <NewRunner {...props} />;
        }}
      />
    </React.Fragment>
  );
};

export default withRouter(ApplicationViews);
