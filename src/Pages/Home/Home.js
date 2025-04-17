import React, { useEffect, useState, useRef } from "react";
import MainVid from "../../assets/images/main-vid.mp4";
import Img1 from "../../assets/images/primary-boy-main.png";

import { IoArrowForward } from "react-icons/io5";
import { Desktop, TabletAndBelow } from "../../Utils/mediaQueries";

import Img4 from "../../assets/images/primary-girl-main.png";
import Img6 from "../../assets/images/senior-boy.png";
import Img66 from "../../assets/images/senior-girl2.png";
import Img55 from "../../assets/images/eyfs-boy.png";
import Img5 from "../../assets/images/eyfs3.png";
import "./home.scss";
import Ethos from "./Ehtos/Ethos";
import { Purpose } from "./Purpose/Purpose";
import { WellBeing } from "./WellBeing/WellBeing";
import { Testimonials } from "./Testimonials/Testimonials";
import { SectionHeading } from "../../components/SectionHeading/SectionHeading";
import { Journey } from "./Journey/Journey";
import { Future } from "./Future/Future";
import { OurWords } from "../../components/OurWords/OurWords";
import Hero from "../../assets/images/asian-boy.png";
import { Link } from "react-router-dom";
import News from "../../components/News/News";
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
      <div
        className="home-div"
        style={{
          transform: `translateY(${calcTranslate(shift)}px)`,
          transition: "all 0.2s ease",
        }}
      >
        <div className=" ">
          <center>
            <div className=" section-head ">
              {" "}
              <h1>
                THIS IS <span>your story</span>
              </h1>{" "}
              {""}
            </div>
          </center>
        </div>

        <div className="col-md-12 d-flex ">
          {!hideImages && (
            <div
              className="d-flex images-container"
              style={{
                marginTop: "40px",
                width: "40%",
                transform: `translateX(-${shift}px)`,
              }}
            >
              <div
                className="col-md-6 left-wing"
                style={{
                  height: `${(0.5 / scale) * 400}px`,
                  background: "url(" + Img1 + ")",
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                  marginTop: "70px",
                  borderRadius: "10px",
                }}
              ></div>
              <div
                className="col-md-7 landing-imgs"
                style={{ marginLeft: "10px" }}
              >
                <img src={Img6} width="100%" className="img-adj" />
                <img src={Img55} width="100%" className="mt-3 eyfs-boy" />
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
                marginTop: "40px",
                width: "40%",
                transform: `translateX(${shift}px)`,
              }}
            >
              <div
                className="col-md-7 col-12 landing-imgs"
                style={{ marginLeft: "10px" }}
              >
                <img src={Img66} width="100%" />
                <img src={Img5} width="100%" className="mt-3" />
              </div>
              <div
                className="col-md-7 right-wing"
                style={{
                  height: `${(0.5 / scale) * 400}px`,
                  background: "url(" + Img4 + ")",
                  marginLeft: "10px",
                  marginTop: "70px",
                  backgroundSize: "contain",
                  backgroundRepeat: "no-repeat",
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
          backgroundColor: "rgba(0, 0, 0, 0.8)",
          color: "white",
        }}
        className="d-flex justify-content-center align-items-center "
      >
        <div style={{ opacity: "1" }} className="d-flex justify-content-center">
          <h2
            className=" text-center main-intro"
            style={{
              opacity: calculateOpacity(),
              transition: "all 0.2s ease",
            }}
          >
            A Place <span> TO LIVE</span> A Place{" "}
            <span>
              TO LEARN
              <br />
            </span>
            A Place
            <span> TO GROW</span>
          </h2>
        </div>
      </div>
      <div
        style={{ height: "1000px", backgroundColor: "#54020a" }}
        className=" justify-content-center align-items-center col-md-12 shadow-logo col-12 "
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
      <div className="who-we-are  ">
        <SectionHeading
          text1=" WHO WE"
          text2="are"
          color1="#54020a"
          color2="#929292"
        />
        <div className="col-md-10 offset-md-1 d-md-flex mt-5">
          <div className="col-md-6">
            {" "}
            <img src={Hero} width="100%" style={{}} />
          </div>
          <div className="col-md-5 offset-md-1 ">
            <p>
              Canterbury International School is a premier institution dedicated
              to academic excellence and holistic development. Our curriculum
              blends international educational standards with a nurturing
              environment, ensuring that every student receives a well-rounded
              and enriching learning experience. With a focus on critical
              thinking, creativity, and leadership, we empower students to excel
              both in and beyond the classroom.
            </p>
            <p>
              At Canterbury, we believe in fostering a dynamic and inclusive
              community where students from diverse backgrounds thrive. Our
              highly qualified educators use innovative teaching methods, modern
              technology, and hands-on learning approaches to inspire curiosity
              and a love for learning. Beyond academics, we offer a wide range
              of extracurricular activities, including sports, arts, and coding
              & robotics, to develop well-balanced individuals.
            </p>
            <p>
              Our school campus provides a safe, stimulating, and well-equipped
              environment designed to support academic and personal growth. From
              state-of-the-art classrooms to dedicated STEM labs and sports
              facilities, Canterbury International School ensures that students
              have the resources they need to succeed. Join us on a journey of
              discovery, excellence, and lifelong learning.
            </p>
            <Link to={"/our-story"}>Read More</Link>
          </div>
        </div>
      </div>
      <div
        className="col-md-12"
        style={{ background: "#fff", height: "300px", paddingTop: "80px" }}
      >
        <center className=" ">
          {" "}
          <SectionHeading
            text1=" AN EDUCATION THAT'S"
            text2="personal"
            color1="#54020a"
            color2="#2d79c5"
            paragraph="No two Canterbury educations are the same, because no two students
              are alike. Here, every class you take doesn’t just check a box; it
              is part of a learning journey that is uniquely yours and opens a
              door to your incredible potential."
          />
        </center>
      </div>
      <div style={{ background: "#fff" }}>
        {" "}
        <Ethos />
      </div>
      {/*  */}
      <div
        className="col-md-12"
        style={{ background: "#fff", height: "250px" }}
      >
        <center className=" ">
          {" "}
          <SectionHeading
            text1=" INTRODUCING OUR"
            text2="categories"
            color1="#54020a"
            color2="#de7c0d"
            paragraph="Your purpose here goes beyond the amazing things you achieve. It’s
              also about diving deep into self-discovery, valuing the
              differences of others, and believing that you can—and will—make a
              difference in the world. "
          />
        </center>
      </div>
      <Purpose />
      <div className="discover col-md-12">
        <center>
          <Link to={"/apply"}>
            {" "}
            <button>
              READY TO TAKE A STEP?
              <IoArrowForward className="icon" />
            </button>
          </Link>
        </center>
        <Testimonials />
      </div>
      <div className="our-words">
        <OurWords />
      </div>
      <Journey />
      <div className="news-div">
        <center>
          <h2>
            OUR <span>updates</span>
          </h2>
        </center>
        <div className="col-md-8 offset-md-2 ">
          <News />
        </div>
      </div>

      <Future />
    </>
  );
};
