import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";
import logo from '../../assets/img/hi.png';

function Navbar() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="nav-container">
      <div className="left-container">
        <div className="left-logo">
          <img src={logo} alt="Logo" />
        </div>
        <div className="left-com-name"><h1>SHOPPERS</h1></div>
      </div>

      <div className="searchBar">
        <input className="searchInput" type="text" placeholder="Search..." />
      </div>

      <div className="right-container">
        {/* Hamburger Menu */}
        <div className="hamburger-menu" onClick={toggleMobileMenu}>
          <span>&#9776;</span>
        </div>
        
        {/* Full-screen Mobile Menu */}
        <div className={`mobile-menu ${isMobileMenuOpen ? 'open' : ''}`}>
          {/* Close button */}
          <div className="close-menu" onClick={toggleMobileMenu}>
            &times;
          </div>
          
          <NavLink className="list-item" to="/" end onClick={toggleMobileMenu}>
            Home
          </NavLink>
          <NavLink className="list-item" to="/products" onClick={toggleMobileMenu}>
            Products
          </NavLink>
          <NavLink className="list-item" to="/cart" onClick={toggleMobileMenu}>
            Cart
          </NavLink>
          <NavLink className="list-item" to="/account" onClick={toggleMobileMenu}>
            Account
          </NavLink>
          <NavLink className="list-item" to="/orders" onClick={toggleMobileMenu}>
            Orders
          </NavLink>
        </div>
        
        {/* Regular Navigation Links */}
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
  