import React from "react";
import "./tuition.scss";
import Img3 from "../../../assets/images/bio-lab.png";
import Hero from "../../../assets/images/primary-girl2.png";
import Bus from "../../../assets/images/sch-bus.png";
import Boarding from "../../../assets/images/casual.jpg";
import Accordion from "react-bootstrap/Accordion";
import { SectionHeading } from "../../../components/SectionHeading/SectionHeading";
import PageMenu from "../../../components/PageMenu/PageMenu";
import { admission } from "../../../TestData/pageMenuData";

export const Tuition = () => {
  return (
    <>
      <div className="tuition">
        <div className="banner">
          <img src={Hero} width="100%" />
        </div>
        <PageMenu menuItems={admission} />
        <div className="tuition-div col-md-8 offset-md-2">
          <SectionHeading
            text1="MONEY"
            text2="matters"
            color1="#54020a"
            color2="#2d79c5"
          />
          <h6>
            Canterbury International education is a powerful and life-changing
            investment in your child's future.
          </h6>
          <div className="d-md-flex mt-5">
            <div className="col-md-6">
              <img src={Img3} width="100%" className="bio" />
            </div>
            <div className="col-md-6 mt-5" style={{ paddingLeft: "20px" }}>
              <p>
                When you look at the tuition numbers, don’t make the mistake of
                assuming that Bancroft is out of reach for your family. Bancroft
                is a diverse and inclusive community of families from a variety
                of backgrounds.
              </p>
              <p>
                There are many ways to afford a Bancroft education, including
                financial aid, and we are here to help every qualified applicant
                find their way.
              </p>
            </div>
          </div>{" "}
          <div className="d-md-flex mt-5">
            <div className="col-md-6">
              <h4>Tuition and fees for 2025-2026</h4>
              <Accordion defaultActiveKey="0">
                <Accordion.Item eventKey="0">
                  <Accordion.Header>
                    <h2>Junior Secondary</h2>
                  </Accordion.Header>
                  <Accordion.Body>
                    <ul>
                      <li>
                        JSS1:<span>00000</span>
                      </li>
                      <li>
                        JSS1:<span>00000</span>
                      </li>
                      <li>
                        JSS3:<span>00000</span>
                      </li>
                    </ul>
                    <p>Other fees and registrations:</p>
                    <ul>
                      <li>Junior WAEC:000000</li>
                    </ul>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                  <Accordion.Header>
                    {" "}
                    <h2>Senior Secondary</h2>
                  </Accordion.Header>
                  <Accordion.Body>
                    <ul>
                      <li>
                        SSS1: <span>00000</span>
                      </li>
                      <li>
                        SSS2:<span>00000</span>
                      </li>
                      <li>
                        SSS3:<span>00000</span>
                      </li>
                    </ul>
                    <p>Other fees and registrations:</p>
                    <ul>
                      <li>
                        Senior WAEC: <span>00000</span>
                      </li>
                      <li>
                        NECO:<span>00000</span>
                      </li>
                      <li>
                        JAMB:<span>00000</span>
                      </li>
                      <li>
                        GCE<span>00000</span>
                      </li>
                    </ul>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </div>
            <div className="col-md-6" style={{ paddingLeft: "20px" }}>
              <h4>Tuition Payment</h4>
              <Accordion defaultActiveKey="0">
                <Accordion.Item eventKey="0">
                  <Accordion.Header>
                    <h5>Plan 1: One Payment (Full Tuition)</h5>
                  </Accordion.Header>
                  <Accordion.Body>
                    <ul>
                      <li>One payment due July 31, 2025</li>
                      <li>
                        Payment is based on tuition, minus your enrollment
                        deposit
                      </li>
                    </ul>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                  <Accordion.Header>
                    <h5>Plan 2: (65% / 35%)</h5>
                  </Accordion.Header>
                  <Accordion.Body>
                    <ul>
                      <li>First payment (65% of tuition) due July 2025</li>
                      <li>Second payment (35% of tuition) due January 2026</li>
                      <li>
                        Payments are based on tuition, minus your enrollment
                        deposit
                      </li>
                    </ul>
                  </Accordion.Body>
                </Accordion.Item>{" "}
                <Accordion.Item eventKey="2">
                  <Accordion.Header>
                    <h5>Plan 3: Ten Payments</h5>
                  </Accordion.Header>
                  <Accordion.Body>
                    <ul>
                      <li>10 equal monthly payments, beginning in July 2025</li>
                      <li>Final payment due April 2026</li>
                      <li>
                        Payments are based on tuition, minus your enrollment
                        deposit
                      </li>
                    </ul>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3">
                  <Accordion.Header>
                    <h5>Payment Methods</h5>
                  </Accordion.Header>
                  <Accordion.Body>
                    <ul>
                      <li>Switchapp</li>
                      <li>Interswitch 2026</li>
                    </ul>
                    <p>
                      Other Fees — Your payment plan covers tuition only. There
                      are other required and optional fees that are billed
                      through Smart Tuition. Such fees must be paid on time to
                      avoid late fees or restriction of credit privileges.
                    </p>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </div>
          </div>
          <div className="d-md-flex mt-5">
            <div className="col-md-6 mt-5">
              <h4> Bus Information</h4>
              <img src={Bus} width="100%" />
            </div>
            <div className="col-md-6 mt-5">
              {" "}
              <Accordion defaultActiveKey="0">
                <Accordion.Item eventKey="0">
                  <Accordion.Header>
                    <h4>Schedule</h4>
                  </Accordion.Header>
                  <Accordion.Body>
                    <ul>
                      <li>
                        JSS1:<span>00000</span>
                      </li>
                      <li>
                        JSS1:<span>00000</span>
                      </li>
                      <li>
                        JSS3:<span>00000</span>
                      </li>
                    </ul>
                    <p>Other fees and registrations:</p>
                    <ul>
                      <li>Junior WAEC:000000</li>
                    </ul>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                  <Accordion.Header>
                    {" "}
                    <h4>Bus Stops</h4>
                  </Accordion.Header>
                  <Accordion.Body>
                    <ul>
                      <li>
                        SSS1: <span>00000</span>
                      </li>
                      <li>
                        SSS2:<span>00000</span>
                      </li>
                      <li>
                        SSS3:<span>00000</span>
                      </li>
                    </ul>
                    <p>Other fees and registrations:</p>
                    <ul>
                      <li>
                        Senior WAEC: <span>00000</span>
                      </li>
                      <li>
                        NECO:<span>00000</span>
                      </li>
                      <li>
                        JAMB:<span>00000</span>
                      </li>
                      <li>
                        GCE<span>00000</span>
                      </li>
                    </ul>
                  </Accordion.Body>
                </Accordion.Item>{" "}
                <Accordion.Item eventKey="3">
                  <Accordion.Header>
                    {" "}
                    <h4>Pricing</h4>
                  </Accordion.Header>
                  <Accordion.Body>
                    <ul>
                      <li>
                        SSS1: <span>00000</span>
                      </li>
                      <li>
                        SSS2:<span>00000</span>
                      </li>
                      <li>
                        SSS3:<span>00000</span>
                      </li>
                    </ul>
                    <p>Other fees and registrations:</p>
                    <ul>
                      <li>
                        Senior WAEC: <span>00000</span>
                      </li>
                      <li>
                        NECO:<span>00000</span>
                      </li>
                      <li>
                        JAMB:<span>00000</span>
                      </li>
                      <li>
                        GCE<span>00000</span>
                      </li>
                    </ul>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </div>
          </div>{" "}
          <div className="d-md-flex mt-5">
            {" "}
            <div className="col-md-6 mt-5" style={{ paddingRight: "20px" }}>
              <h4> Boarding Fees & Requirements</h4>
              <Accordion defaultActiveKey="0">
                <Accordion.Item eventKey="0">
                  <Accordion.Header>
                    <h4>Fees</h4>
                  </Accordion.Header>
                  <Accordion.Body>
                    <ul>
                      <li>
                        JSS1:<span>00000</span>
                      </li>
                      <li>
                        JSS1:<span>00000</span>
                      </li>
                      <li>
                        JSS3:<span>00000</span>
                      </li>
                    </ul>
                    <p>Other fees and registrations:</p>
                    <ul>
                      <li>Junior WAEC:000000</li>
                    </ul>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                  <Accordion.Header>
                    {" "}
                    <h4>Requirements</h4>
                  </Accordion.Header>
                  <Accordion.Body>
                    <ul>
                      <li>
                        SSS1: <span>00000</span>
                      </li>
                      <li>
                        SSS2:<span>00000</span>
                      </li>
                      <li>
                        SSS3:<span>00000</span>
                      </li>
                    </ul>
                    <p>Other fees and registrations:</p>
                    <ul>
                      <li>
                        Senior WAEC: <span>00000</span>
                      </li>
                      <li>
                        NECO:<span>00000</span>
                      </li>
                      <li>
                        JAMB:<span>00000</span>
                      </li>
                      <li>
                        GCE<span>00000</span>
                      </li>
                    </ul>
                  </Accordion.Body>
                </Accordion.Item>{" "}
                <Accordion.Item eventKey="3">
                  <Accordion.Header>
                    {" "}
                    <h4>Rules</h4>
                  </Accordion.Header>
                  <Accordion.Body>
                    <ul>
                      <li>
                        SSS1: <span>00000</span>
                      </li>
                      <li>
                        SSS2:<span>00000</span>
                      </li>
                      <li>
                        SSS3:<span>00000</span>
                      </li>
                    </ul>
                    <p>Other fees and registrations:</p>
                    <ul>
                      <li>
                        Senior WAEC: <span>00000</span>
                      </li>
                      <li>
                        NECO:<span>00000</span>
                      </li>
                      <li>
                        JAMB:<span>00000</span>
                      </li>
                      <li>
                        GCE<span>00000</span>
                      </li>
                    </ul>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </div>
            <div className="col-md-6 mt-5">
              <img src={Boarding} width="100%" />
            </div>
          </div>
        </div>
        <div className="sunset">
          <center>
            <div className="col-md-5">
              <h1>
                Begin <span style={{ color: "#de7c0d" }}>Your Journey</span>
              </h1>
              <p style={{ color: "#fff" }}>WE CAN'T WAIT TO HAVE YOU.</p>
              <button>Apply Today </button>
            </div>
          </center>
        </div>
      </div>
    </>
  );
};
