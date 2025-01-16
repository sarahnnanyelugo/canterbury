const [activeIndex, setActiveIndex2] = useState(1);
const [tabInView, setTabInView] = useState(false); // Tracks if tab content is visible
const tabRef = useRef(null); // Reference for tab visibility detection

const handleClick2 = (index) => {
  setActiveIndex2(index);
  setTabInView(false); // Reset animation before triggering it again
  setTimeout(() => setTabInView(true), 10); // Re-trigger animation
};

// Function to check active tab
const checkActive = (index, className) =>
  activeIndex === index ? className : "";

// Scroll Detection
useEffect(() => {
  const handleScroll = () => {
    if (tabRef.current) {
      const rect = tabRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      setTabInView(rect.top <= windowHeight && rect.bottom >= 0);
    }
  };

  window.addEventListener("scroll", handleScroll);
  handleScroll();
  return () => window.removeEventListener("scroll", handleScroll);
}, []);

return (
  <div className="business-pricing-tab ">
    <div className="tabs offset-md-5">
      <button
        className={`tab ${checkActive(1, "active2")}`}
        onClick={() => handleClick2(1)}
      >
        Business
      </button>
      <button
        className={`tab ${checkActive(2, "active2")}`}
        onClick={() => handleClick2(2)}
        style={{ marginLeft: "20px" }}
      >
        School
      </button>
    </div>

    <div className="panels" ref={tabRef}>
      <div className={`panel ${checkActive(1, "active2")}`}>
        <div
          className="sample-con col-md-6 offset-md-3"
          style={{
            transform:
              tabInView && activeIndex === 1 ? "scale(1)" : "scale(0.1)",
            opacity: tabInView && activeIndex === 1 ? 1 : 0,
            transition: "transform 1.5s ease, opacity 1.5s ease",
          }}
        ></div>
      </div>

      <div className={`panel ${checkActive(2, "active2")}`}>
        <div
          className="sample-con2 col-md-6 offset-md-3"
          style={{
            transform:
              tabInView && activeIndex === 2 ? "scale(1)" : "scale(0.1)",
            opacity: tabInView && activeIndex === 2 ? 1 : 0,
            transition: "transform 1.5s ease, opacity 1.5s ease",
          }}
        ></div>
      </div>
    </div>
  </div>
);
