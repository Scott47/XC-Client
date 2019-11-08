import React, { useEffect, useState } from "react";
import useSimpleAuth from "../../ui/useSimpleAuth";
import { Button } from 'reactstrap'
import Meet from "./Meet"

//Author: Scott Silver
//Purpose: Display Meets associated with coach/user
//Methods: GET

const MeetForm = props => {
  const [meets, setMeets] = useState({});
  const [runners, setRunners] = useState({});
  const runner = useRef()
  const meet = useRef()
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

  const saveRunnerMeetAssignment = () => {
    fetch(`http://localhost:8000/runnermeets`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: `Token ${localStorage.getItem("token")}`
        },
        body: JSON.stringify({
            "runner_id": runner.current.value,
            "meet_id": meet.current.value
        })
      })
        .then(response => response.json())
        .then(setRunners);
    }

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
        .then(setRunners);
    }
  };

useEffect(getMeets, []);

  return (
    <>
        <select ref={meet} name="meet_id">
        {
          meets.map(meet => {
            return (
              <option value={meet.id}>{meet.name}</option>
            )
          })
        }
        </select>

        <select ref={runner} name="runner_id">
        {
          runners.map(runner => {
            return (
              <option value={runner.id}>{runner.first_name} {runner.last_name}</option>
            )
          })
        }
        </select>

          <Button onClick={saveRunnerMeetAssignment}>Save</Button>
    </>
  );
};
export default MeetForm;
