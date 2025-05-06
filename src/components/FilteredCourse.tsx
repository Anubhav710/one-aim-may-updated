"use client";
import React, { useState, useEffect } from "react";
import CommonHeading from "./ui/CommonHeading";
import FilteredCard from "./ui/FilteredCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Mousewheel, Navigation, Pagination } from "swiper/modules";
import FeaturedCard from "./ui/FeaturedCard";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { CommonHeading2 } from "./common/CommonHeading2";

const FilteredCourse = () => {
  const [dimensions, setDimensions] = useState({
    width: typeof window !== "undefined" ? window.innerWidth : 1200,
    height: typeof window !== "undefined" ? window.innerHeight : 800,
  });

  // Added isMounted state to ensure code only runs client-side
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    // Set isMounted to true when component mounts
    setIsMounted(true);

    // Update dimensions immediately after mounting
    setDimensions({
      width: window.innerWidth,
      height: window.innerHeight,
    });

    const handleResize = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Calculate curve parameters based on window width
  const curveHeight = Math.min(120, dimensions.width * 0.08);

  return (
    <div className="bg-gradient-to-b relative">
      {/* Responsive top curved SVG */}

      <section className="bg-[#FFE4CD]  padding-x max-sm:pt-[70px] py-[100px]   relative rounded-b-[12rem] max-sm:rounded-b-[2rem] rounded-t-[12rem] max-sm:rounded-t-[2rem]">
        <div className="screen">
          <div className="w-max mx-auto">
            <CommonHeading2 title="Filtered Courses" />
          </div>
          <div className="relative">
            {/* Custom navigation buttons */}
            <button
              className="custom-prev-button group absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white w-10 h-10 max-sm:w-7 max-sm:h-7 rounded-full shadow-lg flex items-center justify-center hover:bg-[#DC8940] hover:text-white transition-colors duration-300"
              aria-label="Previous slide"
            >
              <FaChevronLeft className="text-[#DC8940] group-hover:text-white" />
            </button>
            <Swiper
              modules={[Navigation, Pagination, Mousewheel, FreeMode]}
              spaceBetween={20}
              slidesPerView={3}
              freeMode={true} // Enables dragging
              grabCursor={true} // Shows grab cursor when hovering
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
              className="pb-12"
              breakpoints={{
                // Responsive breakpoints
                320: {
                  slidesPerView: 1,
                  spaceBetween: 10,
                },
                640: {
                  slidesPerView: 2,
                  spaceBetween: 15,
                },
                1024: {
                  slidesPerView: 3,
                  spaceBetween: 20,
                },
              }}
            >
              <SwiperSlide>
                <FilteredCard />
              </SwiperSlide>
              <SwiperSlide>
                <FilteredCard />
              </SwiperSlide>
              <SwiperSlide>
                <FilteredCard />
              </SwiperSlide>
              <SwiperSlide>
                <FilteredCard />
              </SwiperSlide>
              <SwiperSlide>
                <FilteredCard />
              </SwiperSlide>
              <SwiperSlide>
                <FilteredCard />
              </SwiperSlide>
            </Swiper>

            <button
              className="custom-next-button group absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white w-10 h-10 max-sm:w-7 max-sm:h-7 rounded-full shadow-lg flex items-center justify-center hover:bg-[#DC8940] hover:text-white transition-colors duration-300"
              aria-label="Next slide"
            >
              <FaChevronRight className="text-[#DC8940] group-hover:text-white" />
            </button>
          </div>
        </div>
      </section>

      {/* Bottom curved SVG */}
      {/* <svg
        className="absolute bottom-0 left-0 w-full h-auto z-10"
        viewBox="0 0 1440 80"
        fill="none"
        preserveAspectRatio="none"
      >
        <path d="M0 80 Q720 0 1440 80 V0 H0 Z" fill="#FFE4CD" />
      </svg> */}
    </div>
  );
};

export default FilteredCourse;
