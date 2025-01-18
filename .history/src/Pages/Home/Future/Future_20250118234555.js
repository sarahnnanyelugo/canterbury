import React, { useState, useRef, useEffect } from "react";
import "./future.scss";

export const Future = () => {
  const [scrolled, setScrolled] = useState(false);
  const [zoomIn, setZoomIn] = useState(true);
  const [textColor, setTextColor] = useState("black"); // Text color state
  const [scrollSteps, setScrollSteps] = useState(0); // Track how many scrolls inside the div
  const divRef = useRef(null);
  const lastScrollY = useRef(window.scrollY);
  const lastDirection = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (divRef.current) {
        const { top, bottom } = divRef.current.getBoundingClientRect();
        const currentScrollY = window.scrollY;
        const direction = currentScrollY > lastScrollY.current ? "down" : "up";

        // Check if the scroll is within the target div's vertical bounds
        if (top < window.innerHeight && bottom > 0) {
          if (direction !== lastDirection.current) {
            // If scroll direction changes, reset the steps
            setScrollSteps(0);
            lastDirection.current = direction;
          }

          // Only track scroll progress within the div
          if (scrollSteps < 2) {
            setScrollSteps((prev) => prev + 1); // Increment steps on scroll within the div
          }

          // Trigger background switch after 2 scroll steps inside the div
          if (scrollSteps === 2) {
            setScrolled((prev) => !prev); // Toggle background
            setZoomIn((prev) => !prev); // Trigger zoom effect
            setTextColor(scrolled ? "black" : "white"); // Change text color based on background
          }
        }

        // Update last scroll position only if within target div
        if (top < window.innerHeight && bottom > 0) {
          lastScrollY.current = currentScrollY;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrolled, scrollSteps]);

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
