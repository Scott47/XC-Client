import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useSimpleAuth from "../../ui/useSimpleAuth";

const RunnerDetails = props => {
  const [singleRunner, setRunner] = useState({
    team: {},
    runnermeet: [{ meet: {} }]
  });

  const { isAuthenticated } = useSimpleAuth();

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
      .then(setRunner);
  };

  const deleteRunner = () => {
    if (isAuthenticated()) {
      fetch(`http://localhost:8000/runners/${props.runner.id}`, {
        method: "DELETE",
        headers: {
          Authorization: `Token ${localStorage.getItem("token")}`
        }
      })
        .then(props.getMyRunners)
        .then(props.history.push("/runners"));
    }
  };

  const editInfo = (grade, phone, email, team, id) => {
    fetch(`http://localhost:8000/runners/${id}`, {
      method: "PUT",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Token ${localStorage.getItem("token")}`
      },
      body: JSON.stringify({
        grade: grade,
        phone: phone,
        email: email,
        team: team
      })
    }).then(getSingleRunner)
};

  useEffect(() => {
    getSingleRunner(props.match.params.runnerId);
  }, []);

  return (
    <>
      {singleRunner.first_name !== null ? (
        <section className="runner-details">
          <h3>
            {singleRunner.first_name} {singleRunner.last_name}
          </h3>
          <p>
            <strong>Grade:</strong> {singleRunner.grade}
          </p>
          <p>
            <strong>Phone:</strong> {singleRunner.phone}
          </p>
          <p>
            <strong>Email:</strong> {singleRunner.email}
          </p>
          <p>
            <strong>Address:</strong> {singleRunner.address}
          </p>
          <p>
            <strong>Parent:</strong> {singleRunner.parent}
          </p>
          <Link>
            <p>
              <strong>Team:</strong> {singleRunner.team.team_name}
              &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
              <button onClick={() => {
                    props.history.push(`/editrunner/${singleRunner.id}`);
                  }} className="edit-button">
                <a href={`/editrunner/${singleRunner.id}`}>Edit Info</a>
              </button>
            </p>
          </Link>
          <p>
            <strong>Meets:</strong>
          </p>
          {singleRunner.runnermeet.length > 0
            ? singleRunner.runnermeet.map(runnermeet => {
                return (
                  <>
                    <Link>
                      <p>{runnermeet.meet.name}</p>
                    </Link>
                  </>
                );
              })
            : ""}
          <br />
          <br></br>
          <br></br>
          <button onClick={deleteRunner}>Remove Runner</button>
        </section>
      ) : (
        <div></div>
      )}
    </>
  );
};

export default RunnerDetails;
