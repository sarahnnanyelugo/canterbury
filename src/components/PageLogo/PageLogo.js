import React from "react";
import "./page-logo.scss";
import Logo from "../../assets/images/app-logo.png";

export const PageLogo = () => {
  return (
    <div className="col-md-6 offset-md-3 d-flex page-logo col-12 mobile-pad">
      <div className="col-md-5 col-5">
        <hr />
      </div>
      <div className="col-md-2 col-2">
        <center>
          {" "}
          <img src={Logo} width="30px" />
        </center>
      </div>

      <div className="col-md-5 col-5">
        <hr />
      </div>
    </div>
  );
};
