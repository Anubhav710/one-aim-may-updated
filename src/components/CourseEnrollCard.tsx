import React from "react";
import Image from "next/image";
import {
  FaDownload,
  FaCalendarAlt,
  FaPhoneAlt,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { FaFire } from "react-icons/fa6";
import Link from "next/link";
import {
  CalendarIcon,
  CalendarIcon2,
  ClockIcon,
  DownloadIcon,
  LanguageIcon,
  LiveClassIcon,
  ScheduleIcon,
} from "./icons";
import Button from "./ui/Button";

interface CourseEnrollCardProps {
  title: string;
  instructors?: string[];
  price: number | undefined;
  originalPrice?: number;
  languages: string | undefined;
  features: string[];
  enrollmentDeadline: string | undefined;
  contactPhone: string;
  contactAddress: string;
  duration: string | undefined;
  image: string | undefined | null;
  videoLacture: string | undefined;
  question: string | undefined;
  studyMaterial?: any;
  timeTable: string | undefined | null;
}

const CourseEnrollCard: React.FC<CourseEnrollCardProps> = ({
  title,
  instructors = [],
  studyMaterial,
  timeTable,
  image,
  price,
  originalPrice,
  languages,
  features,
  enrollmentDeadline,
  contactPhone,
  contactAddress,
  duration,
  question,
  videoLacture,
}) => {
  return (
    <div className="flex flex-col gap-6">
      {/* Main Card */}
      <div className="bg-white py-5 rounded-lg overflow-hidden shadow-orange shadow-sm border border-[#FF7B07]/60">
        {/* Course Image */}
        <div className="relative h-64">
          <div className="w-full h-full">
            <Image
              src={image ?? "/images/course/course-bg.png"}
              alt="Course prep materials"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Course Info */}
        <div className="p-4 space-y-4">
          <div className="flex justify-between gap-x-3">
            <div className="text-[#FF7B07] bg-gradient-to-r from-[#FFE9E9] to-[#FFF5EC] px-4 py-1 text-xs  rounded-full">
              {duration}
            </div>
            <div className="flex gap-2">
              {instructors.map((data, i) => (
                <div
                  key={i}
                  className="text-[#FF7B07] bg-gradient-to-r from-[#FFE9E9] to-[#FFF5EC] px-4 py-1 text-xs  rounded-full"
                >
                  {data}
                </div>
              ))}
            </div>
          </div>
          <h2 className="text-lg font-bold mb-2">{title}</h2>

          <div className="flex items-center gap-2 mb-3">
            <LanguageIcon className="text-orange h-6 w-6" />
            <span className="text-sm text-gray-700">{languages}</span>
          </div>
          <div className="flex items-center gap-2 mb-3">
            <ScheduleIcon className="text-orange h-6 w-6" />
            <span className="text-sm text-gray-700">{question}</span>
          </div>
          <div className="flex items-center gap-2 mb-3">
            <LiveClassIcon className="text-orange h-6 w-6" />
            <span className="text-sm text-gray-700">{videoLacture}</span>
          </div>

          <div className="space-y-2 mb-4"></div>

          <div className="flex items-center mt-4">
            <div>
              <span className=" text-[#FF7B07]">
                <span className="text-3xl font-bold">₹{price}</span>
                <span className="text-[10px]">(Limited Period Offer)</span>
              </span>
              {originalPrice && (
                <span className="text-sm text-gray-500 line-through ml-2">
                  (₹{originalPrice})
                </span>
              )}
            </div>
          </div>
          <div className="w-max mx-auto pt-3">
            <Button href="/cart" className="text-white !px-24 w-full">
              Enroll now
            </Button>
          </div>
        </div>
      </div>

      {/* Additional Cards */}
      <div className="bg-white rounded-lg overflow-hidden p-4 shadow-orange shadow-sm">
        <div>
          <Link
            href={studyMaterial ?? "/"}
            className="flex items-center gap-3 cursor-pointer border-b border-dashed hover:text-orange-500  border-gray-300 pb-5"
          >
            <div className="text-orange">
              <DownloadIcon className="w-8 h-8" />
            </div>
            <span className="font-medium text-sm">Download Study Material</span>
          </Link>

          <div className="flex items-center gap-3 border-b border-dashed border-gray-300 py-5">
            <div className="text-orange">
              <ClockIcon className="w-8 h-8" />
            </div>
            <div className="text-sm">
              <span className="font-medium">Enrollment Deadline : </span>
              <span>{enrollmentDeadline}</span>
            </div>
          </div>

          <Link
            href={timeTable ?? "/"}
            className="flex items-center gap-3 cursor-pointer py-5"
          >
            <div className="text-orange">
              <CalendarIcon2 className="h-8 w-8" />
            </div>
            <span className="font-medium text-sm">Download Timetable</span>
          </Link>
        </div>
      </div>

      {/* Contact Card */}
      <div className="bg-[#DC8940]/90 text-white rounded-lg overflow-hidden shadow-sm px-4 py-8">
        <div className="mb-4 space-y-3">
          <h3 className="text-2xl font-semibold">Have any Questions ?</h3>
          <p className="text-sm text-white">
            Contact us on the following details :
          </p>
        </div>

        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <div className="text-white">
              <FaPhoneAlt size={16} />
            </div>
            <span className="text-sm">{contactPhone}</span>
          </div>

          <div className="flex items-center gap-3">
            <div className="text-white">
              <FaMapMarkerAlt size={16} />
            </div>
            <span className="text-sm">{contactAddress}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseEnrollCard;
