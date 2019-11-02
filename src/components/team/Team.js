import React from "react";
import { Link } from "react-router-dom";


const Team = props => {
  return (
    <>
      <div
        className={`team-${props.team.id}`}
        style={({ height: "2rem" }, { width: "12rem" })}
      >
          <div>
        <section className="team">
          <Link className="nav-link" to={`/teams/${props.team.id}`}>
            <p>
              <strong>
                {props.team.team_name}
              </strong>
            </p>
          </Link>
        </section>
        </div>
      </div>
    </>
  );
};

export default Team;
