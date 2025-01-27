import React from "react";
import "./contact-us.scss";
import Hero from "../../assets/images/storyHero.jpg";
import PageMenu from "../../components/PageMenu/PageMenu";
import { PageLogo } from "../../components/PageLogo/PageLogo";
import { about } from "../../TestData/pageMenuData";
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
      </div>
    </>
  );
};
