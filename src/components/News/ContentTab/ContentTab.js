import React, { useState } from "react";
import "./content-tab.scss"; // you'll style this below

function ContentTab({ tabs }) {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="content-tab">
      <div className="tab-buttons">
        {tabs.map((tab, idx) => (
          <button
            key={idx}
            className={`tab-btn ${activeIndex === idx ? "active" : ""}`}
            onClick={() => setActiveIndex(idx)}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div className="tab-content">{tabs[activeIndex].content}</div>
    </div>
  );
}

export default ContentTab;
