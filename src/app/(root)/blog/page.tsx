import Banner from "@/components/common/Banner";
import Link from "next/link";
import React from "react";
import BlogCard from "@/components/ui/BlogCard";
import axios from "axios";
import { BlogList } from "@/types";

const BlogPage = async () => {
  // Change const to let to allow assignment
  let blogList: BlogList | null = null;
  try {
    const response = await axios.get<BlogList>(
      `https://oneaim-admin.utxotech.com/api/v1/blogs`, // Use environment variable for base URL
      {
        headers: {
          Authorization: `Bearer ak_y6d4lk60QIrkdu23knAdJLeyabdEerT5`, // Use environment variable for auth token
        },
      }
    );
    // Assign the fetched data to blogList
    blogList = response.data;
  } catch (err) {
    console.error("Error fetching blogs:", err);
    // Optionally handle the error state, e.g., set blogList to an empty array
    blogList = [];
  }

  // Ensure blogList is treated as an array for mapping, even if null initially
  const blogsToDisplay = blogList || [];

  return (
    <div className="bg-beige-50 min-h-screen">
      <Banner title="Blog" desp="Empowering Lives, One Step at a Time">
        <Link href="/">Home</Link>
        <span>{">"}</span>
        <span className="text-[#FF8315]">Blog</span>
      </Banner>
      <div className="container mx-auto py-24 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {blogsToDisplay.map((blog) => (
            <BlogCard
              key={blog.slug} // Use slug as key if available and unique
              blogSlug={blog.slug}
              title={blog.title}
              featured_image_url={blog.featured_image_url}
              publish_date={blog.publish_date}
              short_description={blog.short_description}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
