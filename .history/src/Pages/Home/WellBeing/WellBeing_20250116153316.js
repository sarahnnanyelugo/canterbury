import React, { useEffect, useState, useRef } from "react";
import "./wellbeing.scss";
import Vid1 from "../../../assets/images/testify.mp4";
import Vid2 from "../../../assets/images/testify2.webm";
import Vid3 from "../../../assets/images/testify3.mp4";
import Vid4 from "../../../assets/images/testify4.webm";

export const Testimonials = () => {
  const [inViewHeading, setInViewHeading] = useState(false);
  const [inViewParagraph, setInViewParagraph] = useState(false);

  const [inViewText, setInViewText] = useState(false);
  const headingRef = useRef(null);
  const textRef = useRef(null); // Reference for the paragraph
  const paragraphRef = useRef(null); // Reference for the paragraph
  const videoRef = useRef(null);
  const [showButton, setShowButton] = useState(true);

  const handlePlay = () => {
    videoRef.current.play();
    setShowButton(false);
  };
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

  return (
    <div className="culture-container ">
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
            A CULTURE OF
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
            community
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
            From the moment you join our intentionally small school, you
            experience a connection with peers and faculty, a curiosity about
            the things that make us different, and comfort in a community that
            celebrates you as an individual and bonds together like a family.
          </p>
        </div>
      </center>

      <div className="col-md-12" ref={textRef}>
        {" "}
        <center>
          <div
            className="col-md-8 testimonial-videos d-flex"
            style={{
              transform: inViewText ? "scale(1)" : "scale(0.1)",
              opacity: inViewText ? 1 : 0,
              transition:
                "background 0.5s ease, transform 2s ease, opacity 2s ease",
            }}
          >
            <div className="col-md-3">
              <video
                className="video"
                width="100%"
                loop
                muted
                playsInline
                controls
                src={Vid1}
              ></video>
            </div>
            <div className="col-md-3">
              <video
                className="video"
                width="100%"
                loop
                muted
                playsInline
                controls
                src={Vid4}
              ></video>
            </div>{" "}
            <div className="col-md-3">
              <video
                className="video"
                width="100%"
                loop
                muted
                playsInline
                controls
                src={Vid3}
              ></video>
            </div>{" "}
            <div className="col-md-3">
              <video
                className="video"
                width="100%"
                loop
                muted
                controls
                playsInline
                src={Vid2}
              ></video>
            </div>
          </div>
        </center>
      </div>
    </div>
  );
};
