import React, { useEffect, useState, useRef } from "react";
import "./purpose.scss";
import { Desktop, TabletAndBelow } from "../../../Utils/mediaQueries";
import { Link } from "react-router-dom";

export const Purpose = () => {
  const [inViewText, setInViewText] = useState(false);
  const [bgImage, setBgImage] = useState(null);
  const [isHovered, setIsHovered] = useState(false);
  const textRef = useRef(null);
  const [inViewHeading, setInViewHeading] = useState(false); // Track if the heading is in view
  const headingRef = useRef(null); // Reference for the heading
  const paragraphRef = useRef(null); // Reference for the paragrap
  const [inViewParagraph, setInViewParagraph] = useState(false); // Track if the paragraph inside heading-container is in view
  useEffect(() => {
    const handleScroll = () => {
      // Heading
      if (headingRef.current) {
        const rect = headingRef.current.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        if (rect.top <= windowHeight && rect.bottom >= 0) {
          setInViewHeading(true);
        } else {
          setInViewHeading(false);
        }
      }

      // Paragraph text
      if (textRef.current) {
        const rect = textRef.current.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        if (rect.top <= windowHeight && rect.bottom >= 0) {
          setInViewText(true);
        } else {
          setInViewText(false);
        }
      }
      if (paragraphRef.current) {
        const rect = paragraphRef.current.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        if (rect.top <= windowHeight && rect.bottom >= 0) {
          setInViewParagraph(true);
        } else {
          setInViewParagraph(false);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Run once on load to check initial position
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
              className="col-md-7 purpose d-flex col-12"
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
              {["faith", "service", "justice"].map((type) => (
                <div
                  key={type}
                  className={`col-md-4 purpose-inner ${type} ${
                    isHovered ? "no-bg" : ""
                  }`}
                  onMouseEnter={() =>
                    handleMouseEnter(
                      require(`../../../assets/images/${type}.jpg`)
                    )
                  }
                  onMouseLeave={handleMouseLeave}
                >
                  <div className="overlay">
                    <h5>{type.charAt(0).toUpperCase() + type.slice(1)}</h5>
                    <p>
                      {type === "faith"
                        ? "Explore the role of faith in your life and the lives of others within an inclusive, interfaith community."
                        : type === "service"
                        ? "Develop empathy, leadership, and a sense of civic responsibility by giving generously of yourself for others."
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
        <div className="" style={{ padding: "0 10px" }} ref={textRef}>
          <div className="col-12 outer-cova ">
            <div
              className="eyfs sections"
              style={{
                transform: inViewText ? "scale(1)" : "scale(0.1)",
                opacity: inViewText ? 1 : 0,
                transition:
                  "background 0.5s ease, transform 2s ease, opacity 2s ease",
              }}
            >
              {" "}
              <div className="sections-overlay">
                <div className="text">
                  CANTERBURY EYFS
                  <br />
                  <center>
                    {" "}
                    <Link to={"/eyfs"}>LEARN MORE</Link>
                  </center>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 outer-cova">
            <div
              className="primary sections"
              style={{
                transform: inViewText ? "scale(1)" : "scale(0.1)",
                opacity: inViewText ? 1 : 0,
                transition:
                  "background 0.5s ease, transform 2s ease, opacity 2s ease",
              }}
            >
              {" "}
              <div className="sections-overlay">
                <div className="text">
                  CANTERBURY PRIMARY
                  <br />
                  <center>
                    {" "}
                    <Link to={"/primary"}>LEARN MORE</Link>
                  </center>
                </div>
              </div>
            </div>
          </div>{" "}
        </div>
        <div className="col-12 outer-cova" ref={paragraphRef}>
          <div
            className="col-12 secondary sections"
            style={{
              transform: inViewParagraph
                ? "translateY(0)"
                : "translateY(100px)",
              opacity: inViewParagraph ? 1 : 0,
              transition: "transform 1s ease, opacity 1s ease",
              color: "#4d5e69",
              fontFamily: "figtreeB",
            }}
          >
            <div className="sections-overlay">
              <div className="text">
                CANTERBURY SECONDARY
                <br />
                <center>
                  {" "}
                  <Link to={"/secondary"}>LEARN MORE</Link>
                </center>
              </div>
            </div>
          </div>
        </div>
      </TabletAndBelow>
    </>
  );
};
