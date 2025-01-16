import React, { useEffect, useState, useRef } from "react";
import "./wellbeing.scss";
import Vid1 from "../../../assets/images/testify.mp4";
import Vid2 from "../../../assets/images/testify2.webm";
import Vid3 from "../../../assets/images/testify3.mp4";
import Vid4 from "../../../assets/images/testify4.webm";

export const WellBeing = () => {
  const [activeIndex, setActiveIndex2] = useState(1);

  const checkActive2 = (index, className) =>
    activeIndex === index ? className : "";
  const [inViewHeading, setInViewHeading] = useState(false);
  const [inViewParagraph, setInViewParagraph] = useState(false);

  const [inViewText, setInViewText] = useState(false);
  const headingRef = useRef(null);
  const textRef = useRef(null); // Reference for the paragraph
  const paragraphRef = useRef(null); // Reference for the paragraph
  const tabRef = useRef(null); // Reference for tab visibility detection

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
  const handleClick2 = (index) => {
    setActiveIndex2(index);
    setTabInView(false); // Reset animation before triggering it again
    setTimeout(() => setTabInView(true), 10); // Re-trigger animation
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
        <div className="tabs offset-md-5">
          <button
            className={`tab ${checkActive2(1, "active2")}`}
            onClick={() => handleClick2(1)}
          >
            Business
          </button>
          <button
            className={`tab ${checkActive2(2, "active2")}`}
            onClick={() => handleClick2(2)}
            style={{ marginLeft: "20px" }}
          >
            School
          </button>
        </div>
        <div className="panels" ref={tabRef}>
          <div className={`panel ${checkActive(1, "active2")}`}>
            <div
              className="sample-con col-md-6 offset-md-3"
              style={{
                transform: inViewText ? "scale(1)" : "scale(0.1)",
                opacity: inViewText ? 1 : 0,
                transition:
                  "background 0.5s ease, transform 2s ease, opacity 2s ease",
              }}
            ></div>
          </div>
          <div className={`panel ${checkActive(2, "active2")}`}>
            {" "}
            <div
              className="sample-con2 col-md-6 offset-md-3"
              style={{
                transform: inViewText ? "scale(1)" : "scale(0.1)",
                opacity: inViewText ? 1 : 0,
                transition:
                  "background 0.5s ease, transform 2s ease, opacity 2s ease",
              }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};
