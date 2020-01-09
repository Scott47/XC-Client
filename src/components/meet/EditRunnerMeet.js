import React, { useState, useEffect, useRef } from "react";

const EditRunnerMeet = props => {
  const [meetInfo, setMeetInfo] = useState([]);
  const [runnerMeets, setRunnerMeets] = useState([]);
  const meet_time = useRef();
  const place = useRef();

  const getMeets = id => {
    return fetch(`http://localhost:8000/meets`, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Token ${localStorage.getItem("token")}`
      }
    })
      .then(e => e.json())
      .then(setMeetInfo);
  };

  const getRunnerMeets = id => {
    fetch(`http://localhost:8000/runnermeets/${id}`, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Token ${localStorage.getItem("token")}`
      }
    })
      .then(response => response.json())
      .then(setRunnerMeets);
  };

  const updateRunnerMeetInfo = (runnermeets, id) => {
    fetch(`http://localhost:8000/runnermeets/${id}`, {
      method: "PUT",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Token ${localStorage.getItem("token")}`
      },
      body: JSON.stringify({
        meet_time: meet_time.current.value,
        place: place.current.value
      })
    }).then(() => {
      props.history.push(`/assigntomeet/${props.match.params.runnerId}`);
    });
  };

  useEffect(() => {
    getRunnerMeets(props.match.params.runnermeetId);
    getMeets();
  }, [props.match.params.runnerId]);
  console.log(meetInfo, "meetinfo");
  return (
    <>
      {meetInfo.id ? (
        <div key={meetInfo.id} className="card card-edit">
          <h3>
            {meetInfo.first_name} {meetInfo.last_name}
          </h3>
          <ul>
            <li>
              Grade:
              <input
                ref={meet_time}
                type="text"
                name="meet_time"
                defaultValue={meetInfo.meet_time}
                required
              ></input>
            </li>
            <li>
              Phone:
              <input
                ref={place}
                type="text"
                name="place"
                defaultValue={meetInfo.place}
                required
              ></input>
            </li>
            <br />
            <button onClick={() => updateRunnerMeetInfo(meetInfo, meetInfo.id)}>
              Update Runner Information
            </button>
          </ul>
        </div>
      ) : (
        <div></div>
      )}
    </>
  );
};

export default EditRunnerMeet;
