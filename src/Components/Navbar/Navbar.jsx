import React from "react";
import "./Navbar.css";
function Navbar() {
  return (
    <>
      <div className="nav-container">
        <div className="left-container">
          <div className="left-logo">Logo</div>
          <div className="left-com-name">Company Name</div>
        </div>


        <div className="searchBar">
            <input type="text" />
        </div>

        <div className="right-container">
          <div className="right-link">
            <li className="list-item">Home</li>
            <li className="list-item">Products</li>
            <li className="list-item">Cart</li>
            <li className="list-item">Account</li>
            <li className="list-item">Orders</li>
          </div>
          <div className="right-user-info">
            Welcome, Ballu Bhoi
            <span>Logo</span>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
