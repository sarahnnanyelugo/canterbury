import React, { useState } from "react";
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
const menuItems = [
  {
    label: "About",
    link: "/",
    submenu: [
      { label: "Our Story", link: "our-story" },
      { label: "Mission & Values", link: "mission" },

      { label: "History", link: "history" },
      { label: "Spotlight on Staff", link: "staff" },
      { label: "Contact Us", link: "contact-us" },
    ],
  },
  {
    label: "Admission",
    link: "/admission",
    submenu: [
      { label: "Welcome", link: "/welcome" },
      { label: "How to Apply", link: "/apply" },
      { label: "Tuition & Fees", link: "/admission/tuition-fees" },
      { label: "Scholarships", link: "/admission/scholarships" },
    ],
  },
  {
    label: "Academics",
    link: "eyfs",
    submenu: [
      { label: "EYFS", link: "eyfs" },
      { label: "Primary", link: "primary" },
      { label: "Secondary", link: "secondary" },
    ],
  },
  {
    label: "Arts",
    link: "/gallery",
    submenu: [
      { label: "Performing Arts", link: "/arts/performing" },
      { label: "Visual Arts", link: "/arts/visual" },
      { label: "Music", link: "/arts/music" },
    ],
  },
  {
    label: "Athletics",
    link: "/feedback",
    submenu: [
      { label: "Teams", link: "/athletics/teams" },
      { label: "Schedule", link: "/athletics/schedule" },
      { label: "Facilities", link: "/athletics/facilities" },
    ],
  },
  {
    label: "Student Life",
    link: "/student-life",
    submenu: [
      { label: "Events", link: "/student-life/events" },
      { label: "Clubs & Organizations", link: "/student-life/clubs" },
      { label: "Housing", link: "/student-life/housing" },
    ],
  },
];

export const TopNav = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div className="top-nav">
      <div className="col-md-2">
        <Link to={"/"}>
          {" "}
          <img
            src={Logo}
            width="70%"
            alt="Logo"
            style={{ marginBottom: "-10px", marginTop: "10px" }}
          />
        </Link>
      </div>
      <input type="checkbox" id="active" style={{ display: "none" }} />
      <label htmlFor="active" className="menu-btn">
        <IoMenu />
      </label>

      <div className="wrapper">
        <ul className="menu">
          {menuItems.map((item, index) => (
            <li
              key={index}
              className="menu-item"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <Link to={item.link} className="menu-link">
                {item.label}
              </Link>
              <ul className={`submenu ${hoveredIndex === index ? "show" : ""}`}>
                {item.submenu.map((subItem, subIndex) => (
                  <li key={subIndex} className="submenu-item">
                    <Link to={subItem.link}> {subItem.label}</Link>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
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
