"use client";
import React, { useState, useRef, use, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  FaCheck,
  FaChevronDown,
  FaChevronLeft,
  FaClipboardList,
  FaChevronRight,
} from "react-icons/fa";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import {
  BiBook,
  BiFile,
  BiQuestionMark,
  BiUser,
  BiVideo,
} from "react-icons/bi";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import Banner2 from "@/components/common/Banner2";
import { CommonHeading2 } from "@/components/common/CommonHeading2";
import CourseEnrollCard from "@/components/CourseEnrollCard";
import { FAQ } from "@/components/common/FAQ";
import FeaturedCard from "@/components/ui/FeaturedCard";
import axios from "axios";
import { SingleCourseData } from "@/types";

const CourseDetailPage = ({
  params,
}: {
  params: Promise<{ courseId: string }>;
}) => {
  const { courseId } = use(params);

  const [courseData, setCourseData] = useState<SingleCourseData>();

  useEffect(() => {
    const courseDetail = async () => {
      const response = await axios.get<SingleCourseData>(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/courses/${courseId}`,
        {
          headers: {
            Authorization: `Bearer ${process.env.NEXT_PUBLIC_AUTH_TOKEN}`, // Use environment variable for auth token
          },
        }
      );
      const data = response.data;
      setCourseData(data);
    };
    courseDetail();
  }, []);

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
      id: "1",
      title: "GS Prelims + Mains Comprehensive Course",
      description:
        "Comprehensive preparation covering all UPSC syllabus topics with structured learning modules and regular tests.",
      duration: "12 Months",
      instructor: "Dr. Rajesh Sharma (Ex-IRS)",
      imageSrc: "/images/course/feature-course.png",
    },
    {
      id: "2",
      title: "Complete UPSC CSE Foundation Course",
      description:
        "A structured approach to building your UPSC preparation from ground up with focus on fundamentals and concept clarity.",
      duration: "10 Months",
      instructor: "Dr. Meeta Sharma",
      imageSrc: "/images/course/feature-course.png",
    },
    {
      id: "3",
      title: "Weekend Foundation Batch",
      description:
        "Perfect for working professionals, this course offers comprehensive weekend classes covering the entire UPSC syllabus.",
      duration: "14 Months",
      instructor: "Prof. Sunil Kumar",
      imageSrc: "/images/course/feature-course.png",
    },
    {
      id: "4",
      title: "Weekend Foundation Batch",
      description:
        "Perfect for working professionals, this course offers comprehensive weekend classes covering the entire UPSC syllabus.",
      duration: "14 Months",
      instructor: "Prof. Sunil Kumar",
      imageSrc: "/images/course/feature-course.png",
    },
    {
      id: "5",
      title: "Weekend Foundation Batch",
      description:
        "Perfect for working professionals, this course offers comprehensive weekend classes covering the entire UPSC syllabus.",
      duration: "14 Months",
      instructor: "Prof. Sunil Kumar",
      imageSrc: "/images/course/feature-course.png",
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
    <div className="flex flex-col w-full bg-gradient-to-b from-[#FFE5E5] via-[#FFEBD9] to-[#FFF5EE] overflow-x-hidden">
      <Banner2 title={`${courseData?.heading}`}>
        <Link href={"/"}>Home</Link>
        <span>{">"}</span>
        <Link href={"/course"}>Courses</Link>
        <span>{">"}</span>
        <p className="text-primaryred">{courseData?.slug}</p>
      </Banner2>

      {/* Course Content Container */}
      <div className=" w-full flex flex-col md:flex-row  gap-8">
        {/* Left Content Column */}
        <div className="w-full flex flex-col padding-bottom">
          {/* Course Overview */}
          <div className="flex flex-col lg:flex-row gap-5 screen  padding-bx">
            <div className="space-y-10 w-full lg:w-2/3">
              <CommonHeading2
                title="Course Overview"
                desc={courseData?.short_description}
              />

              {/* Course Features & Benefits */}
              <section className="w-full space-y-10">
                {/* <div>
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
                </div> */}
                <div
                  className="blog-content"
                  dangerouslySetInnerHTML={{
                    __html: courseData?.content || "",
                  }}
                ></div>
              </section>
            </div>
            <div className="w-full lg:w-1/3 mt-8 lg:mt-0">
              <CourseEnrollCard
                title={`${courseData?.heading}`}
                instructors={courseData?.faculties.map((data) => data.name)}
                duration={courseData?.duration}
                question={courseData?.questions_count}
                videoLacture={courseData?.video_lectures}
                image={courseData?.featured_image_url}
                price={courseData?.price}
                languages={courseData?.language}
                timeTable={courseData?.timetable_url}
                studyMaterial={courseData?.study_material_url}
                features={[
                  "PDFs, Notes, Mock Tests",
                  "Online (Live + Recorded)",
                ]}
                enrollmentDeadline={courseData?.enrolment_deadline_date}
                contactPhone="+1 (123) 456-7890"
                contactAddress="123 Success Street, City, Country"
              />
            </div>
          </div>

          {/* Faculty Section */}
          <div className="padding-bottom pt-14">
            <div className="mdl:flex hidden ">
              <div className=" ml-28 ">
                <div className="h-[18rem] w-[18rem] rounded-full bg-white scale-150 relative left-16 overflow-hidden">
                  <Image
                    src={
                      courseData?.faculties[0]?.featured_image ||
                      "/images/team/team.png"
                    }
                    alt=""
                    width={1200}
                    height={1200}
                    className="h-full w-full object-cover object-top"
                  />
                </div>
              </div>
              <div className="w-[100%] bg-[#DC8940] py-20  pl-52 flex items-center -my-14">
                <div className="space-y-3">
                  <h1 className="text-2xl lg:text-3xl font-bold text-white">
                    {courseData?.faculties[0].name}
                  </h1>
                  <div className="text-white flex flex-col md:flex-row md:gap-x-2">
                    <h5 className="text-white font-semibold text-lg">
                      Designation:
                    </h5>
                    <p> {courseData?.faculties[0].designation}</p>
                  </div>
                  <div className="text-white flex flex-col md:flex-row md:gap-x-2">
                    <h5 className="text-white font-semibold text-lg">
                      Experience:
                    </h5>
                    <p> 23 years</p>
                  </div>
                  <div className="text-white flex flex-col md:flex-row md:gap-x-2">
                    <h5 className="text-white font-semibold text-lg ">
                      Qualifications:
                    </h5>
                    <p> M.Sc. in Botany, B.Ed.</p>
                  </div>
                  <div className="text-white flex flex-col md:flex-row md:gap-x-2">
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
            {/* For Mobile View */}
            <div className="screen mdl:hidden padding-bx">
              <div className="h-[14rem] w-[14rem] rounded-full bg-white top-7 mx-auto relative overflow-hidden">
                <Image
                  src={"/images/team/team.png"}
                  alt=""
                  width={1200}
                  height={1200}
                  className="h-full w-full object-cover object-top"
                />
              </div>
              <div className="w-full bg-[#DC8940] py-10 rounded-xl">
                <div className="space-y-2 pl-6 text-center">
                  <h1 className="text-2xl font-bold text-white">
                    Prof. Rajiv Bansal
                  </h1>
                  <div className="text-white flex flex-col  md:gap-x-2">
                    <h5 className="text-white font-semibold text-lg">
                      Designation:
                    </h5>
                    <p> Senior Science Instructor</p>
                  </div>
                  <div className="text-white flex flex-col  md:gap-x-2">
                    <h5 className="text-white font-semibold text-lg">
                      Experience:
                    </h5>
                    <p> 23 years</p>
                  </div>
                  <div className="text-white flex flex-col  md:gap-x-2">
                    <h5 className="text-white font-semibold text-lg ">
                      Qualifications:
                    </h5>
                    <p> M.Sc. in Botany, B.Ed.</p>
                  </div>
                  <div className="text-white flex flex-col  md:gap-x-2">
                    <h5 className="text-white font-semibold text-lg">
                      Specialization:
                    </h5>
                    <p> Science Education</p>
                  </div>
                  <div className="text-white  flex gap-x-4 mt-4">
                    <div className="flex items-center gap-x-3  mx-auto">
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
          </div>

          <div className="screen relative ">
            <div
              className={`w-full   absolute bottom-0 h-[60px] ${
                showFullFacultyText
                  ? "bg-transparent"
                  : "bg-gradient-to-t from-[#FFF5EE] via-[#FFECDB]/70 to-[#FFF5EE] blur-xl"
              }  left-0`}
            ></div>
            <p className="text-base md:text-xl text-center mt-12 md:mt-6 px-4 md:px-0 ">
              {courseData?.long_description.slice(0, 200)}
              <span
                className={`block overflow-hidden transition-all duration-500 ease-in-out ${
                  showFullFacultyText
                    ? "max-h-[500px] opacity-100 mt-1"
                    : "max-h-0 opacity-0"
                }`}
              >
                {" "}
                {courseData?.long_description.slice(200)}
              </span>
            </p>
            <div className="text-center mt-2 relative z-10">
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
      </div>

      {/* Course Content Section */}
      <div>
        <div className="screen padding-bx space-y-2">
          <div className="mx-auto w-max">
            <CommonHeading2 title="Course Content" />
          </div>
          <div className="space-y-4">
            {courseData?.course_course_faqs.map((faq, index) => (
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
                  className="overflow-hidden transition-all duration-300 ease-in-out"
                  style={{
                    maxHeight:
                      openIndex === index
                        ? `${contentRefs.current[index]?.scrollHeight}px`
                        : "0px",
                    opacity: openIndex === index ? 1 : 0,
                    transform:
                      openIndex === index
                        ? "translateY(0)"
                        : "translateY(-10px)",
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
      <div className="relative screen padding-bx">
        <div className="mx-auto w-max">
          <CommonHeading2 title="Related Courses" />
        </div>
        {/* Course Content Cards Swiper */}
        <div className="relative px-12 max-sm:px-7">
          <button
            className="custom-content-prev-button group absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white w-10 h-10 max-sm:w-7 max-sm:h-7 rounded-full shadow-lg flex items-center justify-center hover:bg-primaryred hover:text-white transition-colors duration-300"
            aria-label="Previous slide"
          >
            <FaChevronLeft className="text-primaryred group-hover:text-white" />
          </button>
          <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={20}
            slidesPerView={1}
            navigation={{
              nextEl: ".custom-content-next-button",
              prevEl: ".custom-content-prev-button",
            }}
            pagination={{
              clickable: true,
              el: ".swiper-pagination",
              bulletClass: "swiper-pagination-bullet",
              bulletActiveClass: "swiper-pagination-bullet-active",
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
                slidesPerView: 3,
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
            {courses.length > 0 ? (
              courses.map((course, id) => (
                <SwiperSlide key={id}>
                  <FeaturedCard buttonText="Enroll Now" href="/course/1" />
                </SwiperSlide>
              ))
            ) : (
              <SwiperSlide>
                <div className="text-center py-12 h-64 flex flex-col items-center justify-center bg-gray-50 rounded-2xl">
                  <p className="text-gray-500">
                    No courses available in this category yet.
                  </p>
                  <button className="mt-4 bg-[#c1151b] text-white px-6 py-2 rounded-full hover:bg-[#a61016] transition-colors">
                    Request This Course
                  </button>
                </div>
              </SwiperSlide>
            )}
          </Swiper>
          <div className="swiper-pagination flex justify-center mt-5"></div>
          <button
            className="custom-content-next-button group absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white w-10 h-10 max-sm:w-7 max-sm:h-7 rounded-full shadow-lg flex items-center justify-center hover:bg-primaryred hover:text-white transition-colors duration-300"
            aria-label="Next slide"
          >
            <FaChevronRight className="text-primaryred group-hover:text-white" />
          </button>
        </div>
      </div>
      <FAQ className="padding-bx" />
    </div>
  );
};

export default CourseDetailPage;
