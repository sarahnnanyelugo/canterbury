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
          </li>
          <li>
            <Link to="/admission">Admission</Link>
          </li>
          <li>
            <Link to="/services">Academics</Link>
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
        <ul className="offset-md-7 offset-5 other-links col-md-4">
          <h6>QUICK LINKS</h6>
          <div className="d-flex">
            <div className="col-md-6">
              {" "}
              <div className="other-links-item">
                {" "}
                <Link to={"/inquire"}>
                  <span>
                    {" "}
                    <GoInfo />
                  </span>
                  Inquire
                </Link>
              </div>
              <div className="other-links-item">
                {" "}
                <Link to={"/inquire"}>
                  <span>
                    <SlCalender />
                  </span>
                  Calendar
                </Link>{" "}
              </div>
              <div className="other-links-item">
                {" "}
                <Link to={"/inquire"}>
                  <span>
                    {" "}
                    <IoNewspaperOutline />
                  </span>
                  School News
                </Link>{" "}
              </div>
              <div className="other-links-item">
                <Link to={"/inquire"}>
                  <span>
                    {" "}
                    <ImUserTie />
                  </span>
                  Directory
                </Link>
              </div>
            </div>
            <div className="col-md-6 " style={{ marginLeft: "20px" }}>
              {" "}
              <div className="other-links-item">
                {" "}
                <Link to={"/inquire"}>
                  <span>
                    {" "}
                    <BsPersonCheckFill />
                  </span>
                  Careers
                </Link>
              </div>
              <div className="other-links-item">
                {" "}
                <Link to={"/inquire"}>
                  <span>
                    {" "}
                    <FaMapMarkerAlt />
                  </span>
                  Campus Map
                </Link>{" "}
              </div>
              <div className="other-links-item">
                {" "}
                <Link to={"/inquire"}>
                  <span>
                    {" "}
                    <IoStorefront />
                  </span>
                  School Store
                </Link>{" "}
              </div>
              <div className="other-links-item">
                {" "}
                <Link to={"/inquire"}>
                  <span>
                    {" "}
                    <TbReport />
                  </span>
                  Reporting Resources
                </Link>
              </div>
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
