import React from "react";
import "./journey.scss";
import MainPic from "../../../assets/images/journey.jpg";
export const Journey = () => {
  return (
    <>
      <div className="journey-div col-md-12">
        <img src={MainPic} width="100%" />
        <div className="journey-cova d-md-flex">
          <div className="col-md-3 offset-md-2 slide-div"></div>
          <div className="col-md-3 offset-md-1 journey-dits">
            <h2>
              WHERE YOUR JOURNEY <span>leads</span>
            </h2>
            <p>
              This is the moment when it all pays off. Your years here have
              helped you know who you are, what you want, and how far you want
              to go. But it’s not only about getting in; it’s about thriving
              where you’re destined to be.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
