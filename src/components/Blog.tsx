import React from "react";
import CommonHeading from "./ui/CommonHeading";
import BlogCard from "./ui/BlogCard";
import { CommonHeading2 } from "./common/CommonHeading2";

const Blog = () => {
  return (
    <section className="bg-gradient-to-b from-[#FFE5E5] via-[#FFEBD9] to-[#FFF5EE]">
      <div className="screen  padding-bx">
        <div className="mx-auto w-max">
          <CommonHeading2 title="Latest Updates" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 max-sm:space-y-6 gap-x-6">
          <BlogCard />
          <BlogCard />
          <BlogCard />
          <BlogCard />
        </div>
      </div>
    </section>
  );
};

export default Blog;
