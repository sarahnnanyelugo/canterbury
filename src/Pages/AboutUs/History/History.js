import React from "react";
import Hero from "../../../assets/images/draw.png";
import { PageLogo } from "../../../components/PageLogo/PageLogo";
import PageMenu from "../../../components/PageMenu/PageMenu";
import { about } from "../../../TestData/pageMenuData";
import "./history.scss";
import Accordion from "react-bootstrap/Accordion";
import { ImQuotesLeft } from "react-icons/im";
import Slider from "react-slick";

export const History = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <>
      <div className="history-div">
        <div className="story-banner">
          {" "}
          <img src={Hero} width="100%" />
          <center>
            <h1>OUR HISTORY</h1>
          </center>
        </div>
        <PageMenu menuItems={about} />
        <PageLogo />

        <center>
          <div className="col-md-7 mobile-pad">
            <h2>Nurturing Young Minds for More Than a Decade</h2>
            <p className="first-para">
              From the initial group of 18 students who began their journey in
              1915 to the vibrant community of 325 students today—and more than
              5,000 alumni who have ventured to renowned colleges and
              universities both here and abroad—the students who thrive at
              Canterbury are those who embody the School's founding values of
              intellectual achievement and moral character.
            </p>
          </div>
        </center>

        <div className="col-md-8 offset-md-2 row row-cols-1 row-cols-lg-2 g-2 g-lg-3">
          <div className="col">
            <div className="history-details">
              <div className="history-img">
                {/* <img src={OldImg} width="100%" /> */}
              </div>
              <hr />
              <Accordion defaultActiveKey="0" flush>
                <Accordion.Item eventKey="0">
                  <Accordion.Header>
                    <h5>Our Founder..Mrs. Olusola Oluyinka Olaitan</h5>
                  </Accordion.Header>
                  <Accordion.Body>
                    <p>
                      Mrs. Olusola Oluyinka Olaitan founded Canterbury Schools.
                      She held a degree in Education with thirty-eight years
                      work experience in teaching and school management.
                    </p>
                    <p>
                      Mrs Olaitan worked at a number of schools in Lagos
                      including in Lagos including State, Private and Foreign
                      Schools. She was also the pioneering principal of a
                      Redeemed School in Lagos.
                    </p>
                    <p>
                      With a vision from God, Mrs Olaitan was able to establish
                      the Junior School in January 2003 and the Secondary School
                      in September 2006.The schools have grown respectively and
                      have continued to maintain the vision.
                    </p>
                    <p>
                      Mrs Olusola Olaitan had the fear of God; she was a
                      disciplinarian but a lover of children and a goal achiever
                      by His grace. She was committed and dedicated to moulding
                      and shaping the lives of Canterbury students academically
                      and spiritually to allow them excel in their future
                      endeavours.
                    </p>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>{" "}
              <hr />
            </div>
          </div>{" "}
          <div className="col">
            <div className="history-details">
              <div className="history-img2"></div>
              <hr />
              <Accordion defaultActiveKey="0" flush>
                <Accordion.Item eventKey="0">
                  <Accordion.Header>
                    <h5>Evolution & Growth</h5>
                  </Accordion.Header>
                  <Accordion.Body>
                    <p>
                      In the fall of 1914, schoolmaster Dr. Nelson Hume and
                      entrepreneur Henry Havemeyer began working together on a
                      bold dream—to start a school operated by Catholic laymen
                      who, independent of a religious order, would prepare boys
                      for the best colleges and universities in the country
                      while nurturing them in their faith.
                    </p>
                    <p>
                      In seeking a location for the new boarding school, Dr.
                      Hume wanted proximity to New York City, yet desired the
                      allure of a rural backdrop. He discovered this in New
                      Milford, Connecticut, atop a hill near Elkington Farm.
                      With its three main buildings and vast playing field,
                      shaded pathways, and striking elms, Dr. Hume instantly
                      recognized it as the ideal spot.
                    </p>
                    <p>
                      Dr. Hume would serve as Canterbury’s founding Headmaster
                      until 1948 and as its initial Director of Admission. The
                      first boy to officially enroll at Canterbury was Cyril
                      Clemens, Mark Twain’s distant cousin, followed by Henry
                      Havemeyer’s son, Henry. They and an additional 16 students
                      in the School’s charter class started in the fall of 1915.
                    </p>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
              <hr />
            </div>
          </div>
        </div>
        <center>
          <div className="col-md-7 history-quote mobile-pad">
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
              Canterbury has remained deeply anchored in the same academic
              vision, progressive spirit, and values-centered approach that
              guided its founding more than 100 years ago. These principles
              continue to differentiate us in today's boarding school market and
              underscore our unique ability to develop tomorrow's intellectual
              and ethical leaders.{" "}
            </p>
          </div>
        </center>

        <div className="remarkable2 mobile-pad">
          <center>
            <div className="col-md-7">
              <h1>HISTORICAL TIMELINE</h1>
              <div className="slider-container col-md-4">
                <Slider {...settings}>
                  <div>
                    <div className="history-dates">
                      <center>
                        <h1>2017</h1>
                        <p>
                          Canterbury school launched their{" "}
                          <span>state of the art science labouratory</span>. The
                          Lab has over 50 science equipments
                        </p>
                      </center>
                    </div>
                  </div>
                  <div>
                    <div className="history-dates">
                      <center>
                        <h1>2018</h1>
                        <p>
                          Canterbury school students went on their first {""}
                          <span>excursion trip to the Netherlands</span>. The
                          trip lasted for a week
                        </p>
                      </center>
                    </div>
                  </div>
                  <div>
                    <div className="history-dates">
                      {" "}
                      <center>
                        <h1>2024</h1>
                        <p>
                          Canterbury <span>school joined educare</span>. The
                          world leading education management software.
                        </p>
                      </center>
                    </div>
                  </div>
                </Slider>
              </div>
            </div>
          </center>
        </div>
      </div>
    </>
  );
};
