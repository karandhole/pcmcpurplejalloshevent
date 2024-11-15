"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";

const ThirdDay: React.FC = () => {
  return (
    <>
      <Accordion>
        <AccordionItem>
          <AccordionItemHeading>
            <AccordionItemButton>
              <div className="author">
                <Image
                  src="/images/dummy images.png"
                  title="Steven Smith"
                  alt="Author"
                  width={150}
                  height={150}
                />
              </div>

              <div className="schedule-info">
                <h3>Managing Homesickness, Home for the Holidays</h3>

                <ul>
                  <li>
                    <i className="icofont-user-suited"></i> By{" "}
                    <span>PCMC</span> Manager
                  </li>
                  <li>
                    <i className="icofont-wall-clock"></i> 13:00AM - 20:00PM
                  </li>
                </ul>
              </div>
            </AccordionItemButton>
          </AccordionItemHeading>

          <AccordionItemPanel>
            <p>
            our mission is to make a difference, one step at a time. From humble beginnings, we have committed ourselves to creating meaningful change in communities worldwide. We believe in the strength of unity,
             compassion, and purpose, values that guide us as we work to address pressing social issues.
            </p>

            <div className="row h-100 align-items-center">
              <div className="col-lg-6 col-md-7">
                <div className="location">
                  <b>Location:</b> PCMC Divyang Bhavan{" "}
                  <span>India</span>
                </div>
              </div>

              <div className="col-lg-6 col-md-5 text-right">
                <Link href="#" className="btn btn-primary">
                  View Details
                </Link>
              </div>
            </div>
          </AccordionItemPanel>
        </AccordionItem>

        <AccordionItem>
          <AccordionItemHeading>
            <AccordionItemButton>
              <div className="author author-multi">
                <Image
                  src="/images/img1.png"
                  title="ABC"
                  alt="Author"
                  width={150}
                  height={150}
                />
                <Image
                  src="/images/img2.png"
                  title="XYZ"
                  alt="Author"
                  width={150}
                  height={150}
                />
                <Image
                  src="/images/img1.png"
                  title="PQR"
                  alt="Author"
                  width={150}
                  height={150}
                />
                <Image
                  src="/images/img2.png"
                  title="BCD"
                  alt="Author"
                  width={150}
                  height={150}
                />
              </div>

              <div className="schedule-info">
                <h3>Depression & Alcohol Screening days</h3>

                <ul>
                  <li>
                    <i className="icofont-user-suited"></i> By{" "}
                    <span>PCMC</span> India
                  </li>
                  <li>
                    <i className="icofont-wall-clock"></i> 13:00AM - 20:00PM
                  </li>
                </ul>
              </div>
            </AccordionItemButton>
          </AccordionItemHeading>

          <AccordionItemPanel>
            <p>
            our mission is to make a difference, one step at a time. From humble beginnings, we have committed ourselves to creating meaningful change in communities worldwide. We believe in the strength of unity,
             compassion, and purpose, values that guide us as we work to address pressing social issues.
            </p>

            <div className="row h-100 align-items-center">
              <div className="col-lg-6 col-md-7">
                <div className="location">
                  <b>Location:</b> PCMC Divynag Bhavan,{" "}
                  <span>India</span>
                </div>
              </div>

              <div className="col-lg-6 col-md-5 text-right">
                <Link href="#" className="btn btn-primary">
                  View Details
                </Link>
              </div>
            </div>
          </AccordionItemPanel>
        </AccordionItem>

        <AccordionItem>
          <AccordionItemHeading>
            <AccordionItemButton>
              <div className="author author-multi">
                <Image
                  src="/images/img1.png"
                  title="PQR"
                  alt="Author"
                  width={150}
                  height={150}
                />
                <Image
                  src="/images/img2.png"
                  title="ABC"
                  alt="Author"
                  width={150}
                  height={150}
                />
              </div>

              <div className="schedule-info">
                <h3>Building resilience/Bounce Back</h3>

                <ul>
                  <li>
                    <i className="icofont-user-suited"></i> By{" "}
                    <span>PCMC</span> India
                  </li>
                  <li>
                    <i className="icofont-wall-clock"></i> 13:00AM - 20:00PM
                  </li>
                </ul>
              </div>
            </AccordionItemButton>
          </AccordionItemHeading>

          <AccordionItemPanel>
            <p>
            our mission is to make a difference, one step at a time. From humble beginnings, we have committed ourselves to creating meaningful change in communities worldwide. We believe in the strength of unity,
             compassion, and purpose, values that guide us as we work to address pressing social issues.
            </p>

            <div className="row h-100 align-items-center">
              <div className="col-lg-6 col-md-7">
                <div className="location">
                  <b>Location:</b> Hall 1, Building C , King Street ,{" "}
                  <span>India</span>
                </div>
              </div>

              <div className="col-lg-6 col-md-5 text-right">
                <Link href="#" className="btn btn-primary">
                  View Details
                </Link>
              </div>
            </div>
          </AccordionItemPanel>
        </AccordionItem>

        <AccordionItem>
          <AccordionItemHeading>
            <AccordionItemButton>
              <div className="author author-multi">
                <Image
                  src="/images/img2.png"
                  title="PWD"
                  alt="Author"
                  width={150}
                  height={150}
                />
                <Image
                  src="/images/img1.png"
                  title="XYZ"
                  alt="Author"
                  width={150}
                  height={150}
                />
                <Image
                  src="/images/img2.png"
                  title="ABC"
                  alt="Author"
                  width={150}
                  height={150}
                />
                <Image
                  src="/images/img2.png"
                  title="RTR"
                  alt="Author"
                  width={150}
                  height={150}
                />
              </div>

              <div className="schedule-info">
                <h3>Binge drinking and drug problems</h3>

                <ul>
                  <li>
                    <i className="icofont-user-suited"></i> By{" "}
                    <span>PCMC</span> India
                  </li>
                  <li>
                    <i className="icofont-wall-clock"></i> 13:00AM - 20:00PM
                  </li>
                </ul>
              </div>
            </AccordionItemButton>
          </AccordionItemHeading>

          <AccordionItemPanel>
            <p>
            our mission is to make a difference, one step at a time. From humble beginnings, we have committed ourselves to creating meaningful change in communities worldwide. We believe in the strength of unity,
             compassion, and purpose, values that guide us as we work to address pressing social issues.
            </p>

            <div className="row h-100 align-items-center">
              <div className="col-lg-6 col-md-7">
                <div className="location">
                  <b>Location:</b> PCMC Divyang Bhavan {" "}
                  <span>India</span>
                </div>
              </div>

              <div className="col-lg-6 col-md-5 text-right">
                <Link href="#" className="btn btn-primary">
                  View Details
                </Link>
              </div>
            </div>
          </AccordionItemPanel>
        </AccordionItem>
      </Accordion>
    </>
  );
};

export default ThirdDay;
