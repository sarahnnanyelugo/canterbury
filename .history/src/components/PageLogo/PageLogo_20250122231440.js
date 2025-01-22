import React from "react";
import "./page-logo.scss";
import Logo from "../../assets/images/logo-head.svg";

export const PageLogo = () => {
  return (
    <div
      className="col-md-6 offset-md-3 d-md-flex page-logo"
      style={{ marginTop: "100px" }}
    >
      <div className="col-md-5">
        <hr />
      </div>
      <div className="col-md-2">
        <center>
          {" "}
          <img src={Logo} width="30px" />
        </center>
      </div>

      <div className="col-md-5">
        <hr />
      </div>
    </div>
  );
};
