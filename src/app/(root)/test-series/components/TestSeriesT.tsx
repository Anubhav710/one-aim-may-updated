"use client";
import CommonHeading from "@/components/ui/CommonHeading";
import FeaturedCard from "@/components/ui/FeaturedCard";

import React, { useState } from "react";

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
    <div className="screen padding-yx space-y-12">
      <div className="w-max mx-auto">
        <CommonHeading title="Test Series" />
      </div>
      <div className="flex max-sm:flex-col gap-7 mx-auto w-max">
        {testSeries.map((data) => (
          <div
            key={data.id}
            onClick={() => setActiveTestSeries(data.id)}
            className="cursor-pointer"
          >
            <h1 className="text-xl">{data.label}</h1>
            <div
              className={`h-[3px] w-[80%] sm:mx-auto  ${
                data.id === activeTestSeries
                  ? "bg-gradient-to-tr from-[#FFA4A8] to-[#FFC593] rounded-full transition-all duration-300"
                  : ""
              }`}
            ></div>
          </div>
        ))}
      </div>
      <div className="grid-4">
        {courseContent[activeTestSeries]?.map((course) => (
          <FeaturedCard key={course.id} {...course} href="/test-series/1" />
        ))}
      </div>
    </div>
  );
};

export default TestSeriesT;
