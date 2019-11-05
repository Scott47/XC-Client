import React from "react";
import { Table } from 'reactstrap'
import './Report.css'
// import { Link } from "react-router-dom";


const Report = props => {
  return (
    <>
    <div
        className={`report-${props.report.id}`}
      ></div>
        <Table className='report'>
          <thead>
            <tr className='report'>
              <th>Runner</th>
              <th>Meet</th>
              <th>Date</th>
              {/* <th>Team Name</th> */}
              <th>Race Distance</th>
              <th>Runner Time</th>
              <th>Runner Pace</th>
              <th>Place</th>
            </tr>
          </thead>
          <tbody>
            <tr className='report'>
              <td>{props.report.runner.last_name}, {props.report.runner.first_name}</td>
              <td>{props.report.meet.name}</td>
              <td>{props.report.meet.date}</td>
              {/* <td>{props.report.team_name}</td> */}
              <td>{props.report.meet.distance}</td>
              <td>{props.report.meet_time}</td>
              <td>{props.report.pace} mins/mile</td>
              <td>{props.report.place}</td>
            </tr>
          </tbody>
        </Table>

    </>
  );
};

export default Report;
