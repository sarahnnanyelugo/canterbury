import React from "react";
import "./our-story.scss";
import Hero from "../../../assets/images/storyHero.jpg";
import Chapel from "../../../assets/images/chapel.png";
import Mentor from "../../../assets/images/mentor.png";
import PageMenu from "../../../components/PageMenu/PageMenu";
import { about } from "../../../TestData/pageMenuData";
import { PageLogo } from "../../../components/PageLogo/PageLogo";
import { ImQuotesLeft } from "react-icons/im";
import CountUp from "react-countup";

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
        <div className="col-md-8 offset-md-2 d-flex chapel">
          <div className="col-md-6 first-div">
            <h3>
              A TRADITION OF{" "}
              <span>
                values and <br />
                inclusion
              </span>
            </h3>
            <p>
              Canterbury first opened its doors in 1915 as a Catholic school for
              boys. Today, while our foundation remains rooted in Catholic
              values, we embrace the myriad faiths, beliefs, and cultures that
              enrich our School.
            </p>
            <p>
              In our welcoming, interfaith community, you grow as a moral leader
              and ethical citizen, finding your purpose and a desire to effect
              positive change in our world.{" "}
            </p>
            <button>EXPLORE</button>
          </div>
          <div className="col-md-6">
            <img src={Chapel} width="100%" />
          </div>
        </div>
        <div className="stats-div">
          <div className="col-md-8 offset-md-2 d-flex">
            <div className="stats-digits col-4">
              <h1>
                {" "}
                <CountUp
                  start={0}
                  end={5000}
                  duration={2}
                  suffix="+"
                  enableScrollSpy={true}
                />{" "}
              </h1>
              <h5>AVERAGE ENROLLMENT</h5>
            </div>{" "}
            <div className="stats-digits col-4">
              <h1>
                {" "}
                <CountUp
                  start={0}
                  end={150}
                  duration={2}
                  suffix="+"
                  enableScrollSpy={true}
                />{" "}
              </h1>
              <h5>HILTOP ACRES</h5>
            </div>{" "}
            <div className="stats-digits col-4">
              <h1>
                {" "}
                <CountUp
                  start={0}
                  end={1.5}
                  duration={2}
                  suffix=""
                  enableScrollSpy={true}
                />{" "}
              </h1>
              <h5>HOURS TO NYC</h5>
            </div>
          </div>
        </div>

        <div className="col-md-8 offset-md-2 d-flex chapel">
          {" "}
          <div className="col-md-6  first-div">
            <img src={Mentor} width="100%" />
          </div>
          <div className="col-md-6">
            <h3>
              MENTORS IN
              <span>life</span>
            </h3>
            <p>
              Our teachers are not just educators; they are life mentors who
              have chosen to immerse themselves in the lives of students. By
              residing on campus, they make a profound commitment to be there
              for every pivotal moment. Their dedication goes beyond the
              classroom, shaping you into an empowered and insightful citizen.
            </p>

            <button>MEET OUR FACULTY</button>
          </div>
        </div>
        <div className="stats-div2">
          <div className="col-md-8 offset-md-2 d-flex">
            <div className="stats-digits col-4">
              <h1>
                {" "}
                <CountUp
                  start={0}
                  end={75}
                  duration={2}
                  suffix="%"
                  enableScrollSpy={true}
                />{" "}
              </h1>
              <h5>FACULTY HOLD ADVANCED DEGREES</h5>
            </div>{" "}
            <div className="stats-digits col-4">
              <h1>6:1</h1>
              <h5>STUDENT-FACULTY RATIO</h5>
            </div>{" "}
            <div className="stats-digits col-4">
              <h1>
                {" "}
                <CountUp
                  start={0}
                  end={70}
                  duration={2}
                  suffix="%"
                  enableScrollSpy={true}
                />{" "}
              </h1>
              <h5>BOARDING STUDENTS</h5>
            </div>
          </div>
        </div>

        <div className="graduates-profile">
          <center>
            <div className="col-md-5">
              <h1></h1>
            </div>
          </center>
        </div>
      </div>
    </>
  );
};
