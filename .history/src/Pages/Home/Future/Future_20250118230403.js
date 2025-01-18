import React, { useState, useRef, useEffect } from "react";
import "./future.scss";

export const Future = () => {
  const [scrolled, setScrolled] = useState(false);
  const [zoomIn, setZoomIn] = useState(true);
  const divRef = useRef(null);
  const lastScrollY = useRef(window.scrollY);
  const lastDirection = useRef(null); // Track last scroll direction

  useEffect(() => {
    const handleScroll = () => {
      if (divRef.current) {
        const { top, bottom } = divRef.current.getBoundingClientRect();
        const currentScrollY = window.scrollY;
        const direction = currentScrollY > lastScrollY.current ? "down" : "up";

        // Ensure the div is in view before allowing background switch
        if (top < window.innerHeight && bottom > 0) {
          if (direction !== lastDirection.current) {
            setScrolled((prev) => !prev);
            setZoomIn((prev) => !prev);
            lastDirection.current = direction; // Update last scroll direction
          }
        }

        lastScrollY.current = currentScrollY; // Update last scroll position
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
            <h2>
              Are you ready to see how <span>your story</span> unfolds?
            </h2>
            <p>LET'S MAKE IT LEGENDARY</p>
          </div>
        </center>
      </div>
      <div style={{ height: "1000px", background: "blue" }} />
    </>
  );
};
