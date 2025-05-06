import React from "react";
import Image from "next/image";
import Footer from "@/components/Footer";
import Link from "next/link";
import PButton from "@/components/common/PButton";

const Cart = () => {
  const courseData = [
    {
      id: 1,
      title: "IAS Foundation Course (Prelims + Mains)",
      duration: "12 Months",
      instructor: "Dr. Rajan Sharma (Ex-IRS)",
      originalPrice: 1290,
      discountedPrice: 960,
      image: "/images/course/course-bg.png", // Replace with actual image path
    },
    {
      id: 2,
      title: "IAS Foundation Course (Prelims + Mains)",
      duration: "12 Months",
      instructor: "Dr. Rajan Sharma (Ex-IRS)",
      originalPrice: 1290,
      discountedPrice: 960,
      image: "/images/course/course-bg.png", // Replace with actual image path
    },
    {
      id: 3,
      title: "IAS Foundation Course (Prelims + Mains)",
      duration: "12 Months",
      instructor: "Dr. Rajan Sharma (Ex-IRS)",
      originalPrice: 1290,
      discountedPrice: 960,
      image: "/images/course/course-bg.png", // Replace with actual image path
    },
  ];

  const priceDetails = {
    coursePrice: 960,
    discount: 0,
    taxes: 172.8,
    processingFee: 0,
    totalPayable: 1132.8,
  };

  return (
    <div>
      <div className="min-h-screen bg-[#FFF7F0] px-4 md:px-8 lg:px-16 py-8">
        <div className="container mx-auto max-w-6xl">
          <h1 className="text-xl font-semibold mb-3">
            <span className="text-orange">3 Courses</span> in Cart
          </h1>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Cart Items */}
            <div className="lg:col-span-2">
              {courseData.map((course) => (
                <div
                  key={course.id}
                  className="bg-white rounded-lg p-4 mb-4 shadow"
                >
                  <div className="flex flex-col md:flex-row gap-4">
                    <div className="w-full md:w-1/4 h-32 relative">
                      <div className="w-full h-full bg-gray-200 rounded-md overflow-hidden">
                        {/* Replace with actual images */}
                        <div className="w-full h-full bg-gray-300 ">
                          <Image
                            src={course.image}
                            alt={course.title}
                            fill
                            className="object-cover rounded-2xl"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="flex-1">
                      <h3 className="text-lg font-semibold">{course.title}</h3>
                      <div className="text-sm text-orange bg-orange/10 px-2 rounded-full w-max mt-1">
                        {course.duration}
                      </div>
                      <div className="text-sm text-orange bg-orange/10 px-2 rounded-full w-max mt-3">
                        {course.instructor}
                      </div>
                    </div>

                    <div className="flex flex-col items-end">
                      <div className="text-sm text-gray-400 line-through">
                        ₹{course.originalPrice}
                      </div>
                      <div className="text-xl text-[#FF7B07] font-semibold">
                        ₹{course.discountedPrice}
                      </div>
                      <button className="mt-2  ring-[0.7px] rounded-full ring-primaryred px-3 py-1 text-md  hover:bg-primaryred hover:text-white duration-200 text-xs">
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Price and Coupon */}
            <div className="lg:col-span-1">
              {/* Coupon Section */}
              <div className="bg-lightorange rounded-lg py-8 px-10 mb-4 text-white relative overflow-hidden">
                <div className="h-20 w-40 bg-[#FFF7F0] rounded-b-full absolute -rotate-90 -left-20 top-1/2 transform -translate-y-1/2"></div>
                <div className="h-20 w-40 bg-[#FFF7F0] rounded-b-full absolute rotate-90 -right-20 top-1/2 transform -translate-y-1/2"></div>

                <div className="text-center">
                  <h2 className="text-xl font-bold mb-1">Flat 10% Off</h2>
                  <p className="mb-3">Save More on Your UPSC Preparation!</p>
                  <p className="font-semibold">Use Code: AIM10</p>
                </div>

                <div className="mt-4 relative">
                  <div className="h-10 border-t border-dashed border-white opacity-30 my-3"></div>
                  <input
                    type="text"
                    className="w-full p-2 rounded-md text-black text-sm"
                    placeholder="Enter your Coupon Code here"
                  />
                  <div className="flex justify-center">
                    <PButton href={"/cart/address"}>Apply here</PButton>
                  </div>
                </div>

                <div className="absolute left-0 bottom-0">
                  <Image
                    src="/images/cart/cart.png"
                    alt="course-bg"
                    width={120}
                    height={100}
                  />
                </div>
              </div>

              {/* Price Details */}
              <div className="bg-white border border-lightorange rounded-lg p-6">
                <h3 className="font-semibold mb-4">Course Price</h3>

                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span>Course Price</span>
                    <span>₹{priceDetails.coursePrice}</span>
                  </div>

                  <div className="flex justify-between">
                    <span>Discount (if any)</span>
                    <span>₹{priceDetails.discount}</span>
                  </div>

                  <div className="flex justify-between">
                    <span>Taxes (18% GST)</span>
                    <span>₹{priceDetails.taxes}</span>
                  </div>

                  <div className="flex justify-between">
                    <span>Processing Fee</span>
                    <span>₹{priceDetails.processingFee}</span>
                  </div>

                  <div className="border-t pt-3 mt-3">
                    <div className="flex justify-between font-semibold">
                      <span>Total Payable</span>
                      <span className="text-[#FF7B07]">
                        ₹{priceDetails.totalPayable}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="flex justify-center">
                  <PButton href={"/cart/address"}>Proceed</PButton>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
