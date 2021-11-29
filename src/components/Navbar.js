// src/Navbar.js
import React from "react";
import { NavLink } from "react-router-dom";
import "../css/navbar.css"

const Navbar = () => {
  return (
      <div className="Nav">
        <NavLink
          activeStyle={{ background: "#ff9035" }}
          to="/"
          className="base-nav"
          exact
        >
          Home
        </NavLink>
        <NavLink
        activeStyle={{ background: "#ff9035" }}
          to="/beats"
          className="base-nav"
          exact
        >
          Beats
        </NavLink>
        <NavLink
        activeStyle={{ background: "#ff9035" }}
          to="/producers"
          className="base-nav"
          exact
        >
          Producers
        </NavLink>
        <NavLink
        activeStyle={{ background: "#ff9035" }}
          to="/new"
          className="base-nav"
          exact
        >
          New Beat
        </NavLink>
      </div>
    );
  }


export default Navbar;
