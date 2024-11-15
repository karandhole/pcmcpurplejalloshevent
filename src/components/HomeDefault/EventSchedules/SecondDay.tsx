"use client";

import React from "react";
import Link from "next/link";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";
import Image from "next/image";

const SecondDay: React.FC = () => {
  return (
    <>
      <Accordion>
        <AccordionItem>
          <AccordionItemHeading>
            <AccordionItemButton>
              <div className="author">
                <Image
                  src="/images/dummy images.png"
                  title="ZXR"
                  alt="Author"
                  width={150}
                  height={150}
                />
              </div>

              <div className="schedule-info">
                <h3>
                  Introduction to prejudice, stereotyping, microaggressions
                </h3>

                <ul>
                  <li>
                    <i className="icofont-user-suited"></i> By{" "}
                    <span>PCMCs</span> Director
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
            Our journey began with a simple goal: to uplift those in need and to advocate for the unheard. Today, we stand as a beacon of hope, working tirelessly to transform lives through education, healthcare, and empowerment initiatives.
             Through every project, partnership, and outreach effort, we continue our mission to build a better, brighter future for all
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
                  title="PQR"
                  alt="Author"
                  width={150}
                  height={150}
                />
                <Image
                  src="/images/dummy images.png"
                  title="RTR"
                  alt="Author"
                  width={150}
                  height={150}
                />
                <Image
                  src="/images/img1.png"
                  title="BCD"
                  alt="Author"
                  width={150}
                  height={150}
                />
              </div>

              <div className="schedule-info">
                <h3>Mental health within various cultures and identities</h3>

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
            Our journey began with a simple goal: to uplift those in need and to advocate for the unheard. Today, we stand as a beacon of hope, working tirelessly to transform lives through education, healthcare, and empowerment initiatives.
             Through every project, partnership, and outreach effort, we continue our mission to build a better, brighter future for all
            </p>

            <div className="row h-100 align-items-center">
              <div className="col-lg-6 col-md-7">
                <div className="location">
                  <b>Location:</b> PCMC Divyang BHavan {" "}
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
                  src="/images/dummy images.png"
                  title="ABC"
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
              </div>

              <div className="schedule-info">
                <h3>Working with Distressed Students</h3>

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
            Our journey began with a simple goal: to uplift those in need and to advocate for the unheard. Today,
           we stand as a beacon of hope, working tirelessly to transform lives through education, healthcare, and empowerment initiatives. Through every project, 
            partnership, and outreach effort, we continue our mission to build a better, brighter future for all
            </p>

            <div className="row h-100 align-items-center">
              <div className="col-lg-6 col-md-7">
                <div className="location">
                  <b>Location:</b> PCMC Divynag Bhavan{" "}
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

export default SecondDay;
