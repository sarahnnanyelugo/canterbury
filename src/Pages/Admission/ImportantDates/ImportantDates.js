import React from "react";
import "./important-dates.scss";
import Hero from "../../../assets/images/secondary-group.png";
import PageMenu from "../../../components/PageMenu/PageMenu";
import { admission } from "../../../TestData/pageMenuData";
import { PageLogo } from "../../../components/PageLogo/PageLogo";
import { Link } from "react-router-dom";

export const ImportantDates = () => {
  return (
    <>
      <div className="important-dates">
        {" "}
        <div className="dates-banner">
          {" "}
          <img src={Hero} width="100%" />
          <center>
            <h1>Important Dates</h1>
          </center>
        </div>
        s
        <PageMenu menuItems={admission} />
        <PageLogo />
        <div className="col-md-8 offset-md-2">
          <center>
            {" "}
            <h3>
              For families looking to enter Canterbury International School in
              September 2025
            </h3>
          </center>
          <h3>17th October 2024</h3>
          <ul>
            <li>
              Deadline date for applications to be considered for 16+
              Scholarships
            </li>
            <li>
              This is also the deadline date for applications to be considered
              for 13+ Scholarships, however, there is scope for us to accept
              later applications up to and including 1st November 2024
            </li>
            <li>
              Online applications and payment of the registration fee can be
              made anytime prior to this registration deadline
            </li>
            <li>
              This is also the recommended deadline date for 13+ and 16+ General
              Entry, although applications can be received at any time during
              the year, subject to availability
            </li>
          </ul>{" "}
          <h3>1st November 2024</h3>
          <ul>
            <li>
              Deadline date for 11+; 13+; 14+ ; 16+ online Bursary applications
            </li>
            <li>
              If you wish to be considered for a bursary you must complete an
              online registration form before commencing the bursary application
              process - both forms much be submitted by this date for
              consideration of a bursary for entry in September 2025
            </li>
          </ul>{" "}
          <h3>17th October 2024</h3>
          <ul>
            <li>
              Deadline date for applications to be considered for 16+
              Scholarships
            </li>
            <li>
              This is also the deadline date for applications to be considered
              for 13+ Scholarships, however, there is scope for us to accept
              later applications up to and including 1st November 2024
            </li>
            <li>
              Online applications and payment of the registration fee can be
              made anytime prior to this registration deadline
            </li>
            <li>
              This is also the recommended deadline date for 13+ and 16+ General
              Entry, although applications can be received at any time during
              the year, subject to availability
            </li>
          </ul>{" "}
          <h3>18th January 2025</h3>
          <ul>
            <li>
              Prep School assessment and interview day (Year 3 – Year 8) held at
              Canterbury International School
            </li>
          </ul>
        </div>
        <center>
          <p>
            If you have any questions about any of this information, please
            contact a member of the Admissions Team.
          </p>
          <Link to={"/contact-us"} className="inq-link">
            CONTACT US
          </Link>
        </center>
      </div>
    </>
  );
};
