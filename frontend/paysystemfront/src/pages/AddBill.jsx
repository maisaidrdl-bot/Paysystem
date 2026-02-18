import React from "react";

export default function AddBill() {
  return (
    <div className="page-container add-bill">
      <h1 className="page-title">Welcome to Add Bill Page</h1>

      {/* Dropdown input for time */}
      <div className="input-group">
        <label htmlFor="time-select">Select Time:</label>
        <select id="time-select">
          <option value="">--Select--</option>
          <option value="morning">Morning</option>
          <option value="afternoon">Afternoon</option>
          <option value="evening">Evening</option>
        </select>
      </div>

      {/* Text box */}
      <div className="input-group">
        <label htmlFor="bill-info">Enter Bill Info:</label>
        <input type="text" id="bill-info" placeholder="Type here..." />
      </div>
    </div>
  );
}
