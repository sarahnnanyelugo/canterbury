import React from "react";
import PageMenu from "../../../components/PageMenu/PageMenu";
import { studentLife } from "../../../TestData/pageMenuData";
import Hero from "../../../assets/images/casual.jpg";
import Img1 from "../../../assets/images/casual.jpg";
import { RiDoubleQuotesR } from "react-icons/ri";

import "./boarding.scss";
export const Boarding = () => {
  return (
    <>
      <div className="boarding-div">
        {" "}
        <div className="story-banner">
          {" "}
          <img src={Hero} width="100%" />
          <center>
            <h1>Boarding</h1>
          </center>
        </div>
        <PageMenu menuItems={studentLife} />
        <div className="boarding-inner d-md-flex col-md-8 offset-md-2">
          <div className="col-md-3 comment">
            <p>
              "Our full boarding ethos adds to the family unit, allowing us to
              work in partnership with you - the parents - to provide you with
              the best team - and role models - to support you as you guide your
              children successfully through the teenage years."
            </p>
            <h4>Houseparent</h4>
            <div className="d-flex">
              <div style={{ flexGrow: 1 }} />
              <div className="quote-cona ">
                <h1>
                  <RiDoubleQuotesR />
                </h1>
              </div>
            </div>
          </div>
          <div className="col-md-9 boarding-ethos">
            <h3>
              We are proud of our full boarding ethos and all-round education.
            </h3>
            <p>
              Our full boarding ethos benefits all our students - boarding and
              day - allowing us time to really get to know each student and to
              maximise their potential. This empowers them to stretch and grow
              in confidence, allows them to develop their talents and find
              talents they did not know they had. This is curated through the
              vast number of opportunities available to them in our academic,
              co-curricular, evening and weekend programmes.
            </p>
            <p>
              Every member of our teaching staff has a role in our Boarding
              Houses and all student has a Tutor who takes a close interest in
              every aspect of their academic and pastoral development, happiness
              and welfare and meets weekly with their tutees. This allows our
              teaching staff to immerse themselves in our community and really
              get to know every student not only in the classroom.{" "}
            </p>
            <p>
              As a full boarding school, we do not offer weekly, or flexi,
              boarding in our senior school (age 13-18 years) which means our
              boarders have all their friends around them at weekends, and most
              day students choose to fully participate in the evening and
              weekend programmes. All students are strongly encouraged to make
              the most of the opportunities and to be fully involved in the
              school week and House life.{" "}
            </p>
          </div>
        </div>
        <div className="col-md-8 offset-md-2 row row-cols-2 row-cols-lg-4 g-2 g-lg-4 mt-5">
          <div className="col">
            <img src={Img1} width="100%" />
          </div>
          <div className="col">
            <img src={Img1} width="100%" />
          </div>
          <div className="col">
            <img src={Img1} width="100%" />
          </div>
          <div className="col">
            <img src={Img1} width="100%" />
          </div>
        </div>
      </div>
    </>
  );
};
