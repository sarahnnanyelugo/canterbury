import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import "./top-nav.scss";
import { IoMenu } from "react-icons/io5";
import Logo from "../../assets/images/app-logo.png";
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
      { label: "Our Facilities", link: "our-facilities" },
      { label: "Spotlight on Staff", link: "our-staff" },
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
    label: "Facilities",
    link: "/facilities",
    submenu: [
      { label: "EYFS", link: "eyfs" },
      { label: "Primary", link: "primary" },
      { label: "Secondary", link: "secondary" },
    ],
  },
  {
    label: "Student Life",
    link: "/student-life",
    submenu: [
      { label: "Events", link: "/student-life/events" },
      { label: "Clubss", link: "/student-life/clubs" },
      { label: "Boarding", link: "/student-life/housing" },
      { label: "Athletics", link: "/feedback" },
      { label: "Arts", link: "/gallery" },
    ],
  },
];

export const TopNav = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);
  return (
    <>
      {" "}
      <div className="top-nav">
        <div className="col-md-2 col-8">
          <Link to={"/"}>
            {" "}
            <img
              src={Logo}
              width="22%"
              alt="Logo"
              style={{ marginBottom: "-10px", marginTop: "10px" }}
            />
          </Link>
        </div>
        <input type="checkbox" id="active" style={{ display: "none" }} />
        <label htmlFor="active" className="menu-btn" onClick={toggleMenu}>
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

                {/* {isOpen && ( */}
                <ul
                  className={`submenu ${hoveredIndex === index ? "show" : ""}`}
                >
                  {item.submenu.map((subItem, subIndex) => (
                    <li
                      key={subIndex}
                      className="submenu-item"
                      onClick={closeMenu}
                    >
                      <Link to={subItem.link} type="checkbox" id="active">
                        {" "}
                        {subItem.label}
                      </Link>
                    </li>
                  ))}
                </ul>
                {/* )} */}
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
        <div className="col-md-12  col-12" style={{ width: "100%" }}>
          <Outlet />
        </div>
      </div>
    </>
  );
};
