import React, { useEffect, useState, useRef } from "react";
import "./testimonia.scss";
import Vid1 from "../../../assets/images/testify.mp4";
import Vid2 from "../../../assets/images/testify2.webm";
import Vid3 from "../../../assets/images/testify3.mp4";
import Vid4 from "../../../assets/images/testify4.webm";

export const Testimonials = () => {
  const [inViewHeading, setInViewHeading] = useState(false);
  const [inViewParagraph, setInViewParagraph] = useState(false);
  const [inViewText, setInViewText] = useState(false);

  const headingRef = useRef(null);
  const textRef = useRef(null);
  const paragraphRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const checkInView = (ref, setState) => {
        if (ref.current) {
          const rect = ref.current.getBoundingClientRect();
          const windowHeight = window.innerHeight;
          setState(rect.top <= windowHeight && rect.bottom >= 0);
        }
      };

      checkInView(headingRef, setInViewHeading);
      checkInView(textRef, setInViewText);
      checkInView(paragraphRef, setInViewParagraph);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Video sources
  const videos = [Vid1, Vid4, Vid3, Vid2];

  return (
    <div className="culture-container">
      <div ref={headingRef}>
        <div className="d-flex offset-md-3">
          <h1
            className="heading1"
            style={{
              transform: inViewHeading ? "translateX(0)" : "translateX(-100px)",
              opacity: inViewHeading ? 1 : 0,
              transition: "transform 2s ease, opacity 2s ease",
            }}
          >
            A CULTURE OF
          </h1>
          <h1
            className="heading2"
            style={{
              transform: inViewHeading ? "translateX(0)" : "translateX(100px)",
              opacity: inViewHeading ? 1 : 0,
              transition: "transform 2s ease, opacity 2s ease",
              marginLeft: "10px",
            }}
          >
            community
          </h1>
        </div>
      </div>
      <center>
        <div className="col-md-6">
          <p
            ref={paragraphRef}
            style={{
              transform: inViewParagraph
                ? "translateY(0)"
                : "translateY(100px)",
              opacity: inViewParagraph ? 1 : 0,
              transition: "transform 1s ease, opacity 1s ease",
              fontFamily: "figtree",
            }}
          >
            From the moment you join our intentionally small school, you
            experience a connection with peers and faculty, a curiosity about
            the things that make us different, and comfort in a community that
            celebrates you as an individual and bonds together like a family.
          </p>
        </div>
      </center>

      <div className="col-md-12" ref={textRef}>
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
            {videos.map((videoSrc, index) => (
              <div className="col-md-3" key={index}>
                <VideoPlayer src={videoSrc} />
              </div>
            ))}
          </div>
        </center>
      </div>
    </div>
  );
};

// VideoPlayer component with hover play button
import React, { useRef, useState, useEffect } from "react";

const VideoPlayer = ({ src }) => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [showButton, setShowButton] = useState(true);
  const buttonTimeoutRef = useRef(null);

  const togglePlay = () => {
    if (videoRef.current) {
      if (videoRef.current.paused) {
        videoRef.current.play();
        setIsPlaying(true);
        setShowButton(false);
      } else {
        videoRef.current.pause();
        setIsPlaying(false);
        setShowButton(true);
      }
    }
  };

  // Show the play button when user moves mouse over the video
  const handleMouseMove = () => {
    setShowButton(true);
    if (buttonTimeoutRef.current) clearTimeout(buttonTimeoutRef.current);

    // Hide play button after 2 seconds of inactivity
    buttonTimeoutRef.current = setTimeout(() => {
      if (isPlaying) setShowButton(false);
    }, 2000);
  };

  // Cleanup timeout on unmount
  useEffect(() => {
    return () => {
      if (buttonTimeoutRef.current) clearTimeout(buttonTimeoutRef.current);
    };
  }, []);

  return (
    <div className="video-wrapper" onMouseMove={handleMouseMove}>
      <video
        ref={videoRef}
        className="video"
        width="100%"
        loop
        muted
        playsInline
        src={src}
      ></video>
      {showButton && (
        <button className="play-button" onClick={togglePlay}>
          {isPlaying ? "⏸" : "▶"}
        </button>
      )}
    </div>
  );
};

export default VideoPlayer;
