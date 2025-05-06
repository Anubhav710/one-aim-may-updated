import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaPlay } from "react-icons/fa";
import Footer from "@/components/Footer";
import Banner from "@/components/common/Banner";
import { CommonHeading2 } from "@/components/common/CommonHeading2";
import { EducationIcon } from "@/components/icons";
import Banner2 from "@/components/common/Banner2";
import Button from "@/components/ui/Button";

const CareerPage = () => {
  const benefits = [
    {
      id: 1,
      title: "Impactful Work",
      description: "Shape the future of civil servants through education",
      icon: <EducationIcon />,
    },
    {
      id: 2,
      title: "Competitive Salary",
      description: "Attractive compensation and benefits",
      icon: <EducationIcon />,
    },
    {
      id: 3,
      title: "Flexible Work Options",
      description: "Balance professional and personal life",
      icon: <EducationIcon />,
    },
    {
      id: 4,
      title: "Growth Opportunities",
      description: "Learn, develop, and advance your career",
      icon: <EducationIcon />,
    },
    {
      id: 5,
      title: "Collaborative Environment",
      description: "Work with talented professionals",
      icon: <EducationIcon />,
    },
  ];

  const jobs = [
    {
      id: 1,
      title: "Content Creator",
      location: "New Delhi, India",
      responsibilities: [
        "Create engaging UPSC preparation content",
        "Develop study materials and resources",
        "Collaborate with subject matter experts",
      ],
      requirements: [
        "Experience in educational content creation",
        "Strong knowledge of UPSC syllabus",
        "Excellent writing and communication skills",
      ],
      icon: <EducationIcon />,
    },
    {
      id: 2,
      title: "Digital Marketer",
      location: "New Delhi, India",
      responsibilities: [
        "Develop and execute digital marketing strategies",
        "Manage social media platforms and content",
        "Analyze campaign performance and optimize results",
      ],
      requirements: [
        "2+ years of digital marketing experience",
        "Knowledge of SEO, SEM, and social media marketing",
        "Strong analytical and creative skills",
      ],
      icon: <EducationIcon />,
    },
    {
      id: 3,
      title: "Content Creator",
      location: "New Delhi, India",
      responsibilities: [
        "Create engaging UPSC preparation content",
        "Develop study materials and resources",
        "Collaborate with subject matter experts",
      ],
      requirements: [
        "Experience in educational content creation",
        "Strong knowledge of UPSC syllabus",
        "Excellent writing and communication skills",
      ],
      icon: <EducationIcon />,
    },
  ];

  return (
    <div className="bg-[#FFF7F0] min-h-screen bg-gradient-to-b from-[#FFE5E5] via-[#FFEBD9] to-[#FFF5EE]">
      {/* Breadcrumb */}
      <Banner title="Career" desp="Join Our Team & Be a Part of One Aim!">
        <div className="flex items-center text-sm">
          <Link href="/" className="hover:text-[#FF7B07]">
            Home
          </Link>
          <span className="mx-2">&gt;</span>
          <span className="text-[#FF7B07]">Career</span>
        </div>
      </Banner>

      {/* Hero Section */}
      <section>
        <div className="screen">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center padding-yx">
            <CommonHeading2
              title="Join Our Team & Be a Part of One Aim!"
              desc=" Are you passionate about teaching, content creation, or
                mentoring UPSC aspirants? Join One Aim and contribute to shaping
                the future of civil servants! We are looking for dedicated
                educators, mentors, and professionals who can help UPSC
                aspirants achieve their dreams."
            />
            <div className="flex justify-center">
              <div className="relative w-64 h-64 sm:w-80 sm:h-[34rem] ">
                <div className="w-full h-full bg-red-100 overflow-hidden  rounded-full ">
                  <Image
                    src="/images/career/career.png"
                    alt="Career at One Aim"
                    width={2400}
                    height={400}
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <div className="bg-lightorange shadow-[0_0_10px_10px_rgba(243,187,138,48)] rounded-full h-16 w-16 flex items-center justify-center cursor-pointer hover:bg-[#FF7B07]/90 transition-all">
                    <FaPlay className="text-white text-2xl" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Work with Us */}
      <section className="padding-bx">
        <div className="screen">
          <div className="mx-auto w-max">
            <CommonHeading2 title="Why Work with Us?" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 mdl:grid-cols-5 gap-4">
            {benefits.map((benefit, index) => (
              <div
                key={benefit.id}
                className={`px-5 py-16 rounded-lg text-center ${"bg-[#FFE6D0] hover:bg-lightorange hover:text-white hover:scale-110 duration-500 transition-all hover:shadow-[0_0_10px_10px_rgba(243,187,138,40)]"}`}
              >
                <div className="h-10 flex justify-center mb-3">
                  <div className="rounded-full  flex items-center justify-center">
                    {benefit.icon}
                  </div>
                </div>
                <h3 className="font-medium sm:text-lg text-sm mb-1">
                  {benefit.title}
                </h3>
                <p className="text-xs sm:text-base">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Current Job Openings */}
      <section>
        <div className="screen padding-bx">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:h-[55vh] min-h-[400px]">
            {jobs.map((job, i) => (
              <div
                key={job.id}
                className={`${
                  i === 1
                    ? "flex flex-col !text-orange justify-center !bg-[#DC8940]/30"
                    : "h-max mt-auto"
                } bg-white p-6 rounded-t-3xl shadow-lg`}
              >
                <h3 className="text-xl sm:text-2xl font-bold text-orange mb-2">
                  {job.title}
                </h3>
                <p className="text-sm mb-4">{job.location}</p>

                <div className="mb-4">
                  <h4 className="text-base sm:text-lg font-semibold mb-2">
                    Responsibilities:
                  </h4>
                  <ul className={` text-xs space-y-1 text-[0.8rem] md:text-md`}>
                    {job.responsibilities.map((item, idx) => (
                      <li key={idx} className="flex items-start">
                        <span
                          className={`inline-block w-1 h-1 rounded-full ${
                            i === 1 ? "bg-orange" : "bg-black"
                          } mt-1.5 mr-2`}
                        ></span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-base sm:text-lg font-semibold mb-2">
                    Requirements:
                  </h4>
                  <ul className="text-xs space-y-1 text-[0.8rem] md:text-md">
                    {job.requirements.map((item, idx) => (
                      <li key={idx} className="flex items-start">
                        <span
                          className={`inline-block w-1 h-1 rounded-full ${
                            i === 1 ? "bg-orange" : "bg-black"
                          } mt-1.5 mr-2`}
                        ></span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Career Application Form */}
      <section className="padding-bx">
        <div className="screen">
          <h2 className="text-2xl md:text-3xl font-bold mb-10 text-[#C1151B] text-center">
            Career Application Form
          </h2>
          <form className="max-w-3xl mx-auto bg-white py-6 px-4 sm:px-8 md:px-12 rounded-lg">
            {/* Personal Details */}
            <div className="mb-8">
              <h3 className="text-[#FF7B07] text-lg sm:text-xl font-semibold mb-4">
                Personal Details
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm mb-1">
                    Full Name<span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full p-2 border-b border-gray-300 focus:border-[#FF7B07] focus:outline-none transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-sm mb-1">
                    Have you prepared for UPSC/State Services?
                  </label>
                  <input
                    type="text"
                    className="w-full p-2 border-b border-gray-300 focus:border-[#FF7B07] focus:outline-none transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-sm mb-1">
                    Email Address<span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    required
                    className="w-full p-2 border-b border-gray-300 focus:border-[#FF7B07] focus:outline-none transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-sm mb-1">
                    Mobile/WhatsApp Number
                    <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    required
                    className="w-full p-2 border-b border-gray-300 focus:border-[#FF7B07] focus:outline-none transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-sm mb-1">Current Location</label>
                  <input
                    type="text"
                    className="w-full p-2 border-b border-gray-300 focus:border-[#FF7B07] focus:outline-none transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-sm mb-1">
                    Position Applying For<span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full p-2 border-b border-gray-300 focus:border-[#FF7B07] focus:outline-none transition-colors"
                  />
                </div>
              </div>
            </div>

            {/* Experience & Qualification */}
            <div className="mb-8">
              <h3 className="text-[#FF7B07] text-lg sm:text-xl font-semibold mb-4">
                Experience & Qualification
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm mb-1">
                    Highest Qualification
                  </label>
                  <input
                    type="text"
                    className="w-full p-2 border-b border-gray-300 focus:border-[#FF7B07] focus:outline-none transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-sm mb-1">
                    Years of Experience
                  </label>
                  <input
                    type="text"
                    className="w-full p-2 border-b border-gray-300 focus:border-[#FF7B07] focus:outline-none transition-colors"
                  />
                </div>
              </div>
            </div>

            {/* Upload Files */}
            <div className="mb-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm mb-1">
                    Upload Resume & Work Samples
                    <span className="text-red-500">*</span>
                  </label>
                  <div className="w-full p-2 border-b border-gray-300 focus:border-[#FF7B07] focus:outline-none transition-colors flex items-center">
                    <input
                      type="file"
                      className="hidden"
                      id="resumeUpload"
                      required
                    />
                    <label
                      htmlFor="resumeUpload"
                      className="text-gray-500 text-sm cursor-pointer"
                    >
                      Choose file...
                    </label>
                  </div>
                </div>
                <div>
                  <label className="block text-sm mb-1">LinkedIn Profile</label>
                  <input
                    type="text"
                    className="w-full p-2 border-b border-gray-300 focus:border-[#FF7B07] focus:outline-none transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-sm mb-1">
                    Upload Cover letter
                  </label>
                  <div className="w-full p-2 border-b border-gray-300 focus:border-[#FF7B07] focus:outline-none transition-colors flex items-center">
                    <input
                      type="file"
                      className="hidden"
                      id="coverLetterUpload"
                    />
                    <label
                      htmlFor="coverLetterUpload"
                      className="text-gray-500 text-sm cursor-pointer"
                    >
                      Choose file...
                    </label>
                  </div>
                </div>
              </div>
            </div>

            {/* Additional Information */}
            <div className="mb-8">
              <h3 className="text-[#FF7B07] text-lg sm:text-xl font-semibold mb-4">
                Availability & Additional Information
              </h3>
              <div className="grid grid-cols-1 gap-4">
                <div>
                  <label className="block text-sm mb-1">
                    Preferred Work Mode
                  </label>
                  <input
                    type="text"
                    className="w-full p-2 border-b border-gray-300 focus:border-[#FF7B07] focus:outline-none transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-sm mb-1">
                    Why do you want to join One Aim?
                  </label>
                  <textarea className="w-full p-2 border-b border-gray-300 focus:border-[#FF7B07] focus:outline-none transition-colors resize-none h-24"></textarea>
                </div>
              </div>
            </div>

            {/* Agreement */}
            <div className="mb-8">
              <h3 className="text-[#FF7B07] text-lg sm:text-xl font-semibold mb-4">
                Agreement & Consent
              </h3>
              <div className="flex items-start mb-6">
                <input type="checkbox" id="agreement" className="mt-1 mr-2" />
                <label htmlFor="agreement" className="text-sm">
                  I confirm that all information provided is accurate and agree
                  to One Aim's Privacy Policy.
                </label>
              </div>
            </div>

            <div className="flex justify-center">
              <Button className="text-white !py-2 !px-7">Submit</Button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
};

export default CareerPage;
