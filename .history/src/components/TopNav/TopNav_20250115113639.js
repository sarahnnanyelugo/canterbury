import React from "react";
import { Link, Outlet } from "react-router-dom";
import "./top-nav.scss";
import { IoMenu } from "react-icons/io5";
import Logo from "../../assets/images/logo.svg";

export const TopNav = () => {
  return (
    <div className="top-nav">
      <div className="col-md-2 ">
        {" "}
        <img src={Logo} width="80%" />
      </div>
      <input type="checkbox" id="active" />
      <label htmlFor="active" className="menu-btn">
        <IoMenu />
      </label>

      <div className="wrapper">
        <ul>
          <li className="abt">
            <Link to="/">About</Link>
            <div className="abt-menu">story</div>
          </li>
          <li>
            <Link to="/about">Admission</Link>
          </li>
          <li>
            <Link to="/services">Academics</Link>
          </li>
          <li>
            <Link to="/gallery">Arts</Link>
          </li>
          <li>
            <Link to="/feedback">Athletics</Link>
          </li>{" "}
          <li>
            <Link to="/feedback">Student Life</Link>
          </li>
        </ul>
      </div>
      <div className="content">
        {/* This is where route content will be displayed */}
        <Outlet />
      </div>
    </div>
  );
};
