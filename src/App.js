import "./App.css";
import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import Organization from "./Components/Organization";
import Navbar from "./Components/Navbar";
import OrganizationDetails from "./Components/OrganizationDetails";
import EmployeeForm from "./Components/EmployeeForm";
import axios from "axios";
import EmployeeList from "./Components/EmployeeList";

function App() {
  const [organizations, setOrganizations] = useState([]);

  useEffect(() => {
    fetchOrganizations();
  }, []);

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
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route
          path="/organizations"
          element={<Organization organizations={organizations} />}
        />
        <Route
          path="/employees"
          element={<EmployeeForm organizations={organizations} />}
        />
        <Route exact path="/employeesList" element={<EmployeeList />} />
        <Route path="/organizations/:id" element={<OrganizationDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
