import React, { useState, useEffect, useRef } from "react";
import Dynamic from "../../assets/images/dynamic.jpg";
import Challenge from "../../assets/images/challenge.jpg";
import Tradition from "../../assets/images/tradition.jpg";
import Adults from "../../assets/images/adults.jpg";
import "./ethos.scss";
const images = [Dynamic, Challenge, Tradition, Adults];
const Ethos = ({ images }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const imageRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = imageRefs.current.indexOf(entry.target);
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            setActiveIndex(index);
          } else {
            entry.target.classList.remove("visible");
          }
        });
      },
      { threshold: 0.5 }
    );

    imageRefs.current.forEach((img) => observer.observe(img));

    return () => observer.disconnect();
  }, []);

  return (
    <div style={{ display: "flex" }}>
      {/* Status Bar */}
      <div className="status-bar">
        {images.map((_, index) => (
          <div
            key={index}
            className={`status-dot ${index === activeIndex ? "active" : ""}`}
          />
        ))}
      </div>

      {/* Image Container */}
      <div className="image-container">
        {images.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`Image ${index}`}
            className="image-item"
            ref={(el) => (imageRefs.current[index] = el)}
          />
        ))}
      </div>
    </div>
  );
};

export default Ethos;
