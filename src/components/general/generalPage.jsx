import React from "react";
import "./generalPage.css";
import { NavLink, Outlet } from "react-router-dom";
const GeneralPage = () => {
  return (
    <>
      <header className="header">
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/users">Users</NavLink>
          </li>
        </ul>
      </header>
      <Outlet />
      <footer>2024</footer>
    </>
  );
};

export default GeneralPage;
