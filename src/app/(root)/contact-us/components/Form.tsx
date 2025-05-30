"use client";
import { useForm } from "react-hook-form";
import { useState } from "react";
import Image from "next/image";
import { FaPhoneAlt } from "react-icons/fa";
import { HiMapPin } from "react-icons/hi2";
import { MdEmail } from "react-icons/md";
import { FaChevronDown } from "react-icons/fa";
import { CommonHeading2 } from "@/components/common/CommonHeading2";
import axios from "axios";
import { toast } from "react-toastify";

type FormData = {
  name: string;
  email: string;
  phone: string;
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

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);

    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/enquiries`, // replace with actual POST endpoint
        data,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${process.env.NEXT_PUBLIC_AUTH_TOKEN}`,
          },
        }
      );

      console.log("Server response:", response.data);
      reset();
      toast.success("Your message has been sent successfully!");
      // Optionally add a success message/toast here
    } catch (error) {
      console.error("Error sending form data:", error);
      toast.error("Failed to send your message. Please try again.");
      // Optionally add an error message/toast here
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div>
      <div className="w-max mx-auto max-sm:w-full">
        <CommonHeading2 title="Reach out to us – we'd love to hear from you." />
      </div>

      <div className="flex flex-col md:flex-row gap-6  rounded-xl">
        {/* Left: Form */}
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="w-full md:w-1/2 space-y-6 flex flex-col justify-center bg-white shadow-md rounded-xl px-8 py-10"
        >
          <input
            type="text"
            placeholder="Name"
            {...register("name", { required: "Name is required" })}
            className="w-full bg-[rgba(255,123,7,0.04)] p-4 border rounded-xl border-orange/50 focus:border-orange   text-gray-700 focus:outline-none   transition-colors duration-200"
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
            className="w-full p-4 border rounded-xl border-orange/50 focus:border-orange bg-[rgba(255,123,7,0.04)] text-gray-700 focus:outline-none   transition-colors duration-200"
          />
          {errors.email && (
            <p className="text-red-500 text-sm">
              {errors.email.message as string}
            </p>
          )}

          {/* <div className="relative">
            <select
              {...register("subject", { required: "Subject is required" })}
              className="w-full p-4 border rounded-xl border-orange/50 focus:border-orange bg-[rgba(255,123,7,0.04)] text-gray-700 focus:outline-none  appearance-none cursor-pointer  transition-colors duration-200"
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
          )} */}

          <input
            type="tel"
            placeholder="Phone Number"
            {...register("phone", { required: "Phone Number is required" })}
            className="w-full p-4 border rounded-xl border-orange/50 focus:border-orange bg-[rgba(255,123,7,0.04)] text-gray-700 focus:outline-none   transition-colors duration-200"
          />
          {errors.phone && (
            <p className="text-red-500 text-sm">
              {errors.phone.message as string}
            </p>
          )}

          <textarea
            placeholder="Write a message .."
            {...register("message", { required: "Message is required" })}
            className="w-full p-4 border rounded-xl border-orange/50 focus:border-orange bg-[rgba(255,123,7,0.04)] text-gray-700 focus:outline-none   transition-colors duration-200"
            rows={8}
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
            height={1200}
            className="w-full rounded-lg object-cover"
          />
          <div className="bg-white p-7 rounded-xl shadow-sm space-y-5">
            <div className="flex max-sm:flex-col max-sm:text-center items-center gap-3 ring-1 px-3 py-3 rounded-xl ring-orange bg-[rgba(255,123,7,0.04)]">
              <div className="h-14 w-14 flex items-center justify-center rounded-full bg-[#FFE8D4]">
                <FaPhoneAlt className="h-[45%] w-[45%] text-[#FF8315]" />
              </div>
              <div>
                <p className="font-semibold text-gray-700">Phone Number</p>
                <p className="text-orange">+91 8079064769</p>
              </div>
            </div>
            <div className="flex max-sm:flex-col max-sm:text-center items-center gap-3 ring-1 px-3 py-3 rounded-xl ring-orange bg-[rgba(255,123,7,0.04)]">
              <div>
                <div className="h-14 w-14 flex items-center justify-center rounded-full bg-[#FFE8D4]">
                  <HiMapPin className="h-[45%] w-[45%] text-[#FF8315]" />
                </div>
              </div>
              <div>
                <p className="font-semibold text-gray-700">Address</p>
                <p className="text-orange">
                  123, Omega, Anukampa, Near Jagdguru Sanskriti College,
                  Bhankrota
                </p>
              </div>
            </div>
            <div className="flex max-sm:flex-col max-sm:text-center items-center gap-3 ring-1 px-3 py-3 rounded-xl ring-orange bg-[rgba(255,123,7,0.04)]">
              <div className="h-14 w-14 flex items-center justify-center rounded-full bg-[#FFE8D4]">
                <MdEmail className="h-[45%] w-[45%] text-[#FF8315]" />
              </div>
              <div>
                <p className="font-semibold text-gray-700">Email</p>
                <p className="text-orange">indo@oneaim.com.in</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
