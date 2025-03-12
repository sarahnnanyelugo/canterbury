import React, { useRef, useEffect, useState } from "react";
import Hero from "../../../assets/images/storyHero.jpg";
import Lib from "../../../assets/images/lib2main.png";
import Court from "../../../assets/images/slide6.jpg";
import ScienceLab from "../../../assets/images/sci.avif";
import Computer from "../../../assets/images/computer.jpg";
import Playground from "../../../assets/images/playground.jpg";
import { PageLogo } from "../../../components/PageLogo/PageLogo";
import PageMenu from "../../../components/PageMenu/PageMenu";
import { about } from "../../../TestData/pageMenuData";
import { Modal, Button, Carousel } from "react-bootstrap";
import { Desktop, TabletAndBelow } from "../../../Utils/mediaQueries";

import "./facilities.scss";
export const OurFacilities = () => {
  const sectionRef = useRef(null);
  const scrollContainerRef = useRef(null);
  const [modalShow, setModalShow] = useState(false);
  const [modalContent, setModalContent] = useState({ images: [] });
  // useEffect(() => {
  //   const section = sectionRef.current;
  //   const container = scrollContainerRef.current;
  //   const scrollSpeedFactor = 2; // Speed multiplier
  //   const totalScrollWidth = container.scrollWidth - window.innerWidth;
  //   const sectionHeight =
  //     totalScrollWidth / scrollSpeedFactor + window.innerHeight; // Adjusted height

  //   section.style.height = `${sectionHeight}px`;
  //   document.body.style.overflowX = "hidden"; // Hide horizontal scrollbar

  //   const handleScroll = () => {
  //     const sectionTop = section.getBoundingClientRect().top;

  //     if (
  //       sectionTop <= 0 &&
  //       Math.abs(sectionTop) * scrollSpeedFactor <= totalScrollWidth
  //     ) {
  //       container.style.transform = `translateX(-${
  //         Math.abs(sectionTop) * scrollSpeedFactor
  //       }px)`;
  //     } else if (Math.abs(sectionTop) * scrollSpeedFactor > totalScrollWidth) {
  //       container.style.transform = `translateX(-${totalScrollWidth}px)`;
  //     } else {
  //       container.style.transform = `translateX(0px)`;
  //     }
  //   };

  //   window.addEventListener("scroll", handleScroll);

  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, []);

  useEffect(() => {
    const section = sectionRef.current;
    const container = scrollContainerRef.current;

    if (!section || !container) return;

    const scrollSpeedFactor = 2; // Adjust this as you like
    const totalScrollWidth = container.scrollWidth - window.innerWidth;
    const sectionHeight =
      totalScrollWidth / scrollSpeedFactor + window.innerHeight;

    // Set the height of the section to allow vertical scrolling
    section.style.height = `${sectionHeight}px`;

    // Optional: Prevent horizontal scrollbar
    document.body.style.overflowX = "hidden";

    const handleScroll = () => {
      const sectionTop = section.getBoundingClientRect().top;

      if (
        sectionTop <= 0 &&
        Math.abs(sectionTop) * scrollSpeedFactor <= totalScrollWidth
      ) {
        container.style.transform = `translateX(-${
          Math.abs(sectionTop) * scrollSpeedFactor
        }px)`;
      } else if (Math.abs(sectionTop) * scrollSpeedFactor > totalScrollWidth) {
        container.style.transform = `translateX(-${totalScrollWidth}px)`;
      } else {
        container.style.transform = `translateX(0px)`;
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const content = [
    {
      imgSrc: ScienceLab,
      heading: "Science Laboratory",
      paragraph:
        "Get ready to spark your curiosity in our state-of-the-art science lab! With hands-on experiments and groundbreaking discoveries, this is where young scientists transform theories into practice and ignite their passion for exploration.",
      images: [ScienceLab, Court],
    },
    {
      imgSrc: Court,
      heading: "Basketball Court",
      paragraph:
        "Feel the rush of adrenaline on our basketball court! Whether you're shooting hoops with friends or perfecting your skills, it's the place for action, teamwork, and fun. Game on!",
      images: [ScienceLab, Court],
    },
    {
      heading: "Reading Room",
      imgSrc: Lib,
      paragraph:
        "Escape into a peaceful haven in our reading room. Surrounded by shelves of captivating books, it's the ideal spot to relax, focus, and let your imagination take flight.",
      images: [Lib, ScienceLab, Court],
    },
    {
      imgSrc: Hero,
      heading: "School Building",
      paragraph:
        "Our school building is more than just walls and classrooms—it's a thriving community where creativity, learning, and growth come together. Every corner is designed to inspire students to dream big and achieve even bigger.",
      images: [Lib, ScienceLab, Hero],
    },

    {
      imgSrc: Computer,
      heading: "Computer Room",
      paragraph:
        "Step into the future in our computer room, where technology meets creativity. With top-notch equipment and endless learning possibilities, it's the ultimate place to sharpen your digital skills and innovate.",
      images: [Computer, Lib, ScienceLab, Hero],
    },
    {
      imgSrc: Playground,
      heading: "Play Ground",
      paragraph:
        "Let the music play in our vibrant music room! From strumming guitars to mastering the piano, this is where every note resonates with passion, and every melody tells a story. Unleash your inner musician here.",
      images: [Playground, Computer],
    },
  ];

  const openModal = (item) => {
    setModalContent(item);
    setModalShow(true); // Ensure modal is shown
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setModalShow(false);

    setTimeout(() => {
      document.body.style.overflow = "";
    }, 300);
  };
  useEffect(() => {
    if (!modalShow) {
      setTimeout(() => {
        document.body.style.overflow = "";
      }, 300); // Ensure a delay before enabling scroll again
    }
  }, [modalShow]);

  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="col-md-12 fac">
      <div className="facilities-banner">
        <img src={Hero} width="100%" alt="Hero" />
        <center>
          <h1>OUR FACILITIES</h1>
        </center>
      </div>
      <PageMenu menuItems={about} />
      <PageLogo />
      <center>
        <div className="col-md-6 mobile-pad">
          <p>
            At Canterbury International School, our state-of-the-art facilities
            are designed to inspire, engage, and nurture the minds of tomorrow’s
            leaders. From cutting-edge science laboratories and fully equipped
            computer rooms to serene reading spaces, expansive playgrounds, and
            world-class sports courts, every corner of our campus is crafted to
            foster academic excellence, creativity, and holistic development.
            Step inside and explore an environment where innovation meets
            inspiration, and every student finds the perfect space to thrive.
          </p>
        </div>
      </center>{" "}
      <br />
      <center>
        <h1>EXPLORE OUR FACILITIES</h1>
      </center>
      <Desktop>
        <div
          ref={sectionRef}
          style={{ position: "relative" }}
          className="our-facilities-div"
        >
          <div
            ref={scrollContainerRef}
            className={`scroll-container ${isMobile ? "vertical-layout" : ""}`}
            style={{
              display: "flex",
              flexDirection: isMobile ? "column" : "row",
              position: isMobile ? "static" : "sticky",
              top: 0,
              left: 0,
              height: isMobile ? "auto" : "100vh",
              overflow: isMobile ? "visible" : "hidden",
              transition: "transform 0.8s cubic-bezier(0.25, 1, 0.5, 1)",
              willChange: "transform",
              width: isMobile ? "100%" : `${content.length * 100}vw`,
            }}
          >
            {content.map((item, index) => (
              <div
                key={index}
                style={{
                  width: isMobile ? "100%" : `${window.innerWidth}px`,
                  height: isMobile ? "auto" : "100vh",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "20px",
                  boxSizing: "border-box",
                }}
              >
                <div
                  style={{ display: "flex", alignItems: "center", gap: "20px" }}
                >
                  <div className="col-md-6 offset-md-1">
                    <div className="zoom">
                      <div className="img-border2 col-md-3 offset-md-10" />
                      <img
                        src={item.imgSrc}
                        alt={`Image ${index + 1}`}
                        className="zoom"
                        style={{
                          width: "100%",
                          height: "auto",
                          objectFit: "cover",
                          borderRadius: "10px",
                        }}
                      />
                      <div className="img-border col-md-3 offset-md-10" />
                    </div>
                  </div>
                  <div className="col-md-4 facility-details">
                    <h1 style={{ margin: "0 0 10px 0" }}>{item.heading}</h1>
                    <p style={{ margin: 0 }}>{item.paragraph}</p>
                    <h5 onClick={() => openModal(item)}>View More Photos</h5>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Desktop>
      <TabletAndBelow>
        <div className="mobile-facility-carousel">
          <Carousel>
            {content.map((item, index) => (
              <Carousel.Item key={index}>
                <img
                  src={item.imgSrc}
                  alt={`Image ${index + 1}`}
                  style={{
                    width: "100%",

                    objectFit: "cover",
                    borderRadius: "10px",
                  }}
                />{" "}
                <div
                  className="mobile-facility"
                  onClick={() => openModal(item)}
                >
                  <center>
                    <h2>{item.heading}</h2>
                    <p>{item.paragraph}</p>

                    <h5>View More Photos</h5>
                  </center>{" "}
                </div>
              </Carousel.Item>
            ))}
          </Carousel>
        </div>
      </TabletAndBelow>
      <div className="col-md-12 facility-action ">
        <center>
          <div className="col-md-7">
            {" "}
            <h1>
              Are you ready to be a part of this amazing{" "}
              <span>experience?</span>
            </h1>
            <p>We Welcome you onboard!</p>
            <button>Start your journey today</button>
          </div>
        </center>
      </div>
      <Modal
        show={modalShow}
        onHide={closeModal}
        size="xl"
        className="facilities-modal"
      >
        <Modal.Header closeButton>
          <h3>
            More Photos from Our <span> {modalContent.heading}</span>
          </h3>
        </Modal.Header>
        <Modal.Body>
          <div className="col-md-12" style={{ minHeight: "600px" }}>
            {" "}
            <Carousel fade>
              {modalContent.images.map((img, idx) => (
                <Carousel.Item key={idx}>
                  <img
                    src={img}
                    alt={`Detail ${idx + 1}`}
                    style={{
                      width: "100%",
                      minHeight: "500px",
                      objectFit: "cover",
                    }}
                  />
                </Carousel.Item>
              ))}
            </Carousel>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
};
