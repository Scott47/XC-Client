import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useSimpleAuth from "../../ui/useSimpleAuth"

const RunnerDetails = props => {
  const [singleRunner, setRunner] = useState([]);
  const { isAuthenticated } = useSimpleAuth()

  const getSingleRunner = (id) => {
    return fetch(`https://localhost:8000/runners/${id}`, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Token ${localStorage.getItem("token")}`
      }
    }).then(e => e.json())
      .then(setRunner)
  };

  const deleteRunner = () => {
    if (isAuthenticated()) {
      fetch(`http://localhost:8000/runners/${props.runner.id}`, {
        method: "DELETE",
        headers: {
          Authorization: `Token ${localStorage.getItem("token")}`
        }
      }).then(props.getMyRunners);
    }
  };

  useEffect(() => {
  }, []);

  return (
    <>
      {
        <section className="runner-details">
            console.log(props.runner)
          <h3>
            {props.runner.first_name} {props.runner.last_name}
          </h3>
          <p>{props.runner.grade}</p>
          <p>{props.runner.phone}</p>
          <p>{props.runner.email}</p>
          <p>{props.runner.address}</p>
          <p>{props.runner.parent}</p>
          <Link>
            <p>{props.runner.team}</p>
          </Link>
          <br />
          <button onClick={deleteRunner}>Remove Runner from Roster</button>
        </section>
      }
    </>
  );
};

export default RunnerDetails;
