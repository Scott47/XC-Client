import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Container, Button, Col, Row} from 'reactstrap'
import useSimpleAuth from "../../ui/useSimpleAuth";

const RunnerDetails = props => {
  const [singleRunner, setRunner] = useState({
    team: {},
    runnermeet: [{ meet: {} }]
  });

  const { isAuthenticated } = useSimpleAuth();

  const getSingleRunner = id => {
    return fetch(`http://localhost:8000/runners/${id}`, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Token ${localStorage.getItem("token")}`
      }
    })
      .then(e => e.json())
      .then(setRunner);
  };


  const deleteRunner = () => {
    if (isAuthenticated()) {
      fetch(`http://localhost:8000/runners/${props.match.params.runnerId}`, {
        method: "DELETE",
        headers: {
          Authorization: `Token ${localStorage.getItem("token")}`
        }
      })
        .then(props.getMyRunners)
        .then(props.history.push("/runners"));
    }
  };


  useEffect(() => {
    getSingleRunner(props.match.params.runnerId);
  }, [props.match.params.runnerId]);

  return (
    <>
      {singleRunner.first_name !== null ? (
        <Container size="sm" className="runner-details">
          <Row xs='2'>
          <Col >
          <h3>
            {singleRunner.first_name} {singleRunner.last_name}
          </h3>
          </Col>
          </Row>
          <Row>
          <Col>
            <strong>Grade:</strong> {singleRunner.grade}
          </Col>
          </Row>
          <Row>
          <Col>
            <strong>Phone:</strong> {singleRunner.phone}
          </Col>
          </Row>
          <Row>
          <Col>
            <strong>Email:</strong> {singleRunner.email}
          </Col>
          </Row>
          <Row>
          <Col>
            <strong>Address:</strong> {singleRunner.address}
          </Col>
          </Row>
          <Row>
          <Col>
            <strong>Parent:</strong> {singleRunner.parent}
            &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
              <Button onClick={() => {
                    props.history.push(`/editrunner/${singleRunner.id}`);
                  }} className="edit-button">
                <a href={`/editrunner/${singleRunner.id}`}>Edit Info</a>
              </Button>
          </Col>
          </Row>
<Row>
            <Col>
              <strong>Team:</strong><Link className="nav-link" to={`/teams/${singleRunner.team.id}`}>&emsp;&emsp;&emsp;&emsp;{singleRunner.team.team_name}
              </Link>

            </Col>
            </Row>
            <Row>
          <Col>
            <strong>Meets:</strong>
          </Col>
          </Row>
          {singleRunner.runnermeet.length > 0
            ? singleRunner.runnermeet.map(runnermeet => {
                return (
                  <>
                    <Link to={`/meets/${runnermeet.meet.id}`}>
                      <p>&emsp;&emsp;&emsp;&emsp;&emsp;{runnermeet.meet.name}</p>
                    </Link>
                  </>
                );
              })
            : ""}

            <Link to={`/assigntomeet/${props.match.params.runnerId}`}>
          <Button >Add Runner to meet</Button>
          </Link>

            &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
          <Button onClick={deleteRunner}>Remove Runner</Button>
          {/* <Button onClick={()=>{deleteRunner()}}>Remove Runner</Button> */}
          <br></br>

        </Container>
      ) : (
        <div></div>
      )}
    </>
  );
};

export default RunnerDetails;
