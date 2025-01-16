import React, { useEffect, useState } from "react";
import MainVid from "../../assets/images/main-vid.mp4";
import Img1 from "../../assets/images/img1.jpg";
import Img2 from "../../assets/images/img2.jpg";
import Img3 from "../../assets/images/img3.jpg";
import Img4 from "../../assets/images/img4.jpg";
import Img5 from "../../assets/images/img5.png";
import Img6 from "../../assets/images/img6.png";
import "./home.scss";

export const Home = () => {
  const [scale, setScale] = useState(1); // Initial scale for the video
  const [opacity, setOpacity] = useState(1); // Initial opacity for the images

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const maxScroll = window.innerHeight * 3; // Approx. 3-4 scrolls
      const scaleValue = 1 + scrollY / maxScroll; // Scale up video
      const opacityValue = 1 - scrollY / maxScroll; // Fade out images

      setScale(Math.min(scaleValue, 3)); // Limit scale to 3x
      setOpacity(Math.max(opacityValue, 0)); // Limit opacity to 0
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
            style={{ marginTop: "70px", width: "40%", opacity }}
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
              width: "60%",
              transform: `scale(${scale})`,
              transition: "transform 0.5s ease",
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
            style={{ marginTop: "70px", width: "40%", opacity }}
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
      <div style={{ height: "100px", background: "blue" }}></div>
    </>
  );
};
