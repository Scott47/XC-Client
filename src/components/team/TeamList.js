import React, { useEffect, useState } from "react";
import useSimpleAuth from "../../ui/useSimpleAuth";
import Team from "./Team"

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
  console.log(MyTeams)
  return (
    <>
    <div>
            Teams
          </div>
      <div className="MyTeams-Div">
        {MyTeams.length > 0 ? (
          MyTeams.map(team => {
            return (
              <Team
                key={team.id}
                team={team.team_name}
                getMyTeams={getMyTeams}
              />
            );
          })
        ) : (
            <p>
            You have no current runners
          </p>
        )}
      </div>
    </>
  );
};
export default TeamList;
