import React from "react";
import "./contact-us.scss";
import Hero from "../../assets/images/storyHero.jpg";
import PageMenu from "../../components/PageMenu/PageMenu";
import { PageLogo } from "../../components/PageLogo/PageLogo";
import { about } from "../../TestData/pageMenuData";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { IoMail } from "react-icons/io5";

export const ContactUs = () => {
  return (
    <>
      <div className="contact-div">
        {" "}
        <div className="contact-banner">
          {" "}
          <img src={Hero} width="100%" />
          <center>
            <h1>CONTACT US</h1>
          </center>
        </div>
        <PageMenu menuItems={about} />
        <PageLogo />
        <div className="d-md-flex col-md-10 offset-md-1">
          <div className="col-md-8">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d3964.3944850543094!2d3.5719064259288773!3d6.471612273762216!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e6!4m5!1s0x103bf7508c527ab1%3A0x2c3d97582c33c477!2s5%20Lapai%20Cl%2C%20Thomas%20estate%2C%20Aja%2C%20Lekki%20106104%2C%20Lagos!3m2!1d6.4715672!2d3.5745115!4m5!1s0x103bf750ee66194d%3A0x6b7d19af9f7e2b9b!2s5%20Lapai%20Cl%2C%20Aja%2C%20Lagos%20106104%2C%20Lagos!3m2!1d6.4715400999999995!2d3.5744232!5e0!3m2!1sen!2sng!4v1737977987903!5m2!1sen!2sng"
              height="600"
              width="100%"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <div className="col-md-4 general-information">
            <h3>General Information</h3>
            <h4>Canterbury International School</h4>
            <ul className="list-unstyled">
              <li>
                <FaLocationDot /> 5 Lapai Close, off Kemfat Street Thomas
                Estate, Ajah, Lekki, Lagos.
              </li>
              <li>
                <FaPhoneAlt /> http://www.canterburyintschools.org/
              </li>
              <li>
                <IoMail /> +234 907 678 1199 | +234 809 999 7816 | 01 - 453 7303
              </li>{" "}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};
