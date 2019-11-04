import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useSimpleAuth from "../../ui/useSimpleAuth";

const MeetDetails = props => {
  const [oneMeet, setOneMeet] = useState({});
  const { isAuthenticated } = useSimpleAuth();

  const getOneMeet= id => {
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


  useEffect(() => {
    getOneMeet(props.match.params.meetId);
  }, []);

  return (
    <>
      {oneMeet.name !== null ? (
        <section className="meet-details">
          <h3>
            {oneMeet.name}
          </h3>
          <p>
            <strong>Date:</strong> {oneMeet.date}
          </p>
          <p>
            <strong>Course</strong> {oneMeet.course}
          </p>
          <p>
            <strong>Address:</strong> {oneMeet.address}
          </p>
          <a href={`${oneMeet.url}`} >
            <strong>Link:</strong> {oneMeet.url}
          </a>
          <p>
            <strong>Distance:</strong> {oneMeet.distance}
          </p>
        </section>
      ) : (
        <div></div>
      )}
    </>
  );
};

export default MeetDetails;
