import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  FaDownload,
  FaCalendarAlt,
  FaClock,
  FaCheckCircle,
  FaPhone,
  FaMapMarkerAlt,
} from "react-icons/fa";
import Banner from "@/components/common/Banner";
import CourseEnrollCard from "@/components/CourseEnrollCard";
import { CommonHeading2 } from "@/components/common/CommonHeading2";

// Sample test data - in a real app, you would fetch this based on the slug
const testData = {
  title: "Essay Writing Test",
  category: "Prelims Test Series",
  breadcrumbs: [
    { name: "Home", href: "/" },
    { name: "Test Series", href: "/test-series" },
    { name: "Test Series Detail Page", href: "" },
  ],
  overview:
    "Get the real exam experience with our UPSC Test Series. Designed by experts, our test series ensures comprehensive coverage of Prelims, Mains, and Optional subjects with in-depth solutions, performance analysis, and personalized feedback.",
  price: 2550,
  mainDescription: "Master the Art of Essay Writing",
  inclusions: [
    "Topic-Wise Essay Tests - Covers diverse themes, including current affairs & philosophical topics.",
    "Model Answers & Structure Guidance – Learn how to frame and present compelling arguments.",
    "Time-Bound Practice – Simulate real exam conditions for better time management.",
    "Personalized Feedback – Expert evaluation with detailed suggestions for improvement.",
    "Skill Enhancement – Focus on clarity, coherence, and impactful writing style.",
  ],
  importantDates: {
    enrollmentDeadline: "22 February, 2024",
    timetableUrl: "/documents/timetable.pdf",
    studyMaterialUrl: "/documents/study-material.pdf",
  },
  plans: [
    {
      name: "Standard Plan",
      price: 1999,
      isPopular: false,
      features: [
        "5 Full-Length Essay Tests",
        "Model Answers & Writing Tips",
        "Expert Feedback on All Tests",
      ],
      bgColor: "bg-white",
    },
    {
      name: "Premium Plan",
      price: 2999,
      isPopular: true,
      features: [
        "8 Full-Length Essay Tests",
        "Model Answers & Writing Tips",
        "Expert Feedback on All Tests",
        "Expert One-On-One Mentoring Call",
      ],
      bgImage: "url('/bgt.png')",
    },
    {
      name: "Basic Plan",
      price: 999,
      isPopular: false,
      features: [
        "3 Full-Length Essay Tests",
        "Model Answers & Writing Tips",
        "Self-Evaluation Guide",
      ],
      bgColor: "bg-white",
    },
  ],
  keyFeatures: [
    {
      title: "UPSC Standard MCQs & Subjective Guidelines",
      description: "All tests follow exact UPSC pattern",
    },
    {
      title: "Detailed Explanation & Model Answers",
      description: "Comprehensive solution for every question",
    },
    {
      title: "AI-Enabled Ranking & Performance Tracking",
      description: "Track your progress over time",
    },
    {
      title: "Mentor Support & Doubt Clearing Sessions",
      description: "Get expert guidance when needed",
    },
  ],
  contactInfo: {
    phone: "+1 (123) 456-7890",
    address: "123 Success Street, City, Country",
  },
};

// Dynamic page component for test series detail
export default function TestSeriesDetail() {
  // In a real app, you would fetch data based on the slug

  return (
    <div className="bg-[#FFF7F0] overflow-x-clip">
      <Banner
        title="Prelims Test Series"
        desp="Your Ultimate UPSC Exam Practice Hub"
      >
        <Link href="/">Home</Link>
        <span>{">"}</span>
        <Link href="/test-series">Test Series</Link>
        <span>{">"}</span>
        <span className="text-primaryred"> {testData.title}</span>
      </Banner>

      {/* Main Content */}
      <div className="padding-yx">
        <div className="screen">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Left Content (2/3 width on desktop) */}
            <div className="md:col-span-2 space-y-10">
              {/* Test Overview */}
              <CommonHeading2 title="Test Overview" desc={testData.overview} />

              {/* Main Description */}
              <div className="mb-10">
                <h2 className="text-primaryred heading2 relative  w-[32ch]">
                  <span className={`relative z-10 mb-5 inline-block }`}>
                    {testData.mainDescription}
                  </span>
                  <div className="h-20 w-20 md:h-32 md:w-32 absolute top-1/2 -translate-y-1/2 -right-20 -translate-x-1/2">
                    <Image
                      src={"/images/icons/button-style.svg"}
                      alt="style-1"
                      width={120}
                      height={120}
                      className="h-full w-full"
                    />
                  </div>
                </h2>

                <div>
                  <h3 className="font-semibold text-xl mb-4">
                    What&apos;s include?
                  </h3>
                  <ul className="space-y-4">
                    {testData.inclusions.map((item, index) => (
                      <li key={index} className="flex items-start">
                        <div className="text-[#FF7B07] mt-1 mr-3">
                          <FaCheckCircle />
                        </div>
                        <p>{item}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Right Sidebar (1/3 width on desktop) */}
            <div>
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
        </div>
      </div>

      <div>
        <div className="screen space-y-20">
          <div className="w-max mx-auto">
            <CommonHeading2 title="Choose your Best Plan" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-4 place-items-center">
            {testData.plans.map((plan, index) => (
              <PlanCard
                key={index}
                plan={plan}
                className={`${
                  plan.isPopular ? "lg:scale-110 z-10" : ""
                } transition-transform hover:scale-105 w-full max-w-xs duration-500`}
                textColor={plan.isPopular ? "text-white" : ""}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Feature Circles */}
      <div className="padding-yx">
        <div className="screen">
          <div className="flex flex-wrap justify-center gap-6 md:gap-10 lg:gap-16 my-6 md:my-12">
            {testData.keyFeatures.map((feature, index) => (
              <FeatureCircle
                key={index}
                title={feature.title}
                description={feature.description}
                position={index % 2 === 0 ? "down" : "up"}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function FeatureCircle({
  title,
  description,
  position = "up",
}: {
  title: string;
  description: string;
  position: "up" | "down";
}) {
  return (
    <div
      className={`w-44 h-44 sm:w-52 sm:h-52 md:w-60 md:h-60 lg:w-64 lg:h-64 rounded-full border-2 border-orange flex flex-col items-center justify-center p-4 sm:p-5 md:p-6 text-center bg-white transition-all hover:scale-105 relative ${
        position === "up"
          ? "transform translate-y-0 md:-translate-y-4 lg:-translate-y-6"
          : "transform translate-y-0 md:translate-y-4 lg:translate-y-6"
      }`}
    >
      <div className="w-[90%]">
        <h3 className="font-medium text-xs sm:text-sm md:text-base mb-1 md:mb-2">
          {title}
        </h3>
        <p className="text-[10px] sm:text-xs text-gray-600">{description}</p>
      </div>
    </div>
  );
}

function PlanCard({
  plan,
  className,
  textColor,
}: {
  plan: {
    name: string;
    price: number;
    isPopular: boolean;
    features: string[];
    bgColor?: string;
    bgImage?: string;
    textColor?: string;
  };
  textColor?: string;
  className?: string;
}) {
  return (
    <div
      className={`flex flex-col relative bg-white overflow-hidden items-center py-12 w-max px-10 rounded-2xl shadow-lg border-x-2 border-[#FFB400] ${className} ${textColor}`}
      style={{
        backgroundImage: plan.bgImage,
      }}
    >
      {plan.isPopular && (
        <div className="absolute top-0 left-0 w-full h-full glass-effect"></div>
      )}
      <h2
        className={`text-2xl relative z-10 text-primaryred font-semibold mb-5 ${textColor}`}
      >
        {plan.name}
      </h2>
      <div className="bg-gradient-to-b  relative z-10 from-[#FFF5EE] via-[#FFB400] to-[#FFF5EE] w-[70%] h-[2px] mx-auto"></div>
      <div
        className={`text-orange  relative z-10 py-10 text-center space-y-4 ${textColor}`}
      >
        <h4>Includes:</h4>
        <ul className="space-y-3">
          {plan.features.map((feature: string, index: number) => (
            <li key={index} className={`flex items-center gap-2 text-sm `}>
              <FaCheckCircle />
              <p>{feature}</p>
            </li>
          ))}
        </ul>
      </div>
      <div className="bg-gradient-to-b  relative z-10 from-[#FFF5EE] via-[#FFB400] to-[#FFF5EE] w-[70%] h-[2px] mx-auto"></div>
      <div className="mt-5  relative z-10">
        <p className={`text-primaryred text-2xl font-semibold ${textColor}`}>
          ₹{plan.price}/-
        </p>
      </div>
    </div>
  );
}
