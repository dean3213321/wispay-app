// Navbar.js
import React, { useState } from "react";
import logo from "../wesLogo.png";
import "bootstrap-icons/font/bootstrap-icons.css";

const Navbar = ({ toggleSidebar }) => { // Receive toggleSidebar as a prop
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleDropdownItemClick = (action) => {
    console.log(action);
    setIsDropdownOpen(false);
  };

  return (
    <div className="navbar">
      <button className="menu-button" onClick={toggleSidebar}>
        <i className="bi bi-list"></i>
      </button>
      <img src={logo} alt="Dashboard Logo" className="logo" />
      

      <div className="user-info">
        <div className="user-icon-container" onClick={toggleDropdown}>
          <i className="bi bi-person-circle user-icon"></i>
        </div>

        {isDropdownOpen && (
          <div className="dropdown-menu">
            <div
              className="dropdown-item"
              onClick={() => handleDropdownItemClick("change-password")}
            >
              Change Password
            </div>
            <div
              className="dropdown-item"
              onClick={() => handleDropdownItemClick("logout")}
            >
              Logout
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;