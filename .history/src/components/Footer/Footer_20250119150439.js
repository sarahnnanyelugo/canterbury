import React, { useEffect, useState } from "react";
import "./footer.scss"; // You can add your custom CSS for styling

export const Footer = () => {
  return (
    <div
      style={{
        height: "1000px",
        background: "blue",
        position: "absolute",
        zIndex: "-1",
        bottom: "0",
        left: "0",
      }}
    ></div>
  );
};
