import React, { useEffect, useState, useRef } from "react";
import "./purpose.scss";

export const Purpose = () => {
  const [inViewText, setInViewText] = useState(false);
  const [bgImage, setBgImage] = useState(null); // Default should be null
  const textRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (textRef.current) {
        const rect = textRef.current.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        if (rect.top <= windowHeight && rect.bottom >= 0) {
          setInViewText(true);
        } else {
          setInViewText(false);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleMouseEnter = (image) => {
    setBgImage(image);
  };

  const handleMouseLeave = () => {
    setBgImage(null); // Reset to null when not hovering
  };

  return (
    <div style={{ backgroundColor: "#fff" }} ref={textRef}>
      <center>
        <div
          className="col-md-7 purpose d-flex"
          style={{
            background: bgImage
              ? `url(${bgImage}) center/cover no-repeat`
              : "#000",
            transform: inViewText ? "scale(1)" : "scale(0.1)",
            opacity: inViewText ? 1 : 0,
            transition:
              "background 0.5s ease, transform 2s ease, opacity 2s ease",
          }}
        >
          <div
            className="col-md-4 purpose-inner faith"
            onMouseEnter={() =>
              handleMouseEnter(require("../../../assets/images/faith.jpg"))
            }
            onMouseLeave={handleMouseLeave}
          ></div>
          <div
            className="col-md-4 purpose-inner service"
            onMouseEnter={() =>
              handleMouseEnter(require("../../../assets/images/service.jpg"))
            }
            onMouseLeave={handleMouseLeave}
          ></div>
          <div
            className="col-md-4 purpose-inner justice"
            onMouseEnter={() =>
              handleMouseEnter(require("../../../assets/images/justice.jpg"))
            }
            onMouseLeave={handleMouseLeave}
          ></div>
        </div>
      </center>
    </div>
  );
};
