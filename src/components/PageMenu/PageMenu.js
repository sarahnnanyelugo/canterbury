import React from "react";
import { Link } from "react-router-dom";
import "./page-menu.scss"; // Import the CSS file for styling
import { MdHome } from "react-icons/md";
import { Desktop, TabletAndBelow } from "../../Utils/mediaQueries";
import Accordion from "react-bootstrap/Accordion";
import { CiMenuKebab } from "react-icons/ci";
import ListGroup from "react-bootstrap/ListGroup";

const PageMenu = ({ menuItems }) => {
  return (
    <>
      <Desktop>
        {" "}
        <div className="page-menu offset-md-1 col-md-10">
          {" "}
          <nav className="menu  ">
            <div className="">
              {" "}
              <Link to={"/"} className="home-icon ">
                <MdHome />
              </Link>
            </div>
            {menuItems.map((item, index) => (
              <div key={index} className="menu-item">
                <Link to={item.link} className="menu-link">
                  {item.label}
                </Link>
              </div>
            ))}
          </nav>
        </div>
      </Desktop>
      <TabletAndBelow>
        {" "}
        <div className="mobile-menu col-10 offset-1">
          {" "}
          <Accordion defaultActiveKey="">
            <Accordion.Item eventKey="0">
              <Accordion.Header className="d-flex">
                <h6 style={{ flexGrow: 1 }}> MENU </h6>
                <span>
                  <CiMenuKebab />
                </span>
              </Accordion.Header>
              <Accordion.Body>
                <ul className="menu  ">
                  <div className="">
                    {" "}
                    <Link to={"/"} className="home-icon ">
                      <MdHome />
                    </Link>
                  </div>

                  {menuItems.map((item, index) => (
                    <li key={index} className="menu-item">
                      <Link to={item.link} className="menu-link">
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </div>
      </TabletAndBelow>
    </>
  );
};

export default PageMenu;
