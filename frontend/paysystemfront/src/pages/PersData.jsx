import React from "react";

export default function PersData() {
  return (
    <div className="page-container pers-data">
      <h1 className="page-title">Personal Data</h1>

      {/* Single data/input box */}
      <div className="data-box">
        <label htmlFor="personal-info">Enter Info:</label>
        <input type="text" id="personal-info" placeholder="Type here..." />
      </div>

      {/* Small Table */}
      <div className="table-box">
        <table>
          <thead>
            <tr>
              <th>Row1</th>
              <th>Row2</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Col1</td>
              <td>Col2</td>
            </tr>
            <tr>
              <td>Col1</td>
              <td>Col2</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
