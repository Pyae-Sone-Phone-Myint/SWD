import React from "react";
import { NavLink } from "react-router-dom";
import "./Nav.css";

const Navbar = () => {
  return (
    <div>
      <div className="navbar">
        <div className="header">
          <NavLink to="/">
            <h1 className="logo">Logo</h1>
          </NavLink>
        </div>
        <ul className="navbar-menu">
          <li className="nav-item">
            <NavLink to="/">
                Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="about">
                About
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="service">
                Service
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="contact">
                Contact
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
