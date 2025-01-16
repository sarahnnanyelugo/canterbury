import React, { useEffect, useState } from "react";
import MainVid from "../../assets/images/main-vid.mp4";
import Img1 from "../../assets/images/img1.jpg";
import Img2 from "../../assets/images/img2.jpg";
import Img3 from "../../assets/images/img3.jpg";
import "./home.scss";

export const Home = () => {
  const [scale, setScale] = useState(1); // Video scale
  const [hideImages, setHideImages] = useState(false); // Toggle for hiding images

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const maxScroll = window.innerHeight * 3; // Approx. 3-4 scrolls
      const scaleValue = 1 + scrollY / maxScroll;

      if (scrollY >= maxScroll) {
        setHideImages(true); // Hide images when max scroll is reached
      } else {
        setHideImages(false); // Show images otherwise
        setScale(Math.min(scaleValue, 3)); // Limit scale to 3x
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {" "}
      <div className="home-div">
        <center>
          <h1>THIS IS your story</h1>
        </center>
        <div className="col-md-12 d-flex">
          {/* Left images */}
          {!hideImages && (
            <div className="d-flex" style={{ marginTop: "70px", width: "40%" }}>
              <div className="col-md-6">
                <img src={Img1} width="100%" height="400px" />
              </div>
              <div className="col-md-6">
                <img src={Img2} width="100%" />
                <img src={Img3} width="100%" className="mt-3" />
              </div>
            </div>
          )}

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
          {!hideImages && (
            <div className="d-flex" style={{ marginTop: "70px", width: "40%" }}>
              <div className="col-md-6">
                <img src={Img2} width="100%" />
                <img src={Img3} width="100%" className="mt-3" />
              </div>
              <div className="col-md-6">
                <img src={Img1} width="100%" height="400px" />
              </div>
            </div>
          )}
        </div>
      </div>
      <div style={{ height: "1000px", background: blue }}></div>
    </>
  );
};
