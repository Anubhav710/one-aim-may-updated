"use client";
import React from "react";
import Button from "./ui/Button";
import { useForm } from "react-hook-form";
import { Career } from "@/types";
const CarrerForm = () => {
  const { register, handleSubmit } = useForm<Career>();
  return (
    <form className=" bg-white py-12 px-4 sm:px-8 md:px-12 rounded-lg">
      {/* Personal Details */}
      <div className="mb-8">
        <h3 className="text-[#FF7B07] text-lg sm:text-2xl font-semibold mb-4">
          Personal Details
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
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
        <h3 className="text-[#FF7B07] text-lg sm:text-2xl font-semibold mb-4">
          Experience & Qualification
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div>
            <label className="block text-sm mb-1">Highest Qualification</label>
            <input
              type="text"
              className="w-full p-2 border-b border-gray-300 focus:border-[#FF7B07] focus:outline-none transition-colors"
            />
          </div>
          <div>
            <label className="block text-sm mb-1">Years of Experience</label>
            <input
              type="text"
              className="w-full p-2 border-b border-gray-300 focus:border-[#FF7B07] focus:outline-none transition-colors"
            />
          </div>
        </div>
      </div>

      {/* Upload Files */}
      <div className="mb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
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
            <label className="block text-sm mb-1">Upload Cover letter</label>
            <div className="w-full p-2 border-b border-gray-300 focus:border-[#FF7B07] focus:outline-none transition-colors flex items-center">
              <input type="file" className="hidden" id="coverLetterUpload" />
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
        <h3 className="text-[#FF7B07] text-lg sm:text-2xl font-semibold mb-4">
          Availability & Additional Information
        </h3>
        <div className="grid grid-cols-1 gap-10">
          <div>
            <label className="block text-sm mb-1">Preferred Work Mode</label>
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
        <h3 className="text-[#FF7B07] text-lg sm:text-2xl font-semibold mb-4">
          Agreement & Consent
        </h3>
        <div className="flex items-start mb-6">
          <input type="checkbox" id="agreement" className="mt-1 mr-2" />
          <label htmlFor="agreement" className="text-sm">
            I confirm that all information provided is accurate and agree to One
            Aim's Privacy Policy.
          </label>
        </div>
      </div>

      <div className="flex justify-center">
        <Button className="text-white !py-2 !px-7 xl:!px-10 xl:!py-4 xl:text-[1rem]">
          Submit
        </Button>
      </div>
    </form>
  );
};

export default CarrerForm;
