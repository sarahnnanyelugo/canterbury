import React from "react";
import { Link, Outlet } from "react-router-dom";
import "./top-nav.scss";

export const TopNav = () => {
  return (
    <div className="top-nav">
      <input type="checkbox" id="active" />
      <label htmlFor="active" className="menu-btn">
        <i className="fas fa-bars"></i>
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
        <div className="title">Fullscreen Overlay Navigation Bar</div>
        <p>with HTML & CSS Neon Effect</p>
        {/* This is where route content will be displayed */}
        <Outlet />
      </div>
    </div>
  );
};
