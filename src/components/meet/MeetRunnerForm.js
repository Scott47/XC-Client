import React, { useEffect, useState, useRef } from "react";
import useSimpleAuth from "../../ui/useSimpleAuth";
import { Button } from "reactstrap";

//Author: Scott Silver
//Purpose: Display Meets associated with coach/user
//Methods: GET

const MeetRunnerForm = props => {
  const [meets, setMeets] = useState([]);
  const [runners, setRunners] = useState([]);
  const [ selectedRunner, setSelectedRunner ] = useState(props.match.params.runnerId)
  const runner = useRef();
  const meet = useRef();
  const meet_time = useRef();
  const place = useRef();
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
        runner_id: runner.current.value,
        meet_id: meet.current.value,
        meet_time: +meet_time.current.value,
        place: +place.current.value
      })
    })
      .then(response => response.json())
      .then(setRunners);
  };

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

  function handleChange(event) {
    setSelectedRunner(event.target.value)
    console.log(selectedRunner)
  }

  useEffect(() => {
    getMeets();
    getRunners();
  }, []);

// console.log(runners, 'ok1', meets, 'ok2', selectedRunner, 'ok3')
  return (
    <>
      <select ref={meet} name="meet_id">
        {meets.map(meet => {
          return <option value={meet.id}>{meet.name}</option>;
        })}
      </select>

      <select value={selectedRunner} onChange={handleChange} ref={runner} name="runner_id">
        {runners.map(runner => {
          return (
            <option value={runner.id}>
              {runner.first_name} {runner.last_name}
            </option>
          );
        })}
      </select>
      <fieldset>
        <input ref={meet_time} defaultValue={meet_time} type="text" placeholder="MeetTime" />
      </fieldset>
      <fieldset>
        <input ref={place} defaultValue={place} type="text" placeholder="Place" />
      </fieldset>

      <Button
        onClick={() => {
          saveRunnerMeetAssignment();
          props.history.push("/runners");
        }}
      >
        Save
      </Button>
    </>
  );
};

export default MeetRunnerForm;
