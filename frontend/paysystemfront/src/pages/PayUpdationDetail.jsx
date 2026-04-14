import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";

export default function PayUpdationDetail() {
  const { type } = useParams();
const [formData, setFormData] = useState({});


const handleChange = (name, value) => {
  setFormData((prev) => ({
    ...prev,
    [name]: value
  }));
};
const handleSubmit = async () => {
  const data = {};

  Object.keys(formData).forEach((key) => {
    if (formData[key]) {
      data[key] = String(formData[key]);
    }
  });

  if (Object.keys(data).length === 0) {
    alert("No data to submit. Please enter at least one value.");
    return;
  }

  const payload = {
    type: type,
    data: data
  };

  console.log("Submitting payload:", JSON.stringify(payload, null, 2));

  try {
    await axios.post("http://localhost:8080/api/pay/save", payload, {
      headers: { "Content-Type": "application/json" },
    });
    alert("Saved successfully");
  } catch (err) {
    console.error("Server said:", err.response?.data);
    alert(`Error: ${JSON.stringify(err.response?.data, null, 2)}`);
  }
};
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
      
      {/* 🔹 TITLE */}
      <h1 className="page-title">{type?.toUpperCase()} REPORT</h1>

      {/* 🔹 1. Personnel ID */}
      <div className="report-box">
        <label>Enter Personnel ID No</label>
        <input className="text-box" style={{ marginLeft: "15px", width: "200px" }} />
      </div>

      {/* 🔹 2. Navigation Links */}
      <div className="report-box">
        <div className="report-links">
          {navLinks.map((item, idx) => (
            <Link key={idx} to={`/updations/pay/${item}`} className="report-link">
              {item.toUpperCase()}
            </Link>
          ))}
        </div>
      </div>

      {/* 🔹 3. Basic Details */}
      <div className="report-box">
        <table className="custom-table">
          <thead>
            <tr>
              <th>PERSON NO</th>
              <th>ID NO</th>
              <th>NAME</th>
              <th>ORGANISATION</th>
              <th>GENDER</th>
            </tr>
          </thead>
          <tbody>
            <tr className="highlight-row">
              <td colSpan="5">Values</td>
            </tr>
          </tbody>
        </table>

        {/* 🔹 4. Bank */}
        <table className="custom-table">
          <tbody>
            <tr className="highlight-row">
              <td>BANK ACCOUNT NO: 123456789012</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* ================= CREDIT ================= */}
      {type === "credits" && (
  <div className="report-box">
    <h2 className="report-heading">Credits</h2>

    <div className="form-grid">

      {/* Credit 1 */}
      <div style={{ display: "flex", gap: "20px" }}>
        <div style={{ flex: 1 }}>
          <label>Credit 1</label>
          <input
            className="text-box"
            name="credit1"
            onChange={(e) => handleChange(e.target.name, e.target.value)}
          />
        </div>

        <div style={{ flex: 1 }}>
          <label>Remark 1</label>
          <input
            className="text-box"
            name="credit1Remark"
            onChange={(e) => handleChange(e.target.name, e.target.value)}
          />
        </div>
      </div>

      {/* Credit 2 */}
      <div style={{ display: "flex", gap: "20px", marginTop: "15px" }}>
        <div style={{ flex: 1 }}>
          <label>Credit 2</label>
          <input
            className="text-box"
            name="credit2"
            onChange={(e) => handleChange(e.target.name, e.target.value)}
          />
        </div>

        <div style={{ flex: 1 }}>
          <label>Remark 2</label>
          <input
            className="text-box"
            name="credit2Remark"
            onChange={(e) => handleChange(e.target.name, e.target.value)}
          />
        </div>
      </div>

      {/* Credit 3 */}
      <div style={{ display: "flex", gap: "20px", marginTop: "15px" }}>
        <div style={{ flex: 1 }}>
          <label>Credit 3</label>
          <input
            className="text-box"
            name="credit3"
            onChange={(e) => handleChange(e.target.name, e.target.value)}
          />
        </div>

        <div style={{ flex: 1 }}>
          <label>Remark 3</label>
          <input
            className="text-box"
            name="credit3Remark"
            onChange={(e) => handleChange(e.target.name, e.target.value)}
          />
        </div>
      </div>

      {/* Others */}
      <div style={{ display: "flex", gap: "20px", marginTop: "15px" }}>
        <div style={{ flex: 1 }}>
          <label>Others</label>
          <input
            className="text-box"
            name="others"
            onChange={(e) => handleChange(e.target.name, e.target.value)}
          />
        </div>

        <div style={{ flex: 1 }}>
          <label>Others Remark</label>
          <input
            className="text-box"
            name="othersRemark"
            onChange={(e) => handleChange(e.target.name, e.target.value)}
          />
        </div>
      </div>

      {/* Individual Remark */}
      <div style={{ marginTop: "15px" }}>
        <label>Individual Remark</label>
        <input
          className="text-box"
          name="individualRemark"
          onChange={(e) => handleChange(e.target.name, e.target.value)}
        />
      </div>

    </div>

    <button className="submit-btn" onClick={handleSubmit}>
      SUBMIT
    </button>
  </div>
)}

      {/* ================= DEBIT ================= */}
      {type === "debits" && (
        <>
          {/* 🔹 5. 8x5 Table */}
          <div className="report-box">
            <table className="custom-table">
              <tbody>
  {[
    ["Basic", "50000", "HRA", "20000", "DA", "15000", "Bonus", "5000"],
    ["Gross", "90000", "Tax", "10000", "PF", "5000", "Other", "2000"],
    ["Net", "73000", "-", "-", "-", "-", "-", "-"],
    ["Row 4", "Value", "Value", "Value", "Value", "Value", "Value", "Value"],
    ["Row 5", "Value", "Value", "Value", "Value", "Value", "Value", "Value"],
  ].map((row, i) => (
    <tr key={i}>
      {row.map((cell, j) => (
        <td key={j}>{cell}</td>
      ))}
    </tr>
  ))}
</tbody>
            </table>
          </div>

          {/* 🔹 6. Rent / Water Row */}
          <div className="report-box">
            <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
              {["PENT", "ELEC", "WATER", "FURNITURE", "SERVICE"].map((item, i) => (
                <div key={i}>
                  <label>{item}</label>
                  <input className="text-box" />
                </div>
              ))}
            </div>
          </div>

          {/* 🔹 7. Debit + Remark */}
          <div className="report-box">
            {[
  "Debit 1 (Non Taxable)",
  "Debit 2 (Taxable)",
  "Medical",
  "LTC",
  "TA/DA",
  "EOL Amount",
  "APL Amount",
  "CCL Amount",
].map((name, i) => (
  <div
    key={i}
    style={{
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: "20px",
      marginBottom: "15px",
    }}
  >
    {/* LEFT → Debit */}
    <div>
      <label>{name}</label>
      <input
  className="text-box"
  name={`debit${i}`}
  onChange={(e) => handleChange(e.target.name, e.target.value)}
/>
    </div>

    {/* RIGHT → Dynamic Remark */}
    <div>
      <label>{name} Remark</label>
     <input
  className="text-box"
  name={`debit${i}Remark`}
  onChange={(e) => handleChange(e.target.name, e.target.value)}
/>
    </div>
          </div>
))}
          </div>

          {/* 🔹 8. Extra Inputs */}
          <div className="report-box">
            <label>CDADISALW(NonTaxable)</label>
            <input className="text-box" placeholder="Field 1" />
            <br /><br />
            <label>CDADISALW(Taxable)</label>
            <input className="text-box" placeholder="Field 2" />
            <br /><br />
            <label>CDA REMARK(Non taxatable) </label>
            <input className="text-box" placeholder="Field 3" />
            <br /><br />
           <label>CDA REMARK( Taxatable) </label>
            <input className="text-box" placeholder="Field 4" />
            <br /><br />

          </div>


          {/* 🔹 9. Individual Remark */}
          <div className="report-box">
            <label>Individual Remark</label>
            <input className="text-box" />
          </div>

          {/* 🔹 10. Summary */}
          <div className="report-box">
            <p>Gross Pay: ______</p>
            <p>Total Deductions: ______</p>
            <p>Net Pay: ______</p>
          </div>

          <button className="submit-btn" onClick={handleSubmit}>
  SUBMIT
</button>
        </>
      )}






{type === "recoveries" && (
  <div className="report-box">

    {/* 🔹 Structured Table (LIKE IMAGE) */}
    <table className="custom-table">
  <tbody>
    <tr>
      <td>BENEVOLENT</td><td>7S</td><td>WEL_SUB</td><td>20</td>
      <td>REGIMENTAL</td><td>20</td><td>-</td><td>-</td>
    </tr>

    <tr>
      <td>CCS REC</td><td>0</td><td>LICHO</td><td>0</td>
      <td>DEATH RELIEF</td><td>0</td><td>MESS</td><td>120</td>
    </tr>

    <tr>
      <td>HDFC</td><td><input
  className="table-input"
  name="hdfc"
  onChange={(e) => handleChange(e.target.name, e.target.value)}
/>

</td><td>LIC</td><td>0</td>
      <td>HUDCO</td><td><input
  className="table-input"
  name="hudco"
  onChange={(e) => handleChange(e.target.name, e.target.value)}
/></td><td>COURT ATTACH</td><td><input
  className="table-input"
  name="courtattach"
  onChange={(e) => handleChange(e.target.name, e.target.value)}
/></td>
    </tr>

    <tr>
      <td>GIC</td><td><input
  className="table-input"
  name="GIC"
  onChange={(e) => handleChange(e.target.name, e.target.value)}
/></td><td>GURKHA</td><td><input
  className="table-input"
  name="GURKHA"
  onChange={(e) => handleChange(e.target.name, e.target.value)}
/></td>
      <td>PM RELIEF</td><td><input
  className="table-input"
  name="PMRELIEF"
  onChange={(e) => handleChange(e.target.name, e.target.value)}
/></td><td>-</td><td>-</td>
    </tr>

    <tr>
      <td>TA/DA</td><td><input
  className="table-input"
  name="tada"
  onChange={(e) => handleChange(e.target.name, e.target.value)}
/></td>


<td>TA/DA Remark </td><td><input
  className="table-input"
  name="tadaRemark "
  onChange={(e) => handleChange(e.target.name, e.target.value)}
/></td>





      <td>-</td><td>-</td><td>-</td><td>-</td>
    </tr>

    <tr>
      <td>LTC</td><td><input
  className="table-input"
  name="LTC"
  onChange={(e) => handleChange(e.target.name, e.target.value)}
/></td>



<td>LTC Remark </td><td><input
  className="table-input"
  name="ltcRemark"
  onChange={(e) => handleChange(e.target.name, e.target.value)}
/></td>
      <td>-</td><td>-</td><td>-</td><td>-</td>
    </tr>


<tr>
      <td>RECOVERY1</td><td><input
  className="table-input"
  name="recovery1"
  onChange={(e) => handleChange(e.target.name, e.target.value)}
/></td><td>RECOVERY1 REMARKS</td><td><input
  className="table-input"
  name="recovery1Remark"
  onChange={(e) => handleChange(e.target.name, e.target.value)}
/></td>
      <td>-</td><td>-</td><td>-</td><td>-</td>
    </tr>

  </tbody>
</table>

    {/* 🔹 Submit */}
    <button className="submit-btn" onClick={handleSubmit}>
  SUBMIT
</button>

    {/* 🔹 Summary */}
    <div className="summary-row">
      <span>Net Pay:</span>
     
      <span>Total Recoveries:</span>
     
      <span>Final Pay:</span>

    </div>

    {/* 🔹 Divider */}
    <hr className="divider" />

    {/* 🔹 Closed Loan Section */}
    <div className="closed-loan-header">
      <h3>CLOSED LOAN</h3>
      <Link to="/updations/pay/recoveries">BACK</Link>
    </div>

    {/* 🔹 Closed Loan Table (ONLY HEADERS) */}
    <table className="custom-table">
      <thead>
        <tr>
          <th>SNO</th>
          <th>CHECK</th>
          <th>PERSNO</th>
          <th>IDNO</th>
          <th>LOAN NO</th>
          <th>INT BALANCE</th>
          <th>DT OF LAST INST</th>
        </tr>
      </thead>
      <tbody>
        {/* EMPTY ROWS ONLY */}
        <tr><td colSpan="7">&nbsp;</td></tr>
        <tr><td colSpan="7">&nbsp;</td></tr>
      </tbody>
    </table>

    {/* 🔹 Continue Button */}
    <button className="submit-btn">CONTINUE RECOVERY</button>

  </div>
)}





    </div>
  );
}