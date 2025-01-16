import React, { useState, useEffect, useRef } from "react";
import Dynamic from "../../../assets/images/dynamic.jpg";
import Challenge from "../../../assets/images/challenge.jpg";
import Tradition from "../../../assets/images/tradition.jpg";
import Adults from "../../../assets/images/adults.jpg";
import "./ethos.scss";

const images = [Dynamic, Challenge, Tradition, Adults];

const Ethos = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = sectionRefs.current.indexOf(entry.target);
            setActiveIndex(index);
          }
        });
      },
      { threshold: 0.5 }
    );

    sectionRefs.current.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <section className="ethos-container">
      <div className="status-bar">
        {images.map((_, index) => (
          <div
            key={index}
            className={`status-dot ${index === activeIndex ? "active" : ""}`}
          />
        ))}
      </div>

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
