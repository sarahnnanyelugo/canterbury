import React from "react";
import "./our-story.scss";
import Hero from "../../../assets/images/storyHero.jpg";
import PageMenu from "../../../components/PageMenu/PageMenu";
import { about } from "../../../TestData/pageMenuData";
import { PageLogo } from "../../../components/PageLogo/PageLogo";
export const OurStory = () => {
  return (
    <>
      <div className="story-div col-md-12">
        <div className="story-banner">
          {" "}
          <img src={Hero} width="100%" />
          <center>
            <h1>ABOUT</h1>
          </center>
        </div>
        <PageMenu menuItems={about} />
        <PageLogo />
        <center>
          <div className="col-md-5">
            <h2>This is Canterbury</h2>
            <p>
              Canterbury is an independent, coeducational boarding and day
              school for grades 9–12 and postgraduates. Yet, it's more than a
              school, more than a place. It's a promise grounded in our belief
              in your extraordinary potential.
            </p>
          </div>
        </center>
        <div className="col-md-6 offset-md-3 d-md-flex">
          <div className="col-md-6">
            <p></p>
          </div>
          <div className="col-md-6"></div>
        </div>
      </div>
    </>
  );
};
