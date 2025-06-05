"use client";

import Image from "next/image";
import Link from "next/link";
import React, { ReactNode } from "react";

import { useCartStore } from "@/store/cartStore";
// Renamed to avoid conflict if a more detailed TestSeries is imported
import { toast } from "react-toastify";
import { CartStore, Course } from "@/types";
import {
  BiBook,
  BiQuestionMark,
  BiTime,
  BiUser,
  BiVideo,
} from "react-icons/bi";

interface FeaturedCardProps extends Course {
  testSeries?: boolean;
  href: string;
}

const FeaturedCard: React.FC<FeaturedCardProps> = ({
  type,
  slug,
  sub_heading,
  language,
  duration,
  video_lectures,
  questions_count,
  price,
  short_description,
  featured,
  sequence,
  featured_image_url,
  content,
  study_material_url,
  timetable_url,
  course_course_contents,
  course_course_faqs,
  faculties,
  testSeries = false,
  href,
  heading,
}) => {
  const { addCourse } = useCartStore();

  // Generate features based on available data

  // Feature Fuction

  // Handle adding course to cart
  const handleAddToCart = () => {
    const cartStore: CartStore = {
      type: type,
      slug: slug,
      heading: heading,

      faculty: Array.isArray(faculties)
        ? faculties.map((data) => data.name)
        : [],
      duration: duration,
      price: price,
      image: featured_image_url,
    };
    addCourse(cartStore);
    toast.success("Items is added to your cart");
  };

  return (
    <div className="h-full bg-white rounded-[2rem] max-sm:rounded-[1.5rem] p-5 sm:p-6 space-y-4 shadow-lg hover:shadow-xl transition-all duration-300 border-b-4 border-b-[rgba(239,68,68,0.1)]  flex flex-col  ">
      {/* Tags */}
      <div className="flex justify-between  flex-wrap gap-2 sm:gap-3">
        {duration && (
          <div className="flex-shrink-0">
            <h6 className="text-xs max-sm:text-[0.65rem] py-1.5 sm:py-2 bg-gradient-to-tr from-[#FFE9E9] to-[#FFF5EC] text-[#FF7B07] px-3 sm:px-5 rounded-full font-semibold whitespace-nowrap">
              {duration}
            </h6>
          </div>
        )}
        <div className="inline-flex gap-x-1.5">
          {faculties &&
            faculties.map((data, i) => (
              <h4
                key={i}
                className="text-xs  flex items-center px-3 bg-gradient-to-tr from-[#FFE9E9] to-[#FFF5EC] text-[#FF7B07] rounded-full font-semibold"
              >
                <p>{data.name}</p>
              </h4>
            ))}
        </div>
      </div>

      {/* Image */}
      <div className="relative overflow-hidden rounded-2xl group">
        {/* Pricing Tag  */}
        <div className="absolute top-3 right-[1px] bg-primaryred z-30 text-white text-sm py-1 px-5 rounded-l-full font-semibold">
          ₹ {price || 0}
        </div>
        <Link
          href={`${testSeries ? `/test-series/${href}` : `/course/${href}`}`}
        >
          <div className="aspect-video relative">
            <Image
              src={featured_image_url || "/images/placeholder.png"}
              alt={heading || "Course"}
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
              {heading || heading}
            </h3>
          </Link>
          <p className="text-gray-700 text-sm sm:text-base line-clamp-3">
            {short_description}
          </p>
        </hgroup>

        {/* Features List */}
        <ul className="space-y-2 ">
          {duration && (
            <li className="flex gap-2 items-center">
              <span className="text-lg text-primary">
                <BiTime size={20} />
              </span>
              <span className="text-sm sm:text-base">{`${duration} Duration`}</span>
            </li>
          )}
          {video_lectures && (
            <li className="flex gap-2 items-center">
              <span className="text-lg text-primary">
                <BiVideo size={20} />
              </span>
              <span className="text-sm sm:text-base">{`${video_lectures} Video Lectures`}</span>
            </li>
          )}
          {questions_count && (
            <li className="flex gap-2 items-center">
              <span className="text-lg text-primary">
                <BiQuestionMark size={20} />
              </span>
              <span className="text-sm sm:text-base">{`${questions_count} Questions`}</span>
            </li>
          )}

          <li className="flex gap-2 items-center">
            <span className="text-lg text-primary">
              <BiBook size={20} />
            </span>
            <span className="text-sm sm:text-base">{"Study Material"}</span>
          </li>
          {faculties?.[0]?.name && (
            <li className="flex gap-2 items-center">
              <span className="text-lg text-primary">
                <BiUser size={20} />
              </span>
              <span className="text-sm sm:text-base">{`Faculty: ${faculties[0].name}`}</span>
            </li>
          )}
        </ul>

        {/* Button */}
        <div className="flex lg:flex-row flex-col justify-between">
          <div className="mt-auto pt-2 lg:w-max w-full">
            <Link
              href={`${
                testSeries ? `/test-series/${href}` : `/course/${href}`
              }`}
              className="bg-black hover:bg-primaryred active:bg-primaryred transition-all duration-300 px-6 md:px-5 py-2 rounded-full text-white text-sm sm:text-base flex items-center justify-center group"
              aria-label={`Read more about ${heading || "this course"}`}
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
              aria-label={`Add ${heading || "this course"} to cart`}
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
