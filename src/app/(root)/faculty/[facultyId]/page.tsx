import Banner from "@/components/common/Banner";
import BannerSec from "@/components/common/BannerSec";
import { CommonHeading2 } from "@/components/common/CommonHeading2";
import Footer from "@/components/Footer";
import Testimonials from "@/components/Testimonials";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const FacultyPage = () => {
  return (
    <div>
      <div>
        <BannerSec>
          <div className="flex gap-x-2">
            <Link href="/">Home</Link>
            <span>{">"}</span>
            <Link href="/faculty">Faculty</Link>
            <span>{">"}</span>
            <span className="text-primaryred">Faculty Details</span>
          </div>
        </BannerSec>
        <div className="flex screen">
          <div className="h-80 w-80  rounded-full relative overflow-hidden left-36">
            <Image
              src="/images/team/Dikshakashyap.png"
              alt="faculty"
              width={1200}
              height={1200}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="bg-[#DC8940] w-[70%] gap-y-12 rounded-r-2xl pl-40 my-4 space-y-5 flex items-center">
            <div className="w-max space-y-2 ">
              <div className="text-white flex gap-x-2">
                <h5 className="text-white font-semibold text-lg">
                  Designation:
                </h5>
                <p> Senior Science Instructor</p>
              </div>
              <div className="text-white flex gap-x-2">
                <h5 className="text-white font-semibold text-lg">
                  Experience:
                </h5>
                <p> 23 years</p>
              </div>
              <div className="text-white flex gap-x-2">
                <h5 className="text-white font-semibold text-lg ">
                  Qualifications:
                </h5>
                <p> M.Sc. in Botany, B.Ed.</p>
              </div>
              <div className="text-white flex gap-x-2">
                <h5 className="text-white font-semibold text-lg">
                  Specialization:
                </h5>
                <p> Science Education</p>
              </div>
              <div className="text-white flex gap-x-4 mt-4">
                <div className="flex items-center gap-x-3">
                  <Link
                    href="#"
                    aria-label="Facebook"
                    className="bg-white h-8 w-8 rounded-full flex items-center justify-center"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-[#DC8940] hover:text-gray-200"
                    >
                      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                    </svg>
                  </Link>
                  <Link
                    href="#"
                    aria-label="Twitter"
                    className="bg-white h-8 w-8 rounded-full flex items-center justify-center"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-[#DC8940] hover:text-gray-200"
                    >
                      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                    </svg>
                  </Link>
                  <Link
                    href="#"
                    aria-label="LinkedIn"
                    className="bg-white h-8 w-8 rounded-full flex items-center justify-center"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-[#DC8940] hover:text-gray-200"
                    >
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                      <rect x="2" y="9" width="4" height="12"></rect>
                      <circle cx="4" cy="4" r="2"></circle>
                    </svg>
                  </Link>
                  <Link
                    href="#"
                    aria-label="Instagram"
                    className="bg-white h-8 w-8 rounded-full flex items-center justify-center"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-[#DC8940] hover:text-gray-200"
                    >
                      <rect
                        x="2"
                        y="2"
                        width="20"
                        height="20"
                        rx="5"
                        ry="5"
                      ></rect>
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="space-y-4 screen pb-9 border-b-2 border-gray-300 padding-tx">
          <h2 className="text-primaryred heading2 relative  w-max mx-auto">
            About Me
          </h2>
          <p className="text-center text-xl leading-9">
            Mrs. Anuradha brings over two decades of teaching experience in the
            field of science. Holding a Master's degree in Botany and a Bachelor
            of Education, she has dedicated her career to fostering a deep
            understanding of scientific concepts among her students. Her
            approach combines theoretical knowledge with practical applications,
            aiming to inspire a passion for science in learners.
          </p>
        </div>
        <div className="space-y-6 padding-yx">
          <h2 className="text-primaryred heading2 relative  w-max mx-auto">
            Courses Offered
          </h2>
          <div className="flex gap-x-7 mx-auto w-max">
            <div className="  flex flex-col  px-4 py-6  items-center group space-y-4 ">
              <div className="h-16 w-16 p-2  rounded-full bg-white">
                <Image
                  src="/images/icons/work.svg"
                  alt="science"
                  width={1200}
                  height={1200}
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="text-lg w-[22ch] font-semibold text-center">
                Comprehensive Science for Competitive Exams
              </p>
            </div>
            <div className=" border-x border-x-orange flex flex-col  group px-4 py-6 items-center space-y-4 ">
              <div className="h-16 w-16 p-2  rounded-full bg-white">
                <Image
                  src="/images/icons/botany.svg"
                  alt="science"
                  width={1200}
                  height={1200}
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="text-lg w-[22ch] font-semibold text-center">
                Botany Specialization Modules
              </p>
            </div>
            <div className="flex flex-col  px-4 py-6 items-center sp groupace-y-4 ">
              <div className="h-16 w-16 p-2  rounded-full bg-white">
                <Image
                  src="/images/icons/literacy.svg"
                  alt="science"
                  width={1200}
                  height={1200}
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="text-lg w-[22ch] font-semibold text-center">
                Practical Science Workshops
              </p>
            </div>
          </div>
        </div>
        <div>
          <Testimonials />
        </div>
      </div>
    </div>
  );
};

export default FacultyPage;
