import React, { useState, useRef, useEffect } from "react";
import "./future.scss";

export const Future = () => {
  const [scrolled, setScrolled] = useState(false);
  const [zoomIn, setZoomIn] = useState(true);
  const divRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (divRef.current) {
        const scrollY = window.scrollY;
        const divTop = divRef.current.offsetTop;
        const divHeight = divRef.current.clientHeight;

        // Check if user has scrolled at least 30% inside the div before switching
        if (scrollY > divTop + divHeight * 0) {
          if (!scrolled) {
            setScrolled(true);
            setZoomIn((prev) => !prev);
          }
        } else {
          if (scrolled) {
            setScrolled(false);
            setZoomIn((prev) => !prev);
          }
        }
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
            <h2>
              Are you ready to see how <span>your story</span> unfolds?
            </h2>
            <p>LET'S MAKE IT LEGENDARY</p>
          </div>
        </center>
      </div>
      <div style={{ height: "900px", background: "blue" }} />
    </>
  );
};
