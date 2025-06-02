import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";
import { IoChevronDown } from "react-icons/io5";
import { socialLinks } from "@/constant/page";
import { fetchData } from "@/utils/apiUtils";
import { OrganizationInfo } from "@/types";

const Footer = async () => {
  let companyData: OrganizationInfo | null = null;
  try {
    const data = await fetchData<OrganizationInfo>("/company-profile");
    companyData = data ?? null;
  } catch (err) {
    console.error("Failed to fetch company data:", err);
    // companyData will remain null, and the component will render with default/fallback values
  }

  return (
    <footer className="text-gray-800 bg-[#FFEDDD] md:pt-20 pt-10 pb-10">
      <div className="screen mx-auto padding-x">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-x-10">
          <div className="mb-8 sm:mb-0">
            <div className="flex justify-center sm:justify-start">
              <Link href="/">
                <Image
                  src={companyData?.logo_url || "/images/logo.svg"} // Updated to logo_url as per OrganizationInfo
                  alt={companyData?.name || "Company Logo"}
                  width={220}
                  height={180}
                  className="w-auto h-auto"
                />
              </Link>
            </div>
            <div className="text-[#C1151B] mt-4">
              <p className="text-sm md:text-base">
                One Aim - TCNFB is a global community dedicated to empowering
                individuals through education, mentorship, and actionable
                strategies. Join us and start....
                <a href="/about" className="inline-flex items-center gap-x-2">
                  <span className="hover:border-b hover:border-b-[#C1151B]">
                    Read More
                  </span>
                  <IoChevronDown />
                </a>
              </p>
              <div className="pt-5">
                <ul className="flex gap-x-4">
                  {/* Map social media links from API when available, otherwise use default socialLinks */}
                  {(companyData?.social_media &&
                  Object.values(companyData.social_media).some(
                    (link) => link !== null
                  )
                    ? [
                        {
                          name: "facebook",
                          href:
                            companyData.social_media.facebook_link ||
                            socialLinks.find((sl) => sl.name === "facebook")
                              ?.href,
                          icon: socialLinks.find((sl) => sl.name === "facebook")
                            ?.icon,
                        },
                        {
                          name: "instagram",
                          href:
                            companyData.social_media.instagram_link ||
                            socialLinks.find((sl) => sl.name === "instagram")
                              ?.href,
                          icon: socialLinks.find(
                            (sl) => sl.name === "instagram"
                          )?.icon,
                        },
                        {
                          name: "twitter",
                          href:
                            companyData.social_media.twitter_link ||
                            socialLinks.find((sl) => sl.name === "twitter")
                              ?.href,
                          icon: socialLinks.find((sl) => sl.name === "twitter")
                            ?.icon,
                        },
                        {
                          name: "linkedin",
                          href:
                            companyData.social_media.linkedin_link ||
                            socialLinks.find((sl) => sl.name === "linkedin")
                              ?.href,
                          icon:
                            socialLinks.find((sl) => sl.name === "linkedin")
                              ?.icon ||
                            socialLinks.find((sl) => sl.name === "quora")?.icon,
                        },
                        {
                          name: "youtube",
                          href:
                            companyData.social_media.youtube_link ||
                            socialLinks.find((sl) => sl.name === "youtube")
                              ?.href,
                          icon: socialLinks.find((sl) => sl.name === "youtube")
                            ?.icon,
                        },
                      ].filter((link) => link.href) // Filter out links that are not defined
                    : socialLinks
                  ).map((link, index) => (
                    <li
                      key={index}
                      className="bg-white rounded-full h-7 w-7 md:h-8 md:w-8 flex-center group hover:bg-primaryred hover:ring-[1.5px] hover:ring-white duration-300 ease-in-out cursor-pointer"
                    >
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {link.icon /* Use icon from socialLinks */}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <div className="mb-8 sm:mb-0">
            <h3 className="text-xl md:text-2xl mb-4 text-[#C1151B] font-semibold text-left">
              About Company
            </h3>
            <ul className="space-y-2 pl-1 text-left">
              <li className="text-[#C1151B]">
                <a href="/">Home</a>
              </li>
              <li className="text-[#C1151B]">
                <a href="/about">About us</a>
              </li>
              <li className="text-[#C1151B]">
                <a href="/course">Courses</a>
              </li>
              <li className="text-[#C1151B]">
                <a href="/test-series">Test Series</a>
              </li>
              <li className="text-[#C1151B]">
                <a href="/contact-us">Contact us</a>
              </li>
            </ul>
          </div>
          <div className="mb-8 sm:mb-0">
            <h3 className="text-xl md:text-2xl mb-4 text-[#C1151B] font-semibold text-left">
              Legal Links
            </h3>
            <ul className="space-y-2 pl-1 text-left">
              <li className="text-[#C1151B]">
                <a href="/privacy-policy">Privacy Policy</a>
              </li>
              <li className="text-[#C1151B]">
                <a href="/terms-conditions">Terms & Condition</a>
              </li>
              <li className="text-[#C1151B]">
                <a href="/blog">Our Blogs</a>
              </li>
              <li className="text-[#C1151B]">
                <a href="/faculty">Faculty</a>
              </li>
              <li className="text-[#C1151B]">
                <a href="/career">Career</a>
              </li>
            </ul>
          </div>
          <div>
            {companyData &&
            (companyData.phones?.length ||
              companyData.emails?.length ||
              companyData.addresses?.length) ? (
              <>
                <h3 className="text-xl md:text-2xl mb-4 text-[#C1151B] font-semibold text-left sm:text-left">
                  Contact Us
                </h3>
                <div className="space-y-4 pl-1">
                  {companyData?.phones &&
                    companyData.phones.length > 0 &&
                    companyData.phones[0]?.number && (
                      <div className="flex gap-y-2 gap-x-3 w-full">
                        <div className="flex-[0.1]">
                          <div className="bg-white rounded-full h-10 w-10 p-2 flex items-center justify-center">
                            <FaPhoneAlt className="text-primaryred" />
                          </div>
                        </div>
                        <hgroup className="text-left flex-1">
                          <h4 className="text-lg font-semibold text-primaryred">
                            Phone Number
                          </h4>
                          <p className="text-primaryred text-sm">
                            <a href={`tel:${companyData.phones[0].number}`}>
                              {companyData.phones[0].number}
                            </a>
                          </p>
                        </hgroup>
                      </div>
                    )}
                  {companyData?.emails &&
                    companyData.emails.length > 0 &&
                    companyData.emails[0]?.email && (
                      <div className="flex gap-y-2 gap-x-3">
                        <div className="flex-[0.1]">
                          <div className="bg-white rounded-full h-10 w-10 p-2 flex items-center justify-center">
                            <FaEnvelope className="text-primaryred" />
                          </div>
                        </div>
                        <hgroup className="text-left flex-1">
                          <h4 className="text-lg font-semibold text-primaryred">
                            Email
                          </h4>
                          <p className="text-primaryred text-sm">
                            <a href={`mailto:${companyData.emails[0].email}`}>
                              {companyData.emails[0].email}
                            </a>
                          </p>
                        </hgroup>
                      </div>
                    )}
                  {companyData?.addresses &&
                    companyData.addresses.length > 0 &&
                    companyData.addresses[0]?.address && (
                      <div className="flex gap-y-2 gap-x-3">
                        <div className="flex-[0.1]">
                          <div className="bg-white rounded-full h-10 w-10 p-2 flex items-center justify-center">
                            <FaMapMarkerAlt className="text-primaryred" />
                          </div>
                        </div>
                        <hgroup className="text-left flex-1">
                          <h4 className="text-lg font-semibold text-primaryred">
                            Address
                          </h4>
                          <p className="text-primaryred text-sm">
                            {companyData.addresses[0].address}
                          </p>
                        </hgroup>
                      </div>
                    )}
                </div>
              </>
            ) : (
              <></>
            )}
          </div>
        </div>
        <div className="w-full h-[1px] bg-primaryred my-7"></div>
        <div className="flex max-sm:flex-col max-sm:gap-y-2 justify-between">
          <p className="text-primaryred">
            © {new Date().getFullYear()} Copyright by{" "}
            {companyData?.name || "One Aim"}{" "}
            {/* companyData.name is correct as per OrganizationInfo */}
          </p>
          <div className="flex items-center gap-x-2">
            <p className="text-primaryred">
              Designed by{" "}
              <a
                href="https://utxotech.com/"
                target="_blank"
                className="hover:underline"
              >
                UTXOTech
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
