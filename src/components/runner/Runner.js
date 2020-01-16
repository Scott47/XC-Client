import React from "react";
import { Link } from "react-router-dom";
import { Container, Card, Button, CardTitle, CardText, Row, Col } from "reactstrap";
import "./Runner.css";

const Runner = props => {
  return (
    <>
      <Row
        className={`card runner runner-${props.runner.id}`}
        style={({ height: "2rem" }, { width: "12rem" })}
      >
        <Card
          body
          inverse
          style={{ backgroundColor: "#777", borderColor: "#111" }}
          outline
          color="primary"
        >
          <Link to={`/runners/${props.runner.id}`}>
            <Button size="lg">
              <CardTitle className="card-runner">
                <strong>
                {props.runner.first_name} {props.runner.last_name}
                </strong>
              </CardTitle>
            </Button>

          </Link>
          <CardText className="card-text">
            Grade: {props.runner.grade},<br></br>Team:{" "}
            {props.runner.team.team_name}
          </CardText>
        </Card>
      </Row>
    </>
  );
};

export default Runner;
