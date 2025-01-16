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
