import React, { useState, useRef, useEffect } from "react";
import "./future.scss";

export const Future = () => {
  const [scrolled, setScrolled] = useState(false);
  const [zoomIn, setZoomIn] = useState(true);
  const [textColor, setTextColor] = useState("black"); // Text color state
  const divRef = useRef(null);
  const lastScrollY = useRef(window.scrollY);
  const lastDirection = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (divRef.current) {
        const { top, bottom } = divRef.current.getBoundingClientRect();
        const currentScrollY = window.scrollY;
        const direction = currentScrollY > lastScrollY.current ? "down" : "up";

        // Ensure the div is in view before switching backgrounds
        if (top < window.innerHeight && bottom > 0) {
          if (direction !== lastDirection.current) {
            // Toggle the state on scroll direction change
            setScrolled((prev) => !prev);
            setZoomIn((prev) => !prev);
            setTextColor(scrolled ? "black" : "white"); // Change text color based on background
            lastDirection.current = direction;
          }
        }

        lastScrollY.current = currentScrollY;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrolled]);

  return (
    <>
      <div
        ref={divRef}
        className={`future-div ${scrolled ? "bg-image" : "bg-white"} ${
          zoomIn ? "zoom-in" : "zoom-out"
        }`}
      >
        <center>
          <div className="col-md-4">
            <h2 style={{ color: textColor }}>
              Are you ready to see how <span>your story</span> unfolds?
            </h2>
            <p style={{ color: textColor }}>LET'S MAKE IT LEGENDARY</p>
          </div>
        </center>
      </div>
      <div style={{ height: "1000px", background: "blue" }} />
    </>
  );
};
