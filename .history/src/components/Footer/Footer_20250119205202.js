import React, { useEffect, useState } from "react";
import "./footer.scss"; // You can add your custom CSS for styling
import Logo from "../../assets/images/footer-logo.svg";

export const Footer = () => {
  return (
    <footer>
      <div className="footer-div">
        <center>
          <div className="col-md-2">
            <img src={Logo} width="70%" />
            <p>101 Aspetuck Avenue New Milford, CT 06776 P: 860-210-3800</p>
            <ul className="list-inline list-unstyled"><li><</li></ul>
          </div>
        </center>
      </div>
    </footer>
  );
};
