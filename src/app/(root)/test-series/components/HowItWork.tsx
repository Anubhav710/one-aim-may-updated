import CommonHeading from "@/components/ui/CommonHeading";
import React from "react";

// Step item component for reusability
interface StepItemProps {
  number: string;
  title: string;
  isReversed?: boolean;
}

const StepItem = ({ number, title, isReversed = false }: StepItemProps) => {
  return (
    <div
      className={`flex flex-col md:flex-row items-center gap-4  md:gap-8 mb-8 md:mb-12 ${
        isReversed ? "md:flex-row-reverse" : ""
      }`}
    >
      <div className="flex flex-col relative w-full  md:w-auto order-2 md:order-none">
        <div className="relative mb-3">
          <h1 className="bg-white w-max py-2 px-4 text-lg font-medium shadow-sm">
            {title}
          </h1>
          {/* <div className="w-0 h-0 border-l-[10px] border-l-transparent border-t-[15px] border-t-white border-r-[10px] border-r-transparent absolute bottom-[-15px] left-0 transform"></div> */}
        </div>
      </div>
      <span className="bg-gradient-to-t text-7xl md:text-8xl font-bold from-[#ffffff] to-[#FF7B07] text-transparent bg-clip-text order-1 md:order-none">
        {number}
      </span>
    </div>
  );
};

const HowItWork = () => {
  const steps = [
    { number: "01", title: "Enroll in Your Preferred Test Series" },
    { number: "02", title: "Get Instant Access to Tests & Study Material" },
    { number: "03", title: "Attempt Tests Online or Download PDFs" },
    { number: "04", title: "Receive Answer Keys & Explanations" },
    { number: "05", title: "Get Faculty Feedback & Performance Reports" },
  ];

  return (
    <div className="container mx-auto px-4 py-12 md:py-16">
      <div className="text-center">
        <CommonHeading title="How It Works?" />
      </div>
      <div className="max-w-5xl mx-auto">
        {steps.map((step, index) => (
          <StepItem
            key={step.number}
            number={step.number}
            title={step.title}
            isReversed={index % 2 !== 0}
          />
        ))}
      </div>
    </div>
  );
};

export default HowItWork;
