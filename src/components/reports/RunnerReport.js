import React, { useEffect, useState } from "react";
import useSimpleAuth from "../../ui/useSimpleAuth";
import { Link } from "react-router-dom"
import { Button, Table, Col } from 'reactstrap'
import Report from "./Report"
import './Report.css'

//Author: Scott Silver
//Purpose: Display Meets associated with coach/user
//Methods: GET

const RunnerReport = props => {
  const [reports, setReports] = useState({});
  const { isAuthenticated } = useSimpleAuth();

  const getReports = () => {
    if (isAuthenticated()) {
      fetch(`http://localhost:8000/reports`, {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: `Token ${localStorage.getItem("token")}`
        }
      })
        .then(response => response.json())
        .then(setReports);
    }
  };

useEffect(getReports, []);

return (
    <>

      <Col className="report">
        {reports.length > 0 ? (
          reports.map(report => {
            return (
              <Report className="report" to={`/reports/${report.id}`}
                key={report.id}
                report={report}
                getreports={getReports}/>
            );
          })
        ) : (
            <p>
            You have no reports
          </p>
        )}
        <Button ><a href="/addreport">Add Report</a></Button>
      </Col>

    </>
  );
};
export default RunnerReport;
