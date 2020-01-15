import React from "react";
import {
  Container,
  Card,
  CardLink,
  Button,
  CardFooter,
  CardHeader,
  CardBody,
  CardTitle,
  CardText,
  Row,
  Col
} from "reactstrap";
import { Link } from "react-router-dom";
import "./Team.css";

const Team = props => {
  return (
    <>
      <Container>
        <Row>
          <Col>
            <Card>
              <CardBody className="text-left card-body">
                <CardHeader className="card-team">
                  <Link className="card-team" to={`/teams/${props.team.id}`}>
                    <CardLink>
                      <strong>{props.team.team_name}</strong>
                    </CardLink>
                  </Link>
                  <CardText text-size="sm" className="text-muted text-right">
                  Number of Runners: <Link className="card-team" to={`/teams/${props.team.id}`}>{props.team.runnerteam.length}</Link>
                  </CardText>
                </CardHeader>
                {/* <CardFooter text-size="sm" className="text-muted text-right">
                  Number of Runners: <Link className="card-team" to={`/teams/${props.team.id}`}>{props.team.runnerteam.length}</Link>
                </CardFooter> */}
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Team;
