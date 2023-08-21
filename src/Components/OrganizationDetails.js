import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function OrganizationDetails() {
  const { id } = useParams();
  const [organization, setOrganization] = useState(null);

  useEffect(() => {
    fetchOrganization();
  }, [id]);

  const fetchOrganization = async () => {
    try {
      const response = await axios.get(
        `https://cstream-organization-management.onrender.com/api/organizations/getSingle/${id}`
      );
      setOrganization(response.data);
    } catch (error) {
      console.error("Failed to fetch organization:", error);
    }
  };

  if (!organization) {
    return (
      <div
        className="d-flex align-items-center justify-content-center"
        style={{ width: "100%", height: "60vh", gap: "20px" }}
      >
        <strong role="status">Loading Organization Details...</strong>
        <div className="spinner-border" aria-hidden="true"></div>
      </div>
    );
  }

  return (
    <>
      <div className="organization_details">
        <h2 className="organization_heading">Organization Details</h2>
        <ul className="list-group">
          <li className="list-group-item d-flex justify-content-between align-items-center">
            <strong>Name:</strong>
            <span className="text-primary ">{organization.name}</span>
          </li>
          <li className="list-group-item d-flex justify-content-between align-items-center">
            <strong>Registration Date:</strong>{" "}
            <span className="text-primary">
              {" "}
              {new Date(organization.registrationDate).toLocaleDateString()}
            </span>
          </li>
          <li className="list-group-item d-flex justify-content-between align-items-center">
            <strong>Address:</strong>
            <span className=" text-primary">{organization.address}</span>
          </li>
          <li className="list-group-item d-flex justify-content-between align-items-center">
            <strong>No Of Employees:</strong>
            <span className=" text-primary">
              {organization.employees.length}
            </span>
          </li>
          <li className="list-group-item d-flex justify-content-between align-items-center">
            <strong>Employees:</strong>
            <span className=" text-primary">
              <ol className="list-group">
                {organization.employees.map((val, index) => (
                  <li key={index}>{val.name}</li>
                ))}
              </ol>
            </span>
          </li>
        </ul>
      </div>
    </>
  );
}

export default OrganizationDetails;
