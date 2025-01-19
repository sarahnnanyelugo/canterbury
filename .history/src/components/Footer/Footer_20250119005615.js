import React, { useEffect, useState } from "react";
import "./Footer.scss"; // You can add your custom CSS for styling

export const Footer = () => {
  const [footerVisible, setFooterVisible] = useState(false);

  const handleScroll = () => {
    const siteContent = document.getElementById("site-content");
    const siteFooter = document.getElementById("site-footer");

    // Calculate the scroll position and content height
    const siteContentHeight = siteContent.offsetHeight;
    const siteContentTop = siteContent.getBoundingClientRect().top;
    const siteFooterHeight = siteFooter.offsetHeight;

    // Check if the user has scrolled to the bottom of the content
    if (siteContentTop + siteContentHeight <= window.innerHeight) {
      setFooterVisible(true); // Show the footer when the content is scrolled up
    } else {
      setFooterVisible(false); // Hide footer when the content is not at the bottom
    }

    // Adjust the margin of site content to make room for the footer
    siteContent.style.marginBottom = `${siteFooterHeight + 50}px`;
  };

  useEffect(() => {
    // Initialize the scroll listener
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleScroll);

    // Clean up event listeners on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  return (
    <>
      <div id="site-content" className="site-content">
        {/* Your site content here */}
        <div style={{ height: "1500px" }}>
          {" "}
          {/* Dummy content height for scrolling */}{" "}
        </div>
      </div>

      <footer
        id="site-footer"
        className={`site-footer ${
          footerVisible ? "show-footer" : "hide-footer"
        }`}
      >
        {/* Footer Content */}
        <p>Footer content goes here</p>
      </footer>
    </>
  );
};
