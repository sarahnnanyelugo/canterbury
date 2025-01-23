import React from "react";
import "./mission-vision.scss";
import Hero from "../../../assets/images/justice.jpg";
import Chapel from "../../../assets/images/chapel.png";
import Mentor from "../../../assets/images/mentor.png";
import Profile1 from "../../../assets/images/pro1.jpg";
import Create from "../../../assets/images/create.jpg";
import Profile2 from "../../../assets/images/pro2.jpg";
import Res from "../../../assets/images/res.jpg";
import Empathy from "../../../assets/images/empathy.webp";
import Curious from "../../../assets/images/curious.webp";
import PageMenu from "../../../components/PageMenu/PageMenu";
import { about } from "../../../TestData/pageMenuData";
import { PageLogo } from "../../../components/PageLogo/PageLogo";
import { ImQuotesLeft } from "react-icons/im";
import CountUp from "react-countup";
import Carousel from "react-bootstrap/Carousel";
import News from "../../../components/News/News";
import { FaLongArrowAltRight } from "react-icons/fa";
import Values from "./Values/Values";

export const MissionVision = () => {
  return (
    <>
      <div className="story-div col-md-12">
        <div className="mission-banner">
          {" "}
          <img src={Hero} width="100%" />
          <div className="overlayed">
            <div className="text">
              {" "}
              <h1>Mission & Values</h1>
            </div>
          </div>
        </div>
        <PageMenu menuItems={about} />
        <PageLogo />
        <center>
          <div className="col-md-8">
            <h2>Our Mission</h2>
            <p className="mission-statement">
              Founded in 1915 and guided by our Catholic heritage, Canterbury is
              a college preparatory, coeducational boarding and day school for
              students in grades 9–12. The School prides itself on creating a
              community based on its Five Values—Honesty, Respect, Compassion,
              Spirituality, and Self Reliance—in which students and faculty
              forge lasting bonds and every student experiences a broad and
              challenging program in a small school setting. The School’s
              educational environment fosters academic rigor, athletic
              development, artistic enrichment, and spiritual growth, and
              strives to ensure a superior experience that prepares students for
              leading colleges and universities and for life.
            </p>
          </div>
        </center>
        <center>
          {" "}
          <div className="col-md-9 my-quote">
            <p>
              Even in your moments of obscurity, strive for excellence, for when
              the opportunities you so desire come by, all you will have to show
              are your works, and by then, there may be no time for editing.
            </p>
          </div>
        </center>
        <div className="col-md-8 offset-md-2 d-flex mission-values">
          <div className="mission-div col-md-4">
            <hr />
            <center>
              <p>
                "To foster in our students both the ability and the desire to
                make a positive difference in the world."
              </p>

              <h1>
                Our <span>Mi</span>ssion
              </h1>
            </center>
            <hr />
          </div>
          <div className="col-md-8 row row-cols-2 row-cols-lg-2 g-2 g-lg-5">
            <Values
              src={Res}
              heading="RESILIENCE"
              text="Canterbury students face challenges with determination, resilience, and perseverance."
            />{" "}
            <Values
              src={Res}
              heading="HONOR"
              text="Canterbury students act with honor, integrity, responsibility, and conviction of character in all aspects of their daily life."
            />
          </div>
        </div>{" "}
        <div className="col-md-8 offset-md-2 row row-cols-2 row-cols-lg-3 g-2 g-lg-5 mt-1">
          <Values
            src={Res}
            heading="POSITIVITY
"
            text="Canterbury students embrace and create opportunities to make a positive difference in their communities and in the world.

"
          />{" "}
          <Values
            // photo={Empathy}
            heading="EMPATHY
"
            src={Empathy}
            text="Canterbury students care for, understand, and respect the humanity of all members of the global community.

"
          />{" "}
          <Values
            src={Curious}
            heading="CURIOSITY"
            text="Canterbury students seek knowledge and pursue a deeper understanding of the world.

"
          />
        </div>
        {/* <div className="col-md-5 offset-md-2 values-accordion"> */}
        <main>
          <h1>CSS-Only Animated Accordion</h1>
          <section class="accordion" id="overview">
            <h1 class="title">
              <a href="#overview">Overview</a>
            </h1>
            <div class="content">
              <div class="wrapper">
                <p style={{ color: "#fff" }}>
                  This CodePen demonstrates how we can animate the opening and
                  closing states of an accordion with fancy reveal animation
                  using only CSS. This concept is suitable for creating{" "}
                  <strong>FAQ sections</strong>,
                  <strong>Table of Contents</strong>, and more.
                </p>
              </div>
            </div>
          </section>

          <section class="accordion" id="how-does-it-work">
            <h1 class="title">
              <a href="#how-does-it-work">How does it work?</a>
            </h1>
            <div class="content">
              <div class="wrapper">
                <p>
                  We cannot transition height or any CSS property from zero to
                  auto. If we want to smoothly expand a collapsed accordion, we
                  could set a<code>max-height</code> and transition the{" "}
                  <code>height</code> property to a large value when we expand
                  the section. However,
                  <a
                    href="https://css-tricks.com/using-css-transitions-auto-dimensions/#aa-there-are-two-crucial-downsides-to-this"
                    target="_blank"
                  >
                    it may not properly work
                  </a>
                  if the content is larger than the <code>max-height</code>.
                </p>
                <p>
                  So, here we create a CSS grid with a grid item. Then we
                  transition the
                  <code>grid-template-rows</code> property from <code>0fr</code>{" "}
                  to
                  <code>1fr</code> and the grid item transitions to its content
                  height.
                </p>
                <p>
                  I used CSS <code>clip-path</code> and{" "}
                  <code>mix-blend-mode</code> to animate the background and text
                  color of the accordion. Each accordion has two
                  pseudo-elements. We know that <code>opacity</code>,
                  <code>clip-path</code> and, <code>visibility</code> are
                  animatable CSS properties. So when the accordion is selected
                  using the
                  <code>:target</code> pseudo-class, we transition the clip-path
                  circle radius to 200% of the
                  <code>::before</code>
                  pseudo-element. When the accordion is not selected, we do the
                  same with the
                  <code>::after</code> but this time with a delay. This creates
                  an illusion as it appears to clip from inside.
                </p>
                <p>
                  Since the accordion's title is an anchor element, users can
                  also navigate through the items with their keyboard.
                </p>
              </div>
            </div>
          </section>

          <section class="accordion" id="inspiration">
            <h1 class="title">
              <a href="#inspiration">Inspiration</a>
            </h1>
            <div class="content">
              <div class="wrapper">
                <p>
                  In a recent video, Kevin showed us a way to animate height
                  from zero to auto value. Seeing that, I couldn't resist
                  experimenting with the idea. Then I came up with this CSS-only
                  accordion component and added the reveal animation too!
                </p>
                <p>
                  I would highly recommend watching
                  <a href="https://youtu.be/B_n4YONte5A" target="_blank">
                    his video
                  </a>
                  , where he beautifully explains the technique and points out
                  how he discovered it. Also, read
                  <a
                    href="https://keithjgrant.com/posts/2023/04/transitioning-to-height-auto/"
                    target="_blank"
                  >
                    Keith J. Grant's post
                  </a>
                  and
                  <a
                    href="https://nemzes.net/posts/animating-height-auto/"
                    target="_blank"
                  >
                    Nelson Menezes's post
                  </a>
                  on the same topic.
                </p>
              </div>
            </div>
          </section>
        </main>
        {/* </div> */}
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
      </div>
    </>
  );
};
