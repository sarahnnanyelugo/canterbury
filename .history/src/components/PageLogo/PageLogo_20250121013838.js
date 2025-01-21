import React from "react";
import "./page-logo.scss";
import Logo from "../../assets/images/logo-head.svg";

export const PageLogo = () => {
  return (
    <div className="col-md-6 offset-md-3 d-md-flex" style={{ height: "200px" }}>
      <div className="col-md-6" style={{ marginRight: "50px" }}>
        <hr />
      </div>
      <img src={Logo} width="40px" style={{ marginRight: "50px" }} />
      <div className="col-md-6">
        <hr />
      </div>
    </div>
  );
};
