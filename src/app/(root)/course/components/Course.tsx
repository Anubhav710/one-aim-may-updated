"use client";
import React, { useState, useEffect } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import FeaturedCard from "@/components/ui/FeaturedCard";

import { CommonHeading2 } from "@/components/common/CommonHeading2";
import axios from "axios";
import { CourseCategoryList } from "@/types";

interface CourseCategory {
  id: string;
  label: string;
}

interface SubCourse {
  id: string;
  label: string;
}

interface CourseContent {
  id: string;
  title: string;
  description: string;
  duration: string;
  instructor: string;
  imageSrc: string;
}

const Course: React.FC = () => {
  const [activeCourse, setActiveCourse] = useState<string>("course1");
  const [activeSubCourse, setActiveSubCourse] = useState<string>("subCourse1");

  // Course categories data
  const courseCategory: CourseCategory[] = [
    { id: "course1", label: "Foundation Courses" },
    { id: "course2", label: "Prelims Preparation" },
    { id: "course3", label: "Mains Preparation" },
    { id: "course4", label: "Optional Subjects" },
    { id: "course5", label: "Test Series" },
    { id: "course6", label: "Interview Preparation" },
  ];

  // Sub-course categories data
  const subCourseCategory: Record<string, SubCourse[]> = {
    course1: [
      { id: "subCourse1", label: "IAS Foundation Course (Prelims + Mains)" },
      { id: "subCourse2", label: "NCERT Basics for IAS Aspirants" },
      {
        id: "subCourse3",
        label: "Introduction to Indian Polity and Governance",
      },
      { id: "subCourse4", label: "Indian Economy for Beginners" },
    ],
    course2: [
      { id: "subCourse5", label: "Prelims Test Series" },
      { id: "subCourse6", label: "Current Affairs for Prelims" },
      { id: "subCourse7", label: "Previous Year Questions Analysis" },
      { id: "subCourse8", label: "MCQ Practice Modules" },
    ],
    course3: [
      { id: "subCourse9", label: "Mains Answer Writing" },
      { id: "subCourse10", label: "Essay Writing for UPSC" },
      { id: "subCourse11", label: "Ethics, Integrity & Aptitude" },
      { id: "subCourse12", label: "GS Paper I Comprehensive" },
      { id: "subCourse13", label: "GS Paper II Comprehensive" },
      { id: "subCourse14", label: "GS Paper III Comprehensive" },
      { id: "subCourse15", label: "GS Paper IV Comprehensive" },
    ],
    course4: [
      { id: "subCourse16", label: "Geography Optional" },
      { id: "subCourse17", label: "Public Administration" },
      { id: "subCourse18", label: "Sociology" },
      { id: "subCourse19", label: "History" },
      { id: "subCourse20", label: "Political Science" },
      { id: "subCourse21", label: "Economics" },
      { id: "subCourse22", label: "Anthropology" },
    ],
    course5: [
      { id: "subCourse23", label: "Prelims Mock Tests" },
      { id: "subCourse24", label: "Mains Mock Tests" },
      { id: "subCourse25", label: "Subject-wise Test Series" },
      { id: "subCourse26", label: "Current Affairs Test Series" },
    ],
    course6: [
      { id: "subCourse27", label: "Interview Guidance Program" },
      { id: "subCourse28", label: "Mock Interviews" },
      { id: "subCourse29", label: "DAF Analysis & Preparation" },
      { id: "subCourse30", label: "Personality Development" },
    ],
  };

  // Sub-course content data
  const subCourseContent: Record<string, CourseContent[]> = {
    // Foundation Courses
    subCourse1: [
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
    ],
    subCourse2: [
      {
        id: "4",
        title: "NCERT Comprehensive Package",
        description:
          "Complete review of NCERT books from class 6-12 with focus on UPSC-relevant concepts and questions.",
        duration: "4 Months",
        instructor: "Dr. Priya Verma",
        imageSrc: "/images/course/feature-course.png",
      },
      {
        id: "5",
        title: "NCERT Crash Course",
        description:
          "Intensive course covering all essential NCERT material in a condensed timeframe for quick revision.",
        duration: "2 Months",
        instructor: "Prof. Amit Gupta",
        imageSrc: "/images/course/feature-course.png",
      },
    ],
    subCourse3: [
      {
        id: "6",
        title: "Indian Polity & Governance Deep Dive",
        description:
          "Comprehensive course on Indian Constitution, political systems, governance, and associated current affairs.",
        duration: "3 Months",
        instructor: "Dr. Rakesh Sharma",
        imageSrc: "/images/course/feature-course.png",
      },
      {
        id: "7",
        title: "Constitutional Framework & Amendments",
        description:
          "Detailed analysis of the Indian Constitution, its evolution, and important amendments with case studies.",
        duration: "2 Months",
        instructor: "Prof. Ananya Singh",
        imageSrc: "/images/course/feature-course.png",
      },
    ],
    subCourse4: [
      {
        id: "8",
        title: "Economy Fundamentals for UPSC",
        description:
          "Build a strong foundation in economic concepts relevant to UPSC with focus on Indian economic issues.",
        duration: "3 Months",
        instructor: "Dr. Vikram Agarwal",
        imageSrc: "/images/course/feature-course.png",
      },
      {
        id: "9",
        title: "Budget & Economic Survey Analysis",
        description:
          "Learn to analyze Union Budgets and Economic Surveys with a focus on UPSC examination perspective.",
        duration: "1 Month",
        instructor: "Prof. Manisha Kapoor",
        imageSrc: "/images/course/feature-course.png",
      },
    ],

    // Prelims Preparation
    subCourse5: [
      {
        id: "10",
        title: "Prelims Test Series 2024",
        description:
          "Comprehensive test series with 25 full-length mock tests and detailed solutions for UPSC Prelims preparation.",
        duration: "6 Months",
        instructor: "UPSC Expert Panel",
        imageSrc: "/images/course/feature-course.png",
      },
      {
        id: "11",
        title: "Subject-wise Prelims Tests",
        description:
          "Topic-wise test series covering all GS Paper I subjects with detailed explanations and trend analysis.",
        duration: "4 Months",
        instructor: "Dr. Suresh Kumar",
        imageSrc: "/images/course/feature-course.png",
      },
    ],
    subCourse6: [
      {
        id: "12",
        title: "Current Affairs for Prelims",
        description:
          "Daily, weekly and monthly current affairs specifically curated for UPSC Prelims with MCQs and analysis.",
        duration: "12 Months",
        instructor: "Current Affairs Team",
        imageSrc: "/images/course/feature-course.png",
      },
      {
        id: "13",
        title: "PT365 - One Year Current Affairs",
        description:
          "Comprehensive compilation of last one year's current affairs with prelims-focused MCQs and explanations.",
        duration: "3 Months",
        instructor: "CA Expert Panel",
        imageSrc: "/images/course/feature-course.png",
      },
    ],

    // Mains Preparation
    subCourse9: [
      {
        id: "14",
        title: "Mains Answer Writing Practice",
        description:
          "Regular answer writing practice with expert evaluation, feedback and personalized improvement strategies.",
        duration: "6 Months",
        instructor: "Dr. Anand Kumar (Ex-IAS)",
        imageSrc: "/images/course/feature-course.png",
      },
      {
        id: "15",
        title: "GS Mains Answer Structure Workshop",
        description:
          "Learn effective answer structuring techniques to maximize your scores in UPSC Mains examination.",
        duration: "1 Month",
        instructor: "Prof. Radhika Menon",
        imageSrc: "/images/course/feature-course.png",
      },
    ],
    subCourse10: [
      {
        id: "16",
        title: "Essay Writing Masterclass",
        description:
          "Comprehensive guide to perfecting your essay writing skills with practice sessions and personalized feedback.",
        duration: "3 Months",
        instructor: "Dr. Sanjay Verma",
        imageSrc: "/images/course/feature-course.png",
      },
      {
        id: "17",
        title: "Philosophical & Abstract Essays",
        description:
          "Special focus on handling philosophical and abstract essay topics with examples and frameworks.",
        duration: "1 Month",
        instructor: "Dr. Lakshmi Iyer",
        imageSrc: "/images/course/feature-course.png",
      },
    ],

    // Optional Subjects
    subCourse16: [
      {
        id: "18",
        title: "Geography Optional Complete Course",
        description:
          "Comprehensive coverage of Geography optional syllabus with maps, diagrams, and answer writing practice.",
        duration: "8 Months",
        instructor: "Dr. Ravi Sharma",
        imageSrc: "/images/course/feature-course.png",
      },
      {
        id: "19",
        title: "Geography Optional Test Series",
        description:
          "Sectional and full-length tests for Geography optional with detailed solutions and answer improvement tips.",
        duration: "4 Months",
        instructor: "Prof. Sunita Rao",
        imageSrc: "/images/course/feature-course.png",
      },
    ],
    subCourse17: [
      {
        id: "20",
        title: "Public Administration Optional",
        description:
          "Complete coverage of Public Administration optional with focus on contemporary administrative issues.",
        duration: "6 Months",
        instructor: "Dr. Prakash Jha (Ex-IAS)",
        imageSrc: "/images/course/feature-course.png",
      },
      {
        id: "21",
        title: "Public Administration Case Studies",
        description:
          "Specialized course on handling case studies in Public Administration optional paper.",
        duration: "2 Months",
        instructor: "Prof. Abhishek Singhania",
        imageSrc: "/images/course/feature-course.png",
      },
    ],

    // Interview Preparation
    subCourse27: [
      {
        id: "22",
        title: "Personality Test Preparation",
        description:
          "Comprehensive guidance for UPSC interview preparation with focus on personality development and communication skills.",
        duration: "3 Months",
        instructor: "Dr. Anjali Sharma (Ex-UPSC Board Member)",
        imageSrc: "/images/course/feature-course.png",
      },
      {
        id: "23",
        title: "Interview Strategy & Communication",
        description:
          "Develop effective communication strategies and confidence for facing the UPSC interview board.",
        duration: "1 Month",
        instructor: "Prof. Rajiv Tiwari",
        imageSrc: "/images/course/feature-course.png",
      },
    ],
    subCourse28: [
      {
        id: "24",
        title: "Mock Interview Series",
        description:
          "Multiple mock interviews with different panels of experts to simulate actual UPSC interview experience.",
        duration: "2 Months",
        instructor: "Panel of Ex-Civil Servants",
        imageSrc: "/images/course/feature-course.png",
      },
      {
        id: "25",
        title: "State-Specific Mock Interviews",
        description:
          "Specialized mock interviews focusing on state-specific questions based on candidate's cadre preferences.",
        duration: "1 Month",
        instructor: "Senior Civil Servants Panel",
        imageSrc: "/images/course/feature-course.png",
      },
    ],
  };

  let [courseCategoryList, setCourseCategoryList] =
    useState<CourseCategoryList>();

  useEffect(() => {
    if (subCourseCategory[activeCourse]?.length) {
      setActiveSubCourse(subCourseCategory[activeCourse][0].id);
    }
    const courseDetail = async () => {
      try {
        const response = await axios.get<CourseCategoryList>(
          `${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/course-categories`, // Use environment variable for base URL
          {
            headers: {
              Authorization: `Bearer ${process.env.NEXT_PUBLIC_AUTH_TOKEN}`, // Use environment variable for auth token
            },
          }
        );
        console.log(response);
        // Assign the fetched data to blogList
        setCourseCategoryList(response.data);
      } catch (err) {
        console.error("Error fetching blogs:", err);
        // Optionally handle the error state, e.g., set blogList to an empty array
        courseCategoryList = [];
      }
    };
    courseDetail();
  }, [activeCourse]);

  const currentSubCourses = subCourseCategory[activeCourse] || [];
  const currentCourseContent = subCourseContent[activeSubCourse] || [];

  return (
    <section id="course" className="bg-[#FFF45]/40 ">
      <div className="screen padding-yx">
        <div>
          <CommonHeading2 title="Our Courses" />
          <div className="space-y-12">
            {/* Main Categories Swiper */}
            <div className="relative  max-sm:px-7">
              <button
                className="custom-main-prev-button group absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white w-10 h-10 max-sm:w-7 max-sm:h-7 rounded-full shadow-lg flex items-center justify-center hover:bg-primaryred hover:text-white transition-colors duration-300"
                aria-label="Previous slide"
              >
                <FaChevronLeft className="text-primaryred group-hover:text-white" />
              </button>
              <Swiper
                modules={[Navigation]}
                slidesPerView="auto"
                spaceBetween={20}
                centeredSlides={false}
                navigation={{
                  nextEl: ".custom-main-next-button",
                  prevEl: ".custom-main-prev-button",
                }}
                className="px-5 md:px-10"
              >
                {courseCategory.map((item) => (
                  <SwiperSlide
                    key={item.id}
                    className="!w-auto"
                    onClick={() => setActiveCourse(item.id)}
                  >
                    <div className="cursor-pointer pr-4 py-2 text-sm md:text-base transition-all duration-300 whitespace-nowrap">
                      {item.label}
                      <div
                        className={`mt-1 mx-auto h-[3px] bg-gradient-to-tr from-[#FFA4A8] to-[#FFC593] rounded-full transition-all duration-300 ${
                          item.id === activeCourse ? "w-[80%]" : "w-0"
                        }`}
                      ></div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
              <button
                className="custom-main-next-button group absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white w-10 h-10 max-sm:w-7 max-sm:h-7 rounded-full shadow-lg flex items-center justify-center hover:bg-primaryred hover:text-white transition-colors duration-300"
                aria-label="Next slide"
              >
                <FaChevronRight className="text-primaryred group-hover:text-white" />
              </button>
            </div>

            {/* Sub Categories Swiper */}
            <div className="relative max-sm:px-7 pl-14">
              {currentSubCourses.length > 0 && (
                <button
                  className="custom-sub-prev-button group absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white w-10 h-10 max-sm:w-7 max-sm:h-7 rounded-full shadow-lg flex items-center justify-center hover:bg-primaryred hover:text-white transition-colors duration-300"
                  aria-label="Previous slide"
                >
                  <FaChevronLeft className="text-primaryred group-hover:text-white" />
                </button>
              )}
              <Swiper
                modules={[Navigation]}
                slidesPerView="auto"
                spaceBetween={10}
                navigation={{
                  nextEl: ".custom-sub-next-button",
                  prevEl: ".custom-sub-prev-button",
                }}
                breakpoints={{
                  320: {
                    slidesPerView: 1,
                    spaceBetween: 10,
                  },
                  640: {
                    slidesPerView: 2,
                    spaceBetween: 15,
                  },
                  1024: {
                    slidesPerView: 3,
                    spaceBetween: 20,
                  },
                }}
                className="px-5 md:px-10"
              >
                {currentSubCourses.map((subItem) => (
                  <SwiperSlide
                    key={subItem.id}
                    className="!w-auto"
                    onClick={() => setActiveSubCourse(subItem.id)}
                  >
                    <div
                      className={`cursor-pointer px-5 py-2 rounded-lg text-sm transition-all duration-200 text-black ${
                        subItem.id === activeSubCourse
                          ? "bg-gradient-to-tr from-[#FFA4A8] to-[#FFC593] text-black shadow-md"
                          : "bg-[#FEE8D5] hover:bg-[#FEE8D5]/20"
                      }`}
                    >
                      {subItem.label}
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
              {currentSubCourses.length > 0 && (
                <button
                  className="custom-sub-next-button group absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white w-10 h-10 max-sm:w-7 max-sm:h-7 rounded-full shadow-lg flex items-center justify-center hover:bg-primaryred hover:text-white transition-colors duration-300"
                  aria-label="Next slide"
                >
                  <FaChevronRight className="text-primaryred group-hover:text-white" />
                </button>
              )}
            </div>

            {/* Course Content Cards Swiper */}
            <div className="relative px-12 max-sm:px-7">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
                {currentCourseContent.length > 0 ? (
                  currentCourseContent.map((course) => (
                    <div key={course.id}>
                      <FeaturedCard
                        title={course.title}
                        description={course.description}
                        duration={course.duration}
                        instructor={course.instructor}
                        imageSrc={course.imageSrc}
                        buttonText="Enroll Now"
                        href="/course/1"
                      />
                    </div>
                  ))
                ) : (
                  <div>
                    <div className="text-center py-12 h-64 flex flex-col items-center justify-center bg-gray-50 rounded-2xl">
                      <p className="text-gray-500">
                        No courses available in this category yet.
                      </p>
                      <button className="mt-4 bg-[#c1151b] text-white px-6 py-2 rounded-full hover:bg-[#a61016] transition-colors">
                        Request This Course
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Custom styling for pagination bullets */}
      <style jsx global>{`
        .swiper-pagination-bullet {
          width: 8px;
          height: 8px;
          background: #d1d5db;
          opacity: 1;
          margin: 0 4px;
        }
        .swiper-pagination-bullet-active {
          background: #dc8940;
          width: 10px;
          height: 10px;
        }
        .swiper-button-disabled {
          opacity: 0.3;
          cursor: not-allowed;
        }
        .swiper-slide {
          height: auto;
        }
      `}</style>
    </section>
  );
};

export default Course;
