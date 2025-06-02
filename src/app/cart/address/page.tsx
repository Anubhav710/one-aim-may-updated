"use client";
import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import PButton from "@/components/common/PButton";
import Link from "next/link";

// ✅ Zod Schema
const addressSchema = z.object({
  fullName: z.string().min(2, "Full name is required"),
  phone: z
    .string()
    .min(10, "Phone must be 10 digits")
    .max(10, "Phone must be 10 digits"),
  email: z.string().email("Invalid email"),
  pincode: z.string().min(5, "Pincode is required"),
  fullAddress: z.string().min(5, "Address is required"),
  state: z.string().min(2, "State is required"),
  city: z.string().min(2, "City is required"),
  additionalInfo: z.string().optional(),
});

type AddressFormData = z.infer<typeof addressSchema>;

const AddressPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<AddressFormData>({
    resolver: zodResolver(addressSchema),
    mode: "onChange", // ✅ enables live validation for isValid to work
  });

  const onSubmit = async (data: AddressFormData) => {
    try {
      const response = await axios.post("/api/submit-address", data);
      console.log("Address submitted:", response.data);
    } catch (error) {
      console.error("Failed to submit address:", error);
    }
  };

  return (
    <div className="min-h-screen bg-[#FFF7F0] px-4 md:px-8 lg:px-16 py-8">
      <div className="container mx-auto max-w-6xl">
        <h1 className="text-xl font-semibold mb-6">
          Add Your Delivery Address
        </h1>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="bg-white rounded-lg p-6 md:p-8 shadow-sm mb-6"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            {/* Full Name */}
            <div>
              <label className="block text-sm text-gray-600 mb-1">
                Full Name*
              </label>
              <input
                {...register("fullName")}
                className="w-full p-3 border border-gray-200 bg-[#CDCDCD]/20 rounded-md focus:ring-[#FF7B07]"
              />
              {errors.fullName && (
                <p className="text-red-500 text-sm">
                  {errors.fullName.message}
                </p>
              )}
            </div>

            {/* Phone Number */}
            <div>
              <label className="block text-sm text-gray-600 mb-1">
                Phone Number*
              </label>
              <input
                {...register("phone")}
                type="tel"
                className="w-full p-3 border border-gray-200 bg-[#CDCDCD]/20 rounded-md focus:ring-[#FF7B07]"
              />
              {errors.phone && (
                <p className="text-red-500 text-sm">{errors.phone.message}</p>
              )}
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm text-gray-600 mb-1">
                Email Address*
              </label>
              <input
                {...register("email")}
                type="email"
                className="w-full p-3 border border-gray-200 bg-[#CDCDCD]/20 rounded-md focus:ring-[#FF7B07]"
              />
              {errors.email && (
                <p className="text-red-500 text-sm">{errors.email.message}</p>
              )}
            </div>

            {/* Pincode */}
            <div>
              <label className="block text-sm text-gray-600 mb-1">
                Pincode*
              </label>
              <input
                {...register("pincode")}
                className="w-full p-3 border border-gray-200 bg-[#CDCDCD]/20 rounded-md focus:ring-[#FF7B07]"
              />
              {errors.pincode && (
                <p className="text-red-500 text-sm">{errors.pincode.message}</p>
              )}
            </div>

            {/* Full Address */}
            <div>
              <label className="block text-sm text-gray-600 mb-1">
                Full Address*
              </label>
              <input
                {...register("fullAddress")}
                className="w-full p-3 border border-gray-200 bg-[#CDCDCD]/20 rounded-md focus:ring-[#FF7B07]"
              />
              {errors.fullAddress && (
                <p className="text-red-500 text-sm">
                  {errors.fullAddress.message}
                </p>
              )}
            </div>

            {/* State */}
            <div>
              <label className="block text-sm text-gray-600 mb-1">State*</label>
              <input
                {...register("state")}
                className="w-full p-3 border border-gray-200 bg-[#CDCDCD]/20 rounded-md focus:ring-[#FF7B07]"
              />
              {errors.state && (
                <p className="text-red-500 text-sm">{errors.state.message}</p>
              )}
            </div>

            {/* City */}
            <div>
              <label className="block text-sm text-gray-600 mb-1">City*</label>
              <input
                {...register("city")}
                className="w-full p-3 border border-gray-200 bg-[#CDCDCD]/20 rounded-md focus:ring-[#FF7B07]"
              />
              {errors.city && (
                <p className="text-red-500 text-sm">{errors.city.message}</p>
              )}
            </div>

            {/* Additional Address Info */}
            <div>
              <label className="block text-sm text-gray-600 mb-1">
                Additional Info (Optional)
              </label>
              <input
                {...register("additionalInfo")}
                className="w-full p-3 border border-gray-200 bg-[#CDCDCD]/20 rounded-md focus:ring-[#FF7B07]"
              />
            </div>
          </div>

          <div className="flex sm:justify-end max-sm:justify-center mt-6">
            {!isValid ? (
              <PButton disabled={!isValid}>Proceed</PButton>
            ) : (
              <PButton type="submit" disabled={!isValid}>
                <Link href={"/cart/payment"}>Proceed</Link>
              </PButton>
            )}
          </div>
        </form>

        <div className="border border-dashed border-gray-300 p-4 rounded-lg bg-white">
          <button className="text-[#FF7B07] font-medium flex items-center w-full justify-center">
            <span className="mr-2 text-xl">+</span> Add New Address
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddressPage;
