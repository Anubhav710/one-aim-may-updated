"use client";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import CommonHeading from "./ui/CommonHeading";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from "split-type";

const Moto = () => {
  const leftImageRef = useRef(null);
  const rightImageRef = useRef(null);
  const contentRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: contentRef.current,
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none reverse",
      },
    });

    // Initial state - images and content hidden
    gsap.set([leftImageRef.current, rightImageRef.current], {
      opacity: 0,
      x: (index) => (index === 0 ? -50 : 50),
      y: isMobile ? 50 : 0,
    });
    gsap.set(contentRef.current, { opacity: 0, y: 30 });

    // Animation sequence
    tl.to([leftImageRef.current, rightImageRef.current], {
      opacity: 1,
      x: 0,
      y: 0,
      duration: 0.8,
      ease: "power3.out",
      stagger: 0.2,
    }).to(
      contentRef.current,
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power2.out",
      },
      "-=0.4"
    );

    return () => {
      if (tl.scrollTrigger) {
        tl.scrollTrigger.kill();
      }
      tl.kill();
    };
  }, [isMobile]);

  return (
    <section className="bg-[#FFF4EC] padding-top relative">
      <div>
        <div className="flex max-sm:flex-col sm:flex-col md:flex-row  gap-8 md:gap-x-5">
          {/* Left image */}
          <div
            ref={leftImageRef}
            className="w-full md:flex-1  rounded-tr-[5rem] md:rounded-tr-[12rem] overflow-hidden"
          >
            <div className="relative  h-[400px]  md:h-full">
              <Image
                src={"/images/moto/vision.png"}
                alt="Our Values"
                width={1440}
                height={1200}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Center content */}
          <div
            ref={contentRef}
            className="w-full md:flex-[1.5] h-full my-auto space-y-8  md:space-y-14 px-4"
          >
            <div>
              <div className="mx-auto w-max">
                <CommonHeading title="Our Beliefs" />
              </div>
              <p className="text-base sm:text-lg text-center w-full mx-auto">
                We believe in equal rights to education. We almost promote the
                idea of cohesiveness irrespective of which gender or caste a
                person belongs to.
              </p>
            </div>
            <div>
              <div className="mx-auto w-max">
                <CommonHeading title="Our Vision" />
              </div>
              <p className="text-base sm:text-lg text-center max-w-[90%] mx-auto">
                We envision an India where there are no quotas and reservations
                in learning. One Aim is a step closer to what we want to build
                as a team.
              </p>
            </div>
          </div>

          {/* Right image */}
          <div
            ref={rightImageRef}
            className="w-full md:flex-1  bg-red-300 rounded-bl-[5rem] md:rounded-bl-[12rem] overflow-hidden h-max"
          >
            <div className="relative h-[400px] md:h-full">
              <Image
                src={"/images/moto/vison-2.png"}
                alt="Our Values"
                width={1240}
                height={1200}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Moto;
