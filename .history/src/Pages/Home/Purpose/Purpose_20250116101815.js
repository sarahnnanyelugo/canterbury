import React, { useEffect, useState, useRef } from "react";
import "./purpose.scss";

export const Purpose = () => {
  const [inViewText, setInViewText] = useState(false);
  const [bgImage, setBgImage] = useState(""); // Track hovered background image
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
            className="col-md-4 purpose-inner faith"
            onMouseEnter={() =>
              setBgImage(require("../../../assets/images/faith.jpg"))
            }
            onMouseLeave={() => setBgImage("")}
          ></div>
          <div
            className="col-md-4 purpose-inner service"
            onMouseEnter={() =>
              setBgImage(require("../../../assets/images/service.jpg"))
            }
            onMouseLeave={() => setBgImage("")}
          ></div>
          <div
            className="col-md-4 purpose-inner justice"
            onMouseEnter={() =>
              setBgImage(require("../../../assets/images/justice.jpg"))
            }
            onMouseLeave={() => setBgImage("")}
          ></div>
        </div>
      </center>
    </div>
  );
};
