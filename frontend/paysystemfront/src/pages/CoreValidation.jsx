import React, { useState } from "react";

import axios from "axios";
import { useNavigate } from "react-router-dom";



export default function CoreValidation() {
  const [persNo, setPersNo] = useState("");
  const [idNo, setIdNo] = useState("");
const navigate = useNavigate();



const handleValidate = async () => {
  try {
    const response = await axios.post(
      "http://localhost:8080/api/core/validate",
      {
        persNo: Number(persNo),
        idNo: idNo,
      }
    );

    if (response.data === true) {
      alert("Validation Successful");

      navigate("/updations/pay/core");
    } else {
      alert("Invalid Personnel No or ID No");
    }
  } catch (error) {
    console.error(error);
    alert("Validation Failed");
  }
};



  return (
    <div className="page-container pay-updation">

      <h1 className="page-title">CORE VALIDATION</h1>

      <div className="report-box">

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "220px 250px",
            rowGap: "20px",
            columnGap: "20px",
            alignItems: "center",
          }}
        >
          <label>Personnel No</label>

          <input
            className="text-box"
            value={persNo}
            onChange={(e) => setPersNo(e.target.value)}
          />

          <label>ID No</label>

          <input
            className="text-box"
            value={idNo}
            onChange={(e) => setIdNo(e.target.value)}
          />
        </div>

        <div style={{ marginTop: "30px" }}>
          <button
  className="submit-btn"
  onClick={handleValidate}
>
  VALIDATE
</button>
        </div>

      </div>

    </div>
  );
}