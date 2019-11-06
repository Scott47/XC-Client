import React from "react";
import { Table } from 'reactstrap'
// import { Link } from "react-router-dom";


const TableHeading = props => {
  return (
    <>
    <div
        className='table-heading'
      >
        <Table>
          <thead>
            <tr>
              <th>Runner</th>
              <th>Date of Meet</th>
              <th>Team Name</th>
              <th>Race Distance</th>
              <th>Runner Time</th>
              <th>Runner Pace</th>
              <th>Place</th>
            </tr>
          </thead>
        </Table>
        </div>

    </>
  );
};

export default TableHeading;