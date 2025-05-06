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

import { CommonHeading2 } from "./common/CommonHeading2";
import Banner2 from "./common/Banner2";
import { ProfileCards } from "./common/ProfileCards";

const CourseDetailPage = () => {
  const [openId, setOpenId] = useState<string | null>(null);
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [showFullFacultyText, setShowFullFacultyText] = useState(false);
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
      <Banner2 title="IAS Foundation Course (Prelims + Mains) – 12 Months">
        <Link href={"/"}>Home</Link>
        <span>{">"}</span>
        <Link href={"/course"}>Courses</Link>
        <span>{">"}</span>
        <p className="text-primaryred">Course Details</p>
      </Banner2>

      {/* Course Content Container */}
      <div className="screen w-full flex flex-col md:flex-row gap-8">
        {/* Left Content Column */}
        <div className="w-full flex flex-col padding-bx">
          {/* Course Overview */}
          <div className="flex flex-col lg:flex-row gap-5">
            <div className="space-y-10 w-full lg:w-2/3">
              <CommonHeading2
                title="Course Overview"
                desc="This IAS Foundation Course is designed to provide complete
                      preparation for the UPSC Civil Services Examination
                      (Prelims + Mains). Covering the full syllabus from NCERT
                      basics to advanced topics, this course ensures that
                      aspirants build a strong conceptual foundation."
              />

              {/* Course Features & Benefits */}
              <section className="w-full space-y-10">
                <div>
                  <h2 className="text-xl md:text-2xl font-semibold text-gray-800">
                    Course Features & Benefits
                  </h2>
                  <div className="mt-4 grid grid-cols-1 gap-4">
                    <div className="flex items-start gap-2">
                      <div className="h-6 w-6 flex-shrink-0 flex items-center justify-center rounded-full bg-[#FF7B07]">
                        <FaCheck className="text-white flex-shrink-0" />
                      </div>
                      <p className="text-gray-700">Live Interactive Classes</p>
                    </div>
                    <div className="flex items-start gap-2">
                      <div className="h-6 w-6 flex-shrink-0 flex items-center justify-center rounded-full bg-[#FF7B07]">
                        <FaCheck className="text-white flex-shrink-0" />
                      </div>
                      <p className="text-gray-700">
                        Complete NCERT & Standard Book Coverage
                      </p>
                    </div>
                    <div className="flex items-start gap-2">
                      <div className="h-6 w-6 flex-shrink-0 flex items-center justify-center rounded-full bg-[#FF7B07]">
                        <FaCheck className="text-white flex-shrink-0" />
                      </div>
                      <p className="text-gray-700">
                        Daily Answer Writing & Essay Practice
                      </p>
                    </div>
                    <div className="flex items-start gap-2">
                      <div className="h-6 w-6 flex-shrink-0 flex items-center justify-center rounded-full bg-[#FF7B07]">
                        <FaCheck className="text-white flex-shrink-0" />
                      </div>
                      <p className="text-gray-700">
                        Prelims & Mains Test Series
                      </p>
                    </div>
                    <div className="flex items-start gap-2">
                      <div className="h-6 w-6 flex-shrink-0 flex items-center justify-center rounded-full bg-[#FF7B07]">
                        <FaCheck className="text-white flex-shrink-0" />
                      </div>
                      <p className="text-gray-700">
                        Personalized Mentorship & Doubt Solving
                      </p>
                    </div>
                  </div>
                </div>
                <div>
                  <h2 className="text-xl md:text-2xl font-semibold text-gray-800">
                    Study Material & Resources
                  </h2>
                  <div className="mt-4 grid grid-cols-1 gap-4">
                    <div className="flex items-start gap-2">
                      <div className="h-6 w-6 flex-shrink-0 flex items-center justify-center rounded-full bg-[#FF7B07]">
                        <FaCheck className="text-white flex-shrink-0" />
                      </div>
                      <p className="text-gray-700">Live Interactive Classes</p>
                    </div>
                    <div className="flex items-start gap-2">
                      <div className="h-6 w-6 flex-shrink-0 flex items-center justify-center rounded-full bg-[#FF7B07]">
                        <FaCheck className="text-white flex-shrink-0" />
                      </div>
                      <p className="text-gray-700">
                        Complete NCERT & Standard Book Coverage
                      </p>
                    </div>
                    <div className="flex items-start gap-2">
                      <div className="h-6 w-6 flex-shrink-0 flex items-center justify-center rounded-full bg-[#FF7B07]">
                        <FaCheck className="text-white flex-shrink-0" />
                      </div>
                      <p className="text-gray-700">
                        Daily Answer Writing & Essay Practice
                      </p>
                    </div>
                    <div className="flex items-start gap-2">
                      <div className="h-6 w-6 flex-shrink-0 flex items-center justify-center rounded-full bg-[#FF7B07]">
                        <FaCheck className="text-white flex-shrink-0" />
                      </div>
                      <p className="text-gray-700">
                        Prelims & Mains Test Series
                      </p>
                    </div>
                    <div className="flex items-start gap-2">
                      <div className="h-6 w-6 flex-shrink-0 flex items-center justify-center rounded-full bg-[#FF7B07]">
                        <FaCheck className="text-white flex-shrink-0" />
                      </div>
                      <p className="text-gray-700">
                        Personalized Mentorship & Doubt Solving
                      </p>
                    </div>
                  </div>
                </div>
              </section>
            </div>
            <div className="w-full lg:w-1/3 mt-8 lg:mt-0">
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

          {/* Faculty Section */}
          <div className="mx-auto w-max padding-b">
            <CommonHeading2 title="Faculty" />
          </div>
          <ProfileCards />

          <p className="text-base md:text-xl text-center mt-12 md:mt-6 px-4 md:px-0">
            Prof. <span className="text-primaryred">Rajiv Bansal</span> is a
            renowned faculty for Indian Polity & Governance, with over 10 years
            of experience in mentoring UPSC aspirants. A Ph.D. in Public
            Administration from JNU, he has been a guiding force for many
            successful IAS officers.
            <span
              className={`block overflow-hidden transition-all duration-500 ease-in-out ${
                showFullFacultyText
                  ? "max-h-[500px] opacity-100 mt-1"
                  : "max-h-0 opacity-0"
              }`}
            >
              {" "}
              Known for his concept-based teaching and exam-oriented approach,
              he simplifies complex constitutional topics and governance issues
              with real-world examples. He has authored several books on Indian
              Polity that are widely recommended for UPSC preparation. His
              lectures are known for clarity and depth, making him one of the
              most sought-after faculty members at our institute. Students
              particularly appreciate his ability to connect theoretical
              concepts with current affairs and case studies.
            </span>
          </p>
          <div className="text-center mt-2">
            <button
              onClick={() => setShowFullFacultyText(!showFullFacultyText)}
              className="text-[#FF7B07] hover:underline focus:outline-none transition-colors duration-300 flex items-center gap-1 mx-auto"
            >
              {showFullFacultyText ? "Show Less" : "Show More"}
              <FaChevronDown
                className={`w-3 h-3 transition-transform ${
                  showFullFacultyText ? "rotate-180" : ""
                }`}
              />
            </button>
          </div>
        </div>
      </div>

      {/* Course Content Section */}
      <div className="padding-bx">
        <div className="screen space-y-2">
          <div className="mx-auto w-max">
            <CommonHeading2 title="Course Content" />
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

      {/* Related Courses Section */}
      <div className="relative padding-bx">
        <div className="mx-auto w-max">
          <CommonHeading2 title="Related Courses" />
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
              <div className=" transform transition-transform hover:scale-[1.02] duration-300">
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

      <div className="padding-bx">
        <div className="screen space-y-2">
          <div className="mx-auto w-max">
            <CommonHeading2 title="Frequently Asked Questions (FAQs)" />
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
