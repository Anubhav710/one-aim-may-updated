import Image from "next/image";
import React from "react";
import BlogCard from "../components/BlogCard";
import {
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaSearch,
  FaHeart,
} from "react-icons/fa";
import Footer from "@/components/Footer";

const blogPosts = [
  {
    id: 1,
    image: "/images/blog/blog.png",
    date: "11 Jan, 2025",
    title: "How to Create an Effective Study Plan",
    description:
      "Learn how to create a study plan that covers all subjects systematically.",
    link: "/blog/1",
  },
  {
    id: 2,
    image: "/images/blog/blog-2.png",
    date: "12 Jan, 2025",
    title: "Staying Motivated During IAS Preparation",
    description:
      "Explore techniques to stay motivated and focused throughout your journey.",
    link: "/blog/2",
  },
  {
    id: 3,
    image: "/images/blog/blog-show.png",
    date: "13 Jan, 2025",
    title: "Top Strategies for Cracking IAS Prelims",
    description:
      "Discover the best strategies to ace your IAS prelims with our expert tips.",
    link: "/blog/3",
  },
  {
    id: 4,
    image: "/images/blog/blog.png",
    date: "14 Jan, 2025",
    title: "Essential Books for UPSC Preparation",
    description:
      "A comprehensive guide to the most important books for your UPSC journey.",
    link: "/blog/4",
  },
  {
    id: 5,
    image: "/images/blog/blog-2.png",
    date: "15 Jan, 2025",
    title: "Time Management Tips for UPSC Aspirants",
    description:
      "Learn effective time management strategies to balance your preparation.",
    link: "/blog/5",
  },
  {
    id: 6,
    image: "/images/blog/blog-show.png",
    date: "16 Jan, 2025",
    title: "How to Approach UPSC Mains Answer Writing",
    description:
      "Master the art of writing effective answers for the UPSC Mains examination.",
    link: "/blog/6",
  },
];

const categories = [
  { name: "Study resources", count: 15 },
  { name: "Exam advice", count: 8 },
  { name: "General knowledge", count: 12 },
  { name: "Student success", count: 9 },
];

const instagramPosts = [
  "/images/blog/blog-show.png",
  "/images/blog/blog-2.png",
  "/images/blog/blog.png",
  "/images/blog/blog-show.png",
  "/images/blog/blog-2.png",
  "/images/blog/blog.png",
  "/images/blog/blog-show.png",
  "/images/blog/blog-2.png",
  "/images/blog/blog.png",
];

const BlogId = async ({ params }: { params: Promise<{ blogId: string }> }) => {
  const { blogId } = await params;
  return (
    <div className="bg-gradient-to-t from-[#FFE5E5] via-[#FFEBD9] to-[#FFF5EE]">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Main Content */}
          <div className="w-full lg:w-2/3">
            {/* Image Container */}
            <div className="mb-6">
              <div className="h-[500px] overflow-hidden rounded-lg">
                <Image
                  src={"/images/blog/blog-show.png"}
                  alt="blog"
                  width={1270}
                  height={500}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="mt-4 flex items-center gap-4">
                <p className="text-primaryred font-medium">11 Jan, 2025</p>
                <div className="flex items-center gap-3">
                  <FaHeart className="text-primaryred" />
                  <span className="text-gray-600">4.8</span>
                </div>
              </div>
            </div>

            {/* Content Container */}
            <div>
              <h1 className="text-3xl font-bold mb-4">
                Top Strategies for Cracking IAS Prelims
              </h1>
              <p className="text-gray-600 mb-8">
                The IAS prelims exam is the first hurdle in the journey to
                becoming a civil servant. It's a test of both knowledge and
                strategy. In this article, we will explore the top strategies to
                help you crack the IAS prelims with confidence.
              </p>

              <div className="space-y-8">
                <div>
                  <h2 className="text-2xl font-semibold mb-3">
                    1. Understand the Exam Pattern
                  </h2>
                  <p className="text-gray-600 mb-4">
                    Before diving into your preparation, it's crucial to
                    understand the exam pattern. The IAS prelims consist of two
                    papers:
                  </p>
                  <ul className="list-disc pl-6 mb-4 text-gray-600 space-y-2">
                    <li>
                      <span className="font-medium">
                        General Studies Paper I:
                      </span>{" "}
                      Covers subjects like History, Geography, Polity, Economy,
                      Environment, and Current Affairs.
                    </li>
                    <li>
                      <span className="font-medium">
                        General Studies Paper II (CSAT):
                      </span>{" "}
                      Tests your aptitude, logical reasoning, and comprehension
                      skills.
                    </li>
                  </ul>
                  <h3 className="text-xl font-semibold mt-4 mb-2">
                    Key Points:
                  </h3>
                  <ul className="list-disc pl-6 text-gray-600 space-y-2">
                    <li>
                      Paper I is worth 200 marks, and Paper II is qualifying in
                      nature, requiring a minimum of 33% to pass.
                    </li>
                    <li>
                      Negative marking is applicable, so accuracy is essential.
                    </li>
                  </ul>
                </div>

                <div className="  border-primaryred p-5 ">
                  <h2 className="text-2xl font-semibold mb-3">
                    2. Create a Study Schedule
                  </h2>
                  <p className="text-gray-600 mb-4">
                    A well-structured study schedule is the backbone of
                    effective preparation. Allocate specific time slots for each
                    subject and stick to your timetable.
                  </p>

                  <h3 className="text-xl font-semibold mt-4 mb-2">Tips:</h3>
                  <ul className="list-disc pl-6 text-gray-600 space-y-2">
                    <li>
                      Divide your day into study sessions with breaks in between
                      to avoid burnout.
                    </li>
                    <li>
                      Focus on covering the entire syllabus at least once before
                      moving on to revision.
                    </li>
                    <li>
                      Include time for current affairs and newspaper reading in
                      your daily routine.
                    </li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-semibold mb-3">
                    3. Focus on High-Yield Topics
                  </h2>
                  <p className="text-gray-600 mb-4">
                    Not all topics carry the same weight. Identify high-yield
                    topics that are frequently asked in the exam and prioritize
                    them in your preparation.
                  </p>

                  <h3 className="text-xl font-semibold mt-4 mb-2">
                    High-Yield Subjects:
                  </h3>
                  <ul className="list-disc pl-6 text-gray-600 space-y-2">
                    <li>
                      <span className="font-medium">History:</span> Modern
                      Indian History, Freedom Struggle
                    </li>
                    <li>
                      <span className="font-medium">Geography:</span> Indian and
                      World Geography, Physical Geography
                    </li>
                    <li>
                      <span className="font-medium">Polity:</span> Indian
                      Constitution, Governance, Political System
                    </li>
                    <li>
                      <span className="font-medium">Economy:</span> Economic
                      Development, Current Economic Events
                    </li>
                    <li>
                      <span className="font-medium">Environment:</span>{" "}
                      Biodiversity, Climate Change, Environmental Issues
                    </li>
                  </ul>
                </div>
              </div>

              {/* Social Share */}
              {/* <div className="flex gap-2 my-8">
                <button className="bg-blue-600 text-white p-2 rounded-full">
                  <FaFacebook />
                </button>
                <button className="bg-blue-400 text-white p-2 rounded-full">
                  <FaTwitter />
                </button>
                <button className="bg-blue-700 text-white p-2 rounded-full">
                  <FaLinkedin />
                </button>
              </div> */}
            </div>

            {/* Recent Articles */}
            <div className="mt-12">
              <h2 className="text-2xl font-bold mb-6">Recent Articles</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {blogPosts.slice(0, 1).map((post) => (
                  <BlogCard key={post.id} {...post} />
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="w-full lg:w-1/3">
            {/* Search */}
            <div className="mb-8">
              <h3 className="text-xl font-medium mb-4 text-primaryred">
                Search
              </h3>
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search..."
                  className="w-full border border-gray-200 rounded-full py-2 px-4 pr-10 focus:outline-none focus:border-primaryred"
                />
                <button className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                  <FaSearch />
                </button>
              </div>
            </div>

            {/* Categories */}
            <div className="mb-8">
              <h3 className="text-xl font-medium mb-4 text-primaryred">
                Categories
              </h3>
              <ul className="space-y-3">
                {categories.map((category, index) => (
                  <li
                    key={index}
                    className="flex justify-between items-center border-b border-gray-100 pb-2"
                  >
                    <a href="#" className="text-gray-700 hover:text-primaryred">
                      {category.name}
                    </a>
                    <span className="text-gray-500 text-sm">
                      {category.count}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Instagram Section */}
            <div>
              <h3 className="text-xl font-medium mb-4 text-primaryred">
                Instagram
              </h3>
              <div className="grid grid-cols-3 gap-2">
                {instagramPosts.map((post, index) => (
                  <div
                    key={index}
                    className="aspect-square overflow-hidden rounded"
                  >
                    <Image
                      src={post}
                      alt={`Instagram post ${index + 1}`}
                      width={100}
                      height={100}
                      className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogId;
