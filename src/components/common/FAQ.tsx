"use client";
import { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { FaChevronDown } from "react-icons/fa";
import { CommonHeading2 } from "@/components/common/CommonHeading2";

type FAQ = {
  question: string;
  answer: string;
};

const faqs: FAQ[] = [
  {
    question: "What is UPSC CSE, and who conducts it?",
    answer:
      "UPSC CSE (Civil Services Examination) is one of the toughest competitive exams in India, conducted by the Union Public Service Commission (UPSC) to recruit officers for IAS, IPS, IFS, and other civil services.",
  },
  {
    question: "What courses do you offer for UPSC preparation?",
    answer:
      "We offer a variety of courses covering Prelims, Mains, and Interview preparation with expert guidance.",
  },
  {
    question: "Who are the faculty members?",
    answer:
      "Our faculty members include experienced educators and retired civil servants with years of expertise.",
  },
  {
    question: "Are your courses available in both Hindi & English?",
    answer:
      "Yes, we offer courses in both Hindi and English to cater to students from diverse backgrounds.",
  },
  {
    question: "How can I enroll in a course?",
    answer:
      "You can enroll through our website by selecting the desired course and completing the registration process.",
  },
];

export const FAQ: React.FC<{ className?: string }> = ({ className }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const contentRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    if (openIndex !== null && contentRefs.current[openIndex]) {
      gsap.fromTo(
        contentRefs.current[openIndex],
        { height: 0, opacity: 0 },
        { height: "auto", opacity: 1, duration: 0.3, ease: "power2.out" }
      );
    }
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
        {faqs.map((faq, index) => (
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
