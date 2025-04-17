import React, { useState } from "react";
import Hero from "../../../assets/images/assembly2.png";
import { PageLogo } from "../../../components/PageLogo/PageLogo";
import PageMenu from "../../../components/PageMenu/PageMenu";
import { admission } from "../../../TestData/pageMenuData";
import "./apply.scss";
import { Link } from "react-router-dom";
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
        <div className="col-md-8 offset-md-2 apply-call mobile-pad">
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
                <span>STEP 1 |</span> Pick up Application form
              </button>
              <button
                className={`tab ${checkActive2(2, "active2")}`}
                onClick={() => handleClick2(2)}
                style={{ marginLeft: "20px" }}
              >
                <span> STEP 2 |</span> Submit Form
              </button>{" "}
              <button
                className={`tab ${checkActive2(3, "active2")}`}
                onClick={() => handleClick2(3)}
                style={{ marginLeft: "20px" }}
              >
                <span> STEP 3 |</span> Assesment
              </button>{" "}
              <button
                className={`tab ${checkActive2(4, "active2")}`}
                onClick={() => handleClick2(4)}
                style={{ marginLeft: "20px" }}
              >
                <span>STEP 4 | </span>Interview
              </button>{" "}
              <button
                className={`tab ${checkActive2(5, "active2")}`}
                onClick={() => handleClick2(5)}
                style={{ marginLeft: "20px" }}
              >
                <span>STEP 5 | </span>Admission
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
                      <a href={""} className="portal-link">
                        Canterbury Admission & Enrollment (A & E) Portal
                      </a>
                      , where you can begin your application.
                    </p>
                    <p>
                      If you are unsure about anything or have a question,
                      please do not hesitate to reach out to us - we're here to
                      help!{" "}
                    </p>
                  </div>
                  <Link className="col-md-3 offset-md-1" href={"contact-us"}>
                    <div className="outer ">
                      <div className="inner2 col-md-12">
                        {/* <img src={Girl} width="100%" /> */}
                        <center>
                          {" "}
                          <h3>Contact Us</h3>
                        </center>
                      </div>
                      <div className="overlay"></div>
                    </div>{" "}
                  </Link>
                </div>
              </div>
              <div className={`panel ${checkActive(2, "active2")}`}>
                {" "}
                <div className="col-md-12 steps-div d-md-flex">
                  {" "}
                  <div className="col-md-8 ">
                    {" "}
                    <p>
                      The best way to get to know Baylor is by visiting our
                      beautiful campus. Tours are required for the application
                      process and are provided to both parents and prospective
                      students. They also include a one-on-one conversation
                      between the admissions counselor and the student.nterests.{" "}
                    </p>
                    <p>
                      To schedule a tour of campus, please contact the admission
                      office at 423-267-5902 or admission@baylorschool.org.
                      Alternatively, you may schedule a tour through the
                      <a href={""} className="portal-link">
                        Admission & Enrollment (A & E) Portal.
                      </a>
                    </p>
                    <p>
                      Please note that Applications should be on file prior to
                      this visit.
                    </p>
                  </div>
                  <Link
                    className="col-md-3 col-8 offset-md-1"
                    href={"contact-us"}
                  >
                    <div className="outer ">
                      <div className="inner3 col-md-12">
                        {/* <img src={Girl} width="100%" /> */}
                        <center>
                          {" "}
                          <h3>Create Portal</h3>
                        </center>
                      </div>
                      <div className="overlay"></div>
                    </div>{" "}
                  </Link>
                </div>
              </div>{" "}
              <div className={`panel ${checkActive(3, "active2")}`}>
                {" "}
                <div className="col-md-12 steps-div d-md-flex">
                  {" "}
                  <div className="col-md-8 ">
                    {" "}
                    <p>
                      See our upcoming slate of admission events below for
                      Middle School, Upper School Day, and Upper School Boarding
                      applicants:
                    </p>
                    <p>
                      <a href={""} className="portal-link">
                        Middle School Admission Events
                      </a>{" "}
                      <br />
                      <a href={""} className="portal-link">
                        Upper School Day Admission Events
                      </a>
                      <br />
                      <a href={""} className="portal-link">
                        Upper School Boarding Admission Events
                      </a>
                    </p>
                  </div>
                  <Link className="col-md-3 offset-md-1" href={"contact-us"}>
                    <div className="outer ">
                      <div className="inner col-md-12">
                        {/* <img src={Girl} width="100%" /> */}
                        <center>
                          {" "}
                          <h5>Arrange Your Visit</h5>
                        </center>
                      </div>
                      <div className="overlay"></div>
                    </div>{" "}
                  </Link>
                </div>
              </div>{" "}
              <div className={`panel ${checkActive(4, "active2")}`}>
                {" "}
                <div className="col-md-12 steps-div d-md-flex">
                  {" "}
                  <div className="col-md-8 ">
                    {" "}
                    <p>
                      Your Application Checklist is accessed via your{" "}
                      <Link href={""} className="portal-link">
                        Portal
                      </Link>{" "}
                      and contains a list of documents and other pieces of
                      information to submit.
                    </p>
                    <p>
                      As always, please don't hesitate to reach out to the
                      Baylor Admission team if you have any questions at all
                      about any of the requested materials!
                    </p>
                  </div>
                  <Link className="col-md-3 offset-md-1" href={"contact-us"}>
                    <div className="outer ">
                      <div className="inner4 col-md-12">
                        {/* <img src={Girl} width="100%" /> */}
                        <center>
                          {" "}
                          <h5>View application</h5>
                        </center>
                      </div>
                      <div className="overlay"></div>
                    </div>{" "}
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <hr />
        </div>
        <center>
          {" "}
          <h4
            style={{
              fontFamily: "figtreeB",
              color: "#54020a",
              marginTop: "40px",
            }}
          >
            As you take this bold step, feel free to peruse through our hand
            book below
          </h4>
        </center>
        <div className="col-md-8 offset-md-2">
          {" "}
          <div className=" col-md-12">
            <a
              href="https://online.flippingbook.com/view/744478846/"
              class="fbo-embed"
              data-fbo-id="7ff7898028"
              data-fbo-ratio="3:2"
              data-fbo-lightbox="yes"
              data-fbo-width="100%"
              data-fbo-height="auto"
              data-fbo-version="1"
              style={{ maxWidth: "100%" }}
            >
              Canterbury_Prospectus (Revised)-pages
            </a>
            <script
              async
              defer
              src="https://online.flippingbook.com/EmbedScriptUrl.aspx?m=redir&hid=744478846"
            ></script>
          </div>
        </div>{" "}
        <center>
          <div className="sign-off col-md-7">
            <center>
              <p>
                If you have any additional questions along the way, please call
                the admission office at <br />+234 818 868 9843 or email us at
                <a href="mailto:  admission@canterburyint.org">
                  {" "}
                  admission@canterburyint.org
                </a>
              </p>
            </center>
          </div>
        </center>
        <hr />
        <div className="sunset">
          <center>
            <div className="col-md-5">
              <h1>
                Begin <span style={{ color: "#de7c0d" }}>Your Journey</span>
              </h1>
              <p style={{ color: "#fff" }}>WE CAN'T WAIT TO HAVE YOU.</p>
              <button>Apply Today </button>
            </div>
          </center>
        </div>
      </div>
    </>
  );
};
