import React from "react";
import "./partners-slider.scss";
import Uni1 from "../../assets/images/uni1.png";
import Uni2 from "../../assets/images/uni2.png";
import Uni3 from "../../assets/images/uni3.png";
import Uni4 from "../../assets/images/uni4.png";
import Uni5 from "../../assets/images/uni5.png";
import Uni6 from "../../assets/images/uni6.png";
import Uni7 from "../../assets/images/uni7.png";
import Uni8 from "../../assets/images/uni8.png";
import Uni9 from "../../assets/images/uni9.png";

function PartnersSlider() {
  return (
    <div>
      <div className="col-md-12 partners-slider  ">
        <div class="slider">
          <div className="slide-track partners-immgs">
            {" "}
            <img className="standard slide" src={Uni1} alt="Scholar" />
            <img className="standard slide" src={Uni2} alt="Scholar" />
            <img className="standard slide" src={Uni3} alt="Scholar" />
            <img className="standard slide" src={Uni4} alt="Scholar" />
            <img className="standard slide" src={Uni5} alt="Scholar" />
            <img className="standard slide" src={Uni6} alt="Scholar" />
            <img className="standard slide" src={Uni7} alt="Scholar" />
            <img className="standard slide" src={Uni8} alt="Scholar" />
            <img className="standard slide" src={Uni9} alt="Scholar" />
            <img className="standard slide" src={Uni1} alt="Scholar" />
            <img className="standard slide" src={Uni2} alt="Scholar" />
            <img className="standard slide" src={Uni3} alt="Scholar" />
            <img className="standard slide" src={Uni4} alt="Scholar" />
            <img className="standard slide" src={Uni5} alt="Scholar" />
            <img className="standard slide" src={Uni6} alt="Scholar" />
            <img className="standard slide" src={Uni7} alt="Scholar" />
            <img className="standard slide" src={Uni8} alt="Scholar" />
            <img className="standard slide" src={Uni9} alt="Scholar" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default PartnersSlider;
