import React from "react";
import Hero from "../../assets/images/girl.png";
import { PageLogo } from "../../components/PageLogo/PageLogo";
import PageMenu from "../../components/PageMenu/PageMenu";
import { admission } from "../../TestData/pageMenuData";
import "./apply.scss";
export const Apply = () => {
  return (
    <>
      <div className="apply-div">
        {" "}
        <div className="contact-banner">
          {" "}
          <img src={Hero} width="100%" />
          <center>
            <h1>Applying to Canterbury</h1>
          </center>
        </div>
        <PageMenu menuItems={admission} />
        <PageLogo />
        <div className="col-md-8 offset-md-2 ">
          <h1>Let's do this!</h1>
          <p>
            Choosing Canterbury International means choosing a life-changing
            educational experience - and we couldn't be more excited that you're
            ready to jump in and join us!{" "}
          </p>
        </div>
      </div>
    </>
  );
};
