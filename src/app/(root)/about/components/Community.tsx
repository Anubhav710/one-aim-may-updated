"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import CommonHeading from "@/components/ui/CommonHeading";
import Image from "next/image";
import React from "react";
import Link from "next/link";

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
        <div className="flex max-sm:flex-col gap-y-10">
          <div className="flex-1 flex justify-center  relative">
            <div className="h-[60vh] w-[60vh] max-sm:h-[43vh] max-sm:w-[43vh] flex items-center justify-center">
              <div
                ref={circleRef}
                className="h-[70%] w-[70%] rounded-full border border-[#DC8940] relative flex items-center justify-center"
              >
                <div className="rounded-full h-[19%] w-[19%] max-sm:h-[21%] max-sm:w-[21%] absolute md:-top-8 -top-5">
                  <Image
                    src={"/images/about/image-1.png"}
                    alt="image-1"
                    width={220}
                    height={120}
                    className="bg-cover h-full w-full"
                  />
                </div>
                <div className="rounded-full h-[19%] w-[19%] max-sm:h-[21%] max-sm:w-[21%] absolute md:-bottom-8 -bottom-5">
                  <Image
                    src={"/images/about/image-2.png"}
                    alt="image-2"
                    width={220}
                    height={120}
                    className="bg-cover h-full w-full"
                  />
                </div>
                <div className="rounded-full h-[19%] w-[19%] max-sm:h-[21%] max-sm:w-[21%] absolute md:-right-8 -right-5">
                  <Image
                    src={"/images/about/image-3.png"}
                    alt="image-3"
                    width={220}
                    height={120}
                    className="bg-cover h-full w-full"
                  />
                </div>
              </div>
            </div>
            {/* I don't want to rotate this container  */}
            <div className="h-24 w-24 rounded-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
              <Image
                src={"/images/image.png"}
                alt="center-image"
                width={240}
                height={140}
                className="h-full w-full bg-cover"
              />
            </div>
          </div>
          <div className="flex-1 flex flex-col justify-center">
            <CommonHeading title="Our Community" />
            <hgroup className="space-y-3">
              <h5 className="text-xl font-medium">
                At One Aim - we’re more than just an organization – we’re a
                community. When you join us, you become part of a network of
                like-
              </h5>
              <p>
                Minded individuals who are committed to growth, learning, and
                making a difference. Together, we can achieve more than we ever
                could alone.
              </p>
            </hgroup>
            <Link
              href={"/contact-us"}
              className="bg-black text-white px-7 mt-5 py-2 rounded-full w-max hover:bg-primaryred duration-200"
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
