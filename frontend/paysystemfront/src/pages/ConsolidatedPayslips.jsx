import React from "react";

export default function ConsolidatedPayslips() {
  return (
    <div className="page-container consolidated-payslips">
      <h1 className="page-title">Consolidated Payslips</h1>

      <div className="reports-wrapper">
        <div className="report-box">
          <h2 className="report-heading">Upload Payslips</h2>

          {/* Text Box */}
          <input 
            type="text" 
            placeholder="Enter description..." 
            className="text-box"
          />

          {/* File Uploads */}
          <div className="file-uploads">
            <input type="file" />
            <input type="file" />
            <input type="file" />
          </div>

          {/* Links */}
          <div className="report-links">
            <a href="#">View Payslips</a>
            <a href="#">Download All</a>
          </div>
        </div>
      </div>
    </div>
  );
}
