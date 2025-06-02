import { Faculty } from "@/types";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const FacultyCom: React.FC<Faculty> = ({
  name,
  designation,
  experience,
  qualifications,
  specialization,
  facebook_link,
  twitter_link,
  linkedin_link,
  instagram_link,
  featured_image_url,
}) => {
  return (
    <div className="padding-bottom pt-14">
      <div className="mdl:flex hidden ">
        <div className=" ml-28 ">
          <div className="h-[18rem] w-[18rem] rounded-full bg-white scale-150 relative left-16 overflow-hidden">
            <Image
              src={featured_image_url || "/images/placeholder.png"}
              alt=""
              width={1200}
              height={1200}
              className="h-full w-full object-cover object-top"
            />
          </div>
        </div>
        <div className="w-[100%] bg-[#DC8940] py-20  pl-52 flex items-center -my-14">
          <div className="space-y-3">
            <h1 className="text-2xl lg:text-3xl font-bold text-white">
              {name}
            </h1>
            <div className="text-white flex flex-col md:flex-row md:gap-x-2">
              <h5 className="text-white font-semibold text-lg">Designation:</h5>
              <p> {designation}</p>
            </div>
            <div className="text-white flex flex-col md:flex-row md:gap-x-2">
              <h5 className="text-white font-semibold text-lg">Experience:</h5>
              <p> 23 years</p>
            </div>
            <div className="text-white flex flex-col md:flex-row md:gap-x-2">
              <h5 className="text-white font-semibold text-lg ">
                Qualifications:
              </h5>
              <p> M.Sc. in Botany, B.Ed.</p>
            </div>
            <div className="text-white flex flex-col md:flex-row md:gap-x-2">
              <h5 className="text-white font-semibold text-lg">
                Specialization:
              </h5>
              <p> Science Education</p>
            </div>
            <div className="text-white  flex gap-x-4 mt-4">
              <div className="flex items-center gap-x-3 ">
                {facebook_link && (
                  <Link
                    href={facebook_link}
                    aria-label="Facebook"
                    className="bg-white h-8 w-8 rounded-full flex items-center justify-center"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-[#DC8940] hover:text-gray-200"
                    >
                      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                    </svg>
                  </Link>
                )}
                {twitter_link && (
                  <Link
                    href={twitter_link}
                    aria-label="Twitter"
                    className="bg-white h-8 w-8 rounded-full flex items-center justify-center"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-[#DC8940] hover:text-gray-200"
                    >
                      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                    </svg>
                  </Link>
                )}
                {linkedin_link && (
                  <Link
                    href={linkedin_link}
                    aria-label="LinkedIn"
                    className="bg-white h-8 w-8 rounded-full flex items-center justify-center"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-[#DC8940] hover:text-gray-200"
                    >
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                      <rect x="2" y="9" width="4" height="12"></rect>
                      <circle cx="4" cy="4" r="2"></circle>
                    </svg>
                  </Link>
                )}

                {instagram_link && (
                  <Link
                    href={instagram_link}
                    aria-label="Instagram"
                    className="bg-white h-8 w-8 rounded-full flex items-center justify-center"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-[#DC8940] hover:text-gray-200"
                    >
                      <rect
                        x="2"
                        y="2"
                        width="20"
                        height="20"
                        rx="5"
                        ry="5"
                      ></rect>
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                    </svg>
                  </Link>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* For Mobile View */}
      <div className="screen mdl:hidden padding-bx">
        <div className="h-[14rem] w-[14rem] rounded-full bg-white top-7 mx-auto relative overflow-hidden">
          <Image
            src={featured_image_url || "/images/placeholder.png"}
            alt={name}
            width={1200}
            height={1200}
            className="h-full w-full object-cover object-top"
          />
        </div>
        <div className="w-full bg-[#DC8940] py-10 rounded-xl">
          <div className="space-y-2 pl-6 text-center">
            <h1 className="text-2xl font-bold text-white">{name}</h1>
            <div className="text-white flex flex-col  md:gap-x-2">
              <h5 className="text-white font-semibold text-lg">Designation:</h5>
              <p> {designation} </p>
            </div>
            <div className="text-white flex flex-col  md:gap-x-2">
              <h5 className="text-white font-semibold text-lg">Experience:</h5>
              <p> {experience} years</p>
            </div>
            <div className="text-white flex flex-col  md:gap-x-2">
              <h5 className="text-white font-semibold text-lg ">
                Qualifications:
              </h5>
              <p> {qualifications}</p>
            </div>
            <div className="text-white flex flex-col  md:gap-x-2">
              <h5 className="text-white font-semibold text-lg">
                Specialization:
              </h5>
              <p> {qualifications}</p>
            </div>
            <div className="text-white  flex gap-x-4 mt-4">
              <div className="flex items-center gap-x-3  mx-auto">
                {facebook_link && (
                  <Link
                    href={facebook_link}
                    aria-label="Facebook"
                    className="bg-white h-8 w-8 rounded-full flex items-center justify-center"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-[#DC8940] hover:text-gray-200"
                    >
                      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                    </svg>
                  </Link>
                )}
                {twitter_link && (
                  <Link
                    href={twitter_link}
                    aria-label="Twitter"
                    className="bg-white h-8 w-8 rounded-full flex items-center justify-center"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-[#DC8940] hover:text-gray-200"
                    >
                      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                    </svg>
                  </Link>
                )}
                {linkedin_link && (
                  <Link
                    href={linkedin_link}
                    aria-label="LinkedIn"
                    className="bg-white h-8 w-8 rounded-full flex items-center justify-center"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-[#DC8940] hover:text-gray-200"
                    >
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                      <rect x="2" y="9" width="4" height="12"></rect>
                      <circle cx="4" cy="4" r="2"></circle>
                    </svg>
                  </Link>
                )}

                {instagram_link && (
                  <Link
                    href={instagram_link}
                    aria-label="Instagram"
                    className="bg-white h-8 w-8 rounded-full flex items-center justify-center"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-[#DC8940] hover:text-gray-200"
                    >
                      <rect
                        x="2"
                        y="2"
                        width="20"
                        height="20"
                        rx="5"
                        ry="5"
                      ></rect>
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                    </svg>
                  </Link>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FacultyCom;
