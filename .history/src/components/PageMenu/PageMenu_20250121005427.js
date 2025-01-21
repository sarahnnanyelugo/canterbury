import React from "react";

export const PageMenu = () => {
  return (
    <div>
      <ul className="menu list-inline list-unstyled">
        {menuItems.map((item, index) => (
          <li key={index} className="menu-item list-inline-item">
            <Link to={item.link} className="menu-link">
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
