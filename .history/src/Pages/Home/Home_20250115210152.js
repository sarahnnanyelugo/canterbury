import React, { useEffect, useState, useRef } from "react";
import MainVid from "../../assets/images/main-vid.mp4";
import Img1 from "../../assets/images/img1.jpg";
import Img2 from "../../assets/images/img2.jpg";
import Img3 from "../../assets/images/img3.jpg";

import Img4 from "../../assets/images/img4.jpg";
import Img6 from "../../assets/images/img6.png";
import Img5 from "../../assets/images/img5.png";
import "./home.scss";

export const Home = () => {
  const [scale, setScale] = useState(0.5); // Initial scale for the video (50%)
  const [shift, setShift] = useState(0); // Initial shift for images (0px)
  const [hideImages, setHideImages] = useState(false); // Control to hide images
  const [yScroll, setYScroll] = useState(0);
  const [inView, setInView] = useState(false); // Track if the div is in view
  const targetRef = useRef(null); // Correct initialization in JavaScript
  const headingRef = useRef(null); // Reference for the heading

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
    return; // () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrolleY = window.scrollY || 0;
      setYScroll(scrolleY || 0);
    };

    window.addEventListener("scroll", handleScroll);
    return; // () => window.removeEventListener("scroll", handleScroll);
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
    console.log("scroll-Y: " + yScroll, "shift: " + shift);
    // return yScroll >= 190 ? -(yScroll - shift) : -Math.min(shift * 3, 50);
    return -Math.min(shift * 12, 270);
  };

  const calculateOpacity = function () {
    const sc = yScroll / 1000;
    console.log("sc: " + sc);
    return Math.min(sc < 0.8 ? sc * 0.05 : sc, 1);
  };
  useEffect(() => {
    const handleScroll = () => {
      if (targetRef.current) {
        const rect = targetRef.current.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        const isInView =
          rect.top <= windowHeight / 2 && rect.bottom >= windowHeight / 2;
        setInView(isInView); // Set state based on div position
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <>
      <div
        className="home-div"
        style={{
          transform: `translateY(${calcTranslate(shift)}px)`,
          transition: "all 0.2s ease",
        }}
      >
        <center>
          <h1>
            THIS IS <span>your story</span>
          </h1>
        </center>
        <div className="col-md-12 d-flex ">
          {/* Left images */}
          {!hideImages && (
            <div
              className="d-flex images-container"
              style={{
                marginTop: "50px",
                width: "40%",
                transform: `translateX(-${shift}px)`,
              }}
            >
              <div
                className="col-md-8 left-wing"
                style={{
                  height: `${(0.5 / scale) * 400}px`,
                  background: "url(" + Img1 + ")",
                  backgroundPosition: "center",
                  marginTop: "70px",

                  borderRadius: "10px",
                }}
              >
                {/* <img src={Img1} width="100%" /> */}
              </div>
              <div className="col-md-8" style={{ padding: "10px" }}>
                <img src={Img6} width="100%" />
                <img src={Img5} width="100%" className="mt-3" />
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
              marginTop: "0",
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
              <div className="col-md-8" style={{ padding: "10px" }}>
                <img src={Img6} width="100%" />
                <img src={Img5} width="100%" className="mt-3" />
              </div>
              <div
                className="col-md-6 "
                style={{
                  height: `${(0.5 / scale) * 400}px`,
                  background: "url(" + Img4 + ")",

                  marginTop: "70px",

                  borderRadius: "10px",
                }}
              >
                {/* <img src={Img1} width="100%" style={{ imageSize: "cover" }} /> */}
              </div>
            </div>
          )}
        </div>
      </div>
      <div style={{ height: "1000px", background: "#fff", opacity: "0" }} />
      <div
        style={{
          height: "900px",
          background: "#00285E",
          color: "white",
          opacity: "0.9",
        }}
        className="d-flex justify-content-center align-items-center"
      >
        <div style={{ opacity: "1" }} className="d-flex justify-content-center">
          <h2
            className=" text-center main-intro"
            style={{ opacity: calculateOpacity(), transition: "all 0.2s ease" }}
          >
            This is <span> your school.</span> This is{" "}
            <span>
              your journey. <br />
            </span>
            This is the extraordinary opportunity
            <span> your story</span> deserves.
          </h2>
        </div>
      </div>
      <div
        style={{ height: "1000px", backgroundColor: "#00285e" }}
        className=" justify-content-center align-items-center col-md-12 shadow-logo"
        ref={targetRef}
      >
        <center>
          {" "}
          <div className="inscription-inner col-md-6"> </div>
          <h3
            className="col-md-6"
            style={{
              transform: inView ? "scale(1)" : "scale(0.1)",
              opacity: inView ? 1 : 0,
              transition: "transform 2s ease, opacity 2s ease",
            }}
          >
            At Canterbury, students embark on a transformational, personal
            journey, where the combination of
            <span> ambitious academics, purposeful growth,</span> and{" "}
            <span>active community engagement</span> leads to a future greater
            than you ever thought possible.{" "}
          </h3>
        </center>
      </div>

      <center>
        {/* Heading with slide-in effect */}
        <div className="heading-container">
          <h1
            style={{
              transform: inView ? "translateX(0)" : "translateX(-100px)",
              opacity: inView ? 1 : 0,
              transition: "transform 0.6s ease, opacity 0.6s ease",
            }}
          >
            AN EDUCATION THAT'S
          </h1>
          <h1
            style={{
              display: "inline-block",
              transform: inView ? "translateX(0)" : "translateX(100px)",
              opacity: inView ? 1 : 0,
              transition: "transform 0.6s ease, opacity 0.6s ease",
            }}
          >
            <span> personal</span>
          </h1>
        </div>
      </center>
    </>
  );
};
