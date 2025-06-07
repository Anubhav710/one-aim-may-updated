"use client";

import React, { useState } from "react";
import Button from "./ui/Button";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { toast } from "react-toastify";
import axios from "axios";

// Zod schema for validation
export const careerSchema = z.object({
  name: z.string().min(1, "Full name is required").max(255),
  email: z.string().email("Invalid email address").max(255),
  phone: z.string().min(1, "Phone number is required").max(20),
  location: z.string().max(255),
  qualification: z.string().max(500),
  experience: z.string().max(255),
  message: z.string().max(255),
  resume: z
    .any()
    .refine((file) => file instanceof File && file.size > 0, {
      message: "Resume file is required",
    })
    .refine(
      (file) =>
        [
          "application/pdf",
          "application/msword",
          "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
          "image/jpeg",
          "image/png",
          "image/jpg",
          "image/webp",
          "image/gif",
        ].includes(file.type),
      { message: "Only PDF, DOC, DOCX, or image files are allowed" }
    )
    .refine((file) => file.size < 5 * 1024 * 1024, {
      message: "File size must be under 5MB",
    }),
});

export type Career = z.infer<typeof careerSchema>;

const CareerForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [resumePreview, setResumePreview] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    watch,
  } = useForm<Career>({
    resolver: zodResolver(careerSchema),
    mode: "onChange",
  });

  const onSubmit = async (data: Career) => {
    setIsSubmitting(true);

    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("email", data.email);
    formData.append("phone", data.phone);
    formData.append("location", data.location);
    formData.append("qualification", data.qualification);
    formData.append("experience", data.experience);
    formData.append("message", data.message);
    formData.append("resume", data.resume);

    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_BASE_URL}/career-applications`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${process.env.NEXT_PUBLIC_AUTH_TOKEN}`,
          },
        }
      );

      toast.success("Your application has been sent successfully!");
      reset();
      setResumePreview(null);
    } catch (error: any) {
      const errorMessage =
        error.response?.data?.message ||
        "Something went wrong. Please try again.";
      toast.error(errorMessage);
    } finally {
      setIsSubmitting(false);
    }
  };

  const resumeFile = watch("resume");

  return (
    <form
      className="bg-white py-12 px-4 sm:px-8 md:px-12 rounded-lg"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-8">
        <div>
          <label className="block text-sm mb-1 font-medium text-gray-700">
            Full Name<span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            {...register("name")}
            className="w-full p-2 border-b border-gray-300 focus:border-[#FF7B07] focus:outline-none rounded-sm"
            disabled={isSubmitting}
          />
          {errors.name && (
            <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
          )}
        </div>

        <div>
          <label className="block text-sm mb-1 font-medium text-gray-700">
            Email<span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            {...register("email")}
            className="w-full p-2 border-b border-gray-300 focus:border-[#FF7B07] focus:outline-none rounded-sm"
            disabled={isSubmitting}
          />
          {errors.email && (
            <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
          )}
        </div>

        <div>
          <label className="block text-sm mb-1 font-medium text-gray-700">
            Phone<span className="text-red-500">*</span>
          </label>
          <input
            type="tel"
            {...register("phone")}
            className="w-full p-2 border-b border-gray-300 focus:border-[#FF7B07] focus:outline-none rounded-sm"
            disabled={isSubmitting}
          />
          {errors.phone && (
            <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>
          )}
        </div>

        <div>
          <label className="block text-sm mb-1 font-medium text-gray-700">
            Location
          </label>
          <input
            type="text"
            {...register("location")}
            className="w-full p-2 border-b border-gray-300 focus:border-[#FF7B07] focus:outline-none rounded-sm"
            disabled={isSubmitting}
          />
          {errors.location && (
            <p className="text-red-500 text-sm mt-1">
              {errors.location.message}
            </p>
          )}
        </div>

        <div>
          <label className="block text-sm mb-1 font-medium text-gray-700">
            Qualification
          </label>
          <input
            type="text"
            {...register("qualification")}
            className="w-full p-2 border-b border-gray-300 focus:border-[#FF7B07] focus:outline-none rounded-sm"
            disabled={isSubmitting}
          />
          {errors.qualification && (
            <p className="text-red-500 text-sm mt-1">
              {errors.qualification.message}
            </p>
          )}
        </div>

        <div>
          <label className="block text-sm mb-1 font-medium text-gray-700">
            Experience
          </label>
          <input
            type="text"
            {...register("experience")}
            className="w-full p-2 border-b border-gray-300 focus:border-[#FF7B07] focus:outline-none rounded-sm"
            disabled={isSubmitting}
          />
          {errors.experience && (
            <p className="text-red-500 text-sm mt-1">
              {errors.experience.message}
            </p>
          )}
        </div>

        <div className="md:col-span-2">
          <label className="block text-sm mb-1 font-medium text-gray-700">
            Message
          </label>
          <textarea
            {...register("message")}
            className="w-full p-2 border border-gray-300 focus:border-[#FF7B07] focus:outline-none rounded-sm"
            rows={4}
            disabled={isSubmitting}
          />
          {errors.message && (
            <p className="text-red-500 text-sm mt-1">
              {errors.message.message}
            </p>
          )}
        </div>

        <div className="md:col-span-2">
          <label className="block text-sm mb-1 font-medium text-gray-700">
            Resume<span className="text-red-500">*</span>
          </label>
          <input
            type="file"
            {...register("resume")}
            accept=".pdf,.doc,.docx,.jpg,.jpeg,.png,.webp,.gif"
            className="w-full p-2 border-b border-gray-300 text-gray-700"
            disabled={isSubmitting}
            onChange={(e) => {
              const file = e.target.files?.[0];
              if (file && file.type.startsWith("image/")) {
                setResumePreview(URL.createObjectURL(file));
              } else {
                setResumePreview(null);
              }
            }}
          />
          {errors.resume && (
            <p className="text-red-500 text-sm mt-1">
              {String(errors.resume.message)}
            </p>
          )}
          {resumeFile instanceof File && !errors.resume && (
            <div className="mt-2">
              <p className="text-green-500 text-sm">
                File selected: {resumeFile.name} (
                {Math.round(resumeFile.size / 1024)} KB)
              </p>
              {resumePreview && (
                <div className="mt-2 w-24 h-24 border border-gray-300 rounded-md overflow-hidden">
                  <img
                    src={resumePreview}
                    alt="Resume Preview"
                    className="w-full h-full object-cover"
                    onLoad={() => URL.revokeObjectURL(resumePreview)}
                  />
                </div>
              )}
            </div>
          )}
        </div>
      </div>

      <div className="flex justify-center">
        <button type="submit" disabled={isSubmitting} className="">
          {isSubmitting ? "Submitting..." : "Submit Application"}
        </button>
      </div>
    </form>
  );
};

export default CareerForm;
