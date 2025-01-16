import React, { useState } from "react";
import { Home } from "../../Pages/Home/Home";
import "./top-nav.scss";
export const TopNav = ({ colorClass, navClass }) => {
  const [isActive, setIsActive] = useState(false);

  const toggleNav = () => {
    setIsActive(!isActive);
  };

  return <></>;
};
