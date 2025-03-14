import React, { useEffect, useState } from "react";
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
import { Desktop, TabletAndBelow } from "../../Utils/mediaQueries";
import Accordion from "react-bootstrap/Accordion";
import { useLocation } from "react-router-dom";

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

export const TopNav = ({openNav}) => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [isOpen, setIsOpen] = useState(()=>{return openNav!=undefined?openNav:false});
  const toggleMenu = () => setIsOpen(true);
  const closeMenu = () => setIsOpen(false);
 const { pathname } = useLocation();

  useEffect(() => {
    setTimeout(() =>{
      closeMenu()
    }, 0);
  }, [pathname]);
  useEffect(()=>{
    // Find the checkbox and update its checked state
    const checkbox = document.getElementById("active");
    if (checkbox) {
      checkbox.checked = isOpen;
      // alert('checking checkbox');
    }
  },[]) 
   useEffect(()=>{
    // Find the checkbox and update its checked state
    const checkbox = document.getElementById("active");
    if (checkbox) {
      checkbox.checked = isOpen;
      // alert('checking checkbox');
    }
  },[isOpen])
  return (
    <>
      {" "}
      <div className="top-nav">
        <div className="col-md-2 col-8 app-logo">
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
        <label htmlFor="active" className="menu-btn" onMouseOver={toggleMenu}>
          <IoMenu />
        </label>

        <div className="wrapper">
          <Desktop >
            {" "}
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
                    className={`submenu ${
                      hoveredIndex === index ? "show" : ""
                    }`}
                  >
                    {item.submenu.map((subItem, subIndex) => (
                      <li
                        key={subIndex}
                        className="submenu-item"
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
          </Desktop>

          <TabletAndBelow>
            <div className="mobile-menu-accordion">
              {" "}
              <Accordion>
                {menuItems.map((item, index) => (
                  <Accordion.Item eventKey={index.toString()} key={index}>
                    <Accordion.Header>{item.label}</Accordion.Header>
                    <Accordion.Body>
                      <div className="list-unstyled mobile-sub-menu">
                        {" "}
                        {item.submenu.map((sub, subIndex) => (
                          <li key={subIndex}>
                            <Link to={sub.link}>{sub.label}</Link>
                          </li>
                        ))}
                      </div>
                    </Accordion.Body>
                  </Accordion.Item>
                ))}
              </Accordion>
            </div>
          </TabletAndBelow>

          <ul className="offset-md-7  other-links col-md-4">
            <h6>QUICK LINKS</h6>
            <div className="d-flex">
              <div className="col-md-6 col-6" style={{ width: "70%" }}>
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
              </div>
              <div
                className="col-md-6 col-6 "
                style={{
                  marginLeft: "20px",

                  width: "70%",
                }}
              >
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
                  <Link to={"/inquire"}>
                    <span>
                      {" "}
                      <ImUserTie />
                    </span>
                    Directory
                  </Link>
                </div>
                <div className="other-links-item">
                  {" "}
                  <Link to={"gallery"}>
                    <span>
                      {" "}
                      <IoStorefront />
                    </span>
                    Photo Gallery
                  </Link>{" "}
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
