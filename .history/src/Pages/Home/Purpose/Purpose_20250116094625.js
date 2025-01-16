import React, { useEffect, useState, useRef } from "react";
import "./purpose.scss";
export const Purpose = () => {
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
    <div style={{ backgroundColor: "#fff" }} ref={textRef}>
      {" "}
      <center>
        {" "}
        <div
          className="col-md-7 purpose d-flex"
          style={{
            transform: inViewText ? "scale(1)" : "scale(0.1)",
            opacity: inViewText ? 1 : 0,
            transition: "transform 2s ease, opacity 2s ease",
          }}
        >
          <div className="col-md-4 purpose-inner faith"></div>
          <div className="col-md-4 purpose-inner service"></div>
          <div className="col-md-4 purpose-inner justice"></div>
        </div>
      </center>
    </div>
  );
};
