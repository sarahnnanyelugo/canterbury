import React, { useEffect, useState, useRef } from "react";
import "./wellbeing.scss";
import Health from "../../../assets/images/healthy.png";
import New from "../../../assets/images/senior-group.png";
import Vibrant from "../../../assets/images/vibrant.jpeg";
import { IoArrowForward } from "react-icons/io5";

export const WellBeing = () => {
  const [activeIndex, setActiveIndex] = useState(1); // Default to first tab

  const checkActive2 = (index, className) =>
    activeIndex === index ? className : "";
  const [inViewHeading, setInViewHeading] = useState(false);
  const [inViewParagraph, setInViewParagraph] = useState(false);

  const [inViewText, setInViewText] = useState(false);
  const headingRef = useRef(null);
  const textRef = useRef(null); // Reference for the paragraph
  const paragraphRef = useRef(null); // Reference for the paragraph
  const tabRef = useRef(null); // Reference for tab visibility detection
  const [tabInView, setTabInView] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
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
  const handleClick = (index) => {
    setActiveIndex(index);
    setTabInView(false);
    setTimeout(() => setTabInView(true), 10);
  };
  const checkActive = (index, className) =>
    activeIndex === index ? className : "";

  return (
    <div className="wellbeing-container ">
      <div ref={headingRef}>
        {" "}
        <div className="d-flex offset-md-3">
          {" "}
          <h1
            className="heading1"
            style={{
              fontSize: "60px",
              transform: inViewHeading ? "translateX(0)" : "translateX(-100px)",
              opacity: inViewHeading ? 1 : 0,
              transition: "transform 2s ease, opacity 2s ease",
            }}
          >
            WELL BALANCED
          </h1>{" "}
          {""}
          <h1
            className="heading2"
            style={{
              fontSize: "70px",
              display: "inline-block",
              transform: inViewHeading ? "translateX(0)" : "translateX(100px)",
              opacity: inViewHeading ? 1 : 0,
              transition: "transform 2s ease, opacity 2s ease",
              marginLeft: "10px",
            }}
          >
            well-being
          </h1>
        </div>
      </div>
      <center>
        <div className="col-md-6">
          <p
            ref={paragraphRef}
            style={{
              transform: inViewParagraph
                ? "translateY(0)"
                : "translateY(100px)",
              opacity: inViewParagraph ? 1 : 0,
              transition: "transform 1s ease, opacity 1s ease",

              fontFamily: "figtree",
            }}
          >
            You are no one thing. Here, we make balance a priority so you can
            bring your full self to every opportunity. Because when you are
            happy and fulfilled, you are the best version of yourself and bring
            out the best in everyone.
          </p>
        </div>
      </center>

      <div className="wellbeing-tab ">
        {" "}
        <center>
          <div className="tabs ">
            <button
              className={`tab ${checkActive2(1, "active2")}`}
              onClick={() => handleClick(1)}
            >
              STUDENT LIFE
            </button>
            <button
              className={`tab ${checkActive2(2, "active2")}`}
              onClick={() => handleClick(2)}
              style={{ marginLeft: "20px" }}
            >
              LEADERSHIP
            </button>
            <button
              className={`tab ${checkActive2(3, "active2")}`}
              onClick={() => handleClick(3)}
              style={{ marginLeft: "20px" }}
            >
              ATHLETICS
            </button>{" "}
            <button
              className={`tab ${checkActive2(4, "active2")}`}
              onClick={() => handleClick(4)}
              style={{ marginLeft: "20px" }}
            >
              ARTS
            </button>{" "}
            <button
              className={`tab ${checkActive2(5, "active2")}`}
              onClick={() => handleClick(5)}
              style={{ marginLeft: "20px" }}
            >
              TRAVEL
            </button>
          </div>
        </center>
        <div className="panels " ref={tabRef}>
          <div className={`panel ${activeIndex === 1 ? "active2" : ""}`}>
            <div
              className="d-flex col-md-10 col-12"
              style={{
                transform:
                  tabInView && activeIndex === 1 ? "scale(1)" : "scale(0.1)",
                opacity: tabInView && activeIndex === 1 ? 1 : 0,
                transition: "transform 1.5s ease, opacity 1.5s ease",
              }}
            >
              <div className="tab-img1 col-md-3 offset-md-2 col-5">
                <img src={Health} width="100%" />{" "}
                <div class="overlay2">
                  <p>
                    Healthy Connections <IoArrowForward className="icon" />
                  </p>
                </div>
              </div>
              <div className="col-md-4 col-5">
                {" "}
                <div className="middle-img col-md-10 offset-md-1 d-flex ">
                  {" "}
                  <img src={Vibrant} width="100%" />
                  <div class="overlay">
                    {/* <div class="text2"> */}
                    <h5>A Vibrant Community</h5>
                    <p>
                      With a 24/7 vibrant campus life, every day is a new
                      opportunity for growth, friendship, and self-discovery,
                      where you find countless ways to engage, learn, and lead.{" "}
                    </p>
                    <div>
                      {" "}
                      <button>LEARN MORE</button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="tab-img2 col-md-3 col-5">
                {" "}
                <img src={New} width="100%" />
                <div class="overlay2">
                  <p>
                    Try Something New <IoArrowForward className="icon" />
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className={`panel ${activeIndex === 2 ? "active2" : ""}`}>
            {" "}
            <div
              className="sample-con2 col-md-6 offset-md-3"
              style={{
                transform:
                  tabInView && activeIndex === 2 ? "scale(1)" : "scale(0.1)",
                opacity: tabInView && activeIndex === 2 ? 1 : 0,
                transition: "transform 1.5s ease, opacity 1.5s ease",
              }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};
