import React from "react";
import { Link, Outlet } from "react-router-dom";
import "./top-nav.scss";
import { IoMenu } from "react-icons/io5";
import Logo from "../../assets/images/logo.svg";

export const TopNav = () => {
  return (
    <div className="top-nav">
      <img src={{ Logo }} width="60px" />
      <input type="checkbox" id="active" />
      <label htmlFor="active" className="menu-btn">
        <IoMenu />
      </label>

      <div className="wrapper">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/services">Services</Link>
          </li>
          <li>
            <Link to="/gallery">Gallery</Link>
          </li>
          <li>
            <Link to="/feedback">Feedback</Link>
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
