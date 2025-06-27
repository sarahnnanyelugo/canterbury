import { useState, useEffect, useRef } from "react";
import { YoutubePosts } from "../../TestData/YoutubePosts";

const YouTube = () => {
  const [featuredIndex, setFeaturedIndex] = useState(0);
  const [inViewHeading, setInViewHeading] = useState(false);
  const headingRef = useRef(null);

  useEffect(() => {
    // Get the last shown index from localStorage
    const storedIndex = parseInt(
      localStorage.getItem("featuredIndex") || "0",
      10
    );

    // Calculate the next index
    const nextIndex = (storedIndex + 1) % YoutubePosts.length;

    // Store the updated index
    localStorage.setItem("featuredIndex", nextIndex.toString());

    setFeaturedIndex(nextIndex);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
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
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const getYouTubeEmbedUrl = (url) => {
    const urlObj = new URL(url);
    const videoId = urlObj.searchParams.get("v");
    return `https://www.youtube.com/embed/${videoId}`;
  };

  const featuredPost = YoutubePosts[featuredIndex];

  return (
    <div ref={headingRef}>
      <div
        className="ig-social twitter"
        style={{
          width: "100%",
          transform: inViewHeading ? "translateX(0)" : "translateX(100px)",
          opacity: inViewHeading ? 1 : 0,
          transition: "transform 2s ease, opacity 2s ease",
        }}
      >
        {featuredPost && (
          <div>
            <iframe
              width="100%"
              height="350"
              src={getYouTubeEmbedUrl(featuredPost.url)}
              title={`Featured YouTube video ${featuredPost.id}`}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
            <p>{featuredPost.caption}</p>
            <p style={{ fontSize: "12px" }} className="description">
              {featuredPost.description}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default YouTube;
