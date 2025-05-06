"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import Image from "next/image";
import React from "react";
import Link from "next/link";
import { CommonHeading2 } from "@/components/common/CommonHeading2";

const Community = () => {
  const circleRef = useRef(null);

  useEffect(() => {
    gsap.to(circleRef.current, {
      rotation: 360,
      duration: 10,
      repeat: -1,
      ease: "linear",
    });
  }, []);

  return (
    <section className="padding-yx bg-gradient-to-t from-[#FFE5E5] via-[#FFEBD9] to-[#FFF5EE]">
      <div className="screen">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-10">
          <div className="flex-1 flex justify-center relative mx-auto">
            <div className="h-[clamp(350px,40vw,60vh)] w-[clamp(350px,40vw,60vh)] flex items-center justify-center">
              <div
                ref={circleRef}
                className="h-[70%] w-[70%] rounded-full border border-[#DC8940] relative flex items-center justify-center"
              >
                <div className="rounded-full h-[clamp(40px,6vw,70px)] w-[clamp(40px,6vw,70px)] absolute -top-[clamp(15px,2vw,30px)]">
                  <Image
                    src={"/images/about/image-1.png"}
                    alt="image-1"
                    width={220}
                    height={120}
                    className="bg-cover h-full w-full rounded-full"
                  />
                </div>
                <div className="rounded-full h-[clamp(40px,6vw,70px)] w-[clamp(40px,6vw,70px)] absolute -bottom-[clamp(15px,2vw,30px)]">
                  <Image
                    src={"/images/about/image-2.png"}
                    alt="image-2"
                    width={220}
                    height={120}
                    className="bg-cover h-full w-full rounded-full"
                  />
                </div>
                <div className="rounded-full h-[clamp(40px,6vw,70px)] w-[clamp(40px,6vw,70px)] absolute -right-[clamp(15px,2vw,30px)]">
                  <Image
                    src={"/images/about/image-3.png"}
                    alt="image-3"
                    width={220}
                    height={120}
                    className="bg-cover h-full w-full rounded-full"
                  />
                </div>
              </div>
            </div>
            {/* I don't want to rotate this container */}
            <div className="h-[clamp(50px,8vw,96px)] w-[clamp(50px,8vw,96px)] rounded-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
              <Image
                src={"/images/image.png"}
                alt="center-image"
                width={240}
                height={140}
                className="h-full w-full bg-cover rounded-full"
              />
            </div>
          </div>
          <div className="flex-1 flex flex-col justify-center px-[clamp(16px,4vw,32px)] lg:px-0 mt-4 lg:mt-0">
            <CommonHeading2 title="Our Community" />
            <hgroup className="space-y-3">
              <h5 className="font-medium text-lg max-sm:text-base">
                At One Aim - we're more than just an organization – we're a
                community. When you join us, you become part of a network of
                like-
              </h5>
              <p className="font-medium text-lg max-sm:text-base">
                Minded individuals who are committed to growth, learning, and
                making a difference. Together, we can achieve more than we ever
                could alone.
              </p>
            </hgroup>
            <Link
              href={"/contact-us"}
              className="bg-black text-white px-[clamp(20px,3vw,28px)] mt-[clamp(16px,2vw,20px)] py-2 rounded-full w-max hover:bg-primaryred duration-200"
            >
              Join Now
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Community;
