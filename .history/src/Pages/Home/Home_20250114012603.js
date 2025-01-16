import React, { useEffect, useState } from "react";
import MainVid from "../../assets/images/main-vid.mp4";
import Img1 from "../../assets/images/img1.jpg";
import Img2 from "../../assets/images/img2.jpg";
import Img3 from "../../assets/images/img3.jpg";
import "./home.scss";

export const Home = () => {
  const [scale, setScale] = useState(0.5); // Initial scale for the video (50%)
  const [shift, setShift] = useState(0); // Initial shift for images (0px)
  const [hideImages, setHideImages] = useState(false); // Control to hide images
  const scrollY = window.scrollY;
  const maxScroll = window.innerHeight * 0.2; // Faster effect, approx. 2 scrolls
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const maxScroll = window.innerHeight * 0.2; // Faster effect, approx. 2
      const scaleValue = Math.min(0.5 + (scrollY / maxScroll) * 0.2, 1); // Rapid scaling to 100%
      const shiftValue = Math.min((scrollY / maxScroll) * 20, 20); // Faster shift outwards

      setScale(scaleValue);
      setShift(shiftValue);

      //   Hide images when video is close to full size
      if (scrollY >= maxScroll) setHideImages(true);
      else setHideImages(false);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const calcScale = function (scale) {
    console.log(scale);
    if (scale <= 0.5) return scale * 100;
    if (scale <= 0.54) return scale * 200;
    if (scale <= 0.6) return scale * 300;
    if (scale < 1) return scale * 6000;
    return scale * 6000;
  };
  const calcTranslate = function (shift) {
    console.log("scroll-Y", scrollY);
    return scrollY >= 150 ? -((scrollY / 10) * shift) : -(shift * 3);
  };

  return (
    <>
      <div
        className="home-div"
        style={{ transform: `translateY(${calcTranslate(shift)}px)` }}
      >
        <center>
          <h1>THIS IS your story</h1>
        </center>
        <div className="col-md-12 d-flex ">
          {/* Left images */}
          {!hideImages && (
            <div
              className="d-flex images-container"
              style={{
                marginTop: "70px",
                width: "40%",
                transform: `translateX(-${shift}px)`,
              }}
            >
              <div
                className="col-md-6"
                style={{
                  height: `${(0.5 / scale) * 400}px`,
                  background: "url(" + Img1 + ")",
                }}
              >
                {/* <img src={Img1} width="100%" /> */}
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
              width: `${calcScale(scale)}%`,
              //   height: `${scale * 100}vh`,
              transition: "width 0.2s ease, height 0.2s ease",
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
              <div
                className="col-md-6"
                style={{
                  height: `${(0.5 / scale) * 400}px`,
                  background: "url(" + Img1 + ")",
                }}
              >
                {/* <img src={Img1} width="100%" style={{ imageSize: "cover" }} /> */}
              </div>
            </div>
          )}
        </div>
      </div>
      <div style={{ height: "900px", background: "#fff" }} />
      <div style={{ height: "200px", background: "gray" }}>
        <h3>Another Heading</h3>
      </div>
      <div style={{ height: "2000px" }}>
        <h3>Another Heading</h3>
      </div>
    </>
  );
};
