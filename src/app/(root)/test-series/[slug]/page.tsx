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
import Footer from "@/components/Footer";
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
  mainDescription: "Master the Art of Essay Writing for UPSC Prelims & Mains",
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
      bgColor: "bg-[#3B1E19]",
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
    <div className="bg-[#FFF7F0] min-h-screen">
      <Banner
        title="Prelims Test Series – Essay Writing Test"
        desp="Your Ultimate UPSC Exam Practice Hub"
      >
        <Link href="/">Home</Link>
        <span>{">"}</span>
        <Link href="/test-series">Test Series</Link>
        <span>{">"}</span>
        <span className="text-primaryred"> {testData.title}</span>
      </Banner>

      {/* Main Content */}
      <div className="px-4 md:px-8 lg:px-16 py-8">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Left Content (2/3 width on desktop) */}
            <div className="md:col-span-2">
              {/* Test Overview */}
              <CommonHeading2 title="Test Overview" desc={testData.overview} />

              {/* Main Description */}
              <div className="mb-10">
                <h2 className="text-primaryred heading2 relative  w-max">
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

      <div className="px-4 md:px-8 lg:px-16 py-12">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-[#C1151B] text-2xl md:text-3xl font-bold text-center mb-12">
            Choose your Best Plan
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testData.plans.map((plan, index) => (
              <div
                key={index}
                className={`rounded-lg overflow-hidden shadow-sm ${
                  plan.isPopular ? "transform md:-translate-y-4" : ""
                }`}
              >
                <div
                  className={`${plan.bgColor} px-6 py-12 ${
                    plan.isPopular ? "text-white" : ""
                  }`}
                >
                  <h3 className="text-xl font-bold mb-6 text-center">
                    {plan.name}
                  </h3>

                  <div className="space-y-4">
                    {plan.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center">
                        <FaCheckCircle
                          className={`mr-3 ${
                            plan.isPopular ? "text-white" : "text-[#FF7B07]"
                          }`}
                        />
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-8 text-center">
                    <div
                      className={`text-2xl font-bold ${
                        plan.isPopular ? "text-white" : "text-[#FF7B07]"
                      }`}
                    >
                      ₹{plan.price}/-
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Feature Circles */}
      <div className="px-4 md:px-8 lg:px-16 py-12">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-wrap justify-center gap-8">
            {testData.keyFeatures.map((feature, index) => (
              <div key={index} className="w-48 h-48">
                <div className="w-full h-full rounded-full border border-[#FF7B07] flex items-center justify-center p-4 text-center">
                  <div>
                    <h4 className="font-medium text-sm mb-2">
                      {feature.title}
                    </h4>
                    <p className="text-xs text-gray-600">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
