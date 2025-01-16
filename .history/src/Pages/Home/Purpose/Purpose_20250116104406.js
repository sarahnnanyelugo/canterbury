import React, { useEffect, useState, useRef } from "react";
import "./purpose.scss";

export const Purpose = () => {
  const [inViewText, setInViewText] = useState(false);
  const [bgImage, setBgImage] = useState(null);
  const [hoveredChild, setHoveredChild] = useState(null); // Track hovered child
  const textRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (textRef.current) {
        const rect = textRef.current.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        setInViewText(rect.top <= windowHeight && rect.bottom >= 0);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleMouseEnter = (image, child) => {
    setBgImage(image);
    setHoveredChild(child);
  };

  const handleMouseLeave = () => {
    setBgImage(null);
    setHoveredChild(null);
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
            className={`col-md-4 purpose-inner faith ${
              hoveredChild && hoveredChild !== "faith" ? "transparent" : ""
            }`}
            onMouseEnter={() =>
              handleMouseEnter(
                require("../../../assets/images/faith.jpg"),
                "faith"
              )
            }
            onMouseLeave={handleMouseLeave}
          ></div>
          <div
            className={`col-md-4 purpose-inner service ${
              hoveredChild && hoveredChild !== "service" ? "transparent" : ""
            }`}
            onMouseEnter={() =>
              handleMouseEnter(
                require("../../../assets/images/service.jpg"),
                "service"
              )
            }
            onMouseLeave={handleMouseLeave}
          ></div>
          <div
            className={`col-md-4 purpose-inner justice ${
              hoveredChild && hoveredChild !== "justice" ? "transparent" : ""
            }`}
            onMouseEnter={() =>
              handleMouseEnter(
                require("../../../assets/images/justice.jpg"),
                "justice"
              )
            }
            onMouseLeave={handleMouseLeave}
          ></div>
        </div>
      </center>
    </div>
  );
};
