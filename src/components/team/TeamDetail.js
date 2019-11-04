import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useSimpleAuth from "../../ui/useSimpleAuth";

//Author: Scott Silver
//Purpose: Display roster of teams
//Methods: GET

const TeamDetail = props => {
  const [roster, setRoster] = useState({ runnerteam: [{ first_name: "" }] });
  const { isAuthenticated } = useSimpleAuth();

  const getTeam = id => {
    if (isAuthenticated()) {
      fetch(`http://localhost:8000/teams/${id}`, {
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
        });
    }
  };

  useEffect(() => {
    getTeam(props.match.params.teamId);
  }, []);

  return (
    <>
      {roster.runnerteam.map(runner => {
        return (
          <section>
            <div key={runner.id} runner={runner}>
              <Link className="nav-link" to={`/runners/${runner.id}`}>
                <p>
                  <strong>
                    {runner.first_name} {runner.last_name}
                  </strong>
                </p>
              </Link>
            </div>
          </section>
        );
      })}
    </>
  );
};

export default TeamDetail;
