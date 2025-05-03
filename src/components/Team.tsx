"use client";
import React, { useEffect, useRef } from "react";
import CommonHeading from "./ui/CommonHeading";
import TeamCard from "./ui/TeamCard";
import Button from "./ui/Button";
import { Autoplay, EffectFade } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import { Navigation } from "swiper/modules";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { teamInfo } from "@/constant/page";

const Team = () => {
  return (
    <section className="bg-gradient-to-t from-[#FFE5E5] via-[#FFEBD9] to-[#FFF5EE] padding-yx">
      <div className="screen ">
        <div className="w-max mx-auto">
          <CommonHeading title="Meet Our Team" />
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
            style={{
              padding: "0px 10px 50px 10px",
            }}
          >
            {teamInfo.map((member) => (
              <SwiperSlide key={member.id}>
                <div className="transform transition-transform hover:scale-[1.02] duration-300">
                  <TeamCard
                    name={member.name}
                    qualification={member.qualifications}
                    description={member.description}
                    role={member.role}
                    image={member.image}
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

        <div className="h-full w-max mx-auto mt-5">
          <Button href="/faculty" className="!px-16 !text-white">
            View All
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Team;
