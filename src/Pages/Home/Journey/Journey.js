import React, { useEffect, useState, useRef } from "react";
import "./journey.scss";
import MainPic from "../../../assets/images/primary-boy3.png";
import MainPic2 from "../../../assets/images/primary-class.png";
import MainPic3 from "../../../assets/images/draw.png";
import { IoArrowForward } from "react-icons/io5";
import Carousel from "react-bootstrap/Carousel";
import PartnersSlider from "../../../components/PartnersSlider/PartnersSlider";
import { Link } from "react-router-dom";

export const Journey = () => {
  const [inViewHeading, setInViewHeading] = useState(false); // Track if the heading is in view

  const headingRef = useRef(null); // Reference for the heading

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
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Run once on load to check initial position
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <>
      <div className="journey-carousel">
        {" "}
        <Carousel fade>
          <Carousel.Item>
            <div className="journey-div col-md-12">
              <img src={MainPic} width="100%" />
              <div className="journey-cova ">
                <div className="d-md-flex" ref={headingRef}>
                  <div
                    className="col-md-3 offset-md-2 slide-div"
                    style={{
                      transform: inViewHeading
                        ? "translateX(0)"
                        : "translateX(-100px)",
                      opacity: inViewHeading ? 1 : 0,
                      transition: "transform 1s ease, opacity 1s ease",
                    }}
                  >
                    <h2>82%</h2>
                    <p>
                      OF CLASS OF 2024 ACCEPTED TO MOST AND HIGHLY SELECTIVE
                      SCHOOLS
                    </p>
                  </div>
                  <div
                    className="col-md-4 offset-md-1 journey-dits"
                    style={{
                      transform: inViewHeading
                        ? "translateX(0)"
                        : "translateX(100px)",
                      opacity: inViewHeading ? 1 : 0,
                      transition: "transform 1s ease, opacity 1s ease",
                    }}
                  >
                    <h2>
                      WHERE YOUR <br />
                      JOURNEY <span>leads</span>
                    </h2>
                    <p>
                      This is the moment when it all pays off. Your years here
                      have helped you know who you are, what you want, and how
                      far you want to go. But it’s not only about getting in;
                      it’s about thriving where you’re destined to be.
                    </p>
                    <Link
                      to={"/apply"}
                      style={{ position: "relative", zIndex: "1000" }}
                    >
                      {" "}
                      <button>
                        YOUR SUCCESS STORY STARTS HERE{" "}
                        <IoArrowForward className="icon" />
                      </button>
                    </Link>
                  </div>
                </div>{" "}
                <PartnersSlider />
              </div>{" "}
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="journey-div col-md-12">
              <img src={MainPic2} width="100%" />
              <div className="journey-cova ">
                <div className="d-md-flex" ref={headingRef}>
                  {" "}
                  <div
                    className="col-md-3 offset-md-2 slide-div"
                    style={{
                      transform: inViewHeading
                        ? "translateX(0)"
                        : "translateX(-100px)",
                      opacity: inViewHeading ? 1 : 0,
                      transition: "transform 1s ease, opacity 1s ease",
                    }}
                  >
                    <h2>73%</h2>
                    <p>
                      OF CLASS OF 2024 AWARDED COLLEGE AND UNIVERSITY MERIT
                      SCHOLARSHIPS
                    </p>
                  </div>
                  <div
                    className="col-md-4 offset-md-1 journey-dits"
                    style={{
                      transform: inViewHeading
                        ? "translateX(0)"
                        : "translateX(100px)",
                      opacity: inViewHeading ? 1 : 0,
                      transition: "transform 1s ease, opacity 1s ease",
                    }}
                  >
                    <h2>
                      WHERE YOUR <br />
                      JOURNEY <span>leads</span>
                    </h2>
                    <p>
                      This is the moment when it all pays off. Your years here
                      have helped you know who you are, what you want, and how
                      far you want to go. But it’s not only about getting in;
                      it’s about thriving where you’re destined to be.
                    </p>
                    <button>
                      YOUR SUCCESS STORY STARTS HERE{" "}
                      <IoArrowForward className="icon" />
                    </button>
                  </div>{" "}
                </div>
                <PartnersSlider />
              </div>{" "}
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="journey-div col-md-12">
              <img src={MainPic3} width="100%" />
              <div className="journey-cova ">
                <div className="d-md-flex" ref={headingRef}>
                  {" "}
                  <div
                    className="col-md-3 offset-md-2 slide-div"
                    style={{
                      transform: inViewHeading
                        ? "translateX(0)"
                        : "translateX(-100px)",
                      opacity: inViewHeading ? 1 : 0,
                      transition: "transform 1s ease, opacity 1s ease",
                    }}
                  >
                    <h2>34%</h2>
                    <p>OF CLASS OF 2024 WENT ON TO PLAY COLLEGE ATHLETICS</p>
                  </div>
                  <div
                    className="col-md-4 offset-md-1 journey-dits"
                    style={{
                      transform: inViewHeading
                        ? "translateX(0)"
                        : "translateX(100px)",
                      opacity: inViewHeading ? 1 : 0,
                      transition: "transform 1s ease, opacity 1s ease",
                    }}
                  >
                    <h2>
                      WHERE YOUR <br />
                      JOURNEY <span>leads</span>
                    </h2>
                    <p>
                      This is the moment when it all pays off. Your years here
                      have helped you know who you are, what you want, and how
                      far you want to go. But it’s not only about getting in;
                      it’s about thriving where you’re destined to be.
                    </p>
                    <Link to={"/apply"}>
                      {" "}
                      <button>
                        YOUR SUCCESS STORY STARTS HERE{" "}
                        <IoArrowForward className="icon" />
                      </button>
                    </Link>
                  </div>{" "}
                </div>
                <PartnersSlider />
              </div>{" "}
            </div>
          </Carousel.Item>
        </Carousel>
      </div>
    </>
  );
};
