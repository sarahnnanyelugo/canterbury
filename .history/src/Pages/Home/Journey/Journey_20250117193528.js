import React from "react";
import "./journey.scss";
import MainPic from "../../../assets/images/journey.jpg";
import MainPic2 from "../../../assets/images/beerry.jpg";
import { IoArrowForward } from "react-icons/io5";
import Carousel from "react-bootstrap/Carousel";

export const Journey = () => {
  return (
    <>
      <Carousel fade>
        <Carousel.Item>
          1
          {/* <div className="journey-div col-md-12">
            <img src={MainPic} width="100%" />
            <div className="journey-cova d-md-flex">
              <div className="col-md-3 offset-md-2 slide-div"></div>
              <div className="col-md-4 offset-md-1 journey-dits">
                <h2>
                  WHERE YOUR <br />
                  JOURNEY <span>leads</span>
                </h2>
                <p>
                  This is the moment when it all pays off. Your years here have
                  helped you know who you are, what you want, and how far you
                  want to go. But it’s not only about getting in; it’s about
                  thriving where you’re destined to be.
                </p>
                <button>
                  YOUR SUCCESS STORY STARTS HERE{" "}
                  <IoArrowForward className="icon" />
                </button>
              </div>
            </div>
          </div> */}
        </Carousel.Item>
        <Carousel.Item>
          {/* <div className="journey-div col-md-12">
            <img src={MainPic} width="100%" />
            <div className="journey-cova d-md-flex">
              <div className="col-md-3 offset-md-2 slide-div"></div>
              <div className="col-md-4 offset-md-1 journey-dits">
                <h2>
                  WHERE YOUR <br />
                  JOURNEY <span>leads</span>
                </h2>
                <p>
                  This is the moment when it all pays off. Your years here have
                  helped you know who you are, what you want, and how far you
                  want to go. But it’s not only about getting in; it’s about
                  thriving where you’re destined to be.
                </p>
                <button>
                  YOUR SUCCESS STORY STARTS HERE{" "}
                  <IoArrowForward className="icon" />
                </button>
              </div>
            </div>
          </div> */}
          2
        </Carousel.Item>
      </Carousel>
    </>
  );
};
