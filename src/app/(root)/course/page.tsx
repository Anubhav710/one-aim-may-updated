import Banner from "@/components/common/Banner";
import Link from "next/link";
import React from "react";
import DemoClass from "./components/DemoClass";
import Testimonials from "@/components/Testimonials";
import FAQ from "./components/FAQ";
import Footer from "@/components/Footer";
import Course from "./components/Course";

const Courses = () => {
  return (
    <section>
      <Banner
        title="Courses"
        desp="Master Your UPSC Preparation with Expert-Led Courses"
      >
        <Link href="/">Home</Link>
        <span>{">"}</span>
        <span className="text-primaryred">Courses</span>
      </Banner>
      <Course />
      <DemoClass />
      <Testimonials />
      <FAQ />
    </section>
  );
};

export default Courses;
