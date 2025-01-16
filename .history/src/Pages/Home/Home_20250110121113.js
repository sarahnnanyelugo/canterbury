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
      <div className="col-md-12 d-flex">
        <div className="d-flex" style={{ marginTop: "70px", width: "40%" }}>
          <div className="col-md-6">
            {" "}
            <img src={Img1} width="100%" height="400px" />
          </div>
          <div className="col-md-6">
            <img src={Img2} width="100%" />
            <img src={Img3} width="100%" className="mt-3" />
          </div>
        </div>

        <div className="" style={{ width: "60%" }}>
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

        <div className=" d-flex " style={{ marginTop: "70px", width: "40%" }}>
          <div className="col-md-6">
            <img src={Img2} width="100%" />
            <img src={Img3} width="100%" className="mt-3" />
          </div>
          <div className="col-md-6">
            {" "}
            <img src={Img1} width="100%" height="400px" />
          </div>
        </div>
      </div>
    </div>
  );
};
