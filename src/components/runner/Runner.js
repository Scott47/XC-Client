import React from "react";
import { Link } from "react-router-dom";
import "./Runner.css"

const Runner = props => {
  return (
    <>
      <div
        className={`card runner runner-${props.runner.id}`}
        style={({ height: "2rem" }, { width: "12rem" })}
      >
          <div className="card-body">
        <section className="runner">
          <Link className="nav-link" to={`/runners/${props.runner.id}`}>
            <p>
              <strong>
                {props.runner.first_name} {props.runner.last_name}
              </strong>
            </p>
          </Link>
          <p>
            Grade: {props.runner.grade},<br></br>Team:{" "}
            {props.runner.team.team_name}
          </p>
        </section>
        </div>
      </div>
    </>
  );
};

export default Runner;
