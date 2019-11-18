import React from "react";
import { Table } from 'reactstrap'
import './Report.css'



const Report = props => {
  return (
    <>
        <Table className='report'>
            <thead>
            <tr className='report'>
                <th>Runner</th>
                <th>Meet</th>
                <th>Date</th>
                <th>Team</th>
                <th>Distance</th>
                <th>Runner Time</th>
                <th>Runner Pace</th>
                <th>Place</th>
            </tr>
            </thead>
            <tbody>
            {
                props.reports.map(report => {

                    return (
                        <tr className='report'>
                        <td>{report.runner.last_name}, {report.runner.first_name}</td>
                        <td>{report.meet.name}</td>
                        <td>{report.meet.date.slice(5, 10)}</td>
                        <td>{report.runner.team.team_name}</td>
                        <td>{report.meet.distance} mi</td>
                        <td>{report.meet_time} mins</td>
                        <td>{report.pace}/mile</td>
                        <td>{report.place}</td>
                        </tr>
                    );
                })
            }
            </tbody>
        </Table>

    </>
  );
};

export default Report;
