import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <nav
        className="navbar navbar-expand-lg"
        style={{ backgroundColor: "#e3f2fd" }}
      >
        <div className="container-fluid">
          <Link to="/" className="navbar-brand display-4">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTB4JqJstrqcJ3MbM1yaPHWyNE9piqQgn0asA&usqp=CAU"
              alt=""
              style={{
                width: "50px",
                borderRadius: "50%",
                marginLeft: "20px",
                marginRight: "20px",
              }}
            />
            Management Application
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse  navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto" style={{ fontSize: "15px" }}>
              <li className="nav-item">
                <Link to="/" className="nav-link" aria-current="page">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/organizations" className="nav-link">
                  Organizations
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/employees" className="nav-link">
                  Employees
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/employeesList" className="nav-link">
                  Employees List
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
