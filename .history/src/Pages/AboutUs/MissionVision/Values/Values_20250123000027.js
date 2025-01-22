import React from "react";
import "./values.scss";
import Logo from "../../assets/images/pro3.jpg";

export default function Values(props) {
  const { photo, heading, text } = props;
  return (
    <>
      <div className="values-outline col-md-10" />
      <div className="values-div col-md-12">
        <div className="col-md-12">
          {" "}
          <img src={photo} width="100%" />
        </div>
        <h4>{heading}</h4>
        <p>{text}</p>
      </div>
    </>
  );
}
