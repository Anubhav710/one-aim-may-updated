"use client";

import { useForm, FieldError } from "react-hook-form";
import { useState } from "react";
import Image from "next/image";
import CommonHeading from "@/components/ui/CommonHeading";
import { FaPhoneAlt } from "react-icons/fa";
import { HiMapPin } from "react-icons/hi2";
import { MdEmail } from "react-icons/md";
import { FaChevronDown } from "react-icons/fa";
import { CommonHeading2 } from "@/components/common/CommonHeading2";

type FormData = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    reset,
  } = useForm<FormData>({
    mode: "onChange", // Validate on change to enable/disable submit button
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit = (data: FormData) => {
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      console.log(data);
      reset();
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <div className="px-4 sm:px-6 lg:px-8 py-12">
      <div className=" w-max mx-auto">
        <CommonHeading2 title="Reach out to us – we'd love to hear from you." />
      </div>
      <div className="flex flex-col md:flex-row gap-6 p-6 rounded-xl max-w-7xl mx-auto">
        {/* Left: Form */}
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="w-full md:w-1/2 space-y-6 flex flex-col justify-center bg-white shadow-md rounded-xl px-8 py-10"
        >
          <input
            type="text"
            placeholder="Name"
            {...register("name", { required: "Name is required" })}
            className="w-full p-4 border rounded-md border-orange-100 bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-orange-300 focus:bg-orange-50 hover:border-orange-300 transition-colors duration-200"
          />
          {errors.name && (
            <p className="text-red-500 text-sm">
              {errors.name.message as string}
            </p>
          )}

          <input
            type="email"
            placeholder="Email"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^\S+@\S+$/i,
                message: "Enter a valid email",
              },
            })}
            className="w-full p-4 border rounded-md border-orange-100 bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-orange-300 focus:bg-orange-50 hover:border-orange-300 transition-colors duration-200"
          />
          {errors.email && (
            <p className="text-red-500 text-sm">
              {errors.email.message as string}
            </p>
          )}

          <div className="relative">
            <select
              {...register("subject", { required: "Subject is required" })}
              className="w-full p-4 border rounded-md border-orange-100 bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-orange-300 focus:bg-orange-50 appearance-none cursor-pointer hover:border-orange-300 transition-colors duration-200"
            >
              <option value="" disabled hidden>
                Select a Subject
              </option>
              <option value="query">General Query</option>
              <option value="support">Support</option>
              <option value="customer_feedback">Customer Feedback</option>
              <option value="partnership">Partnership Inquiry</option>
              <option value="technical_issue">Technical Issue</option>
            </select>
            <div className="absolute right-4 top-1/2 transform -translate-y-1/2 pointer-events-none">
              <FaChevronDown className="h-5 w-5 text-[#FF8315]" />
            </div>
          </div>
          {errors.subject && (
            <p className="text-red-500 text-sm">
              {errors.subject.message as string}
            </p>
          )}

          <textarea
            placeholder="Write a message .."
            {...register("message", { required: "Message is required" })}
            className="w-full p-4 h-32 border rounded-md border-orange-100 bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-orange-300 focus:bg-orange-50 hover:border-orange-300 transition-colors duration-200"
          ></textarea>
          {errors.message && (
            <p className="text-red-500 text-sm">
              {errors.message.message as string}
            </p>
          )}
          <div className="mx-auto w-max">
            <button
              type="submit"
              disabled={!isValid || isSubmitting}
              className={`${
                isValid
                  ? "bg-black hover:bg-primaryred duration-300"
                  : "bg-gray-400 cursor-not-allowed"
              } text-white px-14 py-3 rounded-full shadow-md transition-colors duration-300`}
            >
              {isSubmitting ? "Submitting..." : "Submit"}
            </button>
          </div>
        </form>

        {/* Right: Image and Contact Info */}
        <div className="w-full md:w-1/2 space-y-6">
          <Image
            src="/images/contact/contact-us.png"
            alt="Speaker"
            width={500}
            height={300}
            className="w-full rounded-lg object-cover"
          />
          <div className="bg-white p-7 rounded-xl shadow-sm space-y-5">
            <div className="flex max-sm:flex-col max-sm:text-center items-center gap-3 ring-1 px-3 py-3 rounded-xl ring-orange bg-[#FFFDFC]">
              <div className="h-14 w-14 flex items-center justify-center rounded-full bg-[#FFE8D4]">
                <FaPhoneAlt className="h-[45%] w-[45%] text-[#FF8315]" />
              </div>
              <div>
                <p className="font-semibold text-gray-700">Phone Number</p>
                <p className="text-orring-orange">+91 8079064769</p>
              </div>
            </div>
            <div className="flex max-sm:flex-col max-sm:text-center items-center gap-3 ring-1 px-3 py-3 rounded-xl ring-orange bg-[#FF7B07]/5">
              <div>
                <div className="h-14 w-14 flex items-center justify-center rounded-full bg-[#FFE8D4]">
                  <HiMapPin className="h-[45%] w-[45%] text-[#FF8315]" />
                </div>
              </div>
              <div>
                <p className="font-semibold text-gray-700">Address</p>
                <p className="text-orring-orange">
                  123, Omega, Anukampa, Near Jagdguru Sanskriti College,
                  Bhankrota
                </p>
              </div>
            </div>
            <div className="flex max-sm:flex-col max-sm:text-center items-center gap-3 ring-1 px-3 py-3 rounded-xl ring-orange bg-[#FF7B07]/5">
              <div className="h-14 w-14 flex items-center justify-center rounded-full bg-[#FFE8D4]">
                <MdEmail className="h-[45%] w-[45%] text-[#FF8315]" />
              </div>
              <div>
                <p className="font-semibold text-gray-700">Email</p>
                <p className="text-orring-orange">indo@oneaim.com.in</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
