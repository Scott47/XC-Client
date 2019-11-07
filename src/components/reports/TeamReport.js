import React from "react";
import { Table } from 'reactstrap'
import './Report.css'
// import { Link } from "react-router-dom";


const TeamReport = props => {
  return (
    <>
        <Table className='report'>
            <thead>
            <tr className='report'>
                <th>Meet</th>
                <th>Date</th>
                <th>Distance</th>
                <th>Team</th>
                <th>Total Time</th>
                <th>Total Points</th>

                {/* <th>Place</th> */}
            </tr>
            </thead>
            <tbody>
            {
                props.reports.map(report => {
                    return (
                        <tr className='report'>
                        <td>{report.meet.name}</td>
                        <td>{report.meet.date.slice(0, 10)}</td>
                        <td>{report.meet.distance} mi</td>
                        <td>{report.team.team_name}</td>
                        <td>{report.total_time} mins</td>
                        <td>{report.points}/mile</td>
                        {/* <td>{report.place}th</td> */}
                        </tr>
                    );
                })
            }
            </tbody>
        </Table>

    </>
  );
};

export default TeamReport;
