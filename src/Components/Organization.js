import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function Organization(props) {
  const [name, setName] = useState("");
  const [registrationDate, setRegistrationDate] = useState("");
  const [address, setAddress] = useState("");

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

  if (props.organizations.length == 0) {
    return <h1>loading...</h1>;
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
          {props.organizations.map((org) => (
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
