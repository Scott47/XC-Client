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

//   const getRoster = id => {
//     if (isAuthenticated()) {
//       fetch(`http://localhost:8000/teams/${id}`, {
//         method: "GET",
//         headers: {
//           Accept: "application/json",
//           "Content-Type": "application/json",
//           Authorization: `Token ${localStorage.getItem("token")}`
//         }
//       })
//         .then(response => response.json())
//         .then(response => {
//             setRoster(response);
//     })
//   };
// }

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
    getRunners()
    // getRoster()
}, [])


  console.log(runnerList);
  return (
    <>
    {/* {runnerList.team.id === roster
        ? runnerList.runnerteam.map(runnerteam => {
            return (
              <>
                <Link>
                  <p></p>
                </Link>
              </>
            );
          })
        : ""} */}

{
                    runnerList.filter(runner => {
                        return runner.team !== null})
                    .map(runner => {
                        return (
                            <div key={runner.id}
                                runner={runner}>
                                    <a href={`/runners/${runner.id}`}><h5>{runner.first_name}</h5></a>
                            </div>
                        )
                    })
                }

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
