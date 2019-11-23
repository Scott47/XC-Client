import React, { useEffect, useState } from "react";
import { Button } from "reactstrap";
import useSimpleAuth from "../../ui/useSimpleAuth";


const MeetDetails = props => {
  const [oneMeet, setOneMeet] = useState({date:""});
  const { isAuthenticated } = useSimpleAuth();


  const getOneMeet = id => {
    return fetch(`http://localhost:8000/meets/${id}`, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Token ${localStorage.getItem("token")}`
      }
    })
      .then(e => e.json())
      .then(setOneMeet);
  };

  const deleteMeet = () => {
    if (isAuthenticated()) {
      fetch(`http://localhost:8000/meets/${props.match.params.meetId}`, {
        method: "DELETE",
        headers: {
          Authorization: `Token ${localStorage.getItem("token")}`
        }
      }).then(props.history.push("/meets"));
    }
  };

  useEffect(() => {
    getOneMeet(props.match.params.meetId);
  }, [props.match.params.meetId]);

  return (

    <>
      {oneMeet.name !== null ? (
        <section className="meet-details">
          <a href={`${oneMeet.url}`}>
            <h3>{oneMeet.name}</h3>
          </a>

          <div>
            <strong>Date:</strong> {oneMeet.date.slice(0,10)}
          </div>
          <p>
            <strong>Course</strong> {oneMeet.course}
          </p>
          <p>
            <strong>Address:</strong> {oneMeet.address}
          </p>
          <p>
            <strong>Distance:</strong> {oneMeet.distance}
          </p>
          <p>
            <strong>Number of Runners:</strong> {oneMeet.number_of_runners}
          </p>
          <Button onClick={deleteMeet}>Delete</Button>
        </section>

      ) : (
        <div></div>
      )}
    </>
  );
};

export default MeetDetails;
