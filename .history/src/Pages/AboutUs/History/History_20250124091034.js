import React from "react";
import Hero from "../../../assets/images/storyHero.jpg";
import { PageLogo } from "../../../components/PageLogo/PageLogo";
import PageMenu from "../../../components/PageMenu/PageMenu";
import { about } from "../../../TestData/pageMenuData";
import "./history.scss";
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
          <div className="col-md-6">
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
      </div>
    </>
  );
};
