import React from "react";

export const Apply = () => {
  return (
    <>
      <div className="apply-div">
        {" "}
        <div className="contact-banner">
          {" "}
          <img src={Hero} width="100%" />
          <center>
            <h1>CONTACT US</h1>
          </center>
        </div>
        <PageMenu menuItems={about} />
        <PageLogo />
      </div>
    </>
  );
};
