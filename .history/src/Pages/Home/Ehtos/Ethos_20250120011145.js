import React, { Component } from "react";
import Dynamic from "../../../assets/images/dynamic.jpg";
import Challenge from "../../../assets/images/challenge.jpg";
import Tradition from "../../../assets/images/tradition.jpg";
import Adults from "../../../assets/images/adults.jpg";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
import "./ethos.scss";

const Ethos = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    vertical: true,
    verticalSwiping: true,
    beforeChange: function (currentSlide, nextSlide) {
      console.log("before change", currentSlide, nextSlide);
    },
    afterChange: function (currentSlide) {
      console.log("after change", currentSlide);
    },
  };
  return (
    // <div className="slider-container">
    <Slider {...settings}>
      <div className="col-md-12 bg-danger">
        <h3>1cccccc</h3>
      </div>
      <div className="col-md-12 bg-primary">
        <h3>2</h3>
      </div>
      <div className="col-md-12 bg-secondary">
        <h3>3</h3>
      </div>
      <div className="col-md-12 bg-warning">
        <h3>4</h3>
      </div>
      <div className="col-md-12 bg-success">
        <h3>5</h3>
      </div>
    </Slider>
    // </div>
  );
};

export default Ethos;
