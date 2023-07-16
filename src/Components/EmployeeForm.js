import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function EmployeeForm(props) {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [dob, setdob] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [address, setAddress] = useState("");
  const [organization, setOrganization] = useState("");
  const [organizationId, setOrganizationId] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let val = await props.organizations.filter((item) => {
        if (item.name == organization) {
          return setOrganizationId(item._id);
        }
      });

      await axios.post(
        "https://cstream-organization-management.onrender.com/api/employees/create",
        {
          name: name,
          dob: dob,
          phoneNumber: phoneNumber,
          address: address,
          organization: organizationId,
        }
      );
      navigate("/employeesList");
      console.log({
        name,
        dob,
        phoneNumber,
        address,
        organization: organizationId,
      });
      console.log("Created Successfully");
    } catch (error) {
      console.error("Failed to fetch organizations:", error);
    }
  };

  return (
    <div className="employee_page">
      <div className="employee_form">
        <h3 className="employee_heading">Employee Register Form</h3>
        <form className="form_container" onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="exampleInputName" className="form-label">
              Employee Name
            </label>
            <input
              onChange={(e) => setName(e.target.value)}
              type="text"
              className="form-control"
              id="exampleInputName"
              aria-describedby="textHelp"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputDate" className="form-label">
              DOB
            </label>
            <input
              value={dob}
              onChange={(e) => setdob(e.target.value)}
              type="date"
              className="form-control"
              id="exampleInputDate"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputNumber" className="form-label">
              Phone Number
            </label>
            <input
              onChange={(e) => setPhoneNumber(e.target.value)}
              type="number"
              className="form-control"
              id="exampleInputNumber"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputAddress" className="form-label">
              Address
            </label>
            <input
              onChange={(e) => setAddress(e.target.value)}
              type="text"
              className="form-control"
              id="exampleInputAddress"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputOrganization" className="form-label">
              Organization
            </label>
            <select
              value={organization}
              onChange={(e) => setOrganization(e.target.value)}
            >
              {props.organizations.map((item) => {
                return (
                  <option key={item.name} value={item.name}>
                    {item.name}
                  </option>
                );
              })}
            </select>
          </div>

          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default EmployeeForm;
