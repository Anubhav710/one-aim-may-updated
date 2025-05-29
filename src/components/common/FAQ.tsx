"use client";
import { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { FaChevronDown } from "react-icons/fa";
import { CommonHeading2 } from "@/components/common/CommonHeading2";
import axios from "axios";
import { FAQList } from "@/types";

type FAQ = {
  question: string;
  answer: string;
};
const faqs: FAQ[] = [
  {
    question: "What is the batch size at ONE AIM?",
    answer:
      "Our online batches are limited to 20–30 students to ensure personalized attention and effective interaction between faculty and aspirants.",
  },
  {
    question: "Why does ONE AIM maintain small batch sizes?",
    answer:
      "Smaller batches facilitate individual mentorship, allowing our faculty to address each student's unique needs and queries effectively.",
  },
  {
    question:
      "How long does it take to complete the syllabus in the 1-year foundation course?",
    answer:
      "The 1-year foundation course is structured to comprehensively cover the entire UPSC syllabus, including GS, CSAT, and Essay, within 10–11 months, followed by dedicated revision and test series.",
  },
  {
    question: "Why should I choose ONE AIM over other institutes?",
    answer:
      "One Aim offers affordable fees, personal mentorship under Mr. Narendra Raj Singh, interactive online classes, and a comprehensive curriculum, making quality UPSC preparation accessible to all.",
  },
  {
    question: "Will I receive books or short notes for NCERT at ONE AIM?",
    answer:
      "Yes, we provide digitally gathered NCERT notes and short summaries to help your preparation, ensuring you grasp fundamental concepts effectively.",
  },
  {
    question: "How many lectures are there in the NCERT course at ONE AIM?",
    answer:
      "The NCERT course comprises approximately 100 lectures, covering essential topics across subjects to build a strong foundation for advanced studies.",
  },
  {
    question: "Are there offline classes for Current Affairs at ONE AIM?",
    answer:
      "Being an online-based institute, all Current Affairs sessions are conducted live online, with recordings available for later review.",
  },
  {
    question: "Do faculties provide class notes at ONE AIM?",
    answer:
      "Yes, our faculty shares complete class notes and supplementary materials after each session, accessible through our online portal.",
  },
  {
    question: "How many students from ONE AIM have cleared the UPSC exam?",
    answer:
      "As a growing institute, we have a track record of successful aspirants who have cleared various stages of the UPSC exam. Detailed statistics are available upon request.",
  },
  {
    question:
      "Who evaluates my answers in the Daily Answer Writing (DAW) program at ONE AIM?",
    answer:
      "Our experienced faculty members personally evaluate your answers, providing helpful feedback to enhance your writing skills.",
  },
  {
    question:
      "Is there a course specifically for Mains preparation at ONE AIM?",
    answer:
      "Yes, we offer a dedicated Mains course, focusing on answer writing, essay preparation, and in-depth coverage of GS papers.",
  },
  {
    question:
      "Are Essay and Language papers covered in the GS foundation course?",
    answer:
      "The GS foundation course includes Essay writing sessions. Language papers are addressed separately, with guidance provided upon request.",
  },
  {
    question: "Can I change the duration of my course later at ONE AIM?",
    answer:
      "Yes, we offer flexible course durations. You can upgrade or modify your course plan by contacting our support team.",
  },
  {
    question: "Does ONE AIM provide specific resources for Current Affairs?",
    answer:
      "Yes, we offer daily Current Affairs updates, monthly gatherings, and analysis sessions to keep you informed and exam-ready.",
  },
  {
    question: "How will I receive model answers in the DAW program?",
    answer:
      "Model answers are shared daily through our online platform, attended by detailed explanations and writing strategies.",
  },
  {
    question: "Does ONE AIM use old or new NCERT books for teaching?",
    answer:
      "We utilize both old and new NCERTs, selecting the most relevant content from each to provide a comprehensive understanding.",
  },
  {
    question: "How many faculty members are there at ONE AIM?",
    answer:
      "ONE AIM boasts a team of 20+ experienced educators, each specializing in different subjects to provide expert guidance.",
  },
  {
    question: "Will one subject be taught by different faculties at ONE AIM?",
    answer:
      "Generally, each subject is handled by a dedicated faculty member. However, for wider perspectives, guest lectures may be introduced.",
  },
  {
    question: "Will I get personal mentorship at ONE AIM?",
    answer:
      "Yes, every student is assigned a personal mentor, including sessions with Mr. Narendra Raj Singh, ensuring continuous support throughout your preparation.",
  },
  {
    question:
      "Who teaches the optional subjects at ONE AIM, and what is the duration?",
    answer:
      "Our optional subjects are taught by subject matter experts over a period of 5-6 months, with a focus on in-depth understanding and answer writing.",
  },
  {
    question:
      "What is the difference between 1-year, 2-year, and 3-year foundation courses at ONE AIM?",
    answer:
      "The 1-year course is intensive, suitable for graduates. The 2-year course is ideal for undergraduates, allowing a balanced approach. The 3-year course caters to early starters, providing ample time for thorough preparation.",
  },
  {
    question: "Will PYQs be covered in the 1-year foundation course?",
    answer:
      "Yes, Previous Year Questions (PYQs) are integrated into the curriculum, with regular practice sessions and discussions.",
  },
  {
    question:
      "Can I view recorded lectures multiple times, and what is their validity?",
    answer:
      "Recorded lectures are accessible unlimited times during your course duration, ensuring flexibility in your study schedule.",
  },
  {
    question: "Will newly enrolled students join existing batches?",
    answer:
      "We maintain organized batch structures. New enrolments are scheduled to ensure synchronized learning without disrupting ongoing session.",
  },
  {
    question:
      "I have completed my GS course elsewhere. Does ONE AIM offer courses for me?",
    answer:
      "Yes, we offer modular courses, including Mains-specific programs, optional subjects, and test series, tailored to your needs.",
  },
  {
    question: "What payment options are available at ONE AIM?",
    answer:
      "We accept payments via UPI, net banking, and offer EMI options for select courses.",
  },
  {
    question: "Will I receive the monthly collected magazine in hard copy?",
    answer:
      "Currently, we provide digital versions of our monthly magazines, ensuring timely and eco-friendly distribution.",
  },
  {
    question: "Can I participate in test series offline at ONE AIM?",
    answer:
      "Being an online institute, our test series are conducted digitally, allowing you to take tests from the comfort of your home.",
  },
  {
    question: "Does ONE AIM offer a Mains-specific test series?",
    answer:
      "Yes, we provide a comprehensive Mains test series, including sectional and full-length tests, with detailed evaluations.",
  },
  {
    question: "Who is the founder/director of ONE AIM?",
    answer:
      "Mr. Narendra Raj Singh is the founder and director of ONE AIM, bringing over a decade of experience in mentoring UPSC aspirants.",
  },
  {
    question: "When was ONE AIM established?",
    answer:
      "ONE AIM was established in 2024, with the vision to make quality UPSC coaching accessible to all through online platforms.",
  },
  {
    question: "Is Mr. Narendra Raj Singh from a UPSC background?",
    answer:
      "Yes, Mr. Singh has an extensive background in UPSC coaching, having mentored numerous successful candidates over the years.",
  },
  {
    question: "What courses are offered at ONE AIM?",
    answer:
      "We offer a range of courses, including GS Foundation, PMP course, NCERT modules, optional subjects, test series, and interview guidance programs.",
  },
  {
    question: "How are standard classes structured at ONE AIM?",
    answer:
      "Each class is approximately 1 hour, comprising lecture sessions, interactive discussions, and doubt-clearing segments.",
  },
  {
    question: "What are my chances of success if I join ONE AIM?",
    answer:
      "Your success depends on dedication and consistent effort. ONE AIM provides the necessary resources and guidance to maximize your potential.",
  },
  {
    question: "What is the schedule of the classes?",
    answer:
      "Classes are scheduled 6 days a week, with flexible timings to accommodate various time zones and personal commitments.",
  },
  {
    question: "Who are the faculty members at ONE AIM?",
    answer:
      "Our faculty comprises experienced educators, subject experts, and former civil servants, dedicated to providing quality education.",
  },
  {
    question: "Does ONE AIM provide a national-level test series?",
    answer:
      "Yes, we offer All India Test Series for both Prelims and Mains, enabling you to benchmark your performance national.",
  },
  {
    question: "Is there a library facility at ONE AIM?",
    answer:
      "As an online institute, we provide a digital library, granting access to a plethora of resources, including e-books and journals.",
  },
  {
    question: "What are the class timings at ONE AIM IAS?",
    answer:
      "Our classes are conducted daily from 8 AM to 9 PM, with multiple time slots available. This flexible schedule helps students manage their preparation effectively, whether they are college students, working professionals, or full-time aspirants.",
  },
  {
    question: "Can I switch to online classes at ONE AIM?",
    answer:
      "Yes, we offer flexible switching between online modes, depending on your location and comfort. Our mixture model is designed to ensure uninterrupted learning in any circumstance.",
  },
  {
    question: "How does ONE AIM manage daily classes from morning to evening?",
    answer:
      "We have a well-structured timetable with subject-wise slots, covering all key areas like GS, CSAT, Essay, and Current Affairs throughout the day. Recorded lectures are also available in case you miss a live session.",
  },
];

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

    const fetchTestimonials = async () => {
      try {
        const response = await axios.get<FAQList>(
          `https://oneaim-admin.utxotech.com/api/v1/faqs`,
          {
            headers: {
              Authorization: `Bearer ak_y6d4lk60QIrkdu23knAdJLeyabdEerT5`,
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

    fetchTestimonials();
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
