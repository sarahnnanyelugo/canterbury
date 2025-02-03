import React, { useRef, useEffect } from "react";
import Hero from "../../../assets/images/storyHero.jpg";
import Lib from "../../../assets/images/lib2main.png";
import Court from "../../../assets/images/slide6.jpg";
import ScienceLab from "../../../assets/images/sci.avif";
import Computer from "../../../assets/images/computer.jpg";
import Playground from "../../../assets/images/playground.jpg";
import { PageLogo } from "../../../components/PageLogo/PageLogo";
import PageMenu from "../../../components/PageMenu/PageMenu";
import { about } from "../../../TestData/pageMenuData";
import "./facilities.scss";

export const OurFacilities = () => {
  const sectionRef = useRef(null);
  const scrollContainerRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    const container = scrollContainerRef.current;
    const scrollSpeedFactor = 2; // Speed multiplier
    const totalScrollWidth = container.scrollWidth - window.innerWidth;
    const sectionHeight =
      totalScrollWidth / scrollSpeedFactor + window.innerHeight; // Adjusted height

    section.style.height = `${sectionHeight}px`;
    document.body.style.overflowX = "hidden"; // Hide horizontal scrollbar

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
    },
    {
      imgSrc: Court,
      heading: "Basketball Court",
      paragraph:
        "Feel the rush of adrenaline on our basketball court! Whether you're shooting hoops with friends or perfecting your skills, it's the place for action, teamwork, and fun. Game on!",
    },
    {
      heading: "Reading Room",
      imgSrc: Lib,
      paragraph:
        "Escape into a peaceful haven in our reading room. Surrounded by shelves of captivating books, it's the ideal spot to relax, focus, and let your imagination take flight.",
    },
    {
      imgSrc: Hero,
      heading: "School Building",
      paragraph:
        "Our school building is more than just walls and classrooms—it's a thriving community where creativity, learning, and growth come together. Every corner is designed to inspire students to dream big and achieve even bigger.",
    },

    {
      imgSrc: Computer,
      heading: "Computer Room",
      paragraph:
        "Step into the future in our computer room, where technology meets creativity. With top-notch equipment and endless learning possibilities, it's the ultimate place to sharpen your digital skills and innovate.",
    },
    {
      imgSrc: Playground,
      heading: "Play Ground",
      paragraph:
        "Let the music play in our vibrant music room! From strumming guitars to mastering the piano, this is where every note resonates with passion, and every melody tells a story. Unleash your inner musician here.",
    },
  ];

  return (
    <div className="col-md-12">
      <div className="facilities-banner">
        <img src={Hero} width="100%" alt="Hero" />
        <center>
          <h1>OUR FACILITIES</h1>
        </center>
      </div>
      <PageMenu menuItems={about} />
      <PageLogo />
      <div ref={sectionRef} style={{ position: "relative" }}>
        <center>
          {" "}
          <h1>EXPLORE OUR FACILITIES</h1>
        </center>
        <div
          ref={scrollContainerRef}
          style={{
            display: "flex",
            position: "sticky",
            top: 0,
            left: 0,
            height: "100vh",
            overflow: "hidden",
            transition: "transform 0.8s cubic-bezier(0.25, 1, 0.5, 1)",
            willChange: "transform",
            width: `${content.length * 100}vw`, // Dynamic width
          }}
          className="vertical-scroll"
        >
          {content.map((item, index) => (
            <div
              key={index}
              style={{
                width: "100vw",
                height: "100vh",

                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                padding: "20px",
                boxSizing: "border-box",
                transition: "transform 0.5s ease-in-out",
              }}
            >
              <div
                style={{ display: "flex", alignItems: "center", gap: "20px" }}
              >
                <div className="col-md-6 offset-md-1">
                  {" "}
                  <div>
                    <div className="img-border2 col-md-3 offset-md-10" />
                    <img
                      src={item.imgSrc}
                      alt={`Image ${index + 1}`}
                      style={{
                        width: "100%",

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
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div
        style={{ height: "100vh", background: "#d0d0d0" }}
        className="col-md-12"
      >
        Continue Scrolling Vertically
      </div>
    </div>
  );
};
