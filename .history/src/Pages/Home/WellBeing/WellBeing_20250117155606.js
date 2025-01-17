import React, { useEffect, useState, useRef } from "react";
import "./wellbeing.scss";
import Vid1 from "../../../assets/images/testify.mp4";
import Vid2 from "../../../assets/images/testify2.webm";
import Vid3 from "../../../assets/images/testify3.mp4";
import Vid4 from "../../../assets/images/testify4.webm";

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

      <div className="business-pricing-tab ">
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
        <div className="panels" ref={tabRef}>
          <div className={`panel ${activeIndex === 1 ? "active2" : ""}`}>
            <div
              className="d-md-flex col-md-8 offset-md-2"
              style={{
                transform:
                  tabInView && activeIndex === 1 ? "scale(1)" : "scale(0.1)",
                opacity: tabInView && activeIndex === 1 ? 1 : 0,
                transition: "transform 1.5s ease, opacity 1.5s ease",
              }}
            >
              <div className="tab-img1 col-md-4"></div>
              <div className="middle-img col-md-4 "></div>
              <div className="tab-img2 col-md-4"></div>
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
