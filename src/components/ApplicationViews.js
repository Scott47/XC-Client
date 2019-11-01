import { Route } from "react-router-dom";
import React, {useState, useEffect} from "react";
import { withRouter, Redirect } from "react-router-dom";
import useSimpleAuth from "../ui/useSimpleAuth";
import Register from "./auth/Register";
import Login from "./auth/Login";
import Runner from "./runner/RunnerList";
import NewRunner from "./runner/NewRunner"
import RunnerDetails from "./runner/RunnerDetail"


const ApplicationViews = () => {
  const { isAuthenticated } = useSimpleAuth();
  const [runners, setRunners] = useState([])

  useEffect(() => {

        fetch(`http://localhost:8000/runners`, {
          method: "GET",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: `Token ${localStorage.getItem("token")}`
          }
        })
          .then(response => response.json())
          .then(setRunners);

  },[])


  return (
    <React.Fragment>
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
      <Route
        exact
        path="/runners/:runnerId(\d+)"
        render={props => {
            let runner = runners.find(runner => runner.id === +props.match.params.runnerId)
          return <RunnerDetails runner={runner} {...props} />;
        }}
      />
    </React.Fragment>
  );
};

export default withRouter(ApplicationViews);
