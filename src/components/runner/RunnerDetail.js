import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Button } from 'reactstrap'
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


  useEffect(() => {
    getSingleRunner(props.match.params.runnerId);
  }, [props.match.params.runnerId]);

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
            &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
              <Button onClick={() => {
                    props.history.push(`/editrunner/${singleRunner.id}`);
                  }} className="edit-button">
                <a href={`/editrunner/${singleRunner.id}`}>Edit Info</a>
              </Button>
          </p>
          <Link className="nav-link" to={`/teams/${singleRunner.team.id}`}>
            <p>
              <strong>Team:</strong> {singleRunner.team.team_name}
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
            &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
          <Button onClick={deleteRunner}>Remove Runner</Button>
          <br></br>
        </section>
      ) : (
        <div></div>
      )}
    </>
  );
};

export default RunnerDetails;
