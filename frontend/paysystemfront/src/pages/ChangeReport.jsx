import React from "react";

export default function ChangeReport() {
  return (
    <div className="page-container change-report">
      <h1 className="page-title">Change Report</h1>

      <div className="report-box">
        <table className="change-table">
          <thead>
            <tr>
              <th>col1</th>
              <th>col2</th>
              <th>col3</th>
              <th>col4</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>row1</td>
              <td>row1</td>
              <td>row1</td>
              <td>row1</td>
            </tr>
            <tr>
              <td>row2</td>
              <td>row2</td>
              <td>row2</td>
              <td>row2</td>
            </tr>
            <tr>
              <td>row3</td>
              <td>row3</td>
              <td>row3</td>
              <td>row3</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
