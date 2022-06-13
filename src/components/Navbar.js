import React from "react";
import "./Navbar.css";
// import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <div>
        <p>logo</p>
      </div>
      <div>
        <ul>
          <li>
            <p>Home &nbsp; </p>
          </li>
          <li>
            <p>About &nbsp; </p>
          </li>
          <li>
            <p>Contacts &nbsp; </p>
          </li>
          <li>
            <p>Acount &nbsp; </p>
          </li>
        </ul>
      </div>
      <div>
        <p>shop</p>
      </div>
    </nav>
  );
}

export default Navbar;
