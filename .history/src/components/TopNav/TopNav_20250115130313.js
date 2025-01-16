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
          <li>
            <Link to="/">About</Link>
            <ul className="submenu">
              <li>
                <Link to="/story">Story</Link>
              </li>
              <li>
                <Link to="/mission">Mission</Link>
              </li>
              <li>
                <Link to="/team">Team</Link>
              </li>
            </ul>
          </li>
          <li>
            <Link to="/admission">Admission</Link>
            <ul className="submenu">
              <li>
                <Link to="/apply">Apply</Link>
              </li>
              <li>
                <Link to="/tuition">Tuition</Link>
              </li>
            </ul>
          </li>
          <li>
            <Link to="/services">Academics</Link>
            <ul className="submenu">
              <li>
                <Link to="/programs">Programs</Link>
              </li>
              <li>
                <Link to="/departments">Departments</Link>
              </li>
            </ul>
          </li>
          <li>
            <Link to="/gallery">Arts</Link>
          </li>
          <li>
            <Link to="/feedback">Athletics</Link>
          </li>
          <li>
            <Link to="/student-life">Student Life</Link>
          </li>
        </ul>{" "}
        <ul className="offset-md-7 other-links ">
          <h6>QUICK LINKS</h6>
          <div className="d-flex">
            <div className="col-md-6">
              {" "}
              <Link to={"/inquire"}>Inquire</Link>
              <br />
              <Link to={"/inquire"}>Calendar</Link> <br />
              <Link to={"/inquire"}>School News</Link> <br />
              <Link to={"/inquire"}>Directory</Link>
            </div>
          </div>
        </ul>
      </div>
      <div className="content">
        <Outlet />
      </div>
    </div>
  );
};
