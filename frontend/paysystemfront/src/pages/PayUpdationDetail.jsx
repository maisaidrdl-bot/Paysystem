import React from "react";
import { useParams, Link } from "react-router-dom";

export default function PayUpdationDetail() {
  const { type } = useParams();

  const navLinks = [
    "credits",
    "debits",
    "recoveries",
    "core",
    "loans",
    "exceptions",
    "temp-update",
  ];

  return (
    <div className="page-container pay-updation">
      <h1 className="page-title">{type.toUpperCase()} REPORT</h1>

      {/* 🔹 Personnel Input */}
      <div className="report-box">
        <div style={{ display: "flex", gap: "20px", alignItems: "center" }}>
          <label>Enter Personnel ID No</label>
          <input className="text-box" style={{ width: "200px" }} />
          <span style={{ fontSize: "13px", color: "#7d746a" }}>
            Press Tab
          </span>
        </div>
      </div>

      {/* 🔹 Navigation Links */}
      <div className="report-box">
        <div className="report-links">
          {navLinks.map((item, idx) => (
            <Link
              key={idx}
              to={`/updations/pay/${item}`}
              className="report-link"
            >
              {item.toUpperCase()}
            </Link>
          ))}
        </div>
      </div>

      {/* 🔹 Details Table */}
      <div className="report-box">
        <table className="custom-table">
          <thead>
            <tr>
              <th>PERSON NO</th>
              <th>ID NO</th>
              <th>NAME</th>
              <th>DESIGNATION</th>
              <th>GEN</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td colSpan="5">Values (per each column)</td>
            </tr>
          </tbody>
        </table>

        <table className="custom-table">
          <thead>
            <tr>
              <th>DOB</th>
              <th>Date of Ret</th>
              <th>DOJ-GOVT</th>
              <th>DOJ-GRDO</th>
              <th>DOJ</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td colSpan="5">Values (per each column)</td>
            </tr>
          </tbody>
        </table>

        <table className="custom-table">
          <thead>
            <tr>
              <th>BANK A/C</th>
              <th>GPF A/C</th>
              <th>PAN NO</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td colSpan="3">Values (per each column)</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* 🔹 Credits Form (ONLY show when credits) */}
      {type === "credits" && (
        <div className="report-box">
          <div className="form-grid">
            <div>
              <label>Credit 1</label>
              <input className="text-box" />

              <label>Credit 2</label>
              <input className="text-box" />

              <label>Credit 3</label>
              <input className="text-box" />

              <label>Others (Non-taxable)</label>
              <input className="text-box" />

              <label>Individual Remarks</label>
              <input className="text-box" />
            </div>

            <div>
              <label>Credit Remark 1</label>
              <input className="text-box" />

              <label>Credit Remark 2</label>
              <input className="text-box" />

              <label>Credit Remark 3</label>
              <input className="text-box" />
            </div>
          </div>

          <button className="submit-btn">SUBMIT</button>
        </div>
      )}

      {/* 🔹 Bottom Table */}
      <div className="report-box">
        <h2 className="report-heading">Total Earnings</h2>
        <table className="custom-table">
          <tbody>
            <tr>
              <td>Column 1</td>
              <td>Column 2</td>
              <td>Column 3</td>
              <td>Column 4</td>
              <td>Column 5</td>
            </tr>
            <tr>
              <td colSpan="5">Values here</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}