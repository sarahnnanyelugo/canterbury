import React, { useEffect } from "react";
import "./mission-vision.scss";
import Hero from "../../../assets/images/primary-class.png";
import Res from "../../../assets/images/chess2.png";
import Empathy from "../../../assets/images/pastoral2.png";
import Academics from "../../../assets/images/primary.png";
import Curious from "../../../assets/images/bio-lab.png";
import Honour from "../../../assets/images/primary-chess.png";
import Positive from "../../../assets/images/primary-boy3.png";
import Character from "../../../assets/images/story-time.png";

import PageMenu from "../../../components/PageMenu/PageMenu";
import { about } from "../../../TestData/pageMenuData";
import { PageLogo } from "../../../components/PageLogo/PageLogo";
import { ImQuotesLeft } from "react-icons/im";
import CountUp from "react-countup";
import Carousel from "react-bootstrap/Carousel";
import News from "../../../components/News/News";
import { FaLongArrowAltRight } from "react-icons/fa";
import Values from "./Values/Values";
import { OurWords } from "../../../components/OurWords/OurWords";
import { Desktop, TabletAndBelow } from "../../../Utils/mediaQueries";

export const MissionVision = () => {
  return (
    <>
      <div className="misson-div col-md-12">
        <div className="mission-banner2">
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
          <div className="col-md-8 col-12 mission-quote mobile-pad">
            <h2>Our Mission</h2>
            <p className="mission-statement ">
              We inspire, empower and equip our pupils to make global impact and
              attain academic excellence.
            </p>
            <p>
              The school is continuously building a God fearing environment
              where pupils are taught and prepared for the Kingdom of God.
              Canterbury is a place of hardworking, determination and success.
              Our students are loved and part of a family.
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
        <TabletAndBelow>
          {" "}
          <center>
            {" "}
            <div className="mission-div col-md-4">
              <hr />
              <center>
                <p>
                  "Canterbury International School will equip pupil’s and
                  students academically, socially and spiritually; building
                  their self esteem to make a global impact."
                </p>

                <h1>
                  Our <span>Vi</span>sion
                </h1>
              </center>
              <hr />
            </div>
          </center>
        </TabletAndBelow>
        <div className="col-md-10 offset-md-1 d-flex mission-values">
          <Desktop>
            {" "}
            <div className="mission-div col-md-4">
              <hr />
              <center>
                <p>
                  "To foster in our students both the ability and the desire to
                  make a positive difference in the world."
                </p>

                <h1>
                  Our <span>Vi</span>sion
                </h1>
              </center>
              <hr />
            </div>
          </Desktop>
          <div className="col-md- row row-cols-2 row-cols-lg-3 g-2 g-lg-5 mobile-pad">
            <Values
              src={Res}
              heading="HOBBIES"
              text="We believe hobbies enrich the soul. At Canterbury, students are encouraged to pursue their passions, discover hidden talents, and find joy in creativity and expression."
            />{" "}
            <Values
              src={Character}
              heading="CHARACTER"
              text="At Canterbury, character is not just taught—it’s lived daily. Our students grow into individuals who act with integrity, humility, and unwavering moral strength."
            />{" "}
            <Values
              src={Honour}
              heading="FAMILY LIFE"
              text="We value the strength of family. At Canterbury, students learn that home is their first classroom, where love, respect, and values are rooted and reinforced."
            />
          </div>
        </div>{" "}
        <div className="col-md-10 offset-md-1 row row-cols-2 row-cols-lg-4 g-2 g-lg-5 mt-1 mobile-pad">
          <Values
            src={Positive}
            heading="INTERESTS
"
            text="Every student is unique. At Canterbury, we celebrate individual interests, guiding learners to explore what excites them and turn their passions into purpose-driven paths.



"
          />{" "}
          <Values
            // photo={Empathy}
            heading="EMPATHY
"
            src={Empathy}
            text="Empathy is woven into the Canterbury experience. Our students learn to lead with compassion, listen with understanding, and care deeply about the world around them.
"
          />{" "}
          <Values
            src={Curious}
            heading="CURIOSITY"
            text="Curiosity is the heartbeat of learning. At Canterbury, we encourage students to ask questions, seek deeper understanding, and approach the world with an open, eager mind.


"
          />
          <Values
            src={Academics}
            heading="Academics"
            text="Academic excellence at Canterbury goes beyond grades; it’s about nurturing disciplined minds, igniting curiosity, and empowering students to own their learning journey with confidence.



"
          />
        </div>
        <h1 className="core-values offset-md-2 mobile-pad">
          OUR CORE <span>values</span>
        </h1>
        <div className="col-md-8 offset-md-2 val-acc">
          <div class="accordion container">
            <div>
              <h4>
                Com<span>mit</span>ment
              </h4>

              <p>
                We believe that success is born out of unwavering dedication. At
                Canterbury, commitment means showing up, staying the course, and
                giving your best in all pursuits—academic, personal, and
                communal. We instill in our students a deep sense of
                responsibility and perseverance, preparing them to rise above
                challenges and push boundaries in pursuit of their goals.
              </p>
            </div>
            <div>
              <h4>
                Inte<span>gri</span>ty
              </h4>

              <p>
                At Canterbury International Secondary School, integrity is the
                foundation of everything we do. We cultivate a culture of
                honesty, transparency, and moral courage—encouraging our
                students to always choose what is right, even when no one is
                watching. Our commitment to truth and accountability empowers
                learners to become principled leaders, trustworthy peers, and
                responsible global citizens.
              </p>
            </div>
            <div>
              <h4>
                Exce<span>llen</span>ce
              </h4>

              <p>
                Excellence is not an act but a habit at Canterbury International
                Secondary School. We set high standards and inspire our students
                to go beyond them. Through innovative teaching, continuous
                self-improvement, and a passion for learning, we nurture
                individuals who not only achieve academically but also lead with
                distinction in every arena of life.
              </p>
            </div>
            <div>
              <h4>
                Im<span>pa</span>ct
              </h4>

              <p>
                Education at Canterbury is not just about knowledge—it's about
                transformation. We empower students to make meaningful
                contributions to their communities and the world. Whether
                through service, innovation, or leadership, we challenge our
                learners to think boldly and act intentionally, creating a
                ripple effect of positive change wherever they go.
              </p>
            </div>{" "}
            <div>
              <h4>
                Tea<span>mwo</span>rk
              </h4>

              <p>
                At Canterbury, we achieve more when we work together. We foster
                a collaborative environment where every voice matters, and
                mutual respect drives shared success. From group projects to
                school-wide initiatives, our students learn the power of unity,
                empathy, and cooperation—skills that prepare them for life in an
                interconnected world.
              </p>
            </div>
          </div>
        </div>
        <OurWords />
        <div className="remarkable mobile-pad">
          <center>
            <div className="col-md-5 ">
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
              <h1 style={{ fontSize: "30px", color: "#54020a" }}>
                THE CANTERBURY METHOD
              </h1>
              <p style={{ fontSize: "20px" }}>
                Jesus Christ is at the heart of everything we do. We are
                intentional about creating a God-fearing environment for our
                students to grow and excel in.
              </p>

              <hr />
            </div>
          </center>
        </div>
      </div>
    </>
  );
};
