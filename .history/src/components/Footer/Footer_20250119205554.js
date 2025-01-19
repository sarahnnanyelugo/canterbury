import React, { useEffect, useState } from "react";
import "./footer.scss"; // You can add your custom CSS for styling
import Logo from "../../assets/images/footer-logo.svg";
import { Link } from "react-router-dom";
import { FaFacebook } from "react-icons/fa6";
import { RiInstagramFill } from "react-icons/ri";
import { BsTwitterX } from "react-icons/bs";

export const Footer = () => {
  return (
    <footer>
      <div className="footer-div">
        <center>
          <div className="col-md-2">
            <img src={Logo} width="70%" />
            <p>101 Aspetuck Avenue New Milford, CT 06776 P: 860-210-3800</p>
            <ul className="list-inline list-unstyled">
              <li className="list-inline-item">
                <Link to={"/"}>
                  <FaFacebook />
                </Link>
              </li>
              <li className="list-inline-item">
                <Link to={"/"}>
                  <RiInstagramFill />
                </Link>
              </li>
              <li className="list-inline-item">
                <Link to={"/"}></Link>
              </li>
              <li className="list-inline-item">
                <Link to={"/"}></Link>
              </li>
            </ul>
          </div>
        </center>
      </div>
    </footer>
  );
};
