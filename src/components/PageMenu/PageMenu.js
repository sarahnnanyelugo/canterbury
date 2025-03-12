import React from "react";
import { Link } from "react-router-dom";
import "./page-menu.scss"; // Import the CSS file for styling
import { MdHome } from "react-icons/md";

const PageMenu = ({ menuItems }) => {
  return (
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
  );
};

export default PageMenu;
