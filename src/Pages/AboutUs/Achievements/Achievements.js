import React from "react";
import "./achievements.scss";
import Hero from "../../../assets/images/Image_fx.jpg";

import PageMenu from "../../../components/PageMenu/PageMenu";
import { about } from "../../../TestData/pageMenuData";
import { PageLogo } from "../../../components/PageLogo/PageLogo";
import { ImQuotesLeft } from "react-icons/im";
import CountUp from "react-countup";
import Carousel from "react-bootstrap/Carousel";
import News from "../../../components/News/News";
import { FaLongArrowAltRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import ISA1 from "../../../assets/images/isa-fish1.jpg";
import ISA2 from "../../../assets/images/isa-fish2.jpg";
import ISA4 from "../../../assets/images/isa-fish4.jpg";
import ISA5 from "../../../assets/images/isa-fish3.jpg";
import ISA3 from "../../../assets/images/teaching1.jpg";
import ISA7 from "../../../assets/images/teaching5.jpg";
import ISA44 from "../../../assets/images/isa-44.jpg";
import ISA55 from "../../../assets/images/isa-55.jpg";
import ISA6 from "../../../assets/images/teaching4.jpg";
import ISA8 from "../../../assets/images/teaching3.jpg";
import ISA9 from "../../../assets/images/teaching2.jpg";
import ISA10 from "../../../assets/images/drama1.jpg";
import ISA11 from "../../../assets/images/drama2.jpg";
import ISA111 from "../../../assets/images/drama3.jpg";
import ISA1111 from "../../../assets/images/drama4.jpg";
import ISA12 from "../../../assets/images/art.JPG";
import ISA13 from "../../../assets/images/art1.jpg";
import ISA14 from "../../../assets/images/art2.jpg";
import ISA15 from "../../../assets/images/art3.jpg";
import ISA16 from "../../../assets/images/art4.jpg";
import ISA17 from "../../../assets/images/planet1.jpg";
import ISA18 from "../../../assets/images/planet2.jpg";
import Summit1 from "../../../assets/images/summit1.jpg";
import Summit2 from "../../../assets/images/summit2.jpg";
import Summit3 from "../../../assets/images/summit3.jpg";
import Wonder1 from "../../../assets/images/wonder1.JPG";
import Wonder2 from "../../../assets/images/wonder2.JPG";
import Wonder3 from "../../../assets/images/wonder3.JPG";
import Sport1 from "../../../assets/images/sport1.jpg";
import Sport2 from "../../../assets/images/sport2.jpg";
import Sport3 from "../../../assets/images/sport3.jpg";
import Sport4 from "../../../assets/images/sport4.jpg";
// import Sport5 from "../../../assets/images/sport5";
import AwardVideo from "./VidModal";
import DriveModal from "./DriveModal";
import { Desktop, TabletAndBelow } from "../../../Utils/mediaQueries";
export const Awards = () => {
  return (
    <>
      <div className="story-div col-md-12">
        <div className="about-banner">
          {" "}
          <img src={Hero} width="100%" />
          <center>
            <h1>OUR AWARDS</h1>
          </center>
        </div>
        <PageMenu menuItems={about} />
        <PageLogo />
        <center>
          <div className="col-md-6">
            <h2>This is Canterbury</h2>
            <p className="first-para">
              At Canterbury International School, we celebrate excellence. Our
              Awards page highlights the remarkable achievements of our
              students, staff, and wider school community. From academic honours
              to artistic triumphs and sporting accolades, these awards reflect
              our commitment to nurturing talent, inspiring growth, and
              empowering individuals to reach their fullest potential. We invite
              you to explore the milestones that showcase our tradition of
              excellence and the spirit of Canterbury.
            </p>
          </div>
        </center>

        <div className="remarkable-q mobile-pad">
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
                To our students, we always urge them to:
                <br />
                <br />
                <span>Dream It. Do it.</span>
              </p>

              {/* <p>Canterbury International !</p> */}
            </div>
          </center>
        </div>

        <div className="awards-heading">
          {" "}
          <center>
            <h1>
              <span>International School Awards </span>
            </h1>
          </center>
        </div>

        <div className="col-md-8 offset-md-2 awards-div mobile-pad">
          <div className="d-md-flex">
            {" "}
            <div className="col-md-6 ">
              <h1>
                BREAKING BARRIERS;
                <br />
                <span>Education And Life in the Slum</span>
              </h1>
              <AwardVideo uri="https://www.youtube.com/embed/7neHtsBrvOY" />
              &nbsp;
              <DriveModal folderUrl="https://drive.google.com/drive/folders/11tyFqWzXzMB0fcIqT8p8GAMX-94IRtE8" />
            </div>
            <div className="col-md-6 mgb">
              <Carousel>
                <Carousel.Item>
                  <img src={ISA3} width="100%" className="assembly" />{" "}
                </Carousel.Item>{" "}
                {/* <Carousel.Item>
                  <img src={ISA4} width="100%" className="assembly" />{" "}
                </Carousel.Item>{" "} */}
                <Carousel.Item>
                  <img src={ISA6} width="100%" className="assembly" />{" "}
                </Carousel.Item>{" "}
                <Carousel.Item>
                  <img src={ISA7} width="100%" className="assembly" />{" "}
                </Carousel.Item>{" "}
                <Carousel.Item>
                  <img src={ISA8} width="100%" className="assembly" />{" "}
                </Carousel.Item>{" "}
                <Carousel.Item>
                  <img src={ISA9} width="100%" className="assembly" />{" "}
                </Carousel.Item>
                <Carousel.Item>
                  <img src={ISA44} width="100%" className="assembly" />{" "}
                </Carousel.Item>
                <Carousel.Item>
                  <img src={ISA55} width="100%" className="assembly" />{" "}
                </Carousel.Item>
              </Carousel>
            </div>
          </div>{" "}
          <div className="d-md-flex">
            <TabletAndBelow>
              {" "}
              <div className="col-md-6 first-div mt-5 pdl">
                <h1>
                  WOMEN IN LEADERSHIP;
                  <br />
                  <span>BUILDING INCLUSIVE AND JUST INSTITUTIONS</span>
                </h1>
                <AwardVideo uri="https://www.youtube.com/embed/dADmWfETLMg" />
                &nbsp;
                <DriveModal folderUrl="https://drive.google.com/drive/folders/13vSQpUXNTAzdd8chBEofSE9rtenBWsj7" />
              </div>
            </TabletAndBelow>{" "}
            <div className="col-md-6">
              <Carousel>
                <Carousel.Item>
                  <img src={Summit1} width="100%" className="assembly" />{" "}
                </Carousel.Item>{" "}
                <Carousel.Item>
                  <img src={Summit2} width="100%" className="assembly" />{" "}
                </Carousel.Item>{" "}
                <Carousel.Item>
                  <img src={Summit3} width="100%" className="assembly" />{" "}
                </Carousel.Item>{" "}
              </Carousel>
            </div>{" "}
            <Desktop>
              {" "}
              <div className="col-md-6 first-div mt-5 pdl">
                <h1>
                  WOMEN IN LEADERSHIP;
                  <br />
                  <span>BUILDING INCLUSIVE AND JUST INSTITUTIONS</span>
                </h1>
                <AwardVideo uri="https://www.youtube.com/embed/dADmWfETLMg" />
                &nbsp;
                <DriveModal folderUrl="https://drive.google.com/drive/folders/13vSQpUXNTAzdd8chBEofSE9rtenBWsj7" />
              </div>
            </Desktop>
          </div>
          <div className="d-md-flex">
            <div className="col-md-6 first-div mt-5">
              <h1>
                TRANSFORMING WASTE
                <br />
                <span>TO WONDER</span>
              </h1>
              {/* <AwardVideo uri="https://www.youtube.com/embed/dADmWfETLMg" /> */}
              <DriveModal folderUrl="https://drive.google.com/drive/folders/1SGH6i75cI8JoK9dbVGeBg43mpulIQa7Y" />
            </div>
            <div className="col-md-6">
              <Carousel>
                <Carousel.Item>
                  <img src={Wonder1} width="100%" className="assembly" />{" "}
                </Carousel.Item>{" "}
                <Carousel.Item>
                  <img src={Wonder2} width="100%" className="assembly" />{" "}
                </Carousel.Item>{" "}
                <Carousel.Item>
                  <img src={Wonder3} width="100%" className="assembly" />{" "}
                </Carousel.Item>{" "}
              </Carousel>
            </div>{" "}
          </div>{" "}
          <div className="d-md-flex">
            <TabletAndBelow>
              <div className="col-md-6 first-div mt-5 pdl">
                <h1>
                  SUSTAINABLE FISH PRODUCTION
                  <br />
                  <span>AND PROCESSING</span>
                </h1>
                <AwardVideo uri="https://www.youtube.com/embed/6W3g3NzWkbc" />
                &nbsp;
                <DriveModal folderUrl="https://drive.google.com/drive/folders/1aUXrj9YdEawSjbZoXf3zhm6dbMio7DVk" />
              </div>
            </TabletAndBelow>
            <div className="col-md-6">
              <Carousel>
                <Carousel.Item>
                  <img src={ISA1} width="100%" className="assembly" />{" "}
                </Carousel.Item>{" "}
                <Carousel.Item>
                  <img src={ISA2} width="100%" className="assembly" />{" "}
                </Carousel.Item>{" "}
                <Carousel.Item>
                  <img src={ISA4} width="100%" className="assembly" />{" "}
                </Carousel.Item>{" "}
                <Carousel.Item>
                  <img src={ISA5} width="100%" className="assembly" />{" "}
                </Carousel.Item>{" "}
              </Carousel>
            </div>{" "}
            <Desktop>
              <div className="col-md-6 first-div mt-5 pdl">
                <h1>
                  SUSTAINABLE FISH PRODUCTION
                  <br />
                  <span>AND PROCESSING</span>
                </h1>
                <AwardVideo uri="https://www.youtube.com/embed/6W3g3NzWkbc" />
                &nbsp;
                <DriveModal folderUrl="https://drive.google.com/drive/folders/1aUXrj9YdEawSjbZoXf3zhm6dbMio7DVk" />
              </div>
            </Desktop>
          </div>{" "}
          <div className="d-md-flex">
            <div className="col-md-6 first-div mt-5">
              <h1>
                ART FOR THE
                <span>PLANET</span>
              </h1>
              <AwardVideo uri="https://www.youtube.com/embed/jYfkZPS2cGU" />
              &nbsp;
              <DriveModal folderUrl="https://drive.google.com/drive/folders/1zw-NTBAVUMyIA-f5yz5lDtSLSy9fK-GM" />
            </div>
            <div className="col-md-6">
              <Carousel>
                <Carousel.Item>
                  <img src={ISA13} width="100%" className="assembly" />{" "}
                </Carousel.Item>{" "}
                <Carousel.Item>
                  <img src={ISA14} width="100%" className="assembly" />{" "}
                </Carousel.Item>{" "}
                <Carousel.Item>
                  <img src={ISA15} width="100%" className="assembly" />{" "}
                </Carousel.Item>{" "}
                <Carousel.Item>
                  <img src={ISA16} width="100%" className="assembly" />{" "}
                </Carousel.Item>{" "}
                <Carousel.Item>
                  <img src={ISA17} width="100%" className="assembly" />{" "}
                </Carousel.Item>{" "}
                <Carousel.Item>
                  <img src={ISA18} width="100%" className="assembly" />{" "}
                </Carousel.Item>{" "}
              </Carousel>
            </div>{" "}
          </div>{" "}
          <div className="d-md-flex">
            <TabletAndBelow>
              <div className="col-md-6 first-div mt-5 pdl">
                <h1>
                  THE IMPORTANCE OF THE EDUCATION OF
                  <span>THE AFRICAN CHILD</span>
                </h1>
                <AwardVideo uri="https://www.youtube.com/embed/ES-G178HMOM" />
                &nbsp;
                <DriveModal folderUrl="https://drive.google.com/drive/folders/1hf4XBtypijDRdHQuRY8yMBRc3HfaRqfO" />
              </div>
            </TabletAndBelow>
            <div className="col-md-6">
              <Carousel>
                <Carousel.Item>
                  <img src={ISA10} width="100%" className="assembly" />{" "}
                </Carousel.Item>{" "}
                <Carousel.Item>
                  <img src={ISA11} width="100%" className="assembly" />{" "}
                </Carousel.Item>{" "}
                <Carousel.Item>
                  <img src={ISA111} width="100%" className="assembly" />{" "}
                </Carousel.Item>{" "}
                <Carousel.Item>
                  <img src={ISA111} width="100%" className="assembly" />{" "}
                </Carousel.Item>{" "}
              </Carousel>
            </div>{" "}
            <Desktop>
              <div className="col-md-6 first-div mt-5 pdl">
                <h1>
                  THE IMPORTANCE OF THE EDUCATION OF
                  <span>THE AFRICAN CHILD</span>
                </h1>
                <AwardVideo uri="https://www.youtube.com/embed/ES-G178HMOM" />
                &nbsp;
                <DriveModal folderUrl="https://drive.google.com/drive/folders/1hf4XBtypijDRdHQuRY8yMBRc3HfaRqfO" />
              </div>
            </Desktop>
          </div>{" "}
          <div className="d-md-flex">
            <div className="col-md-6 first-div mt-5">
              <h1>
                FOSTERING SOCIAL COHESION
                <span>THROUGH SPORTS</span>
              </h1>
              <AwardVideo uri="https://www.youtube.com/embed/3OOcjc0JjQY" />
              &nbsp;
              <DriveModal folderUrl="https://drive.google.com/drive/folders/17MvCSmEVfwT3FOznGOpwHadIkIaz4xvz" />
            </div>{" "}
            <div className="col-md-6 placeholder">
              <Carousel>
                <Carousel.Item>
                  <img src={Sport1} width="100%" className="assembly" />{" "}
                </Carousel.Item>{" "}
                <Carousel.Item>
                  <img src={Sport2} width="100%" className="assembly" />{" "}
                </Carousel.Item>{" "}
                <Carousel.Item>
                  <img src={Sport3} width="100%" className="assembly" />{" "}
                </Carousel.Item>{" "}
                <Carousel.Item>
                  <img src={Sport4} width="100%" className="assembly" />{" "}
                </Carousel.Item>{" "}
              </Carousel>
            </div>{" "}
          </div>
        </div>
        {/* <div className="stats-div"></div> */}

        <div className="category-div col-md-10 offset-md-1 ">
          <center>
            <h1>
              OUR <span>CATEGORIES</span>
            </h1>
          </center>
          <div className="d-md-flex col-md-12">
            <div className="col-md-4 container">
              <div className="img-holder">
                <div className="small-intro">
                  <h5>SECONDARY</h5>
                </div>
              </div>

              <div class="overlay">
                <div class="text">
                  <h5>SECONDARY</h5>
                  <p>(6-11 years)</p>
                  <button>LEARN MORE</button>
                </div>
              </div>
            </div>{" "}
            <div className="col-md-4 container">
              <div className="img-holder2">
                <div className="small-intro">
                  <h5>PRIMARY</h5>
                </div>
              </div>

              <div class="overlay">
                <div class="text">
                  <h5> PRIMARY</h5>
                  <p>(6-11 years)</p>
                  <button>LEARN MORE</button>
                </div>
              </div>
            </div>{" "}
            <div className="col-md-4 container">
              <div className="img-holder3">
                <div className="small-intro">
                  <h5>EYFS</h5>
                </div>
              </div>

              <div class="overlay">
                <div class="text">
                  <h5> EYFS</h5>
                  <p>(6-11 years)</p>
                  <button>LEARN MORE</button>
                </div>
              </div>
            </div>{" "}
          </div>
        </div>
        <div className="news-div">
          <center>
            <h2>
              OUR <span>updates</span>
            </h2>
          </center>
          <div className="col-md-8 offset-md-2 ">
            <News />
          </div>
        </div>

        <div className="sunset">
          <center>
            <div className="col-md-4">
              <h1>
                That's <span>Our Story.</span>
              </h1>
              <p style={{ color: "#fff" }}>WE CAN'T WAIT TO LEARN YOURS.</p>
              <Link to={"/apply"}>
                <button>
                  BEGIN YOUR CANTERBURY CHAPTER TODAY{" "}
                  <FaLongArrowAltRight className="icon" />
                </button>
              </Link>
            </div>
          </center>
        </div>
      </div>
    </>
  );
};
