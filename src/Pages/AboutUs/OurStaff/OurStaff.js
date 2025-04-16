import React from "react";
import "./our-staff.scss";
import Hero from "../../../assets/images/senior-group.png";
import PageMenu from "../../../components/PageMenu/PageMenu";
import { about } from "../../../TestData/pageMenuData";
import { PageLogo } from "../../../components/PageLogo/PageLogo";
import StaffProfile from "./StaffProfile";

export const OurStaff = () => {
  return (
    <>
      <div className="our-staff">
        {" "}
        <div className="staff-banner">
          {" "}
          <img src={Hero} width="100%" />
          <center>
            <h1>MEET THE TEAM</h1>
          </center>
        </div>
      </div>{" "}
      <PageMenu menuItems={about} />
      <PageLogo />
      <center>
        <div className="col-md-6">
          <p className="first-para">
            At Canterbury International School, our dedicated team of educators
            and staff are the heartbeat of our vibrant learning community.
            Committed to excellence, they bring passion, expertise, and a
            nurturing spirit to every classroom and interaction. With a diverse
            blend of experienced professionals from around the globe, our staff
            fosters an environment where students are encouraged to think
            critically, dream boldly, and achieve their fullest potential. Meet
            the inspiring individuals who shape the future, one student at a
            time.
          </p>
        </div>
      </center>
      <div className="mobile-pad">
        <StaffProfile />
      </div>
    </>
  );
};
