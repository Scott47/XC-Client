import { Route } from "react-router-dom";
import React, { useState } from "react";
import { withRouter, Redirect } from "react-router-dom";
import useSimpleAuth from "../ui/useSimpleAuth";
import Register from "./auth/Register";
import Login from "./auth/Login";
import Home from "./Home";
import Runner from "./runner/RunnerList";
import NewRunner from "./runner/NewRunner";
import RunnerDetails from "./runner/RunnerDetail";
import EditRunner from "./runner/EditRunner";
import TeamList from "./team/TeamList";
import TeamDetails from "./team/TeamDetails";
import MeetList from "./meet/MeetList";
import MeetDetails from "./meet/MeetDetail";
import AddMeet from "./meet/AddMeet"
import MeetRunnerForm from "./meet/MeetRunnerForm"
import ReportLinks from "./reports/ReportLinks"
import RunnerReport from "./reports/RunnerReport"
import RunnerReport18 from "./reports/RunnerReport18"
import RunnerReport17 from "./reports/RunnerReport17"
import TeamReport19 from "./reports/TeamReport19"
import TeamReport18 from "./reports/TeamReport18"
import TeamReport17 from "./reports/TeamReport17"
import NavBar from "./nav/NavBar"

const ApplicationViews = () => {
  const [ report ] = useState({})
  const [ runner ] = useState({})
  const [ myTeams, setMyTeams] = useState([])
  const { isAuthenticated } = useSimpleAuth();

  const getMyTeams = () => {
    if (isAuthenticated()) {
      fetch(`http://localhost:8000/teams`, {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: `Token ${localStorage.getItem("token")}`
        }
      })
        .then(response => response.json())
        .then(setMyTeams);
    }
  };

  return (
    <React.Fragment>
      <Route render={props => <NavBar {...props} />} />
      <Route
        exact
        path="/"
        render={props => {
          return <Home {...props} />;
        }}
      />
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
        path="/teams"
        render={props => {
          if (isAuthenticated()) return <TeamList {...props} />;
          else return <Redirect to="/login" />;
        }}
      />
      <Route
        exact
        path="/teams/:teamId(\d+)"
        render={props => {
          if (isAuthenticated()) return <TeamDetails {...props} />;
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
          return <RunnerDetails {...props} />;
        }}
      />
      <Route
        path="/editrunner/:runnerId(\d+)"
        render={props => {
          return (
            <>
              <EditRunner {...props} />
            </>
          );
        }}
      />
      <Route
        exact
        path="/meets"
        render={props => {
          if (isAuthenticated()) return <MeetList {...props} />;
          else return <Redirect to="/login" />;
        }}
      />
      <Route
        exact
        path="/meets/:meetId(\d+)"
        render={props => {
          return <MeetDetails {...props} />;
        }}
      />
      <Route
        exact
        path="/addmeet"
        render={props => {
          return <AddMeet getMyTeams={getMyTeams} myTeams={myTeams} {...props} />;
        }}
      />
      <Route
        exact
        path="/assigntomeet/:runnerId(\d+)"
        render={props => {
          if (isAuthenticated()) return <MeetRunnerForm runner={runner} {...props} />;
          else return <Redirect to="/login" />;
        }}
      />
      <Route
        exact
        path="/reports"
        render={props => {
          if (isAuthenticated()) return <ReportLinks report={report} {...props} />;
          else return <Redirect to="/login" />;
        }}
      />
      <Route
        exact
        path="/runnerreports2017"
        render={props => {
          return <RunnerReport17 report={report} {...props} />
        }}
      />
      <Route
        exact
        path="/runnerreports2018"
        render={props => {
          return <RunnerReport18 report={report} {...props} />
        }}
      />
      <Route
        exact
        path="/runnerreports2019"
        render={props => {
          return <RunnerReport report={report} {...props} />
        }}
      />
      <Route
        exact
        path="/teamreports2017"
        render={props => {
          return <TeamReport17 report={report} {...props} />
        }}
      />
      <Route
        exact
        path="/teamreports2018"
        render={props => {
          return <TeamReport18 report={report} {...props} />
        }}
      />
      <Route
        exact
        path="/teamreports2019"
        render={props => {
          return <TeamReport19 report={report} {...props} />
        }}
      />
    </React.Fragment>
  );
};

export default withRouter(ApplicationViews);
