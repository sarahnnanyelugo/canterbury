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
        </div>
      </div>
    </>
  );
};
