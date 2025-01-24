import React from "react";
import Hero from "../../../assets/images/storyHero.jpg";
import OldImg from "../../../assets/images/old-img.webp";
import OldImg2 from "../../../assets/images/old-img2.webp";
import { PageLogo } from "../../../components/PageLogo/PageLogo";
import PageMenu from "../../../components/PageMenu/PageMenu";
import { about } from "../../../TestData/pageMenuData";
import "./history.scss";
import Accordion from "react-bootstrap/Accordion";

export const History = () => {
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
          <div className="col-md-7">
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
              {/* <hr /> */}
              <Accordion defaultActiveKey="0" flush>
                <Accordion.Item eventKey="0">
                  <Accordion.Header>
                    <h5>Our Founding</h5>
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
              </Accordion>{" "}
              {/* <hr /> */}
            </div>
          </div>{" "}
          <div className="col">
            <div className="history-details">
              <div className="history-img2"></div>
              {/* <hr /> */}
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
              {/* <hr /> */}
            </div>
          </div>
          <div className="col"></div>
        </div>
      </div>
    </>
  );
};
