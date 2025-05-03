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
              <div className="mb-10">
                <h2 className="text-[#C1151B] text-2xl font-bold mb-4">
                  Test Overview
                </h2>
                <p className="text-gray-700">{testData.overview}</p>
              </div>

              {/* Main Description */}
              <div className="mb-10">
                <h2 className="text-[#C1151B] text-2xl font-bold mb-6">
                  {testData.mainDescription}
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
              {/* Test Card */}
              <div className="bg-white rounded-lg shadow-sm overflow-hidden mb-6">
                <div className="p-4 border-b">
                  <Image
                    src="/images/test-series/sample-test.jpg"
                    alt="Essay Writing Test"
                    width={600}
                    height={300}
                    className="w-full h-36 object-cover mb-4 rounded"
                  />
                  <h3 className="font-semibold">Essay Writing Test</h3>
                  <div className="flex items-center mt-1 text-sm text-gray-600">
                    <span>English / Hindi</span>
                    <span className="mx-2">•</span>
                    <span>UPSC, Mains, Mock Tests</span>
                  </div>
                  <div className="mt-1 text-sm text-gray-600">
                    <span>Only 4 hrs Left!</span>
                  </div>
                  <div className="mt-4">
                    <div className="text-[#FF7B07] font-bold text-2xl">
                      ₹{testData.price}
                    </div>
                  </div>
                  <button className="mt-4 bg-black text-white rounded-md py-2 px-4 w-full hover:bg-gray-800 transition-colors">
                    Enroll now
                  </button>
                </div>

                <div className="p-4 space-y-4">
                  <div className="flex items-center">
                    <FaDownload className="text-[#FF7B07] mr-3" />
                    <span className="font-medium">Download Study Material</span>
                  </div>

                  <div className="flex items-center">
                    <FaCalendarAlt className="text-[#FF7B07] mr-3" />
                    <span>
                      Enrollment Deadline :{" "}
                      {testData.importantDates.enrollmentDeadline}
                    </span>
                  </div>

                  <div className="flex items-center">
                    <FaDownload className="text-[#FF7B07] mr-3" />
                    <span className="font-medium">Download Timetable</span>
                  </div>
                </div>
              </div>

              {/* Have Questions */}
              <div className="bg-[#FFF1E5] rounded-lg p-6 border border-dashed border-[#FF7B07]/30">
                <h3 className="font-bold text-xl mb-3">Have any Questions?</h3>
                <p className="text-sm mb-4">
                  Contact us on the following details:
                </p>

                <div className="space-y-3">
                  <div className="flex items-center">
                    <FaPhone className="text-[#FF7B07] mr-3" />
                    <span>{testData.contactInfo.phone}</span>
                  </div>

                  <div className="flex items-center">
                    <FaMapMarkerAlt className="text-[#FF7B07] mr-3" />
                    <span>{testData.contactInfo.address}</span>
                  </div>
                </div>
              </div>
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
