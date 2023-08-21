import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function Organization(props) {
  const [name, setName] = useState("");
  const [registrationDate, setRegistrationDate] = useState("");
  const [address, setAddress] = useState("");
  const [organizations, setOrganizations] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(
        "https://cstream-organization-management.onrender.com/api/organizations/create",
        {
          name: name,
          registrationDate: registrationDate,
          address: address,
        }
      );
      console.log("Created Successfully");
    } catch (error) {
      console.error("Failed to fetch organizations:", error);
    }
  };

  useEffect(() => {
    fetchOrganizations();
  }, [organizations]);

  const fetchOrganizations = async () => {
    try {
      const response = await axios.get(
        "https://cstream-organization-management.onrender.com/api/organizations/getAll"
      );
      setOrganizations(response.data);
    } catch (error) {
      console.error("Failed to fetch organizations:", error);
    }
  };
  if (organizations.length === 0) {
    return (
      <div
        className="d-flex align-items-center justify-content-center"
        style={{ width: "100%", height: "60vh", gap: "20px" }}
      >
        <strong role="status">Loading...</strong>
        <div className="spinner-border" aria-hidden="true"></div>
      </div>
    );
  }
  return (
    <div className="organization_page">
      <div className="organization_form">
        <h3 className="organization_heading">Organizations Register Form</h3>
        <hr />
        <form className="form_container" onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="exampleInputName" className="form-label">
              Organization Name
            </label>
            <input
              onChange={(e) => setName(e.target.value)}
              type="text"
              className="form-control"
              id="exampleInputName"
              aria-describedby="textHelp"
              placeholder="Organization Name"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputDate" className="form-label">
              Registration Date
            </label>
            <input
              value={registrationDate}
              onChange={(e) => setRegistrationDate(e.target.value)}
              type="date"
              className="form-control"
              id="exampleInputDate"
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
              placeholder="Address"
            />
          </div>

          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>

      <div className="organization_list">
        <h3 className="organization_heading">Organization List</h3>

        <div className="list-group list-group-numbered">
          {organizations.map((org) => (
            <Link
              key={org._id}
              className="list-group-item list-group-item-action"
              aria-current="true"
              to={`/organizations/${org._id}`}
            >
              {org.name}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Organization;
