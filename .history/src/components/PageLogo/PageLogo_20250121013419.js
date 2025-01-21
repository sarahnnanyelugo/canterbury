import React from "react";
import "./page-logo.scss";
export const PageLogo = () => {
  return (
    <div className="col-md-6 offset-md-3 d-md-flex">
      <div className="col-md-6">
        <hr />
      </div>
      <img src={Logo} />
      <div className="col-md-6">
        <hr />
      </div>
    </div>
  );
};
