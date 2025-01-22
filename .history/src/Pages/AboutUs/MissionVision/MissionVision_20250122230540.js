import React from "react";
import "./mission-vision.scss";
import Hero from "../../../assets/images/justice.jpg";
import Chapel from "../../../assets/images/chapel.png";
import Mentor from "../../../assets/images/mentor.png";
import Profile1 from "../../../assets/images/pro1.jpg";
import Create from "../../../assets/images/create.jpg";
import Profile2 from "../../../assets/images/pro2.jpg";
import Secondary from "../../../assets/images/secondary.jpg";
import Profile3 from "../../../assets/images/pro3.jpg";
import PageMenu from "../../../components/PageMenu/PageMenu";
import { about } from "../../../TestData/pageMenuData";
import { PageLogo } from "../../../components/PageLogo/PageLogo";
import { ImQuotesLeft } from "react-icons/im";
import CountUp from "react-countup";
import Carousel from "react-bootstrap/Carousel";
import News from "../../../components/News/News";
import { FaLongArrowAltRight } from "react-icons/fa";

export const MissionVision = () => {
  return (
    <>
      <div className="story-div col-md-12">
        <div className="mission-banner">
          {" "}
          <img src={Hero} width="100%" />
          <div className="overlayed">
            <div className="text">
              {" "}
              <h1>Mission & Values</h1>
            </div>
          </div>
        </div>
        <PageMenu menuItems={about} />
        <PageLogo />
        <center>
          <div className="col-md-8">
            <h2>Our Mission</h2>
            <p className="first-para">
              Founded in 1915 and guided by our Catholic heritage, Canterbury is
              a college preparatory, coeducational boarding and day school for
              students in grades 9–12. The School prides itself on creating a
              community based on its Five Values—Honesty, Respect, Compassion,
              Spirituality, and Self Reliance—in which students and faculty
              forge lasting bonds and every student experiences a broad and
              challenging program in a small school setting. The School’s
              educational environment fosters academic rigor, athletic
              development, artistic enrichment, and spiritual growth, and
              strives to ensure a superior experience that prepares students for
              leading colleges and universities and for life.
            </p>
          </div>
        </center>

        <div className="sunset">
          <center>
            <div className="col-md-4">
              <h1>
                That's <span>Our Story.</span>
              </h1>
              <p>WE CAN'T WAIT TO LEARN YOURS.</p>
              <button>
                BEGIN YOUR CANTERBURY CHAPTER TODAY{" "}
                <FaLongArrowAltRight className="icon" />
              </button>
            </div>
          </center>
        </div>
      </div>
    </>
  );
};
