import React from "react";
import "./welcome.scss";
import Hero from "../../../assets/images/storyHero.jpg";
import MainVid from "../../../assets/images/main-vid.mp4";

import PageMenu from "../../../components/PageMenu/PageMenu";
import { admission } from "../../../TestData/pageMenuData";
import { PageLogo } from "../../../components/PageLogo/PageLogo";
import { ImQuotesLeft } from "react-icons/im";
import CountUp from "react-countup";
import Carousel from "react-bootstrap/Carousel";
import News from "../../../components/News/News";
import { FaLongArrowAltRight } from "react-icons/fa";

export const Welcome = () => {
  return (
    <>
      <div className="story-div col-md-12">
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

        <div className="col-md-8 offset-md-2">
          <video
            className="video"
            width="100%"
            autoPlay
            loop
            muted
            playsInline
            controls
            src={MainVid}
          ></video>
        </div>

        <div className="col-md-8 offset-md-2">
          <div className="col-md-6">
            <h3>
              <span>A Message</span> from the Administrator
            </h3>
            <p>Welcome to Canterbury International School.</p>
            <p>
              Our School is first and foremost a Christian institution. We are
              dedicated to preparing children for the challenges of the future
              by instilling in them a standard of excellence while being
              socially and morally responsible
            </p>
            <p>
              Paramount in the mind of every parent/guardian is the decision on
              the quality of education their child must receive to be relevant
              in this increasingly complex era. We recognize the significance of
              this choice. Therefore, we make an extra effort to ensure that our
              parents are pleased and satisfied with the results they receive.{" "}
            </p>
            <p>
              At Canterbury, we place emphasis on the key points of excellence
              that define our pupils academically, socially and spiritually. The
              daily school routine and activities are tailored to provide
              Canterbury students a beautiful start to their bright futures.
              Year on year we strive for excellence, ensuring innovation and
              development are consistent parts of our holistic structure and
              school strategy
            </p>
          </div>
          <div className="col-md-6"></div>
        </div>

        <div className="remarkable">
          <center>
            <div className="col-md-5">
              <div className=" d-md-flex remarkable-logo">
                <div className="col-md-5">
                  <hr />
                </div>
                <div className="col-md-2">
                  <center>
                    {" "}
                    <ImQuotesLeft className="quote" />
                  </center>
                </div>

                <div className="col-md-5">
                  <hr />
                </div>
              </div>
              <p>
                The most remarkable and differentiating aspect of small boarding
                schools is that they value the equal importance of academic
                success, personal growth, and community engagement when it comes
                to learning, living, and leading.
              </p>
              <p>
                We believe that Canterbury is<em> the best</em> small boarding
                school.
              </p>
              <button>
                THE CASE FOR SMALL BOARDING SCHOOLS, THE CASE FOR CANTERBURY
              </button>
              <hr />
            </div>
          </center>
        </div>
      </div>
    </>
  );
};
