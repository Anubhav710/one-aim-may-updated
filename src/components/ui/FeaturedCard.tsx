"use client";

import Image from "next/image";
import Link from "next/link";
import React, { ReactNode } from "react";
import {
  BiBook,
  BiTime,
  BiVideo,
  BiQuestionMark,
  BiUser,
} from "react-icons/bi";

import { useCartStore } from "@/store/cartStore";
import {
  Course,
  TestSeriesCategoryList,
  TestSeries as SimpleTestSeries,
} from "@/types"; // Renamed to avoid conflict if a more detailed TestSeries is imported
import { toast } from "react-toastify";

// Define the type for a feature item
interface Feature {
  name: string;
  icon: ReactNode;
}

interface FeaturedCardProps {
  title?: string;
  description?: string;
  duration?: string;
  instructor?: string;
  imageSrc?: string;
  price?: number;
  href: string;
  buttonText?: string;
  testSeries?: boolean;
  course?: Course | SimpleTestSeries; // Allow course to be Course or SimpleTestSeries
  testSeriesCategory?: TestSeriesCategoryList;
}

// Helper function to generate features based on course data
const generateFeatures = (
  course?: Course | SimpleTestSeries, // Updated type
  duration?: string,
  videoLectures?: string,
  questionsCount?: string
): Feature[] => {
  const features: Feature[] = [];

  if (duration) {
    features.push({ name: `${duration} Duration`, icon: <BiTime size={20} /> });
  }

  if (videoLectures) {
    features.push({
      name: `${videoLectures} Video Lectures`,
      icon: <BiVideo size={20} />,
    });
  }

  if (questionsCount) {
    features.push({
      name: `${questionsCount} Questions`,
      icon: <BiQuestionMark size={20} />,
    });
  }

  // Add study material if available
  if (course?.study_material_url) {
    features.push({ name: "Study Material", icon: <BiBook size={20} /> });
  }

  // Add faculty information if available (only if course is of type Course)
  if (
    course &&
    "faculties" in course &&
    course.faculties &&
    course.faculties.length > 0
  ) {
    features.push({
      name: `Faculty: ${course.faculties[0].name}`,
      icon: <BiUser size={20} />,
    });
  }

  return features;
};

const FeaturedCard = ({
  title,
  description,
  duration,
  instructor,
  imageSrc,
  price,
  href,
  buttonText = "Pay now",
  testSeries = false,
  course,
}: any) => {
  const { addCourse } = useCartStore();

  // Generate features based on available data
  const features = generateFeatures(
    course,
    duration || course?.duration,
    course?.video_lectures,
    course?.questions_count
  );

  // Handle adding course to cart
  const handleAddToCart = () => {
    if (course && "course_course_contents" in course) {
      // Check if it's a full Course object
      addCourse(course as Course); // Type assertion
      toast.success("Course added to cart!");
    } else {
      // Create a course object with the required properties from props or the SimpleTestSeries object
      const courseData = course as SimpleTestSeries; // Treat as SimpleTestSeries for property access
      const courseToAdd: Course = {
        heading: title || courseData?.heading || "",
        content: "",
        slug: href,
        sub_heading: courseData?.sub_heading || null,
        language: courseData?.language || "",
        duration: duration || courseData?.duration || "",
        video_lectures: courseData?.video_lectures || "",
        questions_count: courseData?.questions_count || "",
        price: price || courseData?.price || 0,
        short_description: description || courseData?.short_description || "",
        featured: courseData?.featured || 0,
        sequence: courseData?.sequence || 0,
        featured_image_url:
          imageSrc ||
          courseData?.featured_image_url ||
          "/images/placeholder.png",
        study_material_url: courseData?.study_material_url || "",
        timetable_url: courseData?.timetable_url || "",
        course_course_contents: [], // Default for TestSeries
        course_course_faqs: [], // Default for TestSeries
        faculties: instructor // This part remains tricky as SimpleTestSeries doesn't have faculties
          ? [
              {
                name: instructor,
                slug: "",
                designation: null,
                experience: null,
                qualifications: null,
                specialization: null,
                short_description: null,
                long_description: null,
                facebook_link: null,
                instagram_link: null,
                twitter_link: null,
                linkedin_link: null,
                youtube_link: null,
                sequence: 0,
                featured_image_url: null,
              },
            ]
          : [],
      };

      // Add the course to the cart
      addCourse(courseToAdd);
    }
  };

  return (
    <div className="h-full bg-white rounded-[2rem] max-sm:rounded-[1.5rem] p-5 sm:p-6 space-y-4 shadow-lg hover:shadow-xl transition-all duration-300 border-b-4 border-b-[rgba(239,68,68,0.1)]  flex flex-col  ">
      {/* Tags */}
      <div className="flex justify-between max-md:justify-start flex-wrap gap-2 sm:gap-3">
        {(duration || course?.duration) && (
          <div className="flex-shrink-0">
            <h6 className="text-xs max-sm:text-[0.65rem] py-1.5 sm:py-2 bg-gradient-to-tr from-[#FFE9E9] to-[#FFF5EC] text-[#FF7B07] px-3 sm:px-5 rounded-full font-semibold whitespace-nowrap">
              {duration || course?.duration}
            </h6>
          </div>
        )}
        {(instructor || (course?.faculties && course.faculties.length > 0)) && (
          <div className=" w-max">
            <h6 className="text-xs max-sm:text-[0.65rem] py-1.5 sm:py-2 bg-gradient-to-tr from-[#FFE9E9] to-[#FFF5EC] text-[#FF7B07] px-3 sm:px-5 rounded-full font-semibold truncate text-right">
              {instructor ||
                (course?.faculties && course.faculties.length > 0
                  ? course.faculties[0].name
                  : "")}
            </h6>
          </div>
        )}
      </div>

      {/* Image */}
      <div className="relative overflow-hidden rounded-2xl group">
        {/* Pricing Tag  */}
        <div className="absolute top-3 right-[1px] bg-primaryred z-30 text-white text-sm py-1 px-5 rounded-l-full font-semibold">
          ₹ {price || course?.price || 0}
        </div>
        <Link
          href={`${testSeries ? `/test-series/${href}` : `/course/${href}`}`}
        >
          <div className="aspect-video relative">
            <Image
              src={
                imageSrc ||
                course?.featured_image_url ||
                "/images/placeholder.png"
              }
              alt={title || course?.heading || "Course"}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              priority={false}
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </Link>
      </div>

      {/* Information */}
      <div className="space-y-4 pl-1 flex flex-col">
        <hgroup className="space-y-3 flex-grow">
          <Link
            href={`${testSeries ? `/test-series/${href}` : `/course/${href}`}`}
          >
            <h3 className="text-xl sm:text-2xl font-semibold line-clamp-2">
              {title || course?.heading}
            </h3>
          </Link>
          <p className="text-gray-700 text-sm sm:text-base line-clamp-3">
            {description || course?.short_description}
          </p>
        </hgroup>

        {/* Features List */}
        <ul className="space-y-2 ">
          {features.map((item, index) => (
            <li key={index} className="flex gap-2 items-center">
              <span className="text-lg text-primary">{item.icon}</span>
              <span className="text-sm sm:text-base">{item.name}</span>
            </li>
          ))}
        </ul>

        {/* Button */}
        <div className="flex lg:flex-row flex-col justify-between">
          <div className="mt-auto pt-2 lg:w-max w-full">
            <Link
              href={`${
                testSeries ? `/test-series/${href}` : `/course/${href}`
              }`}
              className="bg-black hover:bg-primaryred active:bg-primaryred transition-all duration-300 px-6 md:px-5 py-2 rounded-full text-white text-sm sm:text-base flex items-center justify-center group"
              aria-label={`Read more about ${
                title || course?.heading || "this course"
              }`}
            >
              <span>Read More</span>
              <svg
                className="ml-2 w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </Link>
          </div>
          <div className="mt-auto pt-2 lg:w-max  w-full">
            <button
              onClick={handleAddToCart}
              className="bg-primaryred hover:bg-primaryred active:bg-primaryred transition-all duration-300 px-6 md:px-5 py-2 w-full rounded-full text-white text-sm sm:text-base flex items-center justify-center group"
              aria-label={`Add ${
                title || course?.heading || "this course"
              } to cart`}
            >
              <span>Add Cart</span>
              <svg
                className="ml-2 w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedCard;
