"use client";
import { CommonHeading2 } from "@/components/common/CommonHeading2";

import FeaturedCard from "@/components/ui/FeaturedCard";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { Navigation } from "swiper/modules";

// Define TypeScript interfaces
interface TestSeries {
  id: string;
  label: string;
}

interface Course {
  id: string;
  title: string;
  description: string;
  duration: string;
  instructor: string;
  imageSrc: string;
}

type CourseContent = {
  [key: string]: Course[];
};

const TestSeriesT: React.FC = () => {
  const [activeTestSeries, setActiveTestSeries] = useState<string>("course1");

  const testSeries: TestSeries[] = [
    { id: "course1", label: "Prelims Test Series" },
    { id: "course2", label: "Mains Test Series" },
    { id: "course3", label: "Optional Subject Test Series" },
  ];

  const courseContent: CourseContent = {
    course1: [
      {
        id: "1",
        title: "GS Prelims + Mains Comprehensive Course",
        description:
          "Comprehensive preparation covering all UPSC syllabus topics with structured learning modules and regular tests.",
        duration: "12 Months",
        instructor: "Dr. Rajesh Sharma",
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
      {
        id: "6",
        title: "Weekend Foundation Batch",
        description:
          "Perfect for working professionals, this course offers comprehensive weekend classes covering the entire UPSC syllabus.",
        duration: "14 Months",
        instructor: "Prof. Sunil Kumar",
        imageSrc: "/images/course/feature-course.png",
      },
    ],
    course2: [
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
    course3: [
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
  };

  return (
    <div className="screen padding-yx">
      <div className="w-max mx-auto">
        <CommonHeading2 title="Test Series" />
      </div>
      <div className="space-y-12">
        <div className="relative max-sm:px-7 pl-14">
          {testSeries.length > 0 && (
            <button
              id="custom-prev-button"
              className=" group absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white w-10 h-10 max-sm:w-7 max-sm:h-7 rounded-full shadow-lg flex items-center justify-center hover:bg-primaryred hover:text-white transition-colors duration-300"
              aria-label="Previous slide"
            >
              <FaChevronLeft className="text-primaryred group-hover:text-white" />
            </button>
          )}
          <Swiper
            modules={[Navigation]}
            slidesPerView="auto"
            spaceBetween={10}
            navigation={
              testSeries.length > 4
                ? {
                    nextEl: "#custom-next-button",
                    prevEl: "#custom-prev-button",
                  }
                : false
            }
            breakpoints={{
              320: {
                slidesPerView: 1,
                spaceBetween: 10,
              },
              640: {
                slidesPerView: 3,
                spaceBetween: 15,
              },
              1024: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
            }}
            className="px-5 md:px-10"
          >
            {testSeries.map((data) => (
              <SwiperSlide
                key={data.id}
                className="!w-auto"
                onClick={() => setActiveTestSeries(data.id)}
              >
                <div
                  className={`cursor-pointer px-5 py-2 rounded-lg text-sm transition-all duration-200 text-black ${
                    data.id === activeTestSeries
                      ? "relative after:content-[''] after:absolute after:bottom-0 after:left-0w after:w-[100%]  after:h-[3px] after:bg-gradient-to-tr after:from-[#FFA4A8] after:to-[#FFC593] after:rounded-full"
                      : "bg-[#FEE8D5] hover:bg-[#FEE8D5]/20"
                  }`}
                >
                  {data.label}
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          {testSeries.length > 0 && (
            <button
              id="custom-prev-button"
              className=" group absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white w-10 h-10 max-sm:w-7 max-sm:h-7 rounded-full shadow-lg flex items-center justify-center hover:bg-primaryred hover:text-white transition-colors duration-300"
              aria-label="Next slide"
            >
              <FaChevronRight className="text-primaryred group-hover:text-white" />
            </button>
          )}
        </div>

        <div className="w-full">
          <Swiper
            slidesPerView={1}
            spaceBetween={20}
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
            grabCursor={true}
            className="w-full"
          >
            {courseContent[activeTestSeries]?.map((course) => (
              <SwiperSlide key={course.id}>
                <FeaturedCard href="/test-series/1" {...course} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default TestSeriesT;
