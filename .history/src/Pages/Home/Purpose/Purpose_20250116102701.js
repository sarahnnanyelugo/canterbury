import React, { useEffect, useState, useRef } from "react";
import "./purpose.scss";

export const Purpose = () => {
  const [inViewText, setInViewText] = useState(false);
  const [bgImage, setBgImage] = useState(""); // Track hovered background image
  const [hovered, setHovered] = useState(false); // Track if any child is hovered
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
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setBgImage("");
    setHovered(false);
  };

  return (
    <div style={{ backgroundColor: "#fff" }} ref={textRef}>
      <center>
        <div
          className="col-md-7 purpose d-flex"
          style={{
            backgroundImage: bgImage ? `url(${bgImage})` : "#000",
            backgroundSize: "cover",
            backgroundPosition: "center",
            transform: inViewText ? "scale(1)" : "scale(0.1)",
            opacity: inViewText ? 1 : 0,
            transition:
              "background-image 0.5s ease, transform 2s ease, opacity 2s ease",
          }}
        >
          <div
            className={`col-md-4 purpose-inner ${hovered ? "no-bg" : "faith"}`}
            onMouseEnter={() =>
              handleMouseEnter(require("../../../assets/images/faith.jpg"))
            }
            onMouseLeave={handleMouseLeave}
          ></div>
          <div
            className={`col-md-4 purpose-inner ${
              hovered ? "no-bg" : "service"
            }`}
            onMouseEnter={() =>
              handleMouseEnter(require("../../../assets/images/service.jpg"))
            }
            onMouseLeave={handleMouseLeave}
          ></div>
          <div
            className={`col-md-4 purpose-inner ${
              hovered ? "no-bg" : "justice"
            }`}
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
