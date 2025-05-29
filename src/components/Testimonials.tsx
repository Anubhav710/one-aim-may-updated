"use client";

import React, { useEffect, useRef, useState } from "react";
import CommonHeading from "./ui/CommonHeading";
import TestimonialCard from "./ui/TestimonialCard";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Autoplay,
  FreeMode,
  Mousewheel,
  Navigation,
  Pagination,
} from "swiper/modules";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/free-mode";
import "swiper/css/autoplay";
import { CommonHeading2 } from "./common/CommonHeading2";
import axios from "axios";
import { TestimonialList } from "@/types";

gsap.registerPlugin(ScrollTrigger);

interface TestimonialResponse {
  data: Testimonial[];
}

interface Testimonial {
  name: string;
  sub_heading: string;
  content: string;
  caption: string | null;
  sequence: number;
  image: MediaItem;
  media: MediaItem[];
}

interface MediaItem {
  id: number;
  model_type: string;
  model_id: number;
  uuid: string;
  collection_name: string;
  name: string;
  file_name: string;
  mime_type: string;
  disk: string;
  conversions_disk: string;
  size: number;
  manipulations: any[];
  custom_properties: any[];
  generated_conversions: {
    thumb: boolean;
    preview: boolean;
  };
  responsive_images: any[];
  order_column: number;
  created_at: string;
  updated_at: string;
  url: string;
  thumbnail: string;
  preview: string;
  original_url: string;
  preview_url: string;
}

const Testimonials = () => {
  const prevButtonClass = "custom-prev-button";
  const nextButtonClass = "custom-next-button";
  // Corrected state declaration and initialization
  const [testimonialData, setTestimonialData] = useState<TestimonialList>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const response = await axios.get<TestimonialList>(
          `https://oneaim-admin.utxotech.com/api/v1/testimonials`,
          {
            headers: {
              Authorization: `Bearer ak_y6d4lk60QIrkdu23knAdJLeyabdEerT5`,
            },
          }
        );
        // Set the fetched data into state
        setTestimonialData(response.data);

        setLoading(false);
      } catch (err) {
        console.error("Error fetching testimonials:", err);
        setError("Failed to load testimonials.");
        setLoading(false);
      }
    };

    fetchTestimonials();
  }, []); // Empty dependency array means this runs once on mount

  return (
    <section className="testimonial-gradient-bg overflow-hidden bg-gradient-to-t from-[#FFE5E5] via-[#FFEBD9] to-[#FFF5EE] relative  ">
      <div className="screen padding-tx">
        {/* Decorative elements */}
        <div className="absolute top-20 left-10 w-32 h-32 rounded-full bg-[#c1151b]/5 blur-2xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 rounded-full bg-[#c1151b]/5 blur-2xl"></div>

        <section className="screen  relative z-10">
          <div className="w-max mx-auto">
            <CommonHeading2 title="Testimonials" className="!mb-0" />
          </div>

          <div className="relative testimonial-slider ">
            {/* Render navigation buttons only if there are testimonials */}
            {testimonialData.length > 0 && (
              <>
                <button
                  className={`${prevButtonClass} group absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white w-10 h-10 max-sm:w-7 max-sm:h-7 rounded-full shadow-lg flex items-center justify-center hover:bg-[#c1151b] hover:text-white transition-colors duration-300`}
                  aria-label="Previous slide"
                >
                  <FaChevronLeft className="text-[#c1151b] group-hover:text-white" />
                </button>

                <Swiper
                  modules={[
                    Navigation,
                    Pagination,
                    Mousewheel,
                    FreeMode,
                    Autoplay,
                  ]}
                  freeMode={true}
                  grabCursor={true}
                  autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                    pauseOnMouseEnter: true,
                  }}
                  navigation={{
                    nextEl: `.${nextButtonClass}`,
                    prevEl: `.${prevButtonClass}`,
                  }}
                  breakpoints={{
                    320: { slidesPerView: 1, spaceBetween: 2 },
                    480: { slidesPerView: 2, spaceBetween: 10 },
                    640: { slidesPerView: 2, spaceBetween: 10 },
                    768: { slidesPerView: 2, spaceBetween: 10 },
                    991: { slidesPerView: 3, spaceBetween: 20 },
                    1024: { slidesPerView: 3, spaceBetween: 20 },
                    1200: { slidesPerView: 4, spaceBetween: 20 },
                  }}
                  className="!pt-20 !pb-10  md:!px-10 !px-5"
                >
                  {/* Map over fetched testimonial data */}
                  {testimonialData.map((testimonial) => (
                    <SwiperSlide key={testimonial.name}>
                      <TestimonialCard
                        name={testimonial.name}
                        subHeading={testimonial.sub_heading}
                        content={testimonial.content}
                        imgsrc={testimonial.image_url}
                      />
                    </SwiperSlide>
                  ))}
                </Swiper>

                <button
                  className={`${nextButtonClass} group absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white w-10 h-10 max-sm:w-7 max-sm:h-7 rounded-full shadow-lg flex items-center justify-center hover:bg-[#c1151b] hover:text-white transition-colors duration-300`}
                  aria-label="Next slide"
                >
                  <FaChevronRight className="text-[#c1151b] group-hover:text-white" />
                </button>
              </>
            )}
          </div>
        </section>
        <div className="h-20"></div>
      </div>
    </section>
  );
};

export default Testimonials;
