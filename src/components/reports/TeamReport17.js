import React, { useEffect, useState } from "react";
import useSimpleAuth from "../../ui/useSimpleAuth";
import { Button } from 'reactstrap'
import TeamReport from "./TeamReport"
import './Report.css'

//Author: Scott Silver
//Purpose: Display Meets associated with coach/user
//Methods: GET

const RunnerReport = props => {
  const [reports, setReports] = useState({});
  const { isAuthenticated } = useSimpleAuth();

  const getReports = () => {
    if (isAuthenticated()) {
      fetch(`http://localhost:8000/teammeets?meet_year=2017`, {
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
        {reports.length > 0 ?
            <TeamReport className="report"
            reports={reports}
            getreports={getReports}
            />
        : (
            <p>
            You have no reports
            </p>
        )}
        <Button ><a href="/addreport">Add Runner to Meet</a></Button>
    </>
  );
};
export default RunnerReport;