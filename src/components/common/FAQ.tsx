"use client";
import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

interface FAQProps {
  title?: string;
  faqs: FAQItem[];
}

const FAQ: React.FC<FAQProps> = ({
  title = "Frequently Asked Questions (FAQs)",
  faqs,
}) => {
  const [openId, setOpenId] = useState<string | null>(null);

  const toggleFAQ = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="w-full">
      <h2 className="text-2xl font-semibold text-gray-800">{title}</h2>
      <div className="mt-4">
        <div className="border rounded-lg overflow-hidden">
          {faqs.map((faq) => (
            <div
              key={faq.id}
              className={`${
                faq.id !== faqs[faqs.length - 1].id ? "border-b" : ""
              }`}
            >
              <div
                className="flex justify-between items-center p-4 bg-gray-50 cursor-pointer"
                onClick={() => toggleFAQ(faq.id)}
              >
                <p className="font-medium">{faq.question}</p>
                {openId === faq.id ? <FaChevronUp /> : <FaChevronDown />}
              </div>
              {openId === faq.id && (
                <div className="p-4 bg-white">
                  <p className="text-gray-700">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
