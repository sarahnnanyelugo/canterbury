import React, { Component } from "react";
import "./ethos.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
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
    <div className="slider-container">
      <Slider {...settings}>
        <div className="sleek-div">
          <h3>1</h3>
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
