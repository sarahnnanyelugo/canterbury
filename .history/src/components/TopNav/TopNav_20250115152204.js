import React from "react";
import { Link, Outlet } from "react-router-dom";
import "./top-nav.scss";
import { IoMenu } from "react-icons/io5";
import Logo from "../../assets/images/logo.svg";
import { GoInfo } from "react-icons/go";
import { SlCalender } from "react-icons/sl";
import { IoNewspaperOutline } from "react-icons/io5";
import { ImUserTie } from "react-icons/im";
import { FaMapMarkerAlt } from "react-icons/fa";
import { IoStorefront } from "react-icons/io5";
import { BsPersonCheckFill } from "react-icons/bs";
import { TbReport } from "react-icons/tb";

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
        <ul className="offset-md-7 other-links col-md-5">
          <h6>QUICK LINKS</h6>
          <div className="d-flex">
            <div className="col-md-6">
              {" "}
              <Link to={"/inquire"}>
                <span>
                  {" "}
                  <GoInfo />
                </span>
                Inquire
              </Link>
              <br />
              <Link to={"/inquire"}>
                <span>
                  <SlCalender />
                </span>
                Calendar
              </Link>{" "}
              <br />
              <Link to={"/inquire"}>
                <span>
                  {" "}
                  <IoNewspaperOutline />
                </span>
                School News
              </Link>{" "}
              <br />
              <Link to={"/inquire"}>
                <span>
                  {" "}
                  <ImUserTie />
                </span>
                Directory
              </Link>
            </div>
            <div className="col-md-6">
              {" "}
              <Link to={"/inquire"}>
                <span>
                  {" "}
                  <BsPersonCheckFill />
                </span>
                Careers
              </Link>
              <br />
              <Link to={"/inquire"}>
                <span>
                  {" "}
                  <FaMapMarkerAlt />
                </span>
                Campus Map
              </Link>{" "}
              <br />
              <Link to={"/inquire"}>
              <span>  <IoStorefront /></span></span>
                School Store
              </Link>{" "}
              <br />
              <Link to={"/inquire"}>
                <TbReport />
                Reporting Resources
              </Link>
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
