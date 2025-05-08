"use client";
import React, { useState, useEffect, useRef, useCallback } from "react";
import {
  FaFacebook,
  FaPhoneAlt,
  FaQuora,
  FaWhatsapp,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { FaFacebookF } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { TiSocialLinkedin } from "react-icons/ti";
import { RiMenu3Line } from "react-icons/ri";
import { IoMdClose } from "react-icons/io";
import Image from "next/image";
import Button from "./ui/Button";
import gsap from "gsap";
import CustomDropdown from "./ui/CustomDropdown";
import { usePathname } from "next/navigation";
import { useLanguage } from "@/contexts/LanguageContext";
import { Locale } from "@/i18n/settings";
import { useTranslation } from "@/hooks/useTranslation";
import { FaShoppingCart } from "react-icons/fa";
import Link from "next/link";
import { BagIcon } from "./icons";
// Constants
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

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [headerVisible, setHeaderVisible] = useState(true);
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const path = usePathname();
  const { locale, setLocale } = useLanguage();
  const { t } = useTranslation();

  const isLogIn = true;

  // Navigation items with translations
  const navItems = [
    { href: "/", label: t("nav.home") },
    { href: "/about", label: t("nav.about") },
    { href: "/course", label: t("nav.courses") },
    { href: "/test-series", label: t("nav.testSeries") },
    { href: "/contact-us", label: t("nav.contact") },
  ];

  // Functions
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleScroll = useCallback(() => {
    if (typeof window !== "undefined") {
      const scrollY = window.scrollY;
      const scrollDelta = scrollY - lastScrollY;

      setHeaderVisible(scrollY < 100 || (scrollDelta < -5 && scrollY > 100));
      setLastScrollY(scrollY > 0 ? scrollY : 0);
    }
  }, [lastScrollY]);

  const handleLanguageChange = (value: string) => {
    if (value === "english") {
      setLocale("en" as Locale);
    } else if (value === "hindi") {
      setLocale("hi" as Locale);
    }
  };

  useEffect(() => {
    if (isMenuOpen && mobileMenuRef.current) {
      gsap.fromTo(
        mobileMenuRef.current,
        { opacity: 0, x: 100 },
        { opacity: 1, x: 0, duration: 0.5, ease: "power3.out" }
      );

      gsap.fromTo(
        ".mobile-menu-item",
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          stagger: 0.1,
          ease: "power3.out",
          delay: 0.2,
        }
      );
    }
  }, [isMenuOpen]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  return (
    <header className="z-50 sticky top-0">
      <div className={`header-top text-white bg-primaryred py-[8px]`}>
        <div className="bg-primaryred sm:space-x-3 flex justify-between items-center screen padding-x">
          <div className="hidden sm:block">
            <div className="flex gap-x-4">
              <div className="flex items-center gap-x-2">
                <FaPhoneAlt />
                <a href="tel: +91-8955249714">{t("contact.phone")}</a>
              </div>
              <div className="flex items-center gap-x-2">
                <IoMdMail />
                <a href="mailto:info@theoneaim.co.in">{t("contact.email")}</a>
              </div>
            </div>
          </div>

          <div className="max-sm:mx-auto">
            <ul className="flex gap-x-4  ">
              {socialLinks.map((link, index) => (
                <li
                  key={index}
                  className="bg-white rounded-full h-7 w-7 md:h-6 md:w-6 md:p-3.5 flex-center group hover:bg-primaryred hover:ring-[1.5px] hover:ring-white duration-300 ease-in-out cursor-pointer"
                >
                  <a href={link.href}>{link.icon}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div
        className={`desktop-heading bg-white relative transition-transform duration-300 ${
          headerVisible
            ? "translate-y-0"
            : "-translate-y-[66%] md:-translate-y-[69%] lg:-translate-y-[55%]  top-full"
        }`}
      >
        <div className="screen py-2 flex items-center justify-between padding-x">
          {/* Logo */}
          <a href="/" className="cursor-pointer">
            <Image
              src={"/images/logo.svg"}
              alt="logo"
              width={120}
              height={50}
              className="w-[170px] md:w-[160px] lg:w-[220px]"
            />
          </a>

          {/* Desktop navigation */}
          <nav>
            <ul className="xl:flex gap-x-10 hidden">
              {navItems.map((item, index) => {
                const isActive = path === item.href;
                return (
                  <li key={index} className="group relative cursor-pointer">
                    <a
                      href={item.href}
                      className={`relative z-50 ${
                        isActive
                          ? "text-primaryred font-bold"
                          : "group-hover:text-primaryred"
                      }`}
                    >
                      {item.label}
                    </a>
                    {isActive && (
                      <div className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 h-16 w-16">
                        <Image
                          src="/images/icons/button-style.svg"
                          alt="style-1"
                          width={120}
                          height={120}
                          className="h-full w-full"
                        />
                      </div>
                    )}
                  </li>
                );
              })}
            </ul>
          </nav>

          {/* Buttons */}
          {isLogIn ? (
            <div className="hidden xl:flex xl:items-center space-x-5">
              <CustomDropdown
                options={[
                  { value: "english", label: "English" },
                  { value: "hindi", label: "Hindi" },
                ]}
                onChange={handleLanguageChange}
                placeholder={locale === "en" ? "English" : "Hindi"}
                className="w-44"
              />

              {/* Cart  */}
              <Link
                href={"/cart"}
                className="h-12 w-12 p-3 bg-[#FF7B07]/20 group hover:bg-primaryred duration-300 ease-in-out rounded-full flex-center relative cursor-pointer"
              >
                <BagIcon className="h-7 w-7 text-black group-hover:text-white duration-300 ease-in-out" />
                <div className=" h-5 w-5 text-white absolute bg-[#DC8940] top-1 rounded-full right-0  text-sm flex items-center justify-center">
                  3
                </div>
              </Link>
              <div className="h-12 w-12 bg-[#FF7B07]/20 rounded-full flex-center overflow-hidden cursor-pointer">
                <Image
                  src="/images/team/NarendraRajSingh.png"
                  alt="user"
                  width={920}
                  height={20}
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          ) : (
            <div className="space-x-5">
              <CustomDropdown
                options={[
                  { value: "english", label: "English" },
                  { value: "hindi", label: "Hindi" },
                ]}
                onChange={handleLanguageChange}
                placeholder={locale === "en" ? "English" : "Hindi"}
                className="w-44"
              />
              <Button
                href="/auth/login"
                className="!py-3 !px-8 hover:bg-primaryred !text-white"
              >
                {t("auth.login")}
              </Button>
            </div>
          )}
          {/* Mobile menu button */}
          <div className="xl:hidden">
            <button
              onClick={toggleMenu}
              className="text-primaryred p-2 focus:outline-none"
            >
              {isMenuOpen ? (
                <IoMdClose className="h-8 w-8" />
              ) : (
                <RiMenu3Line className="h-8 w-8" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div
          ref={mobileMenuRef}
          className="fixed top-0 right-0 w-[80%] min-h-screen bg-white shadow-lg z-[999] overflow-y-auto"
        >
          <div className="p-4 flex justify-end">
            <button
              onClick={toggleMenu}
              className="text-primaryred p-2 focus:outline-none"
            >
              <IoMdClose className="h-8 w-8" />
            </button>
          </div>

          <div className="p-6 space-y-8">
            <div className="flex justify-center">
              <a href="/">
                <Image
                  src={"/images/logo.svg"}
                  alt="logo"
                  width={140}
                  height={50}
                />
              </a>
            </div>

            <nav>
              <ul className="space-y-6">
                {navItems.map((item, index) => (
                  <li key={index} className="mobile-menu-item border-b pb-2">
                    <a
                      href={item.href}
                      className={`text-primaryred block text-lg ${
                        item.href === path
                          ? "text-primaryred"
                          : "hover:text-primaryred"
                      }`}
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            <div className="space-y-4">
              <CustomDropdown
                options={[
                  { value: "english", label: "English" },
                  { value: "hindi", label: "Hindi" },
                ]}
                onChange={handleLanguageChange}
                placeholder={locale === "en" ? "English" : "Hindi"}
                className="w-44"
              />
              {/* <Button
                href="/auth/login"
                className="w-full !py-3 !px-8 hover:bg-primaryred !text-white"
              >
                {t("auth.login")}
              </Button> */}
            </div>

            {isLogIn && (
              <div className="flex items-center justify-between border-t border-b py-4">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 bg-[#FF7B07]/20 rounded-full flex-center overflow-hidden">
                    <Image
                      src="/images/team/NarendraRajSingh.png"
                      alt="user"
                      width={40}
                      height={40}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <span className="text-gray-700 font-medium">My Account</span>
                </div>

                <Link
                  href="/cart"
                  className="flex items-center gap-2 bg-[#FF7B07]/20 hover:bg-primaryred hover:text-white duration-300 ease-in-out rounded-full p-2 relative"
                >
                  <BagIcon className="h-6 w-6" />
                  <span className="h-5 w-5 text-white absolute bg-[#DC8940] -top-1 rounded-full -right-1 text-xs flex items-center justify-center">
                    3
                  </span>
                </Link>
              </div>
            )}

            <div className="pt-4">
              <div className="flex items-center gap-x-2 mb-3">
                <FaPhoneAlt className="text-primaryred" />
                <a href="tel: +91-8955249714" className="text-gray-700">
                  {t("contact.phone")}
                </a>
              </div>
              <div className="flex items-center gap-x-2">
                <IoMdMail className="text-primaryred" />
                <a href="mailto:info@theoneaim.co.in" className="text-gray-700">
                  {t("contact.email")}
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
