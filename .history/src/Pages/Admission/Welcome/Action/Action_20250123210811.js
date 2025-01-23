import React, { useEffect, useState, useRef } from "react";
import "./action.scss";
import { Desktop, TabletAndBelow } from "../../../../Utils/mediaQueries";

export const Action = () => {
  const [inViewText, setInViewText] = useState(false);
  const [bgImage, setBgImage] = useState(null);
  const [isHovered, setIsHovered] = useState(false);
  const textRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (textRef.current) {
        const rect = textRef.current.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        setInViewText(rect.top <= windowHeight && rect.bottom >= 0);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleMouseEnter = (image) => {
    setBgImage(image);
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setBgImage(null);
    setIsHovered(false);
  };

  return (
    <>
      {" "}
      <Desktop>
        {" "}
        <div
          style={{ backgroundColor: "#fff" }}
          ref={textRef}
          className="col-12"
        >
          <center>
            <div
              className="col-md-9 action d-flex col-12"
              style={{
                background: bgImage
                  ? `url(${bgImage}) center/cover no-repeat`
                  : "",
                transform: inViewText ? "scale(1)" : "scale(0.1)",
                opacity: inViewText ? 1 : 0,
                transition:
                  "background 0.5s ease, transform 2s ease, opacity 2s ease",
              }}
            >
              {["INQUIRE", "TOUR", "APPLY"].map((type) => (
                <div
                  key={type}
                  className={`col-md-4 purpose-inner ${type} ${
                    isHovered ? "no-bg" : ""
                  }`}
                  onMouseEnter={() =>
                    handleMouseEnter(
                      require(`../../../../assets/images/${type}.jpg`)
                    )
                  }
                  onMouseLeave={handleMouseLeave}
                >
                  <div className="overlay">
                    <h3>{type.charAt(0).toUpperCase() + type.slice(1)}</h3>
                    <p>
                      {type === "faith"
                        ? "Explore the role of faith in your life and the lives of others within an inclusive, interfaith community."
                        : type === "TOUR"
                        ? "There’s no substitute for experiencing our campus—and community—in person to gain a firsthand understanding of our school."
                        : "Empower yourself to challenge inequalities, foster inclusivity, and advocate for meaningful change."}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </center>
        </div>
      </Desktop>
      <TabletAndBelow>
        <div className="" ref={textRef} style={{ padding: "0 10px" }}>
          <div
            className="mobile-version d-flex  purpose"
            style={{
              transform: inViewText ? "scale(1)" : "scale(0.1)",
              opacity: inViewText ? 1 : 0,
              transition:
                "background 0.5s ease, transform 2s ease, opacity 2s ease",
            }}
          >
            <div className="col-4 faith"></div>
            <div className="col-4 justice"></div>
            <div className="col-4 service"></div>
          </div>
        </div>
      </TabletAndBelow>
    </>
  );
};
