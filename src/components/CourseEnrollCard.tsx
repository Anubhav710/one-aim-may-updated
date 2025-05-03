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

interface CourseEnrollCardProps {
  title: string;
  instructors?: string[];
  price: number;
  originalPrice?: number;
  languages: string[];
  features: string[];
  enrollmentDeadline: string;
  contactPhone: string;
  contactAddress: string;
}

const CourseEnrollCard: React.FC<CourseEnrollCardProps> = ({
  title,
  instructors = [],
  price,
  originalPrice,
  languages,
  features,
  enrollmentDeadline,
  contactPhone,
  contactAddress,
}) => {
  return (
    <div className="flex flex-col gap-6">
      {/* Main Card */}
      <div className="bg-white py-5 rounded-lg overflow-hidden shadow-orange shadow-sm border border-[#FF7B07]/60">
        {/* Course Image */}
        <div className="relative h-64">
          <div className="w-full h-full">
            <Image
              src="/images/course/course-bg.png"
              alt="Course prep materials"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Course Info */}
        <div className="p-4 space-y-4">
          <div className="flex justify-between">
            <div className="text-[#FF7B07] bg-gradient-to-r from-[#FFE9E9] to-[#FFF5EC] px-4 py-1 text-xs  rounded">
              12 Months
            </div>
            <div className="text-[#FF7B07] bg-gradient-to-r from-[#FFE9E9] to-[#FFF5EC] px-4 py-1 text-xs  rounded">
              {instructors.length > 0 && <div>Dr {instructors[0]}</div>}
            </div>
          </div>
          <h2 className="text-lg font-bold mb-2">{title}</h2>

          <div className="flex items-center gap-2 mb-3">
            <span className="text-sm text-gray-700">
              {languages.join(" / ")}
            </span>
          </div>

          <div className="space-y-2 mb-4">
            {features.map((feature, index) => (
              <div key={index} className="flex items-start gap-2">
                <div className="w-5 h-5 flex-shrink-0 mt-0.5">
                  <span className="flex h-4 w-4 items-center justify-center">
                    {index === 0 ? (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="w-4 h-4 text-gray-600"
                      >
                        <path d="M5.625 1.5c-1.036 0-1.875.84-1.875 1.875v17.25c0 1.035.84 1.875 1.875 1.875h12.75c1.035 0 1.875-.84 1.875-1.875V12.75A3.75 3.75 0 0 0 16.5 9h-1.875a1.875 1.875 0 0 1-1.875-1.875V5.25A3.75 3.75 0 0 0 9 1.5H5.625Z" />
                        <path d="M12.971 1.816A5.23 5.23 0 0 1 14.25 5.25v1.875c0 .207.168.375.375.375H16.5a5.23 5.23 0 0 1 3.434 1.279 9.768 9.768 0 0 0-6.963-6.963Z" />
                      </svg>
                    ) : (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="w-4 h-4 text-gray-600"
                      >
                        <path
                          fillRule="evenodd"
                          d="M4.125 3C3.089 3 2.25 3.84 2.25 4.875V18a3 3 0 0 0 3 3h15a3 3 0 0 1-3-3V4.875C17.25 3.839 16.41 3 15.375 3H4.125ZM12 9.75a.75.75 0 0 0 0 1.5h1.5a.75.75 0 0 0 0-1.5H12Zm-.75-2.25a.75.75 0 0 1 .75-.75h1.5a.75.75 0 0 1 0 1.5H12a.75.75 0 0 1-.75-.75ZM6 12.75a.75.75 0 0 0 0 1.5h7.5a.75.75 0 0 0 0-1.5H6Zm-.75 3.75a.75.75 0 0 1 .75-.75h7.5a.75.75 0 0 1 0 1.5H6a.75.75 0 0 1-.75-.75ZM6 6.75a.75.75 0 0 0-.75.75v3c0 .414.336.75.75.75h3a.75.75 0 0 0 .75-.75v-3A.75.75 0 0 0 9 6.75H6Z"
                          clipRule="evenodd"
                        />
                        <path d="M18.75 6.75h1.875c.621 0 1.125.504 1.125 1.125V18a1.5 1.5 0 0 1-3 0V6.75Z" />
                      </svg>
                    )}
                  </span>
                </div>
                <span className="text-gray-700 text-sm">{feature}</span>
              </div>
            ))}
          </div>

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
          <div className="w-max mx-auto">
            <Link
              href={"/cart"}
              className="w-max px-24 hover:bg-primaryred duration-300 rounded-full bg-black text-white py-3 mx-auto mt-4 font-medium"
            >
              Enroll now
            </Link>
          </div>
        </div>
      </div>

      {/* Additional Cards */}
      <div className="bg-white rounded-lg overflow-hidden p-4 shadow-orange shadow-sm">
        <div>
          <div className="flex items-center gap-3 cursor-pointer border-b border-dashed hover:text-orange-500  border-gray-300 pb-5">
            <div className="text-orange">
              <FaDownload size={18} />
            </div>
            <span className="font-medium text-sm">Download Study Material</span>
          </div>

          <div className="flex items-center gap-3 border-b border-dashed border-gray-300 py-5">
            <div className="text-orange">
              <FaFire size={18} />
            </div>
            <div className="text-sm">
              <span className="font-medium">Enrollment Deadline : </span>
              <span>{enrollmentDeadline}</span>
            </div>
          </div>

          <div className="flex items-center gap-3 cursor-pointer py-5">
            <div className="text-orange">
              <FaCalendarAlt size={18} />
            </div>
            <span className="font-medium text-sm">Download Timetable</span>
          </div>
        </div>
      </div>

      {/* Contact Card */}
      <div className="bg-[#DC8940] text-white rounded-lg overflow-hidden shadow-sm px-4 py-8">
        <div className="mb-4 space-y-3">
          <h3 className="text-lg font-semibold">Have any Questions ?</h3>
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
