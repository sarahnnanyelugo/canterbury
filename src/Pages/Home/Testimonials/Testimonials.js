import React, { useEffect, useState, useRef } from "react";
import "./testimonials.scss";
import Vid1 from "../../../assets/images/testify.mp4";
import Vid2 from "../../../assets/images/testify2.webm";
import Vid3 from "../../../assets/images/testify3.mp4";
import Vid4 from "../../../assets/images/testify4.webm";
import { SectionHeading } from "../../../components/SectionHeading/SectionHeading";
import { Desktop, TabletAndBelow } from "../../../Utils/mediaQueries";

export const Testimonials = () => {
  const [inViewHeading, setInViewHeading] = useState(false);
  const [inViewParagraph, setInViewParagraph] = useState(false);

  const [inViewText, setInViewText] = useState(false);
  const headingRef = useRef(null);
  const textRef = useRef(null); // Reference for the paragraph
  const paragraphRef = useRef(null); // Reference for the paragraph
  const videoRef = useRef(null);
  const [showButton, setShowButton] = useState(true);

  const handlePlay = () => {
    videoRef.current.play();
    setShowButton(false);
  };
  useEffect(() => {
    const handleScroll = () => {
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

  return (
    <div className="culture-container ">
      <SectionHeading
        text1="   A CULTURE OF"
        text2=" community"
        color1="#fff"
        color2="#b5d2fc"
        paragraph="From the moment you join our intentionally small school, you
            experience a connection with peers and faculty, a curiosity about
            the things that make us different, and comfort in a community that
            celebrates you as an individual and bonds together like a family."
      />

      <Desktop>
        {" "}
        <div className="col-md-12" ref={textRef}>
          {" "}
          <center>
            <div
              className="col-md-8 testimonial-videos d-flex"
              style={{
                transform: inViewText ? "scale(1)" : "scale(0.1)",
                opacity: inViewText ? 1 : 0,
                transition:
                  "background 0.5s ease, transform 2s ease, opacity 2s ease",
              }}
            >
              <div className="col-md-3">
                <video
                  className="video"
                  width="100%"
                  loop
                  muted
                  playsInline
                  controls
                  src={Vid1}
                ></video>
              </div>
              <div className="col-md-3">
                <video
                  className="video"
                  width="100%"
                  loop
                  muted
                  playsInline
                  controls
                  src={Vid4}
                ></video>
              </div>{" "}
              <div className="col-md-3">
                <video
                  className="video"
                  width="100%"
                  loop
                  muted
                  playsInline
                  controls
                  src={Vid3}
                ></video>
              </div>{" "}
              <div className="col-md-3">
                <video
                  className="video"
                  width="100%"
                  loop
                  muted
                  controls
                  playsInline
                  src={Vid2}
                ></video>
              </div>
            </div>
          </center>
        </div>
      </Desktop>
      <TabletAndBelow>
        <div className="col-md-12" ref={textRef}>
          {" "}
          <center>
            <div
              className="col-md-8 testimonial-videos d-flex"
              style={{
                transform: inViewText ? "scale(1)" : "scale(0.1)",
                opacity: inViewText ? 1 : 0,
                transition:
                  "background 0.5s ease, transform 2s ease, opacity 2s ease",
              }}
            >
              <div className="col-md-3">
                <video
                  className="video"
                  width="100%"
                  loop
                  muted
                  playsInline
                  controls
                  src={Vid1}
                ></video>
              </div>
              <div className="col-md-3">
                <video
                  className="video"
                  width="100%"
                  loop
                  muted
                  playsInline
                  controls
                  src={Vid4}
                ></video>
              </div>{" "}
            </div>
          </center>
        </div>

        <div className="col-md-12">
          {" "}
          <center>
            <div
              className="col-md-8 testimonial-videos d-flex"
              style={{
                transform: inViewText ? "scale(1)" : "scale(0.1)",
                opacity: inViewText ? 1 : 0,
                transition:
                  "background 0.5s ease, transform 2s ease, opacity 2s ease",
              }}
            >
              <div className="col-md-3">
                <video
                  className="video"
                  width="100%"
                  loop
                  muted
                  playsInline
                  controls
                  src={Vid3}
                ></video>
              </div>{" "}
              <div className="col-md-3">
                <video
                  className="video"
                  width="100%"
                  loop
                  muted
                  controls
                  playsInline
                  src={Vid2}
                ></video>
              </div>
            </div>
          </center>
        </div>
      </TabletAndBelow>
    </div>
  );
};
