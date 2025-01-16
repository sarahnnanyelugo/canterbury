import React, { useEffect, useState, useRef } from "react";
import "./purpose.scss";

export const Purpose = () => {
  const [inViewText, setInViewText] = useState(false);
  const [hoveredBg, setHoveredBg] = useState(null);
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

  const handleMouseEnter = (bgImage) => {
    setHoveredBg(bgImage);
  };

  const handleMouseLeave = () => {
    setHoveredBg(null);
  };

  return (
    <div style={{ backgroundColor: "#fff" }} ref={textRef}>
      <center>
        <div
          className="col-md-7 purpose d-flex"
          style={{
            transform: inViewText ? "scale(1)" : "scale(0.1)",
            opacity: inViewText ? 1 : 0,
            transition: "transform 2s ease, opacity 2s ease",
            backgroundImage: hoveredBg ? `url(${hoveredBg})` : "none",
            backgroundSize: "cover",
            backgroundPosition: "center",
            transition: "background-image 0.7s ease-in-out",
          }}
        >
          {[
            {
              className: "faith",
              title: "Faith",
              text: "Believing in the unseen.",
              img: "faith.jpg",
            },
            {
              className: "service",
              title: "Service",
              text: "Serving with a purpose.",
              img: "service.jpg",
            },
            {
              className: "justice",
              title: "Justice",
              text: "Standing for what’s right.",
              img: "justice.jpg",
            },
          ].map(({ className, title, text, img }) => (
            <div
              key={className}
              className={`col-md-4 purpose-inner ${className}`}
              onMouseEnter={() =>
                handleMouseEnter(require(`../../../assets/images/${img}`))
              }
              onMouseLeave={handleMouseLeave}
            >
              <div className="overlay">
                <h3>{title}</h3>
                <p>{text}</p>
              </div>
            </div>
          ))}
        </div>
      </center>
    </div>
  );
};
