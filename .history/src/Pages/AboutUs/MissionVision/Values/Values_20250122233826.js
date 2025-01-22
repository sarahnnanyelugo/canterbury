import React from "react";
import "./values.scss";
export default function Values(props) {
  const [photo, heading, text] = props;
  return (
    <>
      <div classname="values-outline" /> >
      <div className="values-div">
        <img src={photo} width={100} height="100%" />
        <h4>{text}</h4>
        <p>{text}</p>
      </div>
    </>
  );
}
