/*import React from "react";

export default function PayUpdation() {
  const links = [
    "Credits",
    "Core",
    "Exceptions",
    "Debits",
    "Loans",
    "TempUpdate",
    "Recoveries",
    "Closed Loan",
    "EOL/HPL/CCL",
    "LF Recovery",
  ];

  return (
    <div className="page-container pay-updation">
      <h1 className="page-title">Pay Updation Reports</h1>

      <div className="reports-wrapper">
        <div className="report-box">
          <h2 className="report-heading">Pay Updation Links</h2>

          <div className="report-links">
            {links.map((link, idx) => (
              <a key={idx} href="#" className="report-link">
                {link}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}*/
import React from "react";
import { Link } from "react-router-dom";   // ✅ ADD THIS

export default function PayUpdation() {
  const links = [
    "Credits",
    "Core",
    "Exceptions",
    "Debits",
    "Loans",
    "TempUpdate",
    "Recoveries",
    "Closed Loan",
    "EOL/HPL/CCL",
    "LF Recovery",
  ];

  return (
    <div className="page-container pay-updation">
      <h1 className="page-title">Pay Updation Reports</h1>

      <div className="reports-wrapper">
        <div className="report-box">
          <h2 className="report-heading">Pay Updation Links</h2>

          <div className="report-links">
            {links.map((link, idx) => (
              <Link
                key={idx}
                to={`/updations/pay/${link.toLowerCase().replace(/ /g, "-")}`}
                className="report-link"
              >
                {link}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
