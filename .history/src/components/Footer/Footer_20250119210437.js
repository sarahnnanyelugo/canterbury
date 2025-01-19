import React, { useEffect, useState } from "react";
import "./footer.scss"; // You can add your custom CSS for styling
import Logo from "../../assets/images/footer-logo.svg";
import { Link } from "react-router-dom";
import { FaFacebook } from "react-icons/fa6";
import { RiInstagramFill } from "react-icons/ri";
import { BsTwitterX } from "react-icons/bs";
import { IoLogoYoutube } from "react-icons/io";
import { GrGallery } from "react-icons/gr";

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
                <Link to={"/"}>
                  <BsTwitterX />
                </Link>
              </li>
              <li className="list-inline-item">
                <Link to={"/"}>
                  <IoLogoYoutube />
                </Link>
              </li>{" "}
              <li className="list-inline-item">
                <Link to={"/"}>
                  <GrGallery />
                </Link>
              </li>
            </ul>
            <ul className="list-unstyled list-inline-item">
              <li className="list-inline-item">
                <Link to={"/"}>EMPLOYMENT</Link>
              </li>
              <li className="list-inline-item">
                <Link to={"/"}>CALENDAR</Link>
              </li>
              <li className="list-inline-item">
                <Link to={"/"}>TAKE A TOUR</Link>
              </li>
              <li className="list-inline-item">
                <Link to={"/"}>PRIVACY POLICY</Link>
              </li>
            </ul>
          </div>
          <div className="col-md-5">
            <p>
              Canterbury School is an independent, college preparatory,
              coeducational boarding and day school for students in grades 9-12
              and postgraduates.
            </p>
            <small>Canterbury School does not discriminate on the basis of gender, race, color, religion, age, creed, national origin, sexual orientation, or disability in admission, employment, or in its programs and activities, including but not limited to the administration of its educational policies, admissions policies, scholarship and loan programs, and athletic and other School-administered programs.

</small>

    </center>
      </div>
    </footer>
  );
};
