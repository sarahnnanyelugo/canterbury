import React from "react";
import "./values.scss";
export default function Values(props) {
  const [photo, heading, text] = props;
  return (
    <div className="values-div">
      <img src={Photo} width={100} height="100%" />
    </div>
  );
}
