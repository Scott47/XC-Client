import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useSimpleAuth from "../../ui/useSimpleAuth";


//Author: Scott Silver
//Purpose: Display roster of teams
//Methods: GET

const TeamDetail = props => {
  const [roster, setRoster] = useState([]);
  const { isAuthenticated } = useSimpleAuth();

  const getTeam = id => {
    if (isAuthenticated()) {
      fetch(`http://localhost:8000/runners?team=${props.match.params.teamId}`, {
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
    getTeam();
  }, []);

  return (
    <>
      {roster.map(runner => {
        if ((runner.team.team_id = runner.team.team_name)) {
          return (
            <div>
              <Link to={`/runners/${runner.id}`}>
                <p>
                  <strong>
                    {runner.first_name} {runner.last_name}
                  </strong>
                </p>
              </Link>
            </div>
          );

        } else {
          return <div>You have no runners on this team</div>;
        }
      })}
    </>
  );
};

export default TeamDetail;
