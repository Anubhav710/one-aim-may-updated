import Image from "next/image";
import Link from "next/link";
import React from "react";
import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaPhoneAlt,
  FaQuora,
  FaYoutube,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { IoChevronDown } from "react-icons/io5";
const socialLinks = [
  {
    href: "https://www.facebook.com/oneaimeducation/",
    icon: (
      <FaFacebookF className="h-4 w-4 md:h-5 md:w-5 text-primaryred group-hover:text-white duration-300 ease-in-out" />
    ),
  },
  {
    href: "https://www.instagram.com/oneaim__official/",
    icon: (
      <FaInstagram className="h-4 w-4 md:h-5 md:w-5 text-primaryred group-hover:text-white duration-300 ease-in-out" />
    ),
  },
  {
    href: "https://x.com/OneAim01",
    icon: (
      <FaXTwitter className="h-4 w-4 md:h-5 md:w-5 text-primaryred group-hover:text-white duration-300 ease-in-out" />
    ),
  },
  {
    href: "https://www.quora.com/profile/One-Aim-5",
    icon: (
      <FaQuora className="h-4 w-4 md:h-5 md:w-5 text-primaryred group-hover:text-white duration-300 ease-in-out" />
    ),
  },
  {
    href: "https://www.youtube.com/@OneAim-q7r",
    icon: (
      <FaYoutube className="h-4 w-4 md:h-5 md:w-5 text-primaryred group-hover:text-white duration-300 ease-in-out" />
    ),
  },
];

const Footer = () => {
  return (
    <footer
      id="footer"
      className="text-gray-800 bg-[#FFEDDD]  md:pt-20 pt-10 pb-10 "
    >
      <div className="screen mx-auto padding-x">
        {/* Company Info  */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-x-10">
          <div className="mb-8 sm:mb-0">
            <div className="flex justify-center sm:justify-start">
              <Link href="/">
                <Image
                  src={"/images/logo.svg"}
                  alt="logo"
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
                strategies. Join us and start....{" "}
                <a href="/about" className="inline-flex items-center gap-x-2 ">
                  <span className="hover:border-b hover:border-b-[#C1151B]">
                    {" "}
                    Read More{" "}
                  </span>
                  <IoChevronDown />{" "}
                </a>{" "}
              </p>
              <div className="flex items-center gap-x-2 text-sm mt-2">
                <span></span>{" "}
              </div>
              {/* Social Links */}
              <div className="pt-5">
                <ul className="flex gap-x-4">
                  {socialLinks.map((link, index) => (
                    <li
                      key={index}
                      className="bg-white rounded-full h-7 w-7 md:h-8 md:w-8 flex-center group hover:bg-primaryred hover:ring-[1.5px] hover:ring-white duration-300 ease-in-out cursor-pointer"
                    >
                      <a href={link.href}>{link.icon}</a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          {/* About Company */}
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
                <a href="/contact">Contact us</a>
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
            <h3 className="text-xl md:text-2xl mb-4 text-[#C1151B] font-semibold text-left sm:text-left">
              Contact Us
            </h3>
            <div className="space-y-4 pl-1">
              <div className="flex  gap-y-2 gap-x-3 w-full">
                <div className="flex-[0.1]">
                  <div className="bg-white rounded-full h-10 w-10 p-2 flex items-center justify-center shrink-0 ">
                    <FaPhoneAlt className="text-primaryred " />
                  </div>
                </div>
                <hgroup className="text-left flex-1">
                  <h4 className="text-lg font-semibold text-primaryred">
                    Phone Number
                  </h4>
                  <p className="text-primaryred text-sm">
                    <a href="tel: +91-8955249714">+91-8955249714</a>{" "}
                  </p>
                </hgroup>
              </div>
              <div className="flex justify-around  flex-row items-center sm:items-start gap-y-2 gap-x-3">
                <div className="flex-[0.1]">
                  <div className="bg-white rounded-full h-10 w-10 p-2 flex items-center justify-center shrink-0">
                    <FaEnvelope className="text-primaryred" />
                  </div>
                </div>
                <hgroup className="flex-1 text-left sm:text-left">
                  <h4 className="text-lg font-semibold text-primaryred">
                    Email
                  </h4>
                  <p className="text-primaryred text-sm">
                    <a href="mailto:info@theoneaim.co.in">
                      {" "}
                      info@theoneaim.co.in
                    </a>
                  </p>
                </hgroup>
              </div>
              <div className="flex justify-around flex-row items-center sm:items-start gap-y-2 gap-x-3">
                <div className="flex-[0.1]">
                  <div className="bg-white rounded-full h-10 w-10 p-2 flex items-center justify-center shrink-0">
                    <FaMapMarkerAlt className="text-primaryred" />
                  </div>
                </div>
                <hgroup className="text-left flex-1">
                  <h4 className="text-lg font-semibold text-primaryred">
                    Address
                  </h4>
                  <p className="text-primaryred text-sm">
                    Office No-123,Omega, Anukampa,Near Sanskrit
                    College,Bhankrota,Jaipur
                  </p>
                </hgroup>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full h-[1px] bg-primaryred my-7"></div>
        <div className="flex justify-between">
          <p className="text-primaryred">
            © {new Date().getFullYear()} Copyright by One Aim
          </p>
          <div className="flex items-center gap-x-2 ">
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
