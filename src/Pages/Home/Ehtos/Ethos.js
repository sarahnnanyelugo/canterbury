import React, { Component } from "react";
import "./ethos.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import MainPic1 from "../../../assets/images/draw.png";
import MainPic2 from "../../../assets/images/chess.png";
import MainPic3 from "../../../assets/images/scrabble.png";
import MainPic4 from "../../../assets/images/pastoral2.png";
function Ethos() {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    vertical: true,
    verticalSwiping: true,
    autoplay: true,
    autoplaySpeed: 3000,
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
            <h4>Broad, Dynamic Curriculum</h4>
            <p>
              We offer a remarkable range of courses to build the strong
              foundation that top colleges seek while giving you the freedom to
              explore your intellectual passions—even ones you haven’t
              discovered yet.
            </p>
          </div>
        </div>
        <div className="sleek-div d-md-flex">
          <div className="col-md-7">
            <img src={MainPic2} width="100%" />
          </div>
          <div className="inscription col-md-5">
            <h4>Challenge and Support</h4>
            <p>
              Here, academic rigor is more than just tough courses. It's about
              challenging you to stretch yourself while supporting you at every
              step to ensure you reach—and exceed—your highest potential.
            </p>
          </div>
        </div>
        <div className="sleek-div d-md-flex">
          <div className="col-md-7">
            <img src={MainPic3} width="100%" />
          </div>
          <div className="inscription col-md-5">
            <h4>Tradition and Innovation</h4>
            <p>
              The learning you do today is for a future we can’t even imagine.
              Our program blends tradition and innovation, so you master the
              ability to communicate effectively along with critical and
              creative thinking and digital literacy skills.
            </p>
          </div>
        </div>
        <div className="sleek-div d-md-flex">
          <div className="col-md-7">
            <img src={MainPic4} width="100%" />
          </div>
          <div className="inscription col-md-5">
            <h4>Educators in Your Corner</h4>
            <p>
              You are surrounded by a team of educators—ever-present teachers,
              advisors, coaches, and dorm parents—who see you as the
              multi-dimensional person you are and believe in everything you
              want to become.
            </p>
          </div>
        </div>
      </Slider>
    </div>
  );
}

export default Ethos;
