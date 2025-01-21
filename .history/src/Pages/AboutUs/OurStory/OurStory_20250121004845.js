import React from "react";
import "./our-story.scss";
import Hero from "../../../assets/images/storyHero.jpg";

export const OurStory = () => {
  return (
    <>
      <div className="story-div col-md-12">
        <div className="story-banner">
          {" "}
          <img src={Hero} width="100%" />
          <center>
            <h2>ABOUT</h2>
          </center>
        </div>
      </div>
    </>
  );
};
