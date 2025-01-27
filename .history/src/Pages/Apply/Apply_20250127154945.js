import React, { useState } from "react";
import Hero from "../../assets/images/girl.png";
import { PageLogo } from "../../components/PageLogo/PageLogo";
import PageMenu from "../../components/PageMenu/PageMenu";
import { admission } from "../../TestData/pageMenuData";
import "./apply.scss";
export const Apply = () => {
  const [activeIndex, setActiveIndex2] = useState(1);
  const handleClick2 = (index) => setActiveIndex2(index);
  const checkActive = (index, className) =>
    activeIndex === index ? className : "";
  const checkActive2 = (index, className) =>
    activeIndex === index ? className : "";
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
          <h3>The Admissions Process</h3>

          <div className="business-pricing-tab col-md-12 ">
            {" "}
            <div className="tabs offset-md-5">
              <button
                className={`tab ${checkActive2(1, "active2")}`}
                onClick={() => handleClick2(1)}
              >
                Business
              </button>
              <button
                className={`tab ${checkActive2(2, "active2")}`}
                onClick={() => handleClick2(2)}
                style={{ marginLeft: "20px" }}
              >
                School
              </button>
            </div>
            <div className="panels">
              <div className={`panel ${checkActive(1, "active2")}`}>
                1xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
              </div>
              <div className={`panel ${checkActive(2, "active2")}`}>2</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
