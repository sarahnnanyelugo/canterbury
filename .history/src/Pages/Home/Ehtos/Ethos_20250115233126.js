import React, { useState, useEffect, useRef } from "react";
const images = [];
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
