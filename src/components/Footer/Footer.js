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
            <p>
              5 Lapai Close, off Kemfat Street Thomas Estate, Ajah, Lekki,
              Lagos.
            </p>
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
                <Link to={"/apply"}>How to Apply</Link>
              </li>
              <li className="list-inline-item">
                <Link to={"/calendar"}>CALENDAR</Link>
              </li>
              <li className="list-inline-item">
                <Link to={"/dates"}>IMPORTANT DATES</Link>
              </li>
              <li className="list-inline-item">
                <Link to={"/"}>PRIVACY POLICY</Link>
              </li>
            </ul>
            <p>
              At Canterbury International School, we are committed to fostering
              academic excellence and nurturing the unique potential of each
              student. Our holistic approach to education ensures that learners
              are equipped with the knowledge, skills, and values necessary to
              thrive in an ever-evolving world.
            </p>
            <small>
              At Canterbury International Secondary School, we embrace a global
              community, welcoming students from diverse cultural backgrounds.
              Our inclusive environment ensures that every student feels valued
              and supported, with tailored programs and resources designed to
              ease the transition for foreign students. Through cultural
              exchange initiatives and dedicated support systems, we foster a
              sense of belonging, enabling all students to thrive academically
              and socially in their new environment.​
            </small>
          </div>
        </center>
      </div>
    </footer>
  );
};
