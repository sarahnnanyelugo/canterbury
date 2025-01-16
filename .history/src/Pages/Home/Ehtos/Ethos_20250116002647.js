import React, { useState, useEffect, useRef } from "react";
import Dynamic from "../../../assets/images/dynamic.jpg";
import Challenge from "../../../assets/images/challenge.jpg";
import Tradition from "../../../assets/images/tradition.jpg";
import Adults from "../../../assets/images/adults.jpg";
import "./ethos.scss";

const images = [Dynamic, Challenge, Tradition, Adults];

const Ethos = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [showStatusBar, setShowStatusBar] = useState(false);
  const sectionRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = sectionRefs.current.indexOf(entry.target);
            setActiveIndex(index);

            // Show status bar when first section is in view
            if (index === 0 && !showStatusBar) {
              setShowStatusBar(true);
            }
          }
        });
      },
      { threshold: 0.5 }
    );

    sectionRefs.current.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, [showStatusBar]);

  // Scroll to a specific image section when a dot is clicked
  const handleDotClick = (index) => {
    sectionRefs.current[index]?.scrollIntoView({ behavior: "smooth" });
    setActiveIndex(index);
  };

  return (
    <section className="ethos-container">
      {/* Status Bar */}
      {showStatusBar && (
        <div className="status-bar">
          {images.map((_, index) => (
            <div
              key={index}
              className={`status-dot ${index === activeIndex ? "active" : ""}`}
              onClick={() => handleDotClick(index)}
            />
          ))}
        </div>
      )}

      {/* Image Sections */}
      {images.map((src, index) => (
        <div
          key={index}
          className={`image-section ${index === activeIndex ? "visible" : ""}`}
          ref={(el) => (sectionRefs.current[index] = el)}
        >
          <img src={src} alt={`Image ${index}`} className="image-item" />
        </div>
      ))}
    </section>
  );
};

export default Ethos;
