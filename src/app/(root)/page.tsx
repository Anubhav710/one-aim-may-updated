import About from "@/components/About";
import Blog from "@/components/Blog";
import Course from "@/components/Course";
import FeaturedCourse from "@/components/FeaturedCourse";
import FilteredCourse from "@/components/FilteredCourse";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Info from "@/components/Info";
import Moto from "@/components/Moto";
import Team from "@/components/Team";
import Testimonials from "@/components/Testimonials";
import TopDown from "@/components/TopDown";

import WhyChooseUs from "@/components/WhyChooseUs";

export default function Home() {
  return (
    <main className="overflow-x-clip relative">
      <Hero />
      <About />
      <Course />
      <WhyChooseUs />
      <FeaturedCourse />
      <Info />
      <Team />
      <FilteredCourse />
      <Moto />
      <Testimonials />
      <Blog />
    </main>
  );
}
