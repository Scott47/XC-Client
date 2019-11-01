import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useSimpleAuth from "../../ui/useSimpleAuth"

const RunnerDetails = props => {
  const [singleRunner, setRunner] = useState([]);
  const { isAuthenticated } = useSimpleAuth()

  const getSingleRunner = (id) => {
      console.log(props.match.params.runnerId)
    return fetch(`http://localhost:8000/runners/${id}`, {
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
      getSingleRunner(props.match.params.runnerId)}, []
      );


  return (
    <>
      {singleRunner.first_name !== null ? (
        <section className="runner-details">
            {/* {console.log(props.runner)} */}
          <h3>
            {singleRunner.first_name} {singleRunner.last_name}
          </h3>
          <p><strong>Grade:</strong> {singleRunner.grade}</p>
          <p><strong>Phone:</strong> {singleRunner.phone}</p>
          <p><strong>Email:</strong> {singleRunner.email}</p>
          <p><strong>Address:</strong> {singleRunner.address}</p>
          <p><strong>Parent:</strong> {singleRunner.parent}</p>
          <Link>
            <p><strong>Team:</strong> {singleRunner.team}</p>
          </Link>
          <br />
          <button onClick={deleteRunner}>Remove Runner from Roster</button>
        </section>
      ):(
          <div></div>
      )
      }
    </>
  );
};

export default RunnerDetails;
