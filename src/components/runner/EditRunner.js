import React, { useState, useEffect, useRef } from "react";
import "./Runner.css";

const EditRunner = props => {
  const [runnerInfo, setRunnerInfo] = useState({});
  const [runnerTeams, setRunnerTeams] = useState([]);
  const grade = useRef();
  const phone = useRef();
  const email = useRef();
  const team = useRef();
  const address = useRef();

  const getSingleRunner = id => {
    return fetch(`http://localhost:8000/runners/${id}`, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Token ${localStorage.getItem("token")}`
      }
    })
      .then(e => e.json())
      .then(setRunnerInfo);
  };

  const getRunnerTeams = () => {
    fetch(`http://localhost:8000/teams`, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Token ${localStorage.getItem("token")}`
      }
    })
      .then(response => response.json())
      .then(setRunnerTeams);
  };

  const updateRunnerInfo = (runner, id) => {
    fetch(`http://localhost:8000/runners/${id}`, {
      method: "PUT",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Token ${localStorage.getItem("token")}`
      },
      body: JSON.stringify({
        grade: grade.current.value,
        phone: phone.current.value,
        address: address.current.value,
        email: email.current.value,
        team: +team.current.value
      })
    }).then(() => {
      props.history.push(`/runners/${props.match.params.runnerId}`);
    });
  };

  useEffect(() => {
    getSingleRunner(props.match.params.runnerId);
    getRunnerTeams();
  }, []);

  console.log(runnerInfo.team);
  return (
    <>
      {runnerInfo.id ? (
        <div key={runnerInfo.id} className="card card-edit">
          <h3>
            {runnerInfo.first_name} {runnerInfo.last_name}
          </h3>
          <ul>
            <li>
              Grade:
              <input
                ref={grade}
                type="text"
                name="grade"
                defaultValue={runnerInfo.grade}
                required
              ></input>
            </li>
            <li>
              Phone:
              <input
                ref={phone}
                type="text"
                name="phone"
                defaultValue={runnerInfo.phone}
                required
              ></input>
            </li>
            <li>
              Address:
              <input
                ref={address}
                type="text"
                name="phone"
                defaultValue={runnerInfo.address}
                required
              ></input>
            </li>
            <li>
              Email:
              <input
                ref={email}
                type="text"
                name="email"
                defaultValue={runnerInfo.email}
                required
              ></input>
            </li>
            <li>
              Team:
              <select type="text" name="team" ref={team}>
                {runnerTeams.map(team => {
                  return (
                    <option key={team.id} id={team.id} value={team.id}>
                      {team.team_name}
                    </option>
                  );
                })}
              </select>
            </li>

            <br />
            <button onClick={() => updateRunnerInfo(runnerInfo, runnerInfo.id)}>
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

export default EditRunner;
