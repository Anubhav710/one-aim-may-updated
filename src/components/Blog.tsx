"use client";
import React, { useEffect, useState } from "react";
import CommonHeading from "./ui/CommonHeading";
import BlogCard from "./ui/BlogCard";
import { CommonHeading2 } from "./common/CommonHeading2";
import axios from "axios";
import { BlogList } from "@/types";

const Blog = () => {
  const [faqData, setFaqData] = useState<BlogList>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await axios.get<BlogList>(
          `https://oneaim-admin.utxotech.com/api/v1/blogs`,
          {
            headers: {
              Authorization: `Bearer ak_y6d4lk60QIrkdu23knAdJLeyabdEerT5`,
            },
          }
        );
        // Set the fetched data into state
        setFaqData(response.data);

        setLoading(false);
      } catch (err) {
        console.error("Error fetching faqs:", err);
        setError("Failed to load faqs.");
        setLoading(false);
      }
    };
    fetchBlogs();
  }, []);
  return (
    <section className="bg-gradient-to-b from-[#FFE5E5] via-[#FFEBD9] to-[#FFF5EE]">
      <div className="screen  padding-bx">
        <div className="mx-auto w-max">
          <CommonHeading2 title="Latest Updates" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 max-sm:space-y-6 gap-x-6">
          {faqData.map((faq) => (
            <BlogCard
              key={faq.title}
              blogSlug={faq.slug}
              title={faq.title}
              featured_image_url={faq.featured_image_url}
              publish_date={faq.publish_date}
              short_description={faq.short_description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
