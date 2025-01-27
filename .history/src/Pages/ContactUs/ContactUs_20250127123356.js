import React from "react";
import "./contact-us.scss";
export const ContactUs = () => {
  return (
    <>
      <div className="contact-div">
        {" "}
        <div className="story-banner">
          {" "}
          <img src={Hero} width="100%" />
          <center>
            <h1>ABOUT</h1>
          </center>
        </div>
        <PageMenu menuItems={about} />
        <PageLogo />
      </div>
    </>
  );
};
