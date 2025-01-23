import React from "react";
import "./mission-vision.scss";
import Hero from "../../../assets/images/justice.jpg";
import Chapel from "../../../assets/images/chapel.png";
import Mentor from "../../../assets/images/mentor.png";
import Profile1 from "../../../assets/images/pro1.jpg";
import Create from "../../../assets/images/create.jpg";
import Profile2 from "../../../assets/images/pro2.jpg";
import Res from "../../../assets/images/res.jpg";
import Empathy from "../../../assets/images/empathy.webp";
import Curious from "../../../assets/images/curious.webp";
import PageMenu from "../../../components/PageMenu/PageMenu";
import { about } from "../../../TestData/pageMenuData";
import { PageLogo } from "../../../components/PageLogo/PageLogo";
import { ImQuotesLeft } from "react-icons/im";
import CountUp from "react-countup";
import Carousel from "react-bootstrap/Carousel";
import News from "../../../components/News/News";
import { FaLongArrowAltRight } from "react-icons/fa";
import Values from "./Values/Values";

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
            <p className="mission-statement">
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
        <center>
          {" "}
          <div className="col-md-9 my-quote">
            <p>
              Even in your moments of obscurity, strive for excellence, for when
              the opportunities you so desire come by, all you will have to show
              are your works, and by then, there may be no time for editing.
            </p>
          </div>
        </center>
        <div className="col-md-8 offset-md-2 d-flex mission-values">
          <div className="mission-div col-md-4">
            <hr />
            <center>
              <p>
                "To foster in our students both the ability and the desire to
                make a positive difference in the world."
              </p>

              <h1>
                Our <span>Mi</span>ssion
              </h1>
            </center>
            <hr />
          </div>
          <div className="col-md-8 row row-cols-2 row-cols-lg-2 g-2 g-lg-5">
            <Values
              src={Res}
              heading="RESILIENCE"
              text="Canterbury students face challenges with determination, resilience, and perseverance."
            />{" "}
            <Values
              src={Res}
              heading="HONOR"
              text="Canterbury students act with honor, integrity, responsibility, and conviction of character in all aspects of their daily life."
            />
          </div>
        </div>{" "}
        <div className="col-md-8 offset-md-2 row row-cols-2 row-cols-lg-3 g-2 g-lg-5 mt-1">
          <Values
            src={Res}
            heading="POSITIVITY
"
            text="Canterbury students embrace and create opportunities to make a positive difference in their communities and in the world.

"
          />{" "}
          <Values
            // photo={Empathy}
            heading="EMPATHY
"
            src={Empathy}
            text="Canterbury students care for, understand, and respect the humanity of all members of the global community.

"
          />{" "}
          <Values
            src={Curious}
            heading="CURIOSITY"
            text="Canterbury students seek knowledge and pursue a deeper understanding of the world.

"
          />
        </div>
        <div className="col-md-8 offset-md-2 val-acc">
          <div class="accordion container">
            <span class="instructions">Mouse Over</span>

            <div>
              <h5>Academics</h5>

              <p>
                At Canterbury School, academic excellence is central to our
                philosophy. We emphasize critical thinking, creativity, and
                intellectual curiosity, preparing students to excel in their
                studies and beyond. Our dedicated teachers and supportive
                community inspire students to develop a lifelong passion for
                learning and to make meaningful contributions to society.
              </p>
            </div>

            <div>
              <h5>Hello, I'm a Title</h5>

              <p>
                Pellentesque habitant morbi tristique senectus et netus et
                malesuada fames ac turpis egestas. Vestibulum tortor quam,
                feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu
                libero sit amet quam egestas semper. Aenean ultricies mi vitae
                est. Mauris placerat eleifend leo. Quisque sit amet est et
              </p>
            </div>

            <div>
              <h5>Hello, I'm a Title</h5>

              <p>
                Pellentesque habitant morbi tristique senectus et netus et
                malesuada fames ac turpis egestas. Vestibulum tortor quam,
                feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu
                libero sit amet quam egestas semper. Aenean ultricies mi vitae
                est. Mauris placerat eleifend leo. Quisque sit amet est et
                sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum
              </p>
            </div>

            <div>
              <h5>Hello, I'm a Title</h5>

              <p>
                Pellentesque habitant morbi tristique senectus et netus et
                malesuada fames ac turpis egestas. Vestibulum tortor quam,
                feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu
                libero sit amet quam egestas semper. Aenean ultricies mi vitae
                est. Mauris placerat eleifend leo. Quisque sit amet est et
                sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum
              </p>
            </div>
          </div>
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
