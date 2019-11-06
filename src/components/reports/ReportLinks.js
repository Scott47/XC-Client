import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "reactstrap";

const ReportLinks = props => {
  return (
    <>
    <div
        className={`report-${props.report.id}`}
      ></div>
      <Container>
        <br></br>
        <br></br>
        <Row>
          <Col>
            <h3>Runner</h3>
          </Col>
          <Col>
            <Link>2017</Link>
          </Col>
          <Col>
            <Link>2018</Link>
          </Col>
          <Col>
            <Link>2019</Link>
          </Col>
        </Row>
        <br></br>
        <br></br>
        <Row>
          <Col>
            <h3>Team</h3>
          </Col>
          <Col>
            <Link>2017</Link>
          </Col>
          <Col>
            <Link>2018</Link>
          </Col>
          <Col>
            <Link>2019</Link>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default ReportLinks;
