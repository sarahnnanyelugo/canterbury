import React from "react";
import Hero from "../../../assets/images/storyHero.jpg";
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
              <div className="history-img"></div>
              <Accordion defaultActiveKey="0" flush>
                <Accordion.Item eventKey="0">
                  <Accordion.Header>Accordion Item #1</Accordion.Header>
                  <Accordion.Body>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </div>
          </div>
          <div className="col"></div>
        </div>
      </div>
    </>
  );
};
