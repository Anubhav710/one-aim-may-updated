import Banner from "@/components/common/Banner";
import Footer from "@/components/Footer";
import Link from "next/link";
import React from "react";
import BlogCard from "@/components/ui/BlogCard";

const blogPosts = [
  {
    id: 1,
    image: "/images/blog/blog-1.jpg",
    date: "11 Jan, 2025",
    title: "How to Create an Effective Study Plan",
    description:
      "Learn how to create a study plan that covers all subjects systematically.",
    link: "/blog/1",
  },
  {
    id: 2,
    image: "/images/blog/blog-2.jpg",
    date: "12 Jan, 2025",
    title: "Staying Motivated During IAS Preparation",
    description:
      "Explore techniques to stay motivated and focused throughout your journey.",
    link: "/blog/2",
  },
  {
    id: 3,
    image: "/images/blog/blog-3.jpg",
    date: "13 Jan, 2025",
    title: "Top Strategies for Cracking IAS Prelims",
    description:
      "Discover the best strategies to ace your IAS prelims with our expert tips.",
    link: "/blog/3",
  },
  {
    id: 4,
    image: "/images/blog/blog-4.jpg",
    date: "14 Jan, 2025",
    title: "Essential Books for UPSC Preparation",
    description:
      "A comprehensive guide to the most important books for your UPSC journey.",
    link: "/blog/4",
  },
  {
    id: 5,
    image: "/images/blog/blog-5.jpg",
    date: "15 Jan, 2025",
    title: "Time Management Tips for UPSC Aspirants",
    description:
      "Learn effective time management strategies to balance your preparation.",
    link: "/blog/5",
  },
  {
    id: 6,
    image: "/images/blog/blog-6.jpg",
    date: "16 Jan, 2025",
    title: "How to Approach UPSC Mains Answer Writing",
    description:
      "Master the art of writing effective answers for the UPSC Mains examination.",
    link: "/blog/6",
  },
];

const BlogPage = () => {
  return (
    <div className="bg-beige-50 min-h-screen">
      <Banner title="Blog" desp="Empowering Lives, One Step at a Time">
        <Link href="/">Home</Link>
        <span>{">"}</span>
        <span className="text-[#FF8315]">Blog</span>
      </Banner>
      <div className="container mx-auto py-24 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {blogPosts.map((post) => (
            <BlogCard key={post.id} {...post} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
