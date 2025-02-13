import React, { useEffect, useState } from "react";
import "./footer.scss"; // You can add your custom CSS for styling
import Logo from "../../assets/images/app-logo2.png";
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
            <img src={Logo} />
            <p>101 Aspetuck Avenue New Milford, CT 06776 P: 860-210-3800</p>
            <ul className="list-inline list-unstyled socials">
              <li className="list-inline-item">
                <Link to={"/"}>
                  <FaFacebook className="social-icon" />
                </Link>
              </li>
              <li className="list-inline-item">
                <Link to={"/"}>
                  <RiInstagramFill className="social-icon" />
                </Link>
              </li>
              <li className="list-inline-item">
                <Link to={"/"}>
                  <BsTwitterX className="social-icon" />
                </Link>
              </li>
              <li className="list-inline-item">
                <Link to={"/"}>
                  <IoLogoYoutube className="social-icon" />
                </Link>
              </li>{" "}
              <li className="list-inline-item">
                <Link to={"/"}>
                  <GrGallery className="social-icon" />
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-md-5 others">
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
            <p>
              Canterbury School is an independent, college preparatory,
              coeducational boarding and day school for students in grades 9-12
              and postgraduates.
            </p>
            <small>
              Canterbury School does not discriminate on the basis of gender,
              race, color, religion, age, creed, national origin, sexual
              orientation, or disability in admission, employment, or in its
              programs and activities, including but not limited to the
              administration of its educational policies, admissions policies,
              scholarship and loan programs, and athletic and other
              School-administered programs.
            </small>
            <div>
              <small>POWERED BY HEXXONDIV GLOBAL SERVICES</small>
            </div>
          </div>
        </center>
      </div>
    </footer>
  );
};
