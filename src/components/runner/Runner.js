import React from "react";
import { Link } from "react-router-dom";

const Runner = props => {

  return (
    <>
      <div
        className={`card runner-${props.runner.id}`}
        style={{ width: "18rem" }}
      >
        <div className="card-body">
          <section className="runner">
            <Link className="nav-link" to={`/runners/${props.runner.id}`}>
              <p>
                {props.runner.first_name} {props.runner.last_name},{" "}
                {props.runner.grade}
              </p>
            </Link>
          </section>
        </div>
      </div>
    </>
  );
};

export default Runner;
