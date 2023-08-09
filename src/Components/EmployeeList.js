import React, { useState, useEffect } from "react";
import axios from "axios";

function EmployeeList() {
  const [employee, setEmployee] = useState([]);

  useEffect(() => {
    fetchEmployees();
  }, []);

  const fetchEmployees = async () => {
    try {
      const response = await axios.get(
        `https://cstream-organization-management.onrender.com/api/employees/getAll`
      );
      setEmployee(response.data);
      console.log(employee);
    } catch (error) {
      console.error("Failed to fetch organization:", error);
    }
  };
  if (!employee) {
    return <h1>loading...</h1>;
  }
  return (
    <div className="employee_list">
      <h3 className="employee_list_heading">Employee List</h3>

      <table className="table table-hover table-bordered ">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">DOB</th>
            <th scope="col">Phone Number</th>
            <th scope="col">Address</th>
            <th scope="col">Organization</th>
          </tr>
        </thead>
        <tbody>
          {employee.map((val, index) => (
            <tr key={val._id}>
              <th scope="row">{index + 1}</th>
              <td>{val.name}</td>
              <td>{new Date(val.dob).toLocaleDateString()}</td>
              <td>{val.phoneNumber}</td>
              <td>{val.address}</td>
              <td>{val.organization.name}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default EmployeeList;
