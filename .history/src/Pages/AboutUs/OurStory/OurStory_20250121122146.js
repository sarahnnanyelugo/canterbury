import React from "react";
import "./our-story.scss";
import Hero from "../../../assets/images/storyHero.jpg";
import PageMenu from "../../../components/PageMenu/PageMenu";
import { about } from "../../../TestData/pageMenuData";
import { PageLogo } from "../../../components/PageLogo/PageLogo";
import { ImQuotesLeft } from "react-icons/im";

export const OurStory = () => {
  return (
    <>
      <div className="story-div col-md-12">
        <div className="story-banner">
          {" "}
          <img src={Hero} width="100%" />
          <center>
            <h1>ABOUT</h1>
          </center>
        </div>
        <PageMenu menuItems={about} />
        <PageLogo />
        <center>
          <div className="col-md-6">
            <h2>This is Canterbury</h2>
            <p className="first-para">
              Canterbury is an independent, coeducational boarding and day
              school for grades 9–12 and postgraduates. Yet, it's more than a
              school, more than a place. It's a promise grounded in our belief
              in your extraordinary potential.
            </p>
          </div>
        </center>
        <div className="col-md-8 offset-md-2 d-md-flex">
          <div className="col-md-6" style={{ paddingRight: "10px" }}>
            <p>
              Founded in 1915 and set on a hilltop in New Milford, Connecticut,
              Canterbury combines a strong tradition of academic excellence with
              a commitment to nurturing intellectually curious, values-centered,
              well-rounded students. Within an inclusive, interfaith community
              guided by a Catholic heritage, students become empathetic,
              ethically grounded individuals who value diversity and are
              inspired to create a more just and compassionate world.{" "}
            </p>
          </div>
          <div className="col-md-6" style={{ paddingLeft: "10px" }}>
            <p>
              With approximately 330 students, we are committed to the small
              boarding school experience as the most comprehensive form of high
              school education—for day and boarding students alike. A rigorous
              college preparatory curriculum, robust extracurricular offerings,
              and engaged community life allow for growth and discovery in every
              dimension. Our faculty, at the heart of these experiences, meet
              students where they are and champion everything they aspire to
              become.
            </p>
          </div>
        </div>
        <div className="remarkable">
          <center>
            <div className="col-md-5">
              <div className=" d-md-flex remarkable-logo">
                <div className="col-md-5">
                  <hr />
                </div>
                <div className="col-md-2">
                  <center>
                    {" "}
                    <ImQuotesLeft className="quote" />
                  </center>
                </div>

                <div className="col-md-5">
                  <hr />
                </div>
              </div>
              <p>
                The most remarkable and differentiating aspect of small boarding
                schools is that they value the equal importance of academic
                success, personal growth, and community engagement when it comes
                to learning, living, and leading.
              </p>
              <p>
                We believe that Canterbury is<em> the best</em> small boarding
                school.
              </p>
              <button>
                THE CASE FOR SMALL BOARDING SCHOOLS, THE CASE FOR CANTERBURY
              </button>
              <hr />
            </div>
          </center>
        </div>
        <div className="col-md-8 offset-md-2 d-flex">
          <div className="col-md-6">
            <h4>
              A TRADITION OF <span>values and inclusion</span>
              <p>
                Canterbury first opened its doors in 1915 as a Catholic school
                for boys. Today, while our foundation remains rooted in Catholic
                values, we embrace the myriad faiths, beliefs, and cultures that
                enrich our School.
              </p>
              <p>
                In our welcoming, interfaith community, you grow as a moral
                leader and ethical citizen, finding your purpose and a desire to
                effect positive change in our world.{" "}
              </p>
            </h4>
          </div>
          <div className="col-md-6"></div>
        </div>
      </div>
    </>
  );
};
