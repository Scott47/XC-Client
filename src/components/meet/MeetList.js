import React, { useEffect, useState } from "react";
import useSimpleAuth from "../../ui/useSimpleAuth";
import { Link } from "react-router-dom"
import { Button } from 'reactstrap'
import Meet from "./Meet"

//Author: Scott Silver
//Purpose: Display Meets associated with coach/user
//Methods: GET

const MeetList = props => {
  const [meets, setMeets] = useState({});
  const { isAuthenticated } = useSimpleAuth();

  const getMeets = () => {
    if (isAuthenticated()) {
      fetch(`http://localhost:8000/meets`, {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: `Token ${localStorage.getItem("token")}`
        }
      })
        .then(response => response.json())
        .then(setMeets);
    }
  };

useEffect(getMeets, []);

  return (
    <>
      <div className="Meets-Div">
        {meets.length > 0 ? (
          meets.map(meet => {
            return (
              <Meet className="nav-link" to={`/meets/${meet.id}`}
                key={meet.id}
                meet={meet}
                getMeets={getMeets}/>
            );
          })
        ) : (
            <p>
            You have no meets
          </p>
        )}
        <Button ><a href="/addmeet">Add Meet</a></Button>
      </div>
    </>
  );
};
export default MeetList;
