
import React, { useState, useRef, useEffect } from "react";
import "./future.scss";
import { FaLongArrowAltRight } from "react-icons/fa";

export const Future = () => {
  const [scrolled, setScrolled] = useState(false);
  const [zoomIn, setZoomIn] = useState(true);
  const [scrollPosition, setScrollPosition] = useState(0); // Track scroll position within div
  const divRef = useRef(null);
  const scrollThreshold = 75; // Shortened scroll threshold (one good scroll into the div)

  useEffect(() => {
    const handleScroll = () => {
      if (divRef.current) {
        const { top, bottom } = divRef.current.getBoundingClientRect();
        const currentScrollY = window.scrollY;

        // Check if the div is in view (within the viewport)
        if (top < window.innerHeight && bottom > 0) {
          // Calculate scroll position within the target div
          const relativeScrollPosition =
            currentScrollY - divRef.current.offsetTop;

          // Track scroll direction and change background only after a certain scroll position
          setScrollPosition(relativeScrollPosition);

          // If user has scrolled enough (based on the threshold), toggle background and zoom
          if (relativeScrollPosition > scrollThreshold) {
            if (!scrolled) {
              setScrolled(true); // Switch to background image
              setZoomIn(false); // Zoom out
            }
          } else if (relativeScrollPosition < scrollThreshold && scrolled) {
            setScrolled(false); // Switch back to white background
            setZoomIn(true); // Zoom in
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrolled, scrollPosition]);

  return (
    <>
      <div
        ref={divRef}
        className={`future-div ${scrolled ? "bg-image" : "bg-white"} ${
          zoomIn ? "zoom-in" : "zoom-out"
        } ${scrolled ? "text-light" : "text-dark"}`} // Conditional text color
      >
        <center>
          <div className="col-md-7">
            <h2>
              Are you ready to see how{" "}
              <span className={`${scrolled ? "gold" : "blue"}`}>
                your story
              </span>{" "}
              unfolds?
            </h2>
            <p>LET'S MAKE IT LEGENDARY</p>
          </div>
          <button>BEGIN YOUR CANTERBURY CHAPTER TODAY</button>
        </center>
      </div>
      <div style={{ height: "1000px", background: "blue" }} />
    </>
  );
};
