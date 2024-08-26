import React from "react";
import "../styles/header.css";
import { NavLink, useLocation } from "react-router-dom";
function Header() {
  let location = useLocation();

  return (
    <header className={location.pathname === "/" ? "home" : "header"}>
      <div className="container">
        <ul className="header__list">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>Наши проекты</li>
          <li>Услуги</li>
          <li>
            <NavLink to="/login">Login</NavLink>
          </li>
          <li>
            <NavLink to="/register">Register</NavLink>
          </li>

        </ul>
      </div>
      <hr />
    </header>
  );
}

export default Header;
