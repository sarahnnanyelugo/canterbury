import React, { useEffect, useRef, useState } from "react";
import MainVid from "../../assets/images/main-vid.mp4";
import { SectionHeading } from "../../components/SectionHeading/SectionHeading";
import Hero from "../../assets/images/asian-boy.png";
import { Link } from "react-router-dom";
import Ethos from "./Ehtos/Ethos";
import { Purpose } from "./Purpose/Purpose";
import { Testimonials } from "./Testimonials/Testimonials";
import { IoArrowForward } from "react-icons/io5";
import { OurWords } from "../../components/OurWords/OurWords";
import { Journey } from "./Journey/Journey";
import { Future } from "./Future/Future";
import News from "../../components/News/News";
import FBSocials from "./FBSocials";
import YouTube from "./Youtube";
import TwitterHandle from "./TwitterHandle/TwitterHandle";
import { GoDotFill } from "react-icons/go";
export const MobileHome = () => {
  const [inViewParagraph, setInViewParagraph] = useState(false); // Track if the paragraph inside heading-container is in view
  const [inViewText, setInViewText] = useState(false); //   const targetRef = useRef(null); // Correct initialization in JavaScript

  const paragraphRef = useRef(null);
  const textRef = useRef(null); // Reference for the paragraph

  useEffect(() => {
    const handleScroll = () => {
      // Heading
      // if (headingRef.current) {
      //   const rect = headingRef.current.getBoundingClientRect();
      //   const windowHeight = window.innerHeight;
      //   if (rect.top <= windowHeight && rect.bottom >= 0) {
      //     setInViewHeading(true);
      //   } else {
      //     setInViewHeading(false);
      //   }
      // }

      // // Paragraph text
      if (textRef.current) {
        const rect = textRef.current.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        if (rect.top <= windowHeight && rect.bottom >= 0) {
          setInViewText(true);
        } else {
          setInViewText(false);
        }
      } // Paragraph paragrapgh
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
      <div className="mobile-home">
        <div
          className="mobile-intro-heading col-12"
          style={{ position: "", top: "0px", zIndex: "-1" }}
        >
          <center>
            <div className=" section-head ">
              {" "}
              <h1>
                THIS IS <span>your story</span>
              </h1>{" "}
              {""}
            </div>
          </center>{" "}
          <div className="mobile-vid col-12">
            {" "}
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
        </div>
        <div
          style={{
            fontFamily: "figtree",
            height: "400px",
            backgroundColor: "rgba(0, 0, 0, 0.9)",
            // marginTop: "550px",
          }}
          className="d-flex justify-content-center align-items-center "
        >
          <div className="d-flex justify-content-center">
            <h2
              ref={paragraphRef}
              className=" text-center main-intro"
              style={{
                opacity: "1",
                color: "#fff",
                transition: "all 0.2s ease",
                transform: inViewParagraph
                  ? "translateY(0)"
                  : "translateY(100px)",
                opacity: inViewParagraph ? 1 : 0,
                transition: "transform 1s ease, opacity 1s ease",
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
          style={{
            height: "500px",
            backgroundColor: "#54020a",
            marginTop: "30px",
            // marginBottom: "100px",
          }}
          className=" justify-content-center align-items-center col-md-12 shadow-logo col-12 "
          ref={textRef}
        >
          <center>
            {" "}
            <div className="inscription-inner2 col-md-6"> </div>
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
          <div className="col-md-10 offset-md-1 d-md-flex">
            <div className="col-md-6">
              {" "}
              <img src={Hero} width="100%" />
            </div>
            <div className="col-md-5 offset-md-1 para-div">
              <p>
                Canterbury International School is a premier institution
                dedicated to academic excellence and holistic development. Our
                curriculum blends international educational standards with a
                nurturing environment, ensuring that every student receives a
                well-rounded and enriching learning experience. With a focus on
                critical thinking, creativity, and leadership, we empower
                students to excel both in and beyond the classroom.
              </p>
              <Link to={"/our-story"}>Read More</Link>
            </div>
          </div>
        </div>
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
        <Ethos />
        <div
          className="col-md-12"
          style={{ background: "#fff", height: "250px" }}
        >
          <center className=" ">
            {" "}
            <SectionHeading
              text1="  A PATH TO"
              text2="purpose"
              color1="#54020a"
              color2="#de7c0d"
              paragraph="Your purpose here goes beyond the amazing things you achieve. It’s
              also about diving deep into self-discovery, valuing the
              differences of others, and believing that you can—and will—make a
              difference in the world. "
            />
          </center>
        </div>{" "}
        <center className=" ">
          {" "}
          <SectionHeading
            text1=" INTRODUCING"
            text2="our categories"
            color1="#54020a"
            color2="#2d79c5"
          />
        </center>
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
        <div className="our-words">
          <OurWords />
        </div>
        <div
          style={{ background: "#d4d6e3" }}
          className="social-media-div mobile-pad"
        >
          <SectionHeading
            text1="OUR SOCIAL"
            text2="media pages"
            color1="#54020a"
            color2="#2d79c5"
          />
          <br />
          <div className="col-md-10 offset-md-1 d-md-flex">
            <div className="col-md-4">
              <small>
                <span>
                  <GoDotFill />
                </span>
                Facebook
              </small>
              <FBSocials />
            </div>
            <div className="col-md-4">
              {" "}
              <small>
                <span>
                  <GoDotFill />
                </span>
                Instagram
              </small>
              <TwitterHandle />
            </div>{" "}
            <div className="col-md-4">
              <small>
                <span>
                  <GoDotFill />
                </span>
                Youtube
              </small>
              <YouTube />
            </div>
          </div>
        </div>
        <Journey />
        <div className="news-div">
          <center>
            <h2>
              OUR <span>stories</span>
            </h2>
          </center>
          <div className="col-md-8 offset-md-2 ">
            <News />
          </div>
        </div>
        <Future />
      </div>
    </>
  );
};
