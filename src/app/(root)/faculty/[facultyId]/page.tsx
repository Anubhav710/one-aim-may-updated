import Banner from "@/components/common/Banner";
import BannerSec from "@/components/common/BannerSec";
import { CommonHeading2 } from "@/components/common/CommonHeading2";
import ProfileCards from "@/components/common/ProfileCards";
import Footer from "@/components/Footer";
import Testimonials from "@/components/Testimonials";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const FacultyPage = () => {
  return (
    <div>
      <div>
        <BannerSec>
          <div className="flex gap-x-2">
            <Link href="/">Home</Link>
            <span>{">"}</span>
            <Link href="/faculty">Faculty</Link>
            <span>{">"}</span>
            <span className="text-primaryred">Faculty Details</span>
          </div>
        </BannerSec>
        <ProfileCards />

        <div className="space-y-4 screen pb-9 border-b-2 border-gray-300 padding-tx">
          <h2 className="text-primaryred heading2 relative  w-max mx-auto">
            About Me
          </h2>
          <p className="text-center text-xl leading-9">
            Mrs. Anuradha brings over two decades of teaching experience in the
            field of science. Holding a Master's degree in Botany and a Bachelor
            of Education, she has dedicated her career to fostering a deep
            understanding of scientific concepts among her students. Her
            approach combines theoretical knowledge with practical applications,
            aiming to inspire a passion for science in learners.
          </p>
        </div>
        <div className="space-y-6 padding-yx">
          <h2 className="text-primaryred heading2 relative  w-max mx-auto">
            Courses Offered
          </h2>
          <div className="flex flex-col md:flex-row gap-x-7 mx-auto w-max">
            <div className="  flex flex-col  px-4 py-6  items-center group space-y-4 ">
              <div className="h-16 w-16 p-2  rounded-full bg-white">
                <Image
                  src="/images/icons/work.svg"
                  alt="science"
                  width={1200}
                  height={1200}
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="text-lg w-[22ch] font-semibold text-center">
                Comprehensive Science for Competitive Exams
              </p>
            </div>
            <div className=" md:border-x md:border-x-orange max-sm:border-y max-sm:border-y-orange flex flex-col  group px-4 py-6 items-center space-y-4 ">
              <div className="h-16 w-16 p-2  rounded-full bg-white">
                <Image
                  src="/images/icons/botany.svg"
                  alt="science"
                  width={1200}
                  height={1200}
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="text-lg w-[22ch] font-semibold text-center">
                Botany Specialization Modules
              </p>
            </div>
            <div className="flex flex-col  px-4 py-6 items-center sp groupace-y-4 ">
              <div className="h-16 w-16 p-2  rounded-full bg-white">
                <Image
                  src="/images/icons/literacy.svg"
                  alt="science"
                  width={1200}
                  height={1200}
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="text-lg w-[22ch] font-semibold text-center">
                Practical Science Workshops
              </p>
            </div>
          </div>
        </div>
        <div>
          <Testimonials />
        </div>
      </div>
    </div>
  );
};

export default FacultyPage;
