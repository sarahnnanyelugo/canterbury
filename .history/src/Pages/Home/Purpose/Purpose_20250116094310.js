import React, { useEffect, useState, useRef } from "react";

export const Purpose = () => {
  const textRef = useRef(null); // Reference for the paragraph
  return (
    <div style={{ backgroundColor: "#fff" }} ref={textRef}>
      {" "}
      <center>
        {" "}
        <div
          className="col-md-7 purpose d-flex"
          style={{
            transform: inViewText ? "scale(1)" : "scale(0.1)",
            opacity: inViewText ? 1 : 0,
            transition: "transform 2s ease, opacity 2s ease",
          }}
        >
          <div className="col-md-4 purpose-inner faith"></div>
          <div className="col-md-4 purpose-inner service"></div>
          <div className="col-md-4 purpose-inner justice"></div>
        </div>
      </center>
    </div>
  );
};
