import React from "react";
import { Link, Outlet } from "react-router-dom";
import "./top-nav.scss";
import { IoMenu } from "react-icons/io5";
import Logo from "../../assets/images/logo.svg";

export const TopNav = () => {
  return (
    <div className="top-nav">
      <div className="col-md-2">
        <img src={Logo} width="80%" alt="Logo" />
      </div>
      <input type="checkbox" id="active" />
      <label htmlFor="active" className="menu-btn">
        <IoMenu />
      </label>

      <div className="wrapper">
        <ul>
          <li className="menu-item">
            <Link to="/">About</Link>
            <div className="submenu">
              <Link to="/story">Story</Link>
              <Link to="/mission">Mission</Link>
              <Link to="/team">Team</Link>
            </div>
          </li>
          <li className="menu-item">
            <Link to="/admission">Admission</Link>
            <div className="submenu">
              <Link to="/how-to-apply">How to Apply</Link>
              <Link to="/requirements">Requirements</Link>
            </div>
          </li>
          <li className="menu-item">
            <Link to="/services">Academics</Link>
            <div className="submenu">
              <Link to="/departments">Departments</Link>
              <Link to="/curriculum">Curriculum</Link>
            </div>
          </li>
          <li className="menu-item">
            <Link to="/gallery">Arts</Link>
            <div className="submenu">
              <Link to="/visual-arts">Visual Arts</Link>
              <Link to="/performing-arts">Performing Arts</Link>
            </div>
          </li>
          <li className="menu-item">
            <Link to="/athletics">Athletics</Link>
            <div className="submenu">
              <Link to="/sports-teams">Sports Teams</Link>
              <Link to="/facilities">Facilities</Link>
            </div>
          </li>
          <li className="menu-item">
            <Link to="/student-life">Student Life</Link>
            <div className="submenu">
              <Link to="/clubs">Clubs</Link>
              <Link to="/events">Events</Link>
            </div>
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
