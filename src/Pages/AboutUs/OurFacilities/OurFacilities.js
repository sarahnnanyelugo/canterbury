import React, { useRef, useEffect } from "react";

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
      imgSrc: "https://via.placeholder.com/300",
      heading: "Heading 1",
      paragraph: "This is a sample paragraph for the first div.",
    },
    {
      imgSrc: "https://via.placeholder.com/300",
      heading: "Heading 2",
      paragraph: "This is a sample paragraph for the second div.",
    },
    {
      imgSrc: "https://via.placeholder.com/300",
      heading: "Heading 3",
      paragraph: "This is a sample paragraph for the third div.",
    },
    {
      imgSrc: "https://via.placeholder.com/300",
      heading: "Heading 4",
      paragraph: "This is a sample paragraph for the fourth div.",
    },
    {
      imgSrc: "https://via.placeholder.com/300",
      heading: "Heading 5",
      paragraph: "This is a sample paragraph for the fifth div.",
    },
  ];

  return (
    <div>
      <div style={{ height: "100vh", background: "#f0f0f0" }}>
        Intro Section (Scroll Down)
      </div>

      <div ref={sectionRef} style={{ position: "relative" }}>
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
            width: "500vw",
          }}
        >
          {content.map((item, index) => (
            <div
              key={index}
              style={{
                width: "100vw",
                height: "100vh",
                background: `hsl(${index * 60}, 70%, 70%)`,
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
                <img
                  src={item.imgSrc}
                  alt={`Image ${index + 1}`}
                  style={{
                    width: "300px",
                    height: "300px",
                    objectFit: "cover",
                    borderRadius: "10px",
                  }}
                />
                <div>
                  <h2 style={{ margin: "0 0 10px 0" }}>{item.heading}</h2>
                  <p style={{ margin: 0 }}>{item.paragraph}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div style={{ height: "100vh", background: "#d0d0d0" }}>
        Continue Scrolling Vertically
      </div>
    </div>
  );
};
