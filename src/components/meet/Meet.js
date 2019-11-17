import React from "react";
import { Link } from "react-router-dom";


const Meet = props => {
  return (
    <>
      <div
        className={`meet-${props.meet.id}`}
      >
          <div>
        <section className="meet">
          <Link className="nav-link" to={`/meets/${props.meet.id}`}>
            <p>
              <strong>
                {props.meet.name},    {props.meet.date.slice(0,10)}
              </strong>
            </p>
          </Link>
        </section>
        </div>
      </div>
    </>
  );
};

export default Meet;