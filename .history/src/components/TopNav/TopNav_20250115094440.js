import React, { useState } from "react";
import { Home } from "../../Pages/Home/Home";
import "./top-nav.scss";
export const TopNav = ({ colorClass, navClass }) => {
  const [isActive, setIsActive] = useState(false);

  const toggleNav = () => {
    setIsActive(!isActive);
  };

  return (
    <>
      <div className={`container ${colorClass}`}>
        <nav className={`nav ${navClass}`}>
          <div
            className={`nav__trigger ${isActive ? "active" : ""}`}
            onClick={toggleNav}
          >
            <i></i>
          </div>
          <ul className={`${navClass}__list ${isActive ? "active" : ""}`}>
            <a className={`${navClass}__link`} href="#">
              1
            </a>
            <a className={`${navClass}__link`} href="#">
              2
            </a>
            <a className={`${navClass}__link`} href="#">
              3
            </a>
            <a className={`${navClass}__link`} href="#">
              4
            </a>
          </ul>
        </nav>
      </div>
    </>
  );
};
