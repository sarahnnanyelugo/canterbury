import React from "react";
import "./welcome.scss";
import Hero from "../../../assets/images/eyfs3.png";
import Admin from "../../../assets/images/admin2.png";
import MainVid from "../../../assets/images/main-vid.mp4";

import PageMenu from "../../../components/PageMenu/PageMenu";
import { admission } from "../../../TestData/pageMenuData";
import { PageLogo } from "../../../components/PageLogo/PageLogo";
import { ImQuotesLeft } from "react-icons/im";
import CountUp from "react-countup";
import Carousel from "react-bootstrap/Carousel";
import News from "../../../components/News/News";
import { FaLongArrowAltRight } from "react-icons/fa";
import { Action } from "./Action/Action";
import { Link } from "react-router-dom";
import { Desktop, TabletAndBelow } from "../../../Utils/mediaQueries";
import { Purpose } from "../../Home/Purpose/Purpose";
import { CiMail } from "react-icons/ci";
import { FaLinkedin } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";

export const Welcome = () => {
  return (
    <>
      <div className="welcome-div col-md-12">
        <div className="story-banner">
          {" "}
          <img src={Hero} width="100%" />
          <center>
            <h1>WELCOME</h1>
          </center>
        </div>
        <PageMenu menuItems={admission} />
        <PageLogo />
        <center>
          <div className="col-md-6">
            <h2>Welcome to Canterbury!</h2>
            <p className="first-para">
              If you're ready for a transformational journey filled with
              challenging academics, purposeful growth, and an engaged community
              life, you've come to the right place. You've found more than a
              school. You've found your new home on our hilltop.
            </p>
          </div>
        </center>

        {/*<div className="col-md-8 offset-md-2">*/}
        {/*  <video*/}
        {/*    className="video"*/}
        {/*    width="100%"*/}
        {/*    autoPlay*/}
        {/*    loop*/}
        {/*    muted*/}
        {/*    playsInline*/}
        {/*    controls*/}
        {/*    src={MainVid}*/}
        {/*  ></video>*/}
        {/*</div>*/}

        <div className="col-md-10 offset-md-1 d-flex speech">
          <div className="col-md-6 col-7 admin-profile">
            <div className="d-flex">
              {" "}
              <img src={Admin} width="100%" className="admin-photo" />
              <TabletAndBelow>
                <div className="col-8 mt-2">
                  <div style={{ flexGrow: 1 }}>
                    <h6>Mrs Olamide Olaitan-Karunwi</h6>
                    <p>Administrator; Canterbury International Schools </p>
                  </div>
                  <ul className="list-unstyle list-inline">
                    <li className="list-inline-item">
                      <Link to={"/"} target="_blank">
                        <CiMail />
                      </Link>
                    </li>{" "}
                    <li className="list-inline-item">
                      <Link to={"/"} target="_blank">
                        <FaLinkedin />
                      </Link>
                    </li>
                    <li className="list-inline-item">
                      <Link to={"/"} target="_blank">
                        <FaInstagramSquare />
                      </Link>
                    </li>
                  </ul>
                </div>
              </TabletAndBelow>
            </div>
            <Desktop>
              <div className="d-flex mt-2">
                <div style={{ flexGrow: 1 }}>
                  <h6>Mrs Olamide Olaitan-Karunwi</h6>
                  <p>Canterbury Schools Administrator</p>
                </div>
                <ul className="list-unstyle list-inline">
                  <li className="list-inline-item">
                    <Link to={"/"} target="_blank">
                      <CiMail />
                    </Link>
                  </li>{" "}
                  <li className="list-inline-item">
                    <Link to={"/"} target="_blank">
                      <FaLinkedin />
                    </Link>
                  </li>
                  <li className="list-inline-item">
                    <Link to={"/"} target="_blank">
                      <FaInstagramSquare />
                    </Link>
                  </li>
                </ul>
              </div>
            </Desktop>
          </div>
          <div className="col-md-7 message col-9">
            <div className="message-heading col-md-12">
              {" "}
              <h2>
                <span>A Message</span> <br />
                from the Administrator
              </h2>
            </div>
            <div className="content">
              {" "}
              <p>Welcome to Canterbury International School.</p>
              <p>
                Our School is first and foremost a Christian institution. We are
                dedicated to preparing children for the challenges of the future
                by instilling in them a standard of excellence while being
                socially and morally responsible
              </p>
              <p>
                Paramount in the mind of every parent/guardian is the decision
                on the quality of education their child must receive to be
                relevant in this increasingly complex era. We recognize the
                significance of this choice. Therefore, we make an extra effort
                to ensure that our parents are pleased and satisfied with the
                results they receive.{" "}
              </p>
              <p>
                At Canterbury, we place emphasis on the key points of excellence
                that define our pupils academically, socially and spiritually.
                The daily school routine and activities are tailored to provide
                Canterbury students a beautiful start to their bright futures.
                Year on year we strive for excellence, ensuring innovation and
                development are consistent parts of our holistic structure and
                school strategy
              </p>
              <p>
                Our education style is designed to create an interactive
                atmosphere between the staff, students and parents through both
                academia and non-academic activities. Our daily routines,
                together with our co-curricular and non-academic involvements
                aim to distinctly set us apart from our contemporaries. Our
                reinvented methods of teaching and accustomed approach have been
                made suitable for every child, ensuring they are able to
                discover their potential and exceed every expectation. At
                Canterbury Schools, moulding and empowering your children to
                make global impact is our ultimate priority
              </p>
              <p>Once again, we welcome you on board. </p>
            </div>
          </div>
        </div>

        <div className="remarkable mobile-pad">
          <center>
            <div className="col-md-5">
              <div className=" d-flex remarkable-logo">
                <div className="col-md-5 col-5">
                  <hr />
                </div>
                <div className="col-md-2 col-2">
                  <center>
                    {" "}
                    <ImQuotesLeft className="quote" />
                  </center>
                </div>

                <div className="col-md-5 col-5">
                  <hr />
                </div>
              </div>
              <p>
                Our students will be <span>bold</span> and{" "}
                <span>visionary</span>, yet <span>compassionate</span>; they
                possess a <span>global perspective </span>and will leave us
                ready to embrace the<span> opportunities</span> of the future.
              </p>
            </div>
          </center>
        </div>
        <br />
        <br />
        <Purpose />
        <br />
        <br />
      </div>
    </>
  );
};
