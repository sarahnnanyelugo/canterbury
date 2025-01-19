import React, { useEffect, useState, useRef } from "react";
import MainVid from "../../assets/images/main-vid.mp4";
import Img1 from "../../assets/images/img1.jpg";
import Img2 from "../../assets/images/img2.jpg";
import Img3 from "../../assets/images/img3.jpg";
import { IoArrowForward } from "react-icons/io5";
import { Footer } from "../../components/Footer/Footer";
import { Desktop, TabletAndBelow } from "../../Utils/mediaQueries";

import Img4 from "../../assets/images/img4.jpg";
import Img6 from "../../assets/images/img6.png";
import Img5 from "../../assets/images/img5.png";
import "./home.scss";
import Ethos from "./Ehtos/Ethos";
import { Purpose } from "./Purpose/Purpose";
import { WellBeing } from "./WellBeing/WellBeing";
import { Testimonials } from "./Testimonials/Testimonials";
import { SectionHeading } from "../../components/SectionHeading/SectionHeading";
import { Journey } from "./Journey/Journey";
import { Future } from "./Future/Future";

export const Home = () => {
  const [scale, setScale] = useState(0.5); // Initial scale for the video (50%)
  const [shift, setShift] = useState(0); // Initial shift for images (0px)
  const [hideImages, setHideImages] = useState(false); // Control to hide images
  const [yScroll, setYScroll] = useState(0);
  const [mxScroll, setMxScroll] = useState(
    () => window.innerHeight * 0.2 // Faster effect, approx. 2
  );
  const [inViewHeading, setInViewHeading] = useState(false); // Track if the heading is in view
  const [inViewParagraph, setInViewParagraph] = useState(false); // Track if the paragraph inside heading-container is in view

  const [inViewText, setInViewText] = useState(false); //   const targetRef = useRef(null); // Correct initialization in JavaScript
  const headingRef = useRef(null); // Reference for the heading
  const headingRef3 = useRef(null); // Reference for the heading
  const textRef = useRef(null); // Reference for the paragraph
  const paragraphRef = useRef(null); // Reference for the paragraph

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const maxScroll = window.innerHeight * 0.2; // Faster effect, approx. 2
      const scaleValue = Math.min(0.5 + (scrollY / maxScroll) * 0.2, 1); // Rapid scaling to 100%
      const shiftValue = Math.min((scrollY / maxScroll) * 20, 20); // Faster shift outwards

      setScale(scaleValue);
      setShift(shiftValue);

      //   Hide images when video is close to full size
      // if (scrollY >= maxScroll) setHideImages(true);
      // else setHideImages(false);
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

  useEffect(() => {
    if (yScroll >= 5000) setHideImages(true);
    else setHideImages(false);
  }, [yScroll]);
  const calculateOpacity = function () {
    const sc = yScroll / 1000;
    console.log("sc: " + sc);
    return Math.min(sc < 0.8 ? sc * 0.05 : sc, 1);
  };
  useEffect(() => {
    const handleScroll = () => {
      // Heading
      if (headingRef.current) {
        const rect = headingRef.current.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        if (rect.top <= windowHeight && rect.bottom >= 0) {
          setInViewHeading(true);
        } else {
          setInViewHeading(false);
        }
      }

      // Paragraph text
      if (textRef.current) {
        const rect = textRef.current.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        if (rect.top <= windowHeight && rect.bottom >= 0) {
          setInViewText(true);
        } else {
          setInViewText(false);
        }
      }
      if (paragraphRef.current) {
        const rect = paragraphRef.current.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        if (rect.top <= windowHeight && rect.bottom >= 0) {
          setInViewParagraph(true);
        } else {
          setInViewParagraph(false);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Run once on load to check initial position
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <Desktop>
        {" "}
        <div
          className="home-div"
          style={{
            transform: `translateY(${calcTranslate(shift)}px)`,
            transition: "all 0.2s ease",
          }}
        >
          <center>
            <div className="col-md- offset-md-0 offset-1">
              <SectionHeading
                text1="THIS IS"
                text2="your story"
                color1="#00285e"
                color2="#2d79c5"
                size1="60px"
                size2="7 0px"
              />
            </div>
          </center>

          <div className="col-md-12 d-flex ">
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
                  className="col-md-8 left-wing"
                  style={{
                    height: `${(0.5 / scale) * 400}px`,
                    background: "url(" + Img1 + ")",
                    backgroundPosition: "center",
                    marginTop: "70px",

                    borderRadius: "10px",
                  }}
                ></div>
                <div
                  className="col-md-8 landing-imgs"
                  style={{ padding: "10px" }}
                >
                  <img src={Img6} width="100%" />
                  <img src={Img5} width="100%" className="mt-3" />
                </div>
              </div>
            )}

            {!hideImages && (
              <div
                className="video-container"
                style={{
                  width: `${calcScale(scale)}%`,

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
            )}

            {!hideImages && (
              <div
                className="d-flex images-container"
                style={{
                  marginTop: "70px",
                  width: "40%",
                  transform: `translateX(${shift}px)`,
                }}
              >
                <div
                  className="col-md-8 col-12 landing-imgs"
                  style={{ padding: "10px" }}
                >
                  <img src={Img6} width="100%" />
                  <img src={Img5} width="100%" className="mt-3" />
                </div>
                <div
                  className="col-md-8 right-wing"
                  style={{
                    height: `${(0.5 / scale) * 400}px`,
                    background: "url(" + Img4 + ")",

                    marginTop: "70px",

                    borderRadius: "10px",
                  }}
                ></div>
              </div>
            )}
          </div>
        </div>
        <div
          style={{ height: "1000px", background: "#fff", opacity: "0" }}
          className="col-12"
        />
        <div
          style={{
            height: "900px",
            background: "#00285E",
            color: "white",
            opacity: "0.9",
          }}
          className="d-flex justify-content-center align-items-center"
        >
          <div
            style={{ opacity: "1" }}
            className="d-flex justify-content-center"
          >
            <h2
              className=" text-center main-intro"
              style={{
                opacity: calculateOpacity(),
                transition: "all 0.2s ease",
              }}
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
          className=" justify-content-center align-items-center col-md-12 shadow-logo col-12"
          ref={textRef}
        >
          <center>
            {" "}
            <div className="inscription-inner col-md-6"> </div>
            <h3
              className="col-md-6"
              style={{
                transform: inViewText ? "scale(1)" : "scale(0.1)",
                opacity: inViewText ? 1 : 0,
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
        <div
          className="col-md-12"
          style={{ background: "#fff", height: "300px" }}
        >
          <center className=" ">
            {" "}
            <SectionHeading
              text1=" AN EDUCATION THAT'S"
              text2="personal"
              color1="#00285e"
              color2="#2d79c5"
              paragraph="No two Canterbury educations are the same, because no two students
              are alike. Here, every class you take doesn’t just check a box; it
              is part of a learning journey that is uniquely yours and opens a
              door to your incredible potential."
            />
          </center>
        </div>
        {/* <div style={{ background: "#fff" }}>
        {" "}
        <Ethos />
      </div> */}
        {/*  */}
        <div
          className="col-md-12"
          style={{ background: "#fff", height: "300px" }}
        >
          <center className=" ">
            {" "}
            <SectionHeading
              text1="  A PATH TO"
              text2="purpose"
              color1="#00285e"
              color2="#de7c0d"
              paragraph="Your purpose here goes beyond the amazing things you achieve. It’s
              also about diving deep into self-discovery, valuing the
              differences of others, and believing that you can—and will—make a
              difference in the world. Toggle Description FAITH Toggle
              Description"
            />
          </center>
        </div>
        <Purpose />
        <div className="discover col-md-12">
          <center>
            <button>
              HOW WILL YOU DISCOVER YOUR PURPOSE
              <IoArrowForward className="icon" />
            </button>
          </center>
          <Testimonials />
        </div>
        <WellBeing />
        <Journey />
        <Future />
      </Desktop>
      <TabletAndBelow>
        <div className="mobile-contents">
          <div
            className="home-div"
            style={{
              transform: `translateY(${calcTranslate(shift)}px)`,
              transition: "all 0.2s ease",
            }}
          >
            <center>
              <div className="col-md- offset-md-0 offset-1">
                <SectionHeading
                  text1="THIS IS"
                  text2="your story"
                  color1="#00285e"
                  color2="#2d79c5"
                  size1="60px"
                  size2="7 0px"
                />
              </div>
            </center>

            <div className="col-md-12 d-flex ">
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
                    className="col-md-8 left-wing"
                    style={{
                      height: `${(0.5 / scale) * 400}px`,
                      background: "url(" + Img1 + ")",
                      backgroundPosition: "center",
                      marginTop: "70px",

                      borderRadius: "10px",
                    }}
                  ></div>
                  <div
                    className="col-md-8 landing-imgs"
                    style={{ padding: "10px" }}
                  >
                    <img src={Img6} width="100%" />
                    <img src={Img5} width="100%" className="mt-3" />
                  </div>
                </div>
              )}

              {!hideImages && (
                <div
                  className="video-container"
                  style={{
                    width: `${calcScale(scale)}%`,

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
              )}

              {!hideImages && (
                <div
                  className="d-flex images-container"
                  style={{
                    marginTop: "70px",
                    width: "40%",
                    transform: `translateX(${shift}px)`,
                  }}
                >
                  <div
                    className="col-md-8 col-12 landing-imgs"
                    style={{ padding: "10px" }}
                  >
                    <img src={Img6} width="100%" />
                    <img src={Img5} width="100%" className="mt-3" />
                  </div>
                  <div
                    className="col-md-8 right-wing"
                    style={{
                      height: `${(0.5 / scale) * 400}px`,
                      background: "url(" + Img4 + ")",

                      marginTop: "70px",

                      borderRadius: "10px",
                    }}
                  ></div>
                </div>
              )}
            </div>
          </div>
        </div>
        <div
          style={{ height: "10px", background: "#fff", opacity: "0" }}
          className="col-12"
        />
        <div
          style={{
            // height: "500px",
            background: "#00285E",
            color: "white",
            opacity: "0.9",
          }}
          className="d-flex justify-content-center align-items-center"
        >
          <div
            style={{ opacity: "1" }}
            className="d-flex justify-content-center"
          >
            <h2
              className=" text-center main-intro"
              style={{
                opacity: calculateOpacity(),
                transition: "all 0.2s ease",
              }}
            >
              This is <span> your school.</span> This is{" "}
              <span>
                your journey. <br />
              </span>
              This is the extraordinary opportunity
              <span> your story</span> deserves.
            </h2>
          </div>
        </div>{" "}
        <div
          style={{ height: "600px", backgroundColor: "#00285e" }}
          className=" justify-content-center align-items-center col-md-12 shadow-logo col-12"
          ref={textRef}
        >
          <center>
            {" "}
            <div className="inscription-inner col-md-6"> </div>
            <h3
              className="col-md-6"
              style={{
                transform: inViewText ? "scale(1)" : "scale(0.1)",
                opacity: inViewText ? 1 : 0,
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
        <div
          className="col-md-12"
          style={{ background: "#fff", height: "300px" }}
        >
          <center className=" ">
            {" "}
            <SectionHeading
              text1=" AN EDUCATION THAT'S"
              text2="personal"
              color1="#00285e"
              color2="#2d79c5"
              paragraph="No two Canterbury educations are the same, because no two students
              are alike. Here, every class you take doesn’t just check a box; it
              is part of a learning journey that is uniquely yours and opens a
              door to your incredible potential."
            />
          </center>
        </div>{" "}
        {/* <div style={{ background: "#fff" }}>
        {" "}
        <Ethos />
      </div> */}
        <div
          className="col-md-12"
          style={{ background: "#fff", height: "300px" }}
        >
          <center className=" ">
            {" "}
            <SectionHeading
              text1="  A PATH TO"
              text2="purpose"
              color1="#00285e"
              color2="#de7c0d"
              paragraph="Your purpose here goes beyond the amazing things you achieve. It’s
              also about diving deep into self-discovery, valuing the
              differences of others, and believing that you can—and will—make a
              difference in the world. Toggle Description FAITH Toggle
              Description"
            />
          </center>
        </div>
        <Purpose />
      </TabletAndBelow>
    </>
  );
};
