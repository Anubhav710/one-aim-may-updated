"use client";
import React, { useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  FaCheck,
  FaPhone,
  FaChevronDown,
  FaChevronLeft,
  FaClipboardList,
  FaChevronRight,
} from "react-icons/fa";
import {
  FaLinkedin,
  FaSquareXTwitter,
  FaFacebook,
  FaInstagram,
} from "react-icons/fa6";

import FAQ from "./common/FAQ";
import CourseContentAccordion from "./common/CourseContentAccordion";
import Banner from "./common/Banner";
import DemoClass from "@/app/(root)/course/components/DemoClass";
import CourseEnrollCard from "./CourseEnrollCard";
import CommonHeading from "./ui/CommonHeading";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Navigation, Pagination } from "swiper/modules";
import Courses from "@/app/(root)/course/page";
import {
  BiBook,
  BiFile,
  BiQuestionMark,
  BiUser,
  BiVideo,
} from "react-icons/bi";
import FeaturedCard from "./ui/FeaturedCard";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import Footer from "./Footer";

const CourseDetailPage = () => {
  const [openId, setOpenId] = useState<string | null>(null);
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const contentRefs = useRef<(HTMLDivElement | null)[]>([]);

  // Data
  const courses = [
    {
      course: "Prelims Master Program",
      price: "₹ 36500",
      description:
        "This module will contain the full course for UPSC/IAS/CSE foundation EXAM that will be held in year 2025-26.",
      features: [
        {
          name: "2000 Video Lectures",
          icon: <BiVideo className="h-7 w-7 text-primaryred" />,
        },
        {
          name: "Subjective Test Series",
          icon: <FaClipboardList className="h-7 w-7 text-primaryred" />,
        },
        {
          name: "Previous Years Question Papers",
          icon: <BiBook className="h-7 w-7 text-primaryred" />,
        },
        {
          name: "100000 Questions",
          icon: <BiQuestionMark className="h-7 w-7 text-primaryred" />,
        },
        {
          name: "Virtual mentorship",
          icon: <BiUser className="h-7 w-7 text-primaryred" />,
        },
      ],
    },
    {
      course: "IAS/RAS Foundation Batch",
      price: "₹ 24000",
      description:
        "This module will contain the full course for UPSC/RPSC PRELIMINARY EXAMs that will be held in year 2025-26.",
      features: [
        {
          name: "Video Lectures ",
          icon: <BiVideo className="h-7 w-7 text-primaryred" />,
        },
        {
          name: "Subjective Test Series",
          icon: <FaClipboardList className="h-7 w-7 text-primaryred" />,
        },
        {
          name: "Weekly Real Time Full Tests",
          icon: <BiFile className="h-7 w-7 text-primaryred" />,
        },
        {
          name: "Previous Years Question Papers",
          icon: <BiBook className="h-7 w-7 text-primaryred" />,
        },
        {
          name: "Virtual mentorship",
          icon: <BiUser className="h-7 w-7 text-primaryred" />,
        },
      ],
    },
    {
      course: "Test Series for UPSC",
      price: "₹ 5000",
      description:
        "This module will contain full-length tests (1 lakh questions).",
      features: [
        {
          name: "Subjective Test Series",
          icon: <FaClipboardList className="h-7 w-7 text-primaryred" />,
        },
        {
          name: "Weekly Real Time Full Tests",
          icon: <BiFile className="h-7 w-7 text-primaryred" />,
        },
      ],
    },
    {
      course: "Pdf Notes for Prelims",
      price: "₹ 10000",
      description:
        "This module will contain all subject PDFs for UPSC/IAS/CSE PRELIMINARY EXAM that will be held in year 2025-26.",
      features: [
        {
          name: "All Subject PDFs",
          icon: <BiFile className="h-7 w-7 text-primaryred" />,
        },
      ],
    },
  ];

  const toggleFAQ = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  const toggleFAQIndex = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  // Sample demo class videos
  const demoVideos = [
    {
      id: "v1",
      title: "Introduction to UPSC Exam Structure",
      thumbnail: "/images/course/demo-class.jpg",
      videoUrl: "#",
    },
    {
      id: "v2",
      title: "Indian Polity Overview",
      thumbnail: "/images/course/demo-thumb-1.jpg",
      videoUrl: "#",
    },
    {
      id: "v3",
      title: "Geography for UPSC",
      thumbnail: "/images/course/demo-thumb-2.jpg",
      videoUrl: "#",
    },
    {
      id: "v4",
      title: "Indian Economy Basics",
      thumbnail: "/images/course/demo-thumb-3.jpg",
      videoUrl: "#",
    },
  ];

  // Sample course modules
  const courseModules = [
    {
      id: "m1",
      title: "Polity Module 1 - Indian Constitution (NCERT)",
      contents: [
        {
          title: "Constitutional Framework",
          duration: "3 hours",
          subItems: [
            "Historical Background",
            "Constituent Assembly",
            "Salient Features of Indian Constitution",
          ],
        },
        {
          title: "Fundamental Rights",
          duration: "2.5 hours",
          subItems: [
            "Article 12-35",
            "Important Supreme Court Judgments",
            "Recent Developments",
          ],
        },
      ],
    },
    {
      id: "m2",
      title: "Geography – Indian & World Geography (NCERT)",
      contents: [
        {
          title: "Physical Geography of India",
          duration: "4 hours",
          subItems: ["Physiography", "Drainage System", "Climate"],
        },
        {
          title: "Human and Economic Geography",
          duration: "3 hours",
          subItems: [
            "Population Distribution",
            "Urbanization",
            "Industries and Agriculture",
          ],
        },
      ],
    },
    {
      id: "m3",
      title: "Economy – Indian Economy & Economic Development",
      contents: [
        {
          title: "Indian Economic Development",
          duration: "3.5 hours",
          subItems: ["Economic Reforms", "Banking System", "Fiscal Policy"],
        },
      ],
    },
    {
      id: "m4",
      title: "History – Ancient, Medieval & Modern History (NCERT)",
      contents: [
        {
          title: "Ancient Indian History",
          duration: "4 hours",
          subItems: [
            "Indus Valley Civilization",
            "Vedic Period",
            "Mauryan and Gupta Empire",
          ],
        },
      ],
    },
    {
      id: "m5",
      title: "Science & Tech – Environment, Science & Technology",
      contents: [
        {
          title: "Environmental Issues",
          duration: "2 hours",
          subItems: [
            "Climate Change",
            "Biodiversity Conservation",
            "Pollution Control",
          ],
        },
      ],
    },
    {
      id: "m6",
      title: "Current Affairs – Prelims + Mains Integrated (CSAT)",
      contents: [
        {
          title: "Current Affairs Framework",
          duration: "3 hours",
          subItems: [
            "Annual Compilation",
            "Monthly Current Affairs",
            "Weekly Updates",
          ],
        },
      ],
    },
  ];

  type FAQ = {
    question: string;
    answer: string;
  };

  const faqs: FAQ[] = [
    {
      question: "What is UPSC CSE, and who conducts it?",
      answer:
        "UPSC CSE (Civil Services Examination) is one of the toughest competitive exams in India, conducted by the Union Public Service Commission (UPSC) to recruit officers for IAS, IPS, IFS, and other civil services.",
    },
    {
      question: "What courses do you offer for UPSC preparation?",
      answer:
        "We offer a variety of courses covering Prelims, Mains, and Interview preparation with expert guidance.",
    },
    {
      question: "Who are the faculty members?",
      answer:
        "Our faculty members include experienced educators and retired civil servants with years of expertise.",
    },
    {
      question: "Are your courses available in both Hindi & English?",
      answer:
        "Yes, we offer courses in both Hindi and English to cater to students from diverse backgrounds.",
    },
    {
      question: "How can I enroll in a course?",
      answer:
        "You can enroll through our website by selecting the desired course and completing the registration process.",
    },
  ];

  return (
    <div className="flex flex-col w-full bg-gradient-to-b from-[#FFE5E5] via-[#FFEBD9] to-[#FFF5EE]">
      {/* Course Title Banner */}
      {/* <div className="w-full bg-pink-50 bg-opacity-30 py-8 px-4 md:px-12 text-center relative">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-2xl md:text-3xl font-bold text-red-800">
            IAS Foundation Course (Prelims + Mains) - 12 Months
          </h1>
          <p className="text-sm text-gray-600 mt-2">
            <span className="font-medium">Start Date: </span>January 15th, 2025
          </p>
        </div>
      </div> */}
      <Banner title="IAS Foundation Course (Prelims + Mains) – 12 Months">
        <Link href={"/"}>Home</Link>
        <span>{">"}</span>
        <Link href={"/course"}>Courses</Link>
        <span>{">"}</span>
        <p className="text-primaryred">Course Details</p>
      </Banner>

      {/* Course Content Container */}
      <div className="screen w-full px-4 py-8 flex flex-col md:flex-row gap-8">
        {/* Left Content Column */}
        <div className="w-full  flex flex-col gap-10">
          {/* Course Overview */}
          <div className="flex gap-x-5">
            <div className="space-y-10">
              <section className="w-full flex ">
                <div>
                  <h2 className="text-4xl font-semibold text-primaryred">
                    Course Overview
                  </h2>
                  <div className="mt-4">
                    <p className="text-gray-700">
                      This IAS Foundation Course is designed to provide complete
                      preparation for the UPSC Civil Services Examination
                      (Prelims + Mains). Covering the full syllabus from NCERT
                      basics to advanced topics, this course ensures that
                      aspirants build a strong conceptual foundation.
                    </p>
                  </div>
                </div>
              </section>

              {/* Course Features & Benefits */}
              <section className="w-full space-y-10">
                <div>
                  <h2 className="text-2xl font-semibold text-gray-800">
                    Course Features & Benefits
                  </h2>
                  <div className="mt-4 grid grid-cols-1  gap-4">
                    <div className="flex items-start gap-2">
                      <div className="h-6 w-6 flex items-center justify-center rounded-full bg-[#FF7B07]">
                        <FaCheck className="text-white  flex-shrink-0" />
                      </div>
                      <p className="text-gray-700">Live Interactive Classes</p>
                    </div>
                    <div className="flex items-start gap-2">
                      <div className="h-6 w-6 flex items-center justify-center rounded-full bg-[#FF7B07]">
                        <FaCheck className="text-white  flex-shrink-0" />
                      </div>
                      <p className="text-gray-700">
                        Complete NCERT & Standard Book Coverage
                      </p>
                    </div>
                    <div className="flex items-start gap-2">
                      <div className="h-6 w-6 flex items-center justify-center rounded-full bg-[#FF7B07]">
                        <FaCheck className="text-white  flex-shrink-0" />
                      </div>
                      <p className="text-gray-700">
                        Daily Answer Writing & Essay Practice
                      </p>
                    </div>
                    <div className="flex items-start gap-2">
                      <div className="h-6 w-6 flex items-center justify-center rounded-full bg-[#FF7B07]">
                        <FaCheck className="text-white  flex-shrink-0" />
                      </div>
                      <p className="text-gray-700">
                        Prelims & Mains Test Series
                      </p>
                    </div>
                    <div className="flex items-start gap-2">
                      <div className="h-6 w-6 flex items-center justify-center rounded-full bg-[#FF7B07]">
                        <FaCheck className="text-white  flex-shrink-0" />
                      </div>
                      <p className="text-gray-700">
                        Personalized Mentorship & Doubt Solving
                      </p>
                    </div>
                  </div>
                </div>
                <div>
                  <h2 className="text-2xl font-semibold text-gray-800">
                    Study Material & Resources
                  </h2>
                  <div className="mt-4 grid grid-cols-1  gap-4">
                    <div className="flex items-start gap-2">
                      <div className="h-6 w-6 flex items-center justify-center rounded-full bg-[#FF7B07]">
                        <FaCheck className="text-white  flex-shrink-0" />
                      </div>
                      <p className="text-gray-700">Live Interactive Classes</p>
                    </div>
                    <div className="flex items-start gap-2">
                      <div className="h-6 w-6 flex items-center justify-center rounded-full bg-[#FF7B07]">
                        <FaCheck className="text-white  flex-shrink-0" />
                      </div>
                      <p className="text-gray-700">
                        Complete NCERT & Standard Book Coverage
                      </p>
                    </div>
                    <div className="flex items-start gap-2">
                      <div className="h-6 w-6 flex items-center justify-center rounded-full bg-[#FF7B07]">
                        <FaCheck className="text-white  flex-shrink-0" />
                      </div>
                      <p className="text-gray-700">
                        Daily Answer Writing & Essay Practice
                      </p>
                    </div>
                    <div className="flex items-start gap-2">
                      <div className="h-6 w-6 flex items-center justify-center rounded-full bg-[#FF7B07]">
                        <FaCheck className="text-white  flex-shrink-0" />
                      </div>
                      <p className="text-gray-700">
                        Prelims & Mains Test Series
                      </p>
                    </div>
                    <div className="flex items-start gap-2">
                      <div className="h-6 w-6 flex items-center justify-center rounded-full bg-[#FF7B07]">
                        <FaCheck className="text-white  flex-shrink-0" />
                      </div>
                      <p className="text-gray-700">
                        Personalized Mentorship & Doubt Solving
                      </p>
                    </div>
                  </div>
                </div>
              </section>
            </div>
            <div className="w-full">
              <CourseEnrollCard
                title="IAS Foundation Course (Prelims + Mains) - 12 Months"
                instructors={["Sujjan Sharma (Ex-IAS)"]}
                price={960}
                languages={["English", "Hindi"]}
                features={[
                  "PDFs, Notes, Mock Tests",
                  "Online (Live + Recorded)",
                ]}
                enrollmentDeadline="22 February, 2025"
                contactPhone="+1 (123) 456-7890"
                contactAddress="123 Success Street, City, Country"
              />
            </div>
          </div>

          {/* Demo Class */}
          <DemoClass />

          {/* Foundation Course */}

          <div className="mx-auto w-max">
            <CommonHeading title="Faculty" />
          </div>
          <div className=" relative   flex items-center">
            <div>
              <div className="h-[22rem] w-[22rem]  rounded-full overflow-hidden z-30 relative ">
                <Image
                  src="/images/team/Dikshakashyap.png"
                  alt="faculty"
                  width={1200}
                  height={1200}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="bg-[#DC8940] w-[80%] gap-y-12 left-48 rounded-r-2xl pl-40  space-y-5 flex items-center absolute h-[80%] ">
              <div className="w-max space-y-2 pl-5">
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
          <p className="text-xl text-center">
            Prof. <span className="text-primaryred">Rajiv Bansal</span> is a
            renowned faculty for Indian Polity & Governance, with over 10 years
            of experience in mentoring UPSC aspirants. A Ph.D. in Public
            Administration from JNU, he has been a guiding force for many
            successful IAS officers. Known for his concept-based teaching and
            exam-oriented approach, he simplifies complex constitutional topics
            and governance issues with real-world examples.
          </p>
          <Link href={"/"} className="text-center text-[#FF7B07]">
            Show More
          </Link>
        </div>

        {/* Right Sidebar */}
      </div>
      <div>
        <div className="screen space-y-2">
          <div className="mx-auto w-max">
            <CommonHeading title="Course Content" />
          </div>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white px-4 rounded-lg">
                <button
                  onClick={() => toggleFAQIndex(index)}
                  className="w-full flex justify-between items-center py-4 text-lg font-medium text-orange-500"
                >
                  {faq.question}
                  <FaChevronDown
                    className={`transition-transform transform ${
                      openIndex === index ? "rotate-180" : "rotate-0"
                    }`}
                  />
                </button>
                <div
                  ref={(el) => {
                    contentRefs.current[index] = el;
                  }}
                  className="overflow-hidden"
                  style={{
                    height: openIndex === index ? "auto" : 0,
                    opacity: openIndex === index ? 1 : 0,
                  }}
                >
                  <div className="p-4 text-gray-700">{faq.answer}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="relative px-12 max-sm:px-7 ">
        {/* Custom navigation buttons */}
        <div className="mx-auto w-max">
          <CommonHeading title="Related Courses" />
        </div>
        <button
          className="custom-prev-button group absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white w-10 h-10 max-sm:w-7 max-sm:h-7 rounded-full shadow-lg flex items-center justify-center hover:bg-primaryred hover:text-white transition-colors duration-300"
          aria-label="Previous slide"
        >
          <FaChevronLeft className="text-primaryred group-hover:text-white" />
        </button>

        <Swiper
          modules={[Navigation, Pagination, Autoplay, EffectFade]}
          spaceBetween={20}
          slidesPerView={3}
          grabCursor={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          pagination={{
            clickable: true,
            el: ".swiper-pagination",
            bulletClass: "swiper-pagination-bullet",
            bulletActiveClass: "swiper-pagination-bullet-active",
            type: "bullets",
          }}
          navigation={{
            nextEl: ".custom-next-button",
            prevEl: ".custom-prev-button",
          }}
          breakpoints={{
            320: {
              slidesPerView: 1,
              spaceBetween: 2,
            },
            480: {
              slidesPerView: 2,
              spaceBetween: 10,
            },
            640: {
              slidesPerView: 2,
              spaceBetween: 10,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 10,
            },
            991: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
            1200: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
          }}
          style={{
            padding: "0px 10px 50px 10px",
          }}
        >
          {courses.map((course, index) => (
            <SwiperSlide key={index}>
              <div className="h-[80vh] transform transition-transform hover:scale-[1.02] duration-300">
                <FeaturedCard
                  title={course.course}
                  description={course.description}
                  features={course.features}
                  price={course.price}
                  href="/course"
                />
              </div>
            </SwiperSlide>
          ))}

          <div className="swiper-pagination"></div>
        </Swiper>
        {/* Next Button  */}
        <button
          className="custom-next-button group absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white w-10 h-10 max-sm:w-7 max-sm:h-7 rounded-full shadow-lg flex items-center justify-center hover:bg-primaryred hover:text-white transition-colors duration-300"
          aria-label="Next slide"
        >
          <FaChevronRight className="text-primaryred group-hover:text-white" />
        </button>
      </div>

      <div>
        <div className="screen space-y-2">
          <div className="mx-auto w-max">
            <CommonHeading title="Frequently Asked Questions (FAQs)" />
          </div>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white px-4 rounded-lg">
                <button
                  onClick={() => toggleFAQIndex(index)}
                  className="w-full flex justify-between items-center py-4 text-lg font-medium text-orange-500"
                >
                  {faq.question}
                  <FaChevronDown
                    className={`transition-transform transform ${
                      openIndex === index ? "rotate-180" : "rotate-0"
                    }`}
                  />
                </button>
                <div
                  ref={(el) => {
                    contentRefs.current[index] = el;
                  }}
                  className="overflow-hidden"
                  style={{
                    height: openIndex === index ? "auto" : 0,
                    opacity: openIndex === index ? 1 : 0,
                  }}
                >
                  <div className="p-4 text-gray-700">{faq.answer}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetailPage;
