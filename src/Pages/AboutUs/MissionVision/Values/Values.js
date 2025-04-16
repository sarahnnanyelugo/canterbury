import React from "react";
import "./values.scss";
import Logo from "../../../../assets/images/app-logo.png";

export default function Values(props) {
  const { photo, heading, text, src } = props;
  return (
    <>
      <div className="col">
       
        <div className="values-outline col-md-10" />
        <div className="values-div col-md-12">
          <div
            className="col-md-12 value-img"
            style={{
              backgroundImage: `url(${src})`,
            }}
          >
            
           
          </div>
         <div style={{height:"180px"}}> <h4>{heading}</h4>
         <p>{text}</p></div>
          <center>
            <img src={Logo} width="15px" />
          </center>
        </div>
      </div>
    </>
  );
}
