import React, { useState, useRef, useEffect } from "react";
import "./future.scss";

export const Future = () => {
  const [scrolled, setScrolled] = useState(false);
  const [zoomIn, setZoomIn] = useState(true);
  const divRef = useRef(null);
  const hasScrolledInside = useRef(false); // Prevents repeated triggers

  useEffect(() => {
    const handleScroll = () => {
      if (divRef.current) {
        const { top, bottom } = divRef.current.getBoundingClientRect();

        // Detect when user scrolls inside the div for the first time
        if (
          !hasScrolledInside.current &&
          top < window.innerHeight &&
          bottom > 0
        ) {
          hasScrolledInside.current = true;
          setScrolled(true);
          setZoomIn((prev) => !prev);
        }
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
