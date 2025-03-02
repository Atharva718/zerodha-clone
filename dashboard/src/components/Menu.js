import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Menu.css";
const Menu = () => {
  const [selectedMenu, setSelectedMenu] = useState(0);
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);

  const handleMenuClick = (index) => {
    setSelectedMenu(index);
  };

  const handleProfileClick = () => {
    setIsProfileDropdownOpen(!isProfileDropdownOpen);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const closeDropdown = (e) => {
      if (!e.target.closest(".profile-container")) {
        setIsProfileDropdownOpen(false);
      }
    };
    document.addEventListener("click", closeDropdown);
    return () => document.removeEventListener("click", closeDropdown);
  }, []);

  return (
    <div className="menu-container">
      <img src="logo.png" alt="logo-image" style={{ width: "50px" }} />
      <div className="menus">
        <ul>
          <li>
            <Link style={{ textDecoration: "none" }} to="/" onClick={() => handleMenuClick(0)}>
              <p className={selectedMenu === 0 ? "menu selected" : "menu"}>Dashboard</p>
            </Link>
          </li>
          <li>
            <Link style={{ textDecoration: "none" }} to="/orders" onClick={() => handleMenuClick(1)}>
              <p className={selectedMenu === 1 ? "menu selected" : "menu"}>Orders</p>
            </Link>
          </li>
          <li>
            <Link style={{ textDecoration: "none" }} to="/holdings" onClick={() => handleMenuClick(2)}>
              <p className={selectedMenu === 2 ? "menu selected" : "menu"}>Holdings</p>
            </Link>
          </li>
          <li>
            <Link style={{ textDecoration: "none" }} to="/positions" onClick={() => handleMenuClick(3)}>
              <p className={selectedMenu === 3 ? "menu selected" : "menu"}>Positions</p>
            </Link>
          </li>
          <li>
            <Link style={{ textDecoration: "none" }} to="funds" onClick={() => handleMenuClick(4)}>
              <p className={selectedMenu === 4 ? "menu selected" : "menu"}>Funds</p>
            </Link>
          </li>
          <li>
            <Link style={{ textDecoration: "none" }} to="/apps" onClick={() => handleMenuClick(6)}>
              <p className={selectedMenu === 6 ? "menu selected" : "menu"}>Apps</p>
            </Link>
          </li>
        </ul>
        <hr />

        {/* Profile Section */}
        <div className="profile-container">
          <div className="profile" onClick={handleProfileClick}>
            <div className="avatar">AK</div>
            <p className="username">Atharva Kapgate</p>
          </div>

          {/* Dropdown Menu */}
          {isProfileDropdownOpen && (
            <div className="profile-dropdown">
              <p className="dropdown-item">View Profile</p>
              <p className="dropdown-item">Account Settings</p>
              <p className="dropdown-item logout">Log Out</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Menu;
