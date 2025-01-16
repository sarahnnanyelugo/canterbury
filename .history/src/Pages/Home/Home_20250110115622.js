import React from "react";
import MainVid from "../../assets/images/main-vid.mp4";
import Img1 from "../../assets/images/img1.jpg";
import Img2 from "../../assets/images/img2.jpg";
import Img3 from "../../assets/images/img3.jpg";
import Img4 from "../../assets/images/img4.jpg";
import Img5 from "../../assets/images/img5.png";
import Img6 from "../../assets/images/img6.png";
export const Home = () => {
  return (
    <div className="home-div">
      <center>
        {" "}
        <h1>THIS IS your story</h1>
      </center>
      <center>
        <div className="" style={{ width: "50%" }}>
          {" "}
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
      </center>
    </div>
  );
};
