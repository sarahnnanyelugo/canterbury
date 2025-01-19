import React, { useEffect, useState } from "react";
import "./footer.scss"; // You can add your custom CSS for styling
import Logo from "../../assets/images/footer-logo.svg";

export const Footer = () => {
  return (
    <footer>
      <div className="footer-div">
        <center>
          <div className="col-md-2">
            <img src={Logo} width="80%" />
          </div>
        </center>
      </div>
    </footer>
  );
};
