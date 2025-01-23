import React, { useEffect } from "react";
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
  const count = 6; // Define count to prevent errors
  const modelData = [
    {
      modelName: "Leadership",
      description:
        "Model for generating highly dimensional, mostly numeric, tabular data",
    },
    {
      modelName: "Gretel-CTGAN",
      description:
        "An advanced synthetic data model optimized for structured datasets",
    },
    {
      modelName: "Gretel-Tabular",
      description:
        "A model designed for generating realistic tabular data from structured sources",
    },
    {
      modelName: "Gretel-LSTM",
      description:
        "Sequence-based model for synthetic data generation using deep learning",
    },
    {
      modelName: "Gretel-DP",
      description:
        "A differentially private data model ensuring privacy-preserving synthetic data",
    },
    {
      modelName: "Gretel-TGAN",
      description:
        "Generative model tailored for structured datasets with enhanced performance",
    },
  ];
  console.log(modelData);

  useEffect(() => {
    document.documentElement.style.setProperty("--count", count);
  }, [count]);

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
        <h1 className="core-values offset-md-2">
          OUR CORE <span>values</span>
        </h1>
        <div className="col-md-8 offset-md-2 val-acc">
          <div class="accordion container">
            <div>
              <h4>
                Aca<span>dem</span>ics
              </h4>

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
              <h4>
                Inclu<span>siv</span>ity
              </h4>

              <p>
                Inclusivity is fundamental at Canterbury School, where every
                individual is valued. We celebrate diversity in all forms and
                create an environment where students feel a sense of belonging.
                Our commitment to inclusivity fosters empathy, open-mindedness,
                and respect, empowering students to engage with the world
                compassionately.
              </p>
            </div>

            <div>
              <h4>
                Lea<span>der</span>ship
              </h4>

              <p>
                Canterbury School nurtures the leaders of tomorrow by
                encouraging initiative, collaboration, and effective
                communication. We emphasize leading by example with integrity
                and responsibility, providing opportunities for students to
                develop confidence and inspire others in their communities with
                vision and compassion.
              </p>
            </div>

            <div>
              <h4>
                Ho<span>nou</span>r
              </h4>

              <p>
                Honour is at the core of our values at Canterbury School,
                guiding our actions with integrity, honesty, and fairness. We
                encourage students to make ethical choices, take responsibility,
                and build trust within the community. Through honour, we prepare
                students to become individuals of character who positively
                impact society.
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
        <div className="mission-words d-md-flex col-md-12">
          <div className="col-md-6">
            <div className="void" id="void">
              <div className="crop">
                <ul id="card-list">
                  {modelData.map((model, index) => (
                    <li key={index}>
                      <div className="card">
                        <span className="model-name">
                          <h5>{model.modelName}</h5>
                        </span>
                        <span>
                          <p>{model.description}</p>
                        </span>
                      </div>
                    </li>
                  ))}
                </ul>
                <div className="last-circle"></div>
                <div className="second-circle"></div>
              </div>
              <div className="mask"></div>
              <div className="center-circle">
                <h3>
                  The Words <br />
                  We Live By
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
