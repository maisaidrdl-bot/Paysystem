import React from "react";
export default function CDAReports() {
  return (
    <div className="page-container cda-reports">
      <h1 className="page-title">CDA Reports</h1>

      <div className="reports-wrapper">
        <div className="report-box">
          <h2 className="report-heading">CDA Reports</h2>

          <div className="report-links">

            {/* CDA Reports / Scheduled */}
            <div className="report-group">
              <div className="report-group-links">
                <a href="#">CDA Reports / Scheduled</a>
              </div>
            </div>

            {/* CDA Softcopy */}
            <div className="report-group">
              <div className="report-group-links">
                <a href="#">CDA Softcopy</a>
              </div>
            </div>

            {/* CDA Softcopy All */}
            <div className="report-group">
              <div className="report-group-links">
                <a href="#">CDA Softcopy All</a>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

