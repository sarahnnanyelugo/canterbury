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
            <h2>This is Canterbury</h2>
            <p className="first-para">
              Canterbury is an independent, coeducational boarding and day
              school for grades 9–12 and postgraduates. Yet, it's more than a
              school, more than a place. It's a promise grounded in our belief
              in your extraordinary potential.
            </p>
          </div>
        </center>
      </div>
    </>
  );
};
