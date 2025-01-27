import React from "react";
// import Hero from "../../assets/images/girl.png";
import Hero from "../../assets/images/height.mp4";
import { PageLogo } from "../../components/PageLogo/PageLogo";
import PageMenu from "../../components/PageMenu/PageMenu";
import { admission } from "../../TestData/pageMenuData";
import "./apply.scss";
export const Apply = () => {
  return (
    <>
      <div className="apply-div">
        {" "}
        {/* <div className="contact-banner">
          {" "}
          <img src={Hero} width="100%" />
          <center>
            <h1>HOW TO APPLY</h1>
          </center>
        </div> */}
        <video
          className="video"
          width="100%"
          autoPlay
          loop
          muted
          playsInline
          controls
          src={Hero}
        ></video>
        <PageMenu menuItems={admission} />
        <PageLogo />
      </div>
    </>
  );
};
