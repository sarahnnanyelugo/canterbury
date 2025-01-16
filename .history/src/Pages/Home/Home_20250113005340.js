import React, { useEffect, useState } from "react";
import MainVid from "../../assets/images/main-vid.mp4";
import Img1 from "../../assets/images/img1.jpg";
import Img2 from "../../assets/images/img2.jpg";
import Img3 from "../../assets/images/img3.jpg";
import "./home.scss";

export const Home = () => {
  const [scale, setScale] = useState(0.5); // Initial scale for the video (50%)
  const [shift, setShift] = useState(0); // Initial shift for images (0px)

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const scaleValue = Math.min(
        0.5 + (scrollY / window.innerHeight) * 0.18,
        1
      ); // Max scale at 100%
      const shiftValue = Math.min((scrollY / window.innerHeight) * 200, 200); // Max shift at 200px

      setScale(scaleValue);
      setShift(shiftValue);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div className="home-div">
        <center>
          <h1>THIS IS your story</h1>
        </center>
        <div className="col-md-12 d-flex">
          {/* Left images */}
          <div
            className="d-flex images-container"
            style={{
              marginTop: "70px",
              width: "40%",
              transform: `translateX(-${shift}px)`,
            }}
          >
            <div className="col-md-6">
              <img src={Img1} width="100%" height="400px" />
            </div>
            <div className="col-md-6">
              <img src={Img2} width="100%" />
              <img src={Img3} width="100%" className="mt-3" />
            </div>
          </div>

          {/* Center video */}
          <div
            className="video-container"
            style={{
              width: `${scale * 100}%`,
              height: `${scale * 100}vh`,
              transition: "width 0.5s ease, height 0.5s ease",
            }}
          >
            <video
              className="video"
              width="100%"
              autoPlay
              loop
              muted
              playsInline
              controls
              src={MainVid}
            ></video>
          </div>

          {/* Right images */}
          <div
            className="d-flex images-container"
            style={{
              marginTop: "70px",
              width: "40%",
              transform: `translateX(${shift}px)`,
            }}
          >
            <div className="col-md-6">
              <img src={Img2} width="100%" />
              <img src={Img3} width="100%" className="mt-3" />
            </div>
            <div className="col-md-6">
              <img src={Img1} width="100%" height="400px" />
            </div>
          </div>
        </div>
      </div>
      <div style={{ height: "1000px", background: "blue" }} />
    </>
  );
};
