"use client";

import React, { useState } from "react";
import Button from "./ui/Button";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { toast } from "react-toastify";
import axios from "axios";

// Define schema with refined file validation for both resume and image
export const careerSchema = z.object({
  name: z.string().min(1, "Full name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(1, "Phone number is required"),
  location: z.string().optional(),
  qualification: z.string().optional(),
  experience: z.string().optional(),
  resume: z
    .instanceof(FileList)
    .refine((files) => files.length > 0, "Resume is required")
    .refine(
      (files) =>
        files.length > 0 &&
        [
          "application/pdf",
          "application/msword",
          "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
          "image/jpeg",
          "image/png",
          "image/jpg",
          "image/webp",
          "image/gif",
        ].includes(files[0].type),
      "Resume must be a PDF, Word document, or image file"
    )
    .refine(
      (files) => files.length > 0 && files[0].size <= 5 * 1024 * 1024,
      "Resume must be less than 5MB"
    ),
  photo: z
    .instanceof(FileList)
    .optional()
    .refine(
      (files) => files?.length === 0 || files?.length! > 0,
      "Please upload a photo"
    )
    .refine(
      (files) =>
        files?.length === 0 ||
        (files?.length! > 0 &&
          [
            "image/jpeg",
            "image/png",
            "image/jpg",
            "image/webp",
            "image/gif",
          ].includes(files![0].type)),
      "Photo must be a JPEG, PNG, JPG, WEBP, or GIF image"
    )
    .refine(
      (files) =>
        files?.length === 0 ||
        (files?.length! > 0 && files![0].size <= 2 * 1024 * 1024),
      "Photo must be less than 2MB"
    ),
});

export type Career = z.infer<typeof careerSchema>;

const CareerForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [fileError, setFileError] = useState<string | null>(null);
  const [photoError, setPhotoError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    watch,
  } = useForm<Career>({
    resolver: zodResolver(careerSchema),
    mode: "onChange", // Enable live validation
  });

  // Watch for file changes to display previews
  const resumeFile = watch("resume");
  const photoFile = watch("photo");

  // Handle file validation manually for better user experience
  const validateResumeFile = (files: FileList | null) => {
    if (!files || files.length === 0) {
      setFileError("Resume is required");
      return false;
    }

    const file = files[0];
    const validTypes = [
      "application/pdf",
      "application/msword",
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
      "image/jpeg",
      "image/png",
      "image/jpg",
      "image/webp",
      "image/gif",
    ];

    if (!validTypes.includes(file.type)) {
      setFileError("Resume must be a PDF, Word document, or image file");
      return false;
    }

    if (file.size > 5 * 1024 * 1024) {
      setFileError("Resume must be less than 5MB");
      return false;
    }

    setFileError(null);
    return true;
  };

  const validatePhotoFile = (files: FileList | null) => {
    if (!files || files.length === 0) {
      setPhotoError(null);
      return true; // Photo is optional
    }

    const file = files[0];
    const validTypes = [
      "image/jpeg",
      "image/png",
      "image/jpg",
      "image/webp",
      "image/gif",
    ];

    if (!validTypes.includes(file.type)) {
      setPhotoError("Photo must be a JPEG, PNG, JPG, WEBP, or GIF image");
      return false;
    }

    if (file.size > 2 * 1024 * 1024) {
      setPhotoError("Photo must be less than 2MB");
      return false;
    }

    setPhotoError(null);
    return true;
  };

  const onSubmit = async (data: Career) => {
    // Validate files before submission
    const isResumeValid = validateResumeFile(data.resume);

    if (!isResumeValid) {
      return; // Stop submission if files are invalid
    }

    setIsSubmitting(true);
    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("email", data.email);
    formData.append("phone", data.phone);
    if (data.location) formData.append("location", data.location);
    if (data.qualification)
      formData.append("qualification", data.qualification);
    if (data.experience) formData.append("experience", data.experience);
    if (data.resume?.[0]) formData.append("resume", data.resume[0]);
    if (data.photo?.[0]) formData.append("photo", data.photo[0]);

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

      console.log("Server response:", response.data);
      toast.success("Your application has been sent successfully!");
      reset();
      setFileError(null);
      setPhotoError(null);
    } catch (error: any) {
      console.error("Error sending form data:", error);
      const errorMessage =
        error.response?.data?.message ||
        "Failed to send your application. Please try again.";
      toast.error(errorMessage);
    } finally {
      setIsSubmitting(false);
    }
  };

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

        <div>
          <label className="block text-sm mb-1 font-medium text-gray-700">
            Resume<span className="text-red-500">*</span>
          </label>
          <input
            type="file"
            {...register("resume", {
              onChange: (e) => validateResumeFile(e.target.files),
            })}
            accept=".pdf,.doc,.docx,.jpg,.jpeg,.png,.gif,.webp"
            className="w-full p-2 border-b border-gray-300 text-gray-700"
            disabled={isSubmitting}
          />
          {(errors.resume || fileError) && (
            <p className="text-red-500 text-sm mt-1">
              {errors.resume?.message || fileError}
            </p>
          )}
          {resumeFile?.[0] && !fileError && (
            <div className="mt-2">
              <p className="text-green-500 text-sm">
                File selected: {resumeFile[0].name} (
                {Math.round(resumeFile[0].size / 1024)} KB)
              </p>
              {resumeFile[0].type.startsWith("image/") && (
                <div className="mt-2 w-24 h-24 border border-gray-300 rounded-md overflow-hidden">
                  <img
                    src={URL.createObjectURL(resumeFile[0])}
                    alt="Resume Preview"
                    className="w-full h-full object-cover"
                    onLoad={() =>
                      URL.revokeObjectURL(URL.createObjectURL(resumeFile[0]))
                    }
                  />
                </div>
              )}
            </div>
          )}
        </div>

        <div>
          <label className="block text-sm mb-1 font-medium text-gray-700">
            Photo (Optional)
          </label>
          <input
            type="file"
            {...register("photo", {
              onChange: (e) => validatePhotoFile(e.target.files),
            })}
            accept=".jpg,.jpeg,.png,.gif,.webp"
            className="w-full p-2 border-b border-gray-300 text-gray-700"
            disabled={isSubmitting}
          />
          {(errors.photo || photoError) && (
            <p className="text-red-500 text-sm mt-1">
              {errors.photo?.message || photoError}
            </p>
          )}
          {/* {photoFile?.[0] && !photoError && (
            <div className="mt-2">
              <p className="text-green-500 text-sm">
                Image selected: {photoFile[0].name} (
                {Math.round(photoFile[0].size / 1024)} KB)
              </p>
              <div className="mt-2 w-24 h-24 border border-gray-300 rounded-md overflow-hidden">
                <img
                  src={URL.createObjectURL(photoFile[0])}
                  alt="Preview"
                  className="w-full h-full object-cover"
                  onLoad={() =>
                    URL.revokeObjectURL(URL.createObjectURL(photoFile[0]))
                  }
                />
              </div>
            </div>
          )} */}
        </div>
      </div>

      <div className="flex justify-center">
        <Button
          type="submit"
          disabled={isSubmitting}
          className="text-white !py-2 !px-7 xl:!px-10 xl:!py-4 xl:text-[1rem] bg-[#FF7B07] hover:bg-[#e66a06] disabled:bg-gray-400"
        >
          {isSubmitting ? "Submitting..." : "Submit"}
        </Button>
      </div>
    </form>
  );
};

export default CareerForm;
