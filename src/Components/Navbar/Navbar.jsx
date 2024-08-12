import React from "react";
import { NavLink } from "react-router-dom"; // Import NavLink
import "./Navbar.css";
import logo from '../../assets/img/hi.png'; // Import the image

function Navbar() {
  return (
    <div className="nav-container">
      <div className="left-container">
        <div className="left-logo">
          <img src={logo} style={{ width: "100px" }} alt="Logo" /> {/* Use imported image */}
        </div>
        <div className="left-com-name"><h1>SHOPPERS</h1></div>
      </div>

      <div className="searchBar">
        <input className="searchInput" type="text" />
      </div>

      <div className="right-container">
        <div className="right-link">
          <NavLink className="list-item" to="/" end>
            Home
          </NavLink>
          <NavLink className="list-item" to="/products">
            Products
          </NavLink>
          <NavLink className="list-item" to="/cart">
            Cart
          </NavLink>
          <NavLink className="list-item" to="/account">
            Account
          </NavLink>
          <NavLink className="list-item" to="/orders">
            Orders
          </NavLink>
        </div>
        <div className="right-user-info">
          Welcome, Ballu Bhoi
          <span>Logo</span>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
