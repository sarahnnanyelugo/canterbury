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
        <div style={{ height: "400px" }}></div>
      </div>
      <div className="col-md-12 bg-primary" style={{ height: "400px" }}>
        <div style={{ height: "400px" }}></div>
      </div>
      <div className="col-md-12 bg-secondary" style={{ height: "400px" }}>
        <div style={{ height: "400px" }}></div>
      </div>
      <div className="col-md-12 bg-warning" style={{ height: "400px" }}>
        <div style={{ height: "400px" }}></div>
      </div>
      <div className="col-md-12 bg-success" style={{ height: "400px" }}>
        <div style={{ height: "400px" }}></div>
      </div>
    </Slider>
    // </div>
  );
};

export default Ethos;
