import React, { useEffect, useState } from "react";
import Runner from "./Runner";
import useSimpleAuth from "../../ui/useSimpleAuth";

//Author: Scott Silver
//Purpose: Display Runners associated with coach/user
//Methods: GET Runners

const RunnerList = props => {
  const [myRunners, setMyRunners] = useState([]);
  const { isAuthenticated } = useSimpleAuth();

  const getMyRunners = () => {
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
        .then(setMyRunners);
    }
  };
  useEffect(getMyRunners, []);
  return (
    <>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
      <div className="add-runner">
        Add a runner to roster <strong><a href="/addrunner"> here</a></strong>.
      </div>
      <div className="myRunners-Div">
        {myRunners.length > 0 ? (
          // looping through runners and displaying the information in a card component
          myRunners.map(runner => {
            return (
              <Runner
                key={runner.id}
                runner={runner}
                getMyRunners={getMyRunners}
              />
            );
          })
        ) : (
          <p>You have no current runners</p>
        )}
      </div>
    </>
  );
};
export default RunnerList;
