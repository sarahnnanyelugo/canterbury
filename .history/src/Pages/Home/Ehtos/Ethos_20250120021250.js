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
          <div className="col-md-6">
            <img src={MainPic2} width="100%" />
          </div>
        </div>
        <div className="sleek-div">
          <h3>2</h3>
        </div>
        <div className="sleek-div">
          <h3>3</h3>
        </div>
        <div className="sleek-div">
          <h3>4</h3>
        </div>
        <div className="sleek-div">
          <h3>5</h3>
        </div>
        <div className="sleek-div">
          <h3>6</h3>
        </div>
      </Slider>
    </div>
  );
}

export default Ethos;
