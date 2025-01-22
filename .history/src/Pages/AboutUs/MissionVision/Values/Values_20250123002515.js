import React from "react";
import "./values.scss";
import Logo from "../../../../assets/images/logo-head.svg";

export default function Values(props) {
  const { photo, heading, text, src } = props;
  return (
    <>
      <div className="col">
        {" "}
        <div className="values-outline col-md-10" />
        <div className="values-div col-md-12">
          <div
            className="col-md-12 value-img"
            style={{
              backgroundImage: `url(${src})`,
            }}
          >
            {" "}
            {/* <img src={photo} width="100%" /> */}
          </div>
          <h4>{heading}</h4>
          <p>{text}</p>
          <center>
            <img src={Logo} width="12px" />
          </center>
        </div>
      </div>
    </>
  );
}
