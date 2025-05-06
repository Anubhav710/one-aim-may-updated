"use client";

import Image from "next/image";
import Link from "next/link";
import React, { ReactNode } from "react";
import { BiBook } from "react-icons/bi";
import {
  VideoIcon,
  SubjectIcon,
  MentorshipIcon,
  DocumentIcon,
  NewQuestion,
  QuestionIcon,
} from "@/components/icons";

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
  buttonText?: string;
  features?: Feature[];
  href: string;
  price?: string;
}

const FeaturedCard: React.FC<FeaturedCardProps> = ({
  title = "Modern Indian History & Post-Independence India",
  description = "Covering key events like British colonization, the freedom struggle, and the making of modern India, it also delves into post-independence ...",
  duration = "12 Months",
  instructor = "Dr. Rajesh Sharma",
  imageSrc = "/images/course/feature-course.png",
  buttonText = "Pay now",
  price = "₹ 100",
  href = "/",
  features = [
    { name: "2000 Video Lectures", icon: <VideoIcon height={20} width={20} /> },
    {
      name: "Subjective Test Series",
      icon: <SubjectIcon height={20} width={20} />,
    },
    {
      name: "Previous Years Question Papers",
      icon: <QuestionIcon height={20} width={20} />,
    },
    { name: "100000 Questions", icon: <NewQuestion height={20} width={20} /> },
    {
      name: "Virtual mentorship",
      icon: <MentorshipIcon height={20} width={20} />,
    },
  ],
}) => {
  return (
    <div className="h-full bg-white rounded-[2rem] max-sm:rounded-[1.5rem] p-5 sm:p-6 space-y-4 shadow-lg hover:shadow-xl transition-all duration-300 border-b-4 border-b-[rgba(239,68,68,0.1)]  flex flex-col  ">
      {/* Tags */}
      <div className="flex justify-between max-md:justify-start flex-wrap gap-2 sm:gap-3">
        {duration && (
          <div className="flex-shrink-0">
            <h6 className="text-xs max-sm:text-[0.65rem] py-1.5 sm:py-2 bg-gradient-to-tr from-[#FFE9E9] to-[#FFF5EC] text-[#FF7B07] px-3 sm:px-5 rounded-full font-semibold whitespace-nowrap">
              {duration}
            </h6>
          </div>
        )}
        {instructor && (
          <div className=" w-max">
            <h6 className="text-xs max-sm:text-[0.65rem] py-1.5 sm:py-2 bg-gradient-to-tr from-[#FFE9E9] to-[#FFF5EC] text-[#FF7B07] px-3 sm:px-5 rounded-full font-semibold truncate text-right">
              {instructor}
            </h6>
          </div>
        )}
      </div>

      {/* Image */}
      <div className="relative overflow-hidden rounded-2xl group">
        {/* Princing Tag  */}
        <div className="absolute top-3 right-[1px] bg-primaryred z-30 text-white text-sm py-1 px-5 rounded-l-full font-semibold">
          {price || "price"}
        </div>
        <Link href={href}>
          <div className="aspect-video relative">
            <Image
              src={imageSrc || "/images/placeholder.png"}
              alt={title}
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
          <Link href={href}>
            <h2 className="text-xl sm:text-2xl font-semibold line-clamp-2">
              {title}
            </h2>
          </Link>
          <p className="text-gray-700 text-sm sm:text-base line-clamp-3">
            {description}
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
        <div className="mt-auto pt-2 w-max">
          <Link
            href={href}
            className="bg-black hover:bg-primaryred active:bg-primaryred transition-all duration-300 px-6 sm:px-8 py-2 rounded-full text-white text-sm sm:text-base flex items-center justify-center group"
            aria-label={`Play ${title}`}
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
      </div>
    </div>
  );
};

export default FeaturedCard;
