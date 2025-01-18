// import React, { useState, useRef, useEffect } from "react";
// import "./future.scss";

// export const Future = () => {
//   const [scrolled, setScrolled] = useState(false);
//   const [zoomIn, setZoomIn] = useState(true);
//   const [textColor, setTextColor] = useState("black"); // Text color state
//   const divRef = useRef(null);
//   const lastScrollY = useRef(window.scrollY);
//   const lastDirection = useRef(null);

//   useEffect(() => {
//     const handleScroll = () => {
//       if (divRef.current) {
//         const { top, bottom } = divRef.current.getBoundingClientRect();
//         const currentScrollY = window.scrollY;
//         const direction = currentScrollY > lastScrollY.current ? "down" : "up";

//         // Check if the scroll is within the target div's vertical bounds
//         if (top < window.innerHeight && bottom > 0) {
//           // Only trigger background switch when scrolling inside the div
//           if (direction !== lastDirection.current) {
//             setScrolled((prev) => !prev); // Toggle background
//             setZoomIn((prev) => !prev); // Trigger zoom effect
//             setTextColor(scrolled ? "black" : "white"); // Change text color based on background
//             lastDirection.current = direction; // Track scroll direction
//           }
//         }

//         // Update last scroll position only if within target div
//         if (top < window.innerHeight && bottom > 0) {
//           lastScrollY.current = currentScrollY;
//         }
//       }
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, [scrolled]);

//   return (
//     <>
//       <div
//         ref={divRef}
//         className={`future-div ${scrolled ? "bg-image" : "bg-white"} ${
//           zoomIn ? "zoom-in" : "zoom-out"
//         }`}
//       >
//         <center>
//           <div className="col-md-4">
//             <h2 style={{ color: textColor }}>
//               Are you ready to see how <span>your story</span> unfolds?
//             </h2>
//             <p style={{ color: textColor }}>LET'S MAKE IT LEGENDARY</p>
//           </div>
//         </center>
//       </div>
//       <div style={{ height: "1000px", background: "blue" }} />
//     </>
//   );
// };
import React, { useState, useRef, useEffect } from "react";
import "./future.scss";

export const Future = () => {
  const [scrolled, setScrolled] = useState(false);
  const [zoomIn, setZoomIn] = useState(true);
  const [scrollPosition, setScrollPosition] = useState(0); // Track scroll position within div
  const divRef = useRef(null);
  const scrollThreshold = 75; // Shortened scroll threshold (one good scroll into the div)

  useEffect(() => {
    const handleScroll = () => {
      if (divRef.current) {
        const { top, bottom } = divRef.current.getBoundingClientRect();
        const currentScrollY = window.scrollY;

        // Check if the div is in view (within the viewport)
        if (top < window.innerHeight && bottom > 0) {
          // Calculate scroll position within the target div
          const relativeScrollPosition =
            currentScrollY - divRef.current.offsetTop;

          // Track scroll direction and change background only after a certain scroll position
          setScrollPosition(relativeScrollPosition);

          // If user has scrolled enough (based on the threshold), toggle background and zoom
          if (relativeScrollPosition > scrollThreshold) {
            if (!scrolled) {
              setScrolled(true); // Switch to background image
              setZoomIn(false); // Zoom out
            }
          } else if (relativeScrollPosition < scrollThreshold && scrolled) {
            setScrolled(false); // Switch back to white background
            setZoomIn(true); // Zoom in
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrolled, scrollPosition]);

  return (
    <>
      <div
        ref={divRef}
        className={`future-div ${scrolled ? "bg-image" : "bg-white"} ${
          zoomIn ? "zoom-in" : "zoom-out"
        } ${scrolled ? "text-light" : "text-dark"}`} // Conditional text color
      >
        <center>
          <div className="col-md-7">
            <h2>
              Are you ready to see how{" "}
              <span className={`${scrolled ? "gold" : "blue"}`}>
                your story
              </span>{" "}
              unfolds?
            </h2>
            <p>LET'S MAKE IT LEGENDARY</p>
          </div>
        </center>
      </div>
      <div style={{ height: "1000px", background: "blue" }} />
    </>
  );
};
