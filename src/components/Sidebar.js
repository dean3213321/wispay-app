// Sidebar.js
import React from "react";
import "bootstrap-icons/font/bootstrap-icons.css";

const Sidebar = ({ isOpen }) => {
  return (
    <div className={`sidebar ${isOpen ? "open" : ""}`}>
      <ul>
        <li>
          <a href="/">
            <i className="bi bi-speedometer2"></i>
            <span>Dashboard</span>
          </a>
        </li>
        <li>
          <a href="Payments">
            <i className="bi bi-cash-stack"></i> {/* Changed icon */}
            <span>Payments</span>
          </a>
        </li>
        <li>
          <a href="#">
            <i className="bi bi-box-seam"></i> {/* Changed icon */}
            <span>Products</span>
          </a>
        </li>
        <li>
          <a href="#">
            <i className="bi bi-file-earmark-bar-graph"></i> {/* Changed icon */}
            <span>Reports</span>
          </a>
        </li>
        <li>
          <a href="#">
            <i className="bi bi-people"></i> {/* Changed icon */}
            <span>Students</span>
          </a>
        </li>
        <li>
          <a href="#">
            <i className="bi bi-person-badge"></i>  {/*Changed Icon*/}
            <span>Employees</span>
          </a>
        </li>
        <li>
          <a href="#">
            <i className="bi bi-currency-dollar"></i> {/* Changed icon */}
            <span>Other Payment</span>
          </a>
        </li>
        <li>
          <a href="#">
            <i className="bi bi-box-arrow-right"></i> {/* Changed icon */}
            <span>Logout</span>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;