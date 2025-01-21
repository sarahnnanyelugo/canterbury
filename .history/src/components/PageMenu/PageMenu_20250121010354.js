import React from "react";
import { Link } from "react-router-dom";
import "./page-menu.scss"; // Import the CSS file for styling

const PageMenu = ({ menuItems }) => {
  return (
    <div className="page-menu">
      {" "}
      <nav className="menu">
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
