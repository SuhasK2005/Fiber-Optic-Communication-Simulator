import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-links">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "nav-link active" : "nav-link"
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/simulator"
          className={({ isActive }) =>
            isActive ? "nav-link active" : "nav-link"
          }
        >
          Simulator
        </NavLink>
        <NavLink
          to="/theory"
          className={({ isActive }) =>
            isActive ? "nav-link active" : "nav-link"
          }
        >
          Theory
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
