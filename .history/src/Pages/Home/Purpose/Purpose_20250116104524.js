import React, { useEffect, useState, useRef } from "react";
import "./purpose.scss";

export const Purpose = () => {
  const [inViewText, setInViewText] = useState(false);
  const [bgImage, setBgImage] = useState(null);
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

  const handleMouseEnter = (image) => {
    setBgImage(image);
  };

  const handleMouseLeave = () => {
    setBgImage(null);
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
          {["faith", "service", "justice"].map((type) => (
            <div
              key={type}
              className={`col-md-4 purpose-inner ${type}`}
              onMouseEnter={() =>
                handleMouseEnter(require(`../../../assets/images/${type}.jpg`))
              }
              onMouseLeave={handleMouseLeave}
            ></div>
          ))}
        </div>
      </center>
    </div>
  );
};
