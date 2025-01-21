import React from "react";
import "./page-logo.scss";
import Logo from "../../assets/images/logo-head.svg";

export const PageLogo = () => {
  return (
    <div className="col-md-6 offset-md-3 d-md-flex">
      <div className="col-md-6" style={{ marginRight: "60px" }}>
        <hr />
      </div>
      <img src={Logo} width="40px" style={{ marginRight: "60px" }} />
      <div className="col-md-6">
        <hr />
      </div>
    </div>
  );
};
