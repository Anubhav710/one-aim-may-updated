"use client";

import PButton from "@/components/common/PButton";
import Footer from "@/components/Footer";
import React from "react";
import { useRouter } from "next/navigation";

const PaymentPage = () => {
  const router = useRouter();

  const handlePlaceOrder = () => {
    router.push("/cart/thank-you");
  };

  const paymentMethods = [
    {
      id: "upi",
      name: "UPI",
      icon: "💳",
      amount: "₹1,132.80",
    },
    {
      id: "cards",
      name: "Debit/Credit Cards",
      icon: "💳",
      amount: "₹1,132.80",
    },
    {
      id: "wallets",
      name: "Wallets",
      icon: "👛",
      amount: "₹1,132.80",
    },
    {
      id: "netbanking",
      name: "Netbanking",
      icon: "🏦",
      amount: "₹1,132.80",
    },
  ];

  const orderSummary = {
    coursePrice: 960,
    discount: 0,
    taxes: 172.8,
    processingFee: 0,
    totalPayable: 1132.8,
    itemCount: 3,
  };

  return (
    <div>
      <div className="py-24 bg-[#FFF7F0] px-4 md:px-8 lg:px-16 ">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Payment Method Section */}
            <div>
              <h1 className="text-xl font-semibold mb-6">Payment Method</h1>
              <div className="bg-white rounded-lg p-6 shadow-sm">
                {paymentMethods.map((method) => (
                  <div key={method.id} className="mb-4 last:mb-0">
                    <button className="w-full bg-lightorange text-white rounded-lg p-4 flex items-center justify-between">
                      <div className="flex items-center">
                        <span className="text-2xl mr-3">{method.icon}</span>
                        <span className="font-medium">{method.name}</span>
                      </div>
                      <div className="flex items-center">
                        <span className="mr-2">{method.amount}</span>
                        <span className="text-lg">›</span>
                      </div>
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {/* Order Summary Section */}
            <div>
              <h1 className="text-xl font-semibold mb-6">Order Summary</h1>
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="font-semibold mb-4">
                  Price Details ({orderSummary.itemCount} items)
                </h3>

                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span>Course Price</span>
                    <span>₹{orderSummary.coursePrice}</span>
                  </div>

                  <div className="flex justify-between">
                    <span>Discount (if any)</span>
                    <span>₹{orderSummary.discount}</span>
                  </div>

                  <div className="flex justify-between">
                    <span>Taxes (18% GST)</span>
                    <span>₹{orderSummary.taxes}</span>
                  </div>

                  <div className="flex justify-between">
                    <span>Processing Fee</span>
                    <span>₹{orderSummary.processingFee}</span>
                  </div>

                  <div className="border-t pt-4 mt-2">
                    <div className="flex justify-between font-semibold">
                      <span>Total Payable</span>
                      <span className="text-[#FF7B07]">
                        ₹{orderSummary.totalPayable}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="w-max mx-auto">
                  <button
                    onClick={handlePlaceOrder}
                    className={`mt-4 bg-black text-white py-2 inline-block rounded-full px-12 text-center w-max  shadow-lg hover:bg-primaryred transition-all duration-300 `}
                  >
                    Place Order
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentPage;
