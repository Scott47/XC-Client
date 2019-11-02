import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useSimpleAuth from "../../ui/useSimpleAuth";
import Team from "./Team";

//Author: Scott Silver
//Purpose: Display roster of teams
//Methods: GET

const TeamDetail = props => {
  const [roster, setRoster] = useState([]);
  const [runnerList, setRunnerList] = useState([]);
  const { isAuthenticated } = useSimpleAuth();

  const getRoster = id => {
    if (isAuthenticated()) {
      fetch(`http://localhost:8000/teams/${id}/?includerunners=true`, {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: `Token ${localStorage.getItem("token")}`
        }
      })
        .then(response => response.json())
        .then(response => {
            setRoster(response);
    })
  };
}

  const getRunners = () => {
    if (isAuthenticated()) {
      fetch(`http://localhost:8000/runners`, {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: `Token ${localStorage.getItem("token")}`
        }
      })
        .then(response => response.json())
        .then(response => {
            setRunnerList(response);
    })
  };
}

  useEffect(() => {
    getRoster()
    getRunners()
}, [])

console.log(runnerList)
  return (
    <>{runnerList.length > 0
        ? runnerList.runnerteam.map(runnerteam => {
            return (
              <>
                <Link>
                  <p>{runnerteam}</p>
                </Link>
              </>
            );
          })
        : ""}

      <h1></h1>
      <p>
        <strong></strong>
      </p>
      <p>

      </p>

    </>
  );
};

export default TeamDetail
