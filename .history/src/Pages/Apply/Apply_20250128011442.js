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

          <div className="admission-tab col-md-12 ">
            {" "}
            <div className="tabs ">
              <button
                className={`tab ${checkActive2(1, "active2")}`}
                onClick={() => handleClick2(1)}
              >
                <span>STEP 1 |</span> SUBMIT APPLICATION
              </button>
              <button
                className={`tab ${checkActive2(2, "active2")}`}
                onClick={() => handleClick2(2)}
                style={{ marginLeft: "20px" }}
              >
                <span> STEP 2 |</span> VISIT
              </button>{" "}
              <button
                className={`tab ${checkActive2(3, "active2")}`}
                onClick={() => handleClick2(3)}
                style={{ marginLeft: "20px" }}
              >
                <span> STEP 3 |</span> REGISTER FOR ADMISSION EVENTS
              </button>{" "}
              <button
                className={`tab ${checkActive2(4, "active2")}`}
                onClick={() => handleClick2(4)}
                style={{ marginLeft: "20px" }}
              >
                <span>STEP 4 | </span>COMPLETE APPLICATION CHECKLIST
              </button>
            </div>
            <div className="panels col-md-12">
              <div className={`panel ${checkActive(1, "active2")}`}>
                <div className="col-md-12 steps-div d-md-flex">
                  {" "}
                  <div className="col-md-8 ">
                    {" "}
                    <p>
                      Whether you are applying to Middle School or Upper School,
                      boarding or day, we will request information about past
                      and present academic performance and personal interests.{" "}
                    </p>
                    <p>
                      To start, create an account in your{" "}
                      <a>Canterbury Admission & Enrollment (A & E) Portal</a>,
                      where you can begin your application.
                    </p>
                    <p>
                      If you are unsure about anything or have a question,
                      please do not hesitate to reach out to us - we're here to
                      help!{" "}
                    </p>
                  </div>
                  <div className="col-md-4">
                    <div className="outer ">
                      <div className="inner col-md-10"></div>
                    </div>{" "}
                  </div>
                </div>
              </div>
              <div className={`panel ${checkActive(2, "active2")}`}>
                {" "}
                <div className="col-md-12 steps-div">
                  {" "}
                  <p> </p>
                </div>
              </div>{" "}
              <div className={`panel ${checkActive(3, "active2")}`}>
                {" "}
                <div className="col-md-12 steps-div">
                  {" "}
                  <p> </p>
                </div>
              </div>{" "}
              <div className={`panel ${checkActive(4, "active2")}`}>
                {" "}
                <div className="col-md-12 steps-div">
                  {" "}
                  <p> </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
