import React from "react";
import MainVid from "../../assets/images/main-vid.mp4";

export const MobileHome = () => {
  return (
    <>
      <div className="mobile-home">
        <div className="mobile-intro-heading ">
          <center>
            <div className=" section-head ">
              {" "}
              <h1>
                THIS IS <span>your story</span>
              </h1>{" "}
              {""}
            </div>
          </center>
        </div>
        <video
          className="video"
          width="100%"
          autoPlay
          loop
          muted
          playsInline
          controls
          src={MainVid}
        ></video>
      </div>
    </>
  );
};
