"use client";

import CommonHeading from "@/components/ui/CommonHeading";
import Image from "next/image";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

// Card Data
const offerings = [
  {
    title: "IAS Preparation",
    description:
      "Prepare for the UPSC exams with comprehensive courses and mentorship.",
    image: "/images/about/we-offer.png",
    bgColor: "bg-white",
    textColor: "text-black",
  },
  {
    title: "Personal Development",
    description: "Build confidence, set goals, and create a life you love.",
    image: "/images/about/we-offer.png",
    bgColor: "bg-orange-400",
    textColor: "text-white",
  },
  {
    title: "Career Growth",
    description:
      "Unlock your professional potential with expert guidance and actionable strategies.",
    image: "/images/about/we-offer.png",
    bgColor: "bg-white",
    textColor: "text-black",
  },
  {
    title: "Personal Development",
    description: "Build confidence, set goals, and create a life you love.",
    image: "/images/about/we-offer.png",
    bgColor: "bg-orange-400",
    textColor: "text-white",
  },
  {
    title: "Career Growth",
    description:
      "Unlock your professional potential with expert guidance and actionable strategies.",
    image: "/images/about/we-offer.png",
    bgColor: "bg-white",
    textColor: "text-black",
  },
  {
    title: "Personal Development",
    description: "Build confidence, set goals, and create a life you love.",
    image: "/images/about/we-offer.png",
    bgColor: "bg-orange-400",
    textColor: "text-white",
  },
  {
    title: "Career Growth",
    description:
      "Unlock your professional potential with expert guidance and actionable strategies.",
    image: "/images/about/we-offer.png",
    bgColor: "bg-white",
    textColor: "text-black",
  },
];

const WhatWeOffer = () => {
  return (
    <section className="bg-gradient-to-t from-[#FFE5E5] via-[#FFEBD9] to-[#FFF5EE] py-16 relative">
      <div className="screen">
        <div className="w-max mx-auto">
          <CommonHeading title="What We Offer" />
        </div>
        <div className="relative px-12 max-sm:px-0 ">
          {/* Custom navigation buttons */}
          <button
            className="custom-prev-button group absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white w-10 h-10 max-sm:w-7 max-sm:h-7 rounded-full shadow-lg flex items-center justify-center hover:bg-primaryred hover:text-white transition-colors duration-300"
            aria-label="Previous slide"
          >
            <FaChevronLeft className="text-primaryred group-hover:text-white" />
          </button>

          <Swiper
            modules={[Navigation, Pagination, Autoplay, EffectFade]}
            spaceBetween={20}
            slidesPerView={3}
            grabCursor={true}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            pagination={{
              clickable: true,
              el: ".swiper-pagination",
              bulletClass: "swiper-pagination-bullet",
              bulletActiveClass: "swiper-pagination-bullet-active",
              type: "bullets",
            }}
            navigation={{
              nextEl: ".custom-next-button",
              prevEl: ".custom-prev-button",
            }}
            breakpoints={{
              320: {
                slidesPerView: 1,
                spaceBetween: 2,
              },
              480: {
                slidesPerView: 2,
                spaceBetween: 10,
              },
              640: {
                slidesPerView: 2,
                spaceBetween: 10,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 10,
              },
              991: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 20,
              },
              1200: {
                slidesPerView: 4,
                spaceBetween: 20,
              },
            }}
            className="!py-10 "
          >
            {offerings.map((member) => (
              <SwiperSlide key={member.title}>
                <div className="transform transition-transform hover:scale-[1.02] duration-300">
                  <WhatWeOfferCard
                    title={member.title}
                    description={member.description}
                    image={member.image}
                    bgColor={
                      member.title === "Personal Development"
                        ? "bg-[#DC8940]"
                        : "bg-[#ffffff]"
                    }
                    textColor={
                      member.title === "Personal Development"
                        ? "text-[#ffffff]"
                        : "text-[#000000]"
                    }
                  />
                </div>
              </SwiperSlide>
            ))}
            <div className="swiper-pagination"></div>
          </Swiper>
          {/* Next Button  */}
          <button
            className="custom-next-button group absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white w-10 h-10 max-sm:w-7 max-sm:h-7 rounded-full shadow-lg flex items-center justify-center hover:bg-primaryred hover:text-white transition-colors duration-300"
            aria-label="Next slide"
          >
            <FaChevronRight className="text-primaryred group-hover:text-white" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default WhatWeOffer;

interface WhatWeOfferCardProps {
  title: string;
  description: string;
  image: string;
  bgColor?: string;
  textColor?: string;
}

// Card Component
const WhatWeOfferCard: React.FC<WhatWeOfferCardProps> = ({
  title,
  description,
  image,
  bgColor,
  textColor,
}) => {
  return (
    <div
      className={`relative flex flex-col items-center justify-center w-full px-5 py-14 rounded-lg shadow-md ${bgColor}`}
    >
      <h4 className={`text-xl font-semibold ${textColor} text-center`}>
        {title}
      </h4>
      <div className="my-4">
        <Image src={image} width={200} height={200} alt={title} />
      </div>
      <p className={`text-center ${textColor} text-sm`}>{description}</p>
    </div>
  );
};
