"use client";
import { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { FaChevronDown } from "react-icons/fa";
import { CommonHeading2 } from "@/components/common/CommonHeading2";
import axios from "axios";
import { FAQList } from "@/types";

export const FAQ: React.FC<{ className?: string }> = ({ className }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const contentRefs = useRef<(HTMLDivElement | null)[]>([]);

  const [faqData, setFaqData] = useState<FAQList>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (openIndex !== null && contentRefs.current[openIndex]) {
      gsap.fromTo(
        contentRefs.current[openIndex],
        { height: 0, opacity: 0 },
        { height: "auto", opacity: 1, duration: 0.3, ease: "power2.out" }
      );
    }

    const fetchFAQ = async () => {
      try {
        const response = await axios.get<FAQList>(
          `${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/faqs`,
          {
            headers: {
              Authorization: `Bearer ${process.env.NEXT_PUBLIC_AUTH_TOKEN}`,
            },
          }
        );
        // Set the fetched data into state
        setFaqData(response.data);

        setLoading(false);
      } catch (err) {
        console.error("Error fetching faqs:", err);
        setError("Failed to load faqs.");
        setLoading(false);
      }
    };

    fetchFAQ();
  }, [openIndex]);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className={`screen mx-auto   ${className}`}>
      <div className="w-max mx-auto hidden md:block ">
        <CommonHeading2 title="Frequently Asked Questions (FAQs)" />
      </div>
      <div className="w-max mx-auto  md:hidden ">
        <CommonHeading2 title="FAQ" />
      </div>
      <div className="space-y-4">
        {faqData.map((faq, index) => (
          <div key={index} className="bg-white px-4 rounded-lg">
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full flex justify-between items-center py-4 text-lg font-medium text-orange-500"
            >
              {faq.question}
              <FaChevronDown
                className={`transition-transform transform ${
                  openIndex === index ? "rotate-180" : "rotate-0"
                }`}
              />
            </button>
            <div
              ref={(el) => {
                contentRefs.current[index] = el;
              }}
              className="overflow-hidden"
              style={{
                height: openIndex === index ? "auto" : 0,
                opacity: openIndex === index ? 1 : 0,
              }}
            >
              <div className="p-4 text-gray-700">{faq.answer}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
