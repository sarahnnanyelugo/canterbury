import React, { useEffect, useState, useRef } from "react";
import { PageLogo } from "../../../components/PageLogo/PageLogo";
import PageMenu from "../../../components/PageMenu/PageMenu";
import { academics } from "../../../TestData/pageMenuData";
import Hero from "../../../assets/images/eyfs3.webp";
// import Hero from "../../../assets/images/girl.png";
import Eyfs from "../../../assets/images/honour.jpg";
import Decor1 from "../../../assets/images/spiral.png";
import Decor2 from "../../../assets/images/star.png";
import Decor3 from "../../../assets/images/cube.png";
import "./primary.scss";
import { FaComputerMouse } from "react-icons/fa6";
import { PiSneakerMove } from "react-icons/pi";
import { MdOutlineCleanHands } from "react-icons/md";
import { SiElectronbuilder } from "react-icons/si";
import { FaNotesMedical } from "react-icons/fa";
import Accordion from "react-bootstrap/Accordion";

export const Primary = () => {
  const [inViewHeading, setInViewHeading] = useState(false);
  const headingRef = useRef(null); // Reference for the heading

  useEffect(() => {
    const handleScroll = () => {
      // Heading
      if (headingRef.current) {
        const rect = headingRef.current.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        if (rect.top <= windowHeight && rect.bottom >= 0) {
          setInViewHeading(true);
        } else {
          setInViewHeading(false);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Run once on load to check initial position
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <>
      <div className="eyfs-div">
        <div className="eyfs-banner d-flex">
          <div className="col-md-6 offset-md- heading" ref={headingRef}>
            <img src={Decor1} width="34px" height="34px" />
            <br />
            <img src={Decor2} className="offset-md-11 star" />
            <h1
              style={{
                transform: inViewHeading
                  ? "translateX(0)"
                  : "translateX(-100px)",
                opacity: inViewHeading ? 1 : 0,
                transition: "transform 2s ease, opacity 2s ease",
              }}
            >
              WELCOME TO CANTERBURY <span> PRIMARY</span>
            </h1>
            <p>We Pursue Excellence</p>
          </div>
          <div className="col-md-6">
            {" "}
            <img src={Hero} width="100%" />
            <img src={Decor3} className="offset-md-11 cube" />
          </div>
        </div>{" "}
        <PageMenu menuItems={academics} />
        <PageLogo />
        <div className="col-md-8 eyfs-body offset-md-2 d-flex">
          <div className="col-md-8">
            <h2>ELEMENTARY SCHOOL</h2>
            <h6>MESSAGE FROM THE ELEMENTARY PRINCIPAL</h6>
            <h4>Welcome to Caterbury International</h4>
            <p>
              I am excited to begin the 2024-25 academic year as the Elementary
              Principal, serving Legacy families for 14 years alongside the most
              talented staff in South Carolina.
            </p>
            <p>
              Our school family values academic rigor, safety, building strong
              social skills and daily physical fitness to reach our vision of
              every child to and through college. We believe in holding a high
              academic bar with 80% mastery, because that will prepare our
              scholars for lifelong success. We believe in addressing the whole
              child and offer differentiation, support, and enrichment to meet a
              child where he or she is by offering daily intervention to close
              academic gaps, enrichment activities such as Future Problem
              Solving and related arts such as music, art, STEAM lab, and media
              encouraging our scholars to explore talents they may not have
              known they had! Finally, we believe that elementary-aged children
              need to move! We understand what research says about learning and
              physical activity, which is why we are the only elementary school
              in South Carolina to offer physical education for every scholar,
              every day.
            </p>
            <p>
              We commit to putting “scholars before self” because our children
              deserve only the best, but we need your partnership to ensure the
              success of every child too. Important things you can do are:{" "}
            </p>
            <ol className="">
              <li>
                Have your child at school by <strong>8:00 am</strong> daily.
              </li>
              <li>
                Check that your child is wearing <strong>sneakers</strong> and
                in uniform before leaving home.
              </li>
              <li>
                Each night, <strong>check the Caterbury School Folder </strong>
                for homework and information from the teacher.
              </li>
              <li>
                <strong>Communicate</strong> with your child’s teacher
                frequently.
              </li>
            </ol>
            <p>
              <strong>
                The mission of getting our scholars to and through college
                begins now!
              </strong>
            </p>
            <p>With Caterbury International !</p>
            <br />
            <p>Mrs. Schrimmer</p>
          </div>
          <div className="col-md-3 offset-md-1">
            <div className="declare">
              <p>
                We must hold a high bar for our scholars in everything that they
                do.
              </p>
            </div>
            <div className="declare">
              <p>
                The partnership between home and school is one of the most
                critical factors to scholar success.
              </p>
            </div>
          </div>
        </div>
        <div className="d-md-flex col-md-8 offset-md-2">
          <div className="col-md-6">
            <img src={Eyfs} width="100%" />
          </div>
          <div className="col-md-6 rudiments">
            <p>
              We will strive to create a school atmosphere in which every
              scholar can find success through hard work.
            </p>
            <p>
              Subject areas taught include: English Language Arts (English,
              reading, spelling, writing, and speaking), mathematics, science,
              social studies, health, art, music, and physical education.{" "}
            </p>
            <p>
              Special efforts are made to meet the individual needs of our
              scholars through individualized instruction, small group
              instruction, and the use of technological devices.
            </p>
            <p>
              Our school has clearly defined learning objectives following the
              South Carolina State Standards for College and Career Readiness.
            </p>
          </div>
        </div>
        <div className="col-md-8 offset-md-2 row row-cols-2 row-cols-lg-5 g-0 g-lg-0 prowess">
          <div className="col">
            <div className="prowess-inner">
              <FaComputerMouse className="icon" />

              <h3>1.1</h3>
              <p>Technology ratio per scholar</p>
            </div>
          </div>
          <div className="col">
            <div className="prowess-inner">
              <PiSneakerMove className="icon" />

              <h3>30minutes</h3>
              <p>Every scholar, every day</p>
            </div>
          </div>{" "}
          <div className="col">
            <div className="prowess-inner">
              <MdOutlineCleanHands className="icon" />

              <h3>100%</h3>
              <p>Healthy learning environment</p>
            </div>
          </div>{" "}
          <div className="col">
            <div className="prowess-inner">
              <SiElectronbuilder className="icon" />

              <h3>Building a Foundation</h3>
              <p>Academic, Nutrition, and Fitness mastery</p>
            </div>
          </div>{" "}
          <div className="col">
            <div className="prowess-inner">
              <FaNotesMedical className="icon" />

              <h3>100%</h3>
              <p>Medical record documentation</p>
            </div>
          </div>
        </div>
        <div className="col-md-8 offset-md-2 elementary-details">
          <h2>The Elementary Campus</h2>
          <Accordion defaultActiveKey="0" flush>
            <Accordion.Item eventKey="0">
              <Accordion.Header>
                <h5>Curriculum</h5>
              </Accordion.Header>
              <Accordion.Body>
                <h5>ELA- EXPEDITIONARY LEARNING & CKLA:</h5>
                <ul>
                  <li>
                    K-2: Core Module Lessons, Reading Foundations Block,
                    Learning Labs (as applicable)
                  </li>
                  <li>
                    3-4: Core Module Lessons, Additional Language Learning Block
                  </li>
                  <li>
                    Personalized Learning: RAZ-Kids, IXL and Independent Reading
                  </li>
                  <li>
                    Small-Group Intervention: Project Read, Wordflight and
                    Reading Horizons.
                  </li>
                </ul>
                <h5>MATH- EUREKA</h5>
                <ul>
                  <li>
                    Core Lessons including fact fluency, problem solving, math
                    modeling including the use of manipulatives/pictures, and
                    mathematical explanations
                  </li>
                  <li>Personalized Learning: IXL and Zearn</li>
                  <li>
                    Small-Group Intervention: Zearn, Manipulative Practice,
                    Guided Math Approach
                  </li>
                </ul>
                <ul>
                  {" "}
                  <h5>INDEPENDENT WORK STATIONS</h5>
                  <li>
                    Independent work stations incorporating independent
                    activities for core concepts that incorporate ELA standards
                    and applications
                  </li>
                </ul>
                <ul>
                  {" "}
                  <h5>STEAM LAB</h5>
                  <li>
                    Provides hands on learning to connect classroom instruction
                    to application
                  </li>
                </ul>
                <ul>
                  {" "}
                  <h5>LIBRARY</h5>
                  <li>
                    Provides expansion upon Social Studies topics and additional
                    research blocks for more in depth exploration of content
                    topics
                  </li>
                </ul>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header>
                <h5>Assessments</h5>
              </Accordion.Header>
              <Accordion.Body>
                <p>
                  LECES believes in the power of assessments to inform
                  instruction and gauge scholar mastery of grade level
                  standards. The following assessments will be used throughout
                  the year and scholar performance will be communicated to
                  families through graded work packets, Powerschool gradebook,
                  and parent conferences. Scholar performance on these
                  assessments is the major determining factor in promotion to
                  the next grade level as these data points show whether
                  critical skills and grade level foundations have been
                  mastered.
                </p>

                <ul>
                  <li>
                    NWEA Measures of Academic Progress (MAP): Provides normative
                    data on scholars’ current skill levels in ELA and Math as
                    compared to grade level peers
                  </li>
                  <li>
                    Expeditionary Learning and Eureka Assessments: Provide
                    authentic assessments on grade level standards based on the
                    lessons taught in class
                  </li>
                  <li>
                    Interim Assessments (K-4): Assesses scholar mastery of
                    standards taught throughout the school year and used to
                    predict mastery level on SCReady
                  </li>

                  <li>
                    DIBELS/Running Records: Progress monitoring tools used to
                    track scholar progress in-between major assessment points in
                    the school year
                  </li>
                </ul>
              </Accordion.Body>
            </Accordion.Item>{" "}
            <Accordion.Item eventKey="2">
              <Accordion.Header>
                <h5>Gifted & Talented</h5>
              </Accordion.Header>
              <Accordion.Body>
                <p>
                  LECES strives to offer scholars performing above grade level
                  the push that they need to continue to grow on their own
                  academic journey. Below is the basic foundation that we
                  provide for such scholars:
                </p>
                <h5>IDENTIFICATION</h5>
                <ul>
                  <li>
                    Scholars are identified formally for the Gifted and Talented
                    Program in the Fall of 2nd Grade through the South Carolina
                    CogAT/ITBS Assessments.
                  </li>
                  <li>
                    Scholars in 5k-4th are also identified as accelerated
                    through formative assessments such as Amplify Reading 3D and
                    MAP as well as teacher recommendations.
                  </li>
                  <li>
                    We look at a scholar’s academic/intellectual ability as well
                    as artistic potential in functioning at a high performance
                    level.
                  </li>
                  <h6>
                    <li>Programs Offered:</li>
                  </h6>
                  <ol>
                    <li>
                      Enrichment opportunities for GT identified children and
                      other scholars excelling in certain subjects/areas in all
                      grades 1st-4th.
                    </li>
                    <li>Pull-out lessons with Instructional Leaders</li>
                    <li>In class personalized learning opportunities</li>
                    <li>Strings and Percussion Ensembles</li>
                    <li>Afterschool clubs TBD</li>
                  </ol>
                </ul>
              </Accordion.Body>
            </Accordion.Item>{" "}
            <Accordion.Item eventKey="3">
              <Accordion.Header>
                <h5>Special Services</h5>
              </Accordion.Header>
              <Accordion.Body>
                <p>
                  Special instruction is made available to meet the needs of our
                  children who qualify under the Individuals with Disabilities
                  Education Act (IDEA). Scholars are served in settings
                  appropriate for their disabilities. All information pertaining
                  to services supplied through Special Education will only be
                  released to individuals who have direct contact with the
                  scholar and parent/guardian. Please inform the school of any
                  special services your child has received prior to coming to
                  Legacy. The guidelines followed by Legacy Early College are
                  those established by local and federal mandates. Specific and
                  additional information may be obtained by contacting the
                  school’s Special Education Teacher.
                </p>
              </Accordion.Body>
            </Accordion.Item>{" "}
            <Accordion.Item eventKey="4">
              <Accordion.Header>
                <h5>Scholar Services Team</h5>
              </Accordion.Header>
              <Accordion.Body>
                <p>
                  The Scholar Services Team at Legacy Early College Elementary
                  School consists of the scholar services counselor, school
                  social worker, and school psychologist. The goal of this team
                  is to provide scholars with knowledge and support in the areas
                  of academic deficiencies, personal, social, and emotional
                  development, to promote positive mental health, and to assist
                  scholars in acquiring and using life skills. This is
                  accomplished through a comprehensive support program including
                  individual counseling, small group counseling, and classroom
                  lessons. Additionally, our team provides teacher and parent
                  consulting on an as-needed basis. Our scholar services team
                  may be contacted through our school office at 864-214-1600.
                </p>
              </Accordion.Body>
            </Accordion.Item>{" "}
          </Accordion>{" "}
        </div>
      </div>
    </>
  );
};
