import PButton from "@/components/common/PButton";
import React from "react";

const AddressPage = () => {
  return (
    <div className="min-h-screen bg-[#FFF7F0] px-4 md:px-8 lg:px-16 py-8">
      <div className="container mx-auto max-w-6xl">
        <h1 className="text-xl font-semibold mb-6">
          Add Your Delivery Address
        </h1>

        <div className="bg-white rounded-lg p-6 md:p-8 shadow-sm mb-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            {/* Pincode */}
            <div>
              <label className="block text-sm text-gray-600 mb-1">
                Pincode*
              </label>
              <input
                type="text"
                defaultValue="110039"
                className="w-full p-3 border border-gray-200 bg-[#CDCDCD]/20 rounded-md focus:outline-none focus:ring-1 focus:ring-[#FF7B07]"
              />
            </div>

            {/* Full Address */}
            <div>
              <label className="block text-sm text-gray-600 mb-1">
                Full Address (House no., Area etc.)*
              </label>
              <input
                type="text"
                className="w-full p-3 border border-gray-200 bg-[#CDCDCD]/20 rounded-md focus:outline-none focus:ring-1 focus:ring-[#FF7B07]"
              />
            </div>

            {/* State */}
            <div>
              <label className="block text-sm text-gray-600 mb-1">State*</label>
              <input
                type="text"
                defaultValue="North"
                className="w-full p-3 border border-gray-200 bg-[#CDCDCD]/20 rounded-md focus:outline-none focus:ring-1 focus:ring-[#FF7B07]"
              />
            </div>

            {/* City */}
            <div>
              <label className="block text-sm text-gray-600 mb-1">City*</label>
              <input
                type="text"
                defaultValue="Delhi"
                className="w-full p-3 border border-gray-200 bg-[#CDCDCD]/20 rounded-md focus:outline-none focus:ring-1 focus:ring-[#FF7B07]"
              />
            </div>

            {/* Full Name */}
            <div>
              <label className="block text-sm text-gray-600 mb-1">
                Full Name*
              </label>
              <input
                type="text"
                className="w-full p-3 border border-gray-200 bg-[#CDCDCD]/20 rounded-md focus:outline-none focus:ring-1 focus:ring-[#FF7B07]"
              />
            </div>

            {/* Phone Number */}
            <div>
              <label className="block text-sm text-gray-600 mb-1">
                Phone number*
              </label>
              <input
                type="tel"
                className="w-full p-3 border border-gray-200 bg-[#CDCDCD]/20 rounded-md focus:outline-none focus:ring-1 focus:ring-[#FF7B07]"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm text-gray-600 mb-1">
                Email Address*
              </label>
              <input
                type="email"
                className="w-full p-3 border border-gray-200 bg-[#CDCDCD]/20 rounded-md focus:outline-none focus:ring-1 focus:ring-[#FF7B07]"
              />
            </div>

            {/* Additional Address */}
            <div>
              <label className="block text-sm text-gray-600 mb-1">
                Additional Address Info (Optional)
              </label>
              <input
                type="text"
                className="w-full p-3 border border-gray-200 bg-[#CDCDCD]/20 rounded-md focus:outline-none focus:ring-1 focus:ring-[#FF7B07]"
              />
            </div>
          </div>

          <div className="flex sm:justify-end max-sm:justify-center mt-6">
            <PButton href={"/cart/payment"}>Proceed</PButton>
          </div>
        </div>

        {/* Add New Address Section */}
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
