import React from "react";

export default function AnnualIncrement() {
  return (
    <div className="page-container annual-increment">
      <h1 className="page-title">Annual Increment Data</h1>

      <div className="reports-wrapper">
        <div className="report-box">
          <h2 className="report-heading">Increment Table</h2>

          <table className="increment-table">
            <thead>
              <tr>
                <th>Row 1</th>
                <th>Row 2</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Col 1</td>
                <td>Col 2</td>
              </tr>
              <tr>
                <td>Col 1</td>
                <td>Col 2</td>
              </tr>
              <tr>
                <td>Col 1</td>
                <td>Col 2</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
