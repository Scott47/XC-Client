import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom'
import useSimpleAuth from "../../ui/useSimpleAuth";
import { Button, Row } from "reactstrap"
import Team from "./Team"
import "./Team.css"

//Author: Scott Silver
//Purpose: Display Teams associated with coach/user
//Methods: GET Teams

const TeamList = props => {
  const [MyTeams, setMyTeams] = useState([]);
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

  useEffect(getMyTeams, []);

  return (
    <>
      <div className="MyTeams-Div">
        {MyTeams.length > 0 ? (
          MyTeams.map(team => {
            return (
              <Team
                key={team.id}
                team={team}
                getMyTeams={getMyTeams}
              />
            );
          })
        ) : (
            <p>
            You have no current runners
          </p>
        )}
       <Row> &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&nbsp;&nbsp;<Button ><p>Add a new team<Link className="card-team" to="/addteam"> here.</Link></p></Button></Row>
      </div>
    </>
  );
};
export default TeamList;
