import React, { Component } from "react";
import "./ethos.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import MainPic1 from "../../../assets/images/broad.jpg";
import MainPic2 from "../../../assets/images/challenge.jpg";
import MainPic3 from "../../../assets/images/tradition.jpg";
import MainPic4 from "../../../assets/images/adults.jpg";
function Ethos() {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    vertical: true,
    verticalSwiping: true,
    arrows: true,
    className: "myCustomCarousel",
    beforeChange: function (currentSlide, nextSlide) {
      console.log("before change", currentSlide, nextSlide);
    },
    afterChange: function (currentSlide) {
      console.log("after change", currentSlide);
    },
  };
  return (
    <div className="slider-container col-md-8 offset-md-2">
      <Slider {...settings}>
        <div className="sleek-div d-md-flex">
          <div className="col-md-7 ">
            <img src={MainPic1} width="100%" />
          </div>
          <div className="inscription col-md-5">
            <h5>Broad, Dynamic Curriculum</h5>
            <p>
              We offer a remarkable range of courses to build the strong
              foundation that top colleges seek while giving you the freedom to
              explore your intellectual passions—even ones you haven’t
              discovered yet.
            </p>
          </div>
        </div>
        <div className="sleek-div d-flex">
          <div className="col-md-7">
            <img src={MainPic2} width="100%" />
          </div>
          <div className="inscription col-md-5">
            <h5>Challenge and Support</h5>
            <p>
              Here, academic rigor is more than just tough courses. It's about
              challenging you to stretch yourself while supporting you at every
              step to ensure you reach—and exceed—your highest potential.
            </p>
          </div>
        </div>
        <div className="sleek-div d-flex">
          <div className="col-md-7">
            <img src={MainPic3} width="100%" />
          </div>
          <div className="inscription col-md-5">
            <h5>Tradition and Innovation</h5>
          </div>
        </div>
        <div className="sleek-div d-flex">
          <div className="col-md-7">
            <img src={MainPic4} width="100%" />
          </div>
          <div className="inscription col-md-5">
            <h5>Adults in Your Corner</h5>
          </div>
        </div>
      </Slider>
    </div>
  );
}

export default Ethos;
