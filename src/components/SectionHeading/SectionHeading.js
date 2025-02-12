import React, { useEffect, useState, useRef } from "react";
import "./section-heading.scss";
export const SectionHeading = (props) => {
  const { color1, color2, text1, text2, paragraph, size1, size2 } = props;
  const [inViewHeading, setInViewHeading] = useState(false); // Track if the heading is in view
  const [inViewParagraph, setInViewParagraph] = useState(false); // Track if the paragraph inside heading-container is in view

  const [inViewText, setInViewText] = useState(false); //   const targetRef = useRef(null); // Correct initialization in JavaScript
  const headingRef = useRef(null); // Reference for the heading
  const paragraphRef = useRef(null); // Reference for the paragraph
  const textRef = useRef(null); // Reference for the paragraph

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
      <div className="heading-container " ref={headingRef}>
        <div className="d-flex section-head justify-content-center align-items-center">
          {" "}
          <h1
            className="head1 offset-md-"
            style={{
              color: color1,
              fontSize: size1,
              transform: inViewHeading ? "translateX(0)" : "translateX(-100px)",
              opacity: inViewHeading ? 1 : 0,
              transition: "transform 2s ease, opacity 2s ease",
            }}
          >
            {text1}
          </h1>{" "}
          {""}
          <h1
            className="head2"
            style={{
              fontSize: size2,
              color: color2,
              display: "inline-block",
              transform: inViewHeading ? "translateX(0)" : "translateX(100px)",
              opacity: inViewHeading ? 1 : 0,
              transition: "transform 2s ease, opacity 2s ease",
              marginLeft: "10px",
            }}
          >
            {text2}
          </h1>
        </div>
      </div>
      <center>
        {" "}
        <p
          className="col-md-6"
          ref={paragraphRef}
          style={{
            transform: inViewParagraph ? "translateY(0)" : "translateY(100px)",
            opacity: inViewParagraph ? 1 : 0,
            transition: "transform 1s ease, opacity 1s ease",
            color: "#4d5e69",
            fontFamily: "figtree",
          }}
        >
          {paragraph}
        </p>
      </center>
    </>
  );
};
