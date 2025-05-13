import { CommonHeading2 } from "@/components/common/CommonHeading2";

import React from "react";

// Step item component for reusability
interface StepItemProps {
  number: string;
  title: string;
  isReversed?: boolean;
}

// const StepItem = ({ number, title, isReversed = false }: StepItemProps) => {
//   return (
//     <div
//       className={`flex flex-col md:flex-row items-center gap-4  md:gap-8 mb-8 md:mb-12 ${
//         isReversed ? "md:flex-row-reverse" : ""
//       }`}
//     >
//       <div className="flex flex-col relative w-full  md:w-auto order-2 md:order-none">
//         <div className="relative mb-3">
//           <h1 className="bg-white w-max py-2 px-4 text-lg font-medium shadow-sm max-sm:text-sm">
//             {title}
//           </h1>
//           {/* <div className="w-0 h-0 border-l-[10px] border-l-transparent border-t-[15px] border-t-white border-r-[10px] border-r-transparent absolute bottom-[-15px] left-0 transform"></div> */}
//         </div>
// <span className="bg-gradient-to-t text-7xl md:text-8xl font-bold from-[#ffffff] to-[#FF7B07] text-transparent bg-clip-text order-1 md:order-none">
//   {number}
// </span>
//     </div>
//   );
// };

const HowItWork = () => {
  return (
    <div className="padding-bottom ">
      <div className="flex justify-center">
        <CommonHeading2 title="How It Works?" />
      </div>
      <div className="space-y-7 mt-20">
        <div>
          <div className="flex items-center">
            <div className="w-[20%] h-[2px] bg-gradient-to-t from-[#ffffff] to-[#FF7B07]"></div>
            <div className="bg-gradient-to-t w-full relative text-7xl md:text-8xl font-bold from-[#ffffff] to-[#FF7B07] text-transparent bg-clip-text order-1 md:order-none before:content-[''] before:bg-red-500 before:w-16 before:h-[2px]">
              <div className="text-sm absolute bg-white text-black -top-14 left-10 ">
                {/* Triangle */}
                <div
                  className="absolute left-0 top-full w-0 h-0 
                    border-t-[20px] border-t-[#D6863A] 
                    border-r-[40px] border-r-transparent"
                ></div>
                <h3 className="py-2 font-medium text-lg px-4">
                  Enroll in Your Preferred Test Series
                </h3>
              </div>
              <p> 01</p>
            </div>
          </div>
        </div>
        <div>
          <div className="flex items-center flex-row-reverse">
            <div className="w-[20%] h-[2px] bg-gradient-to-t from-[#ffffff] to-[#FF7B07]"></div>
            <div className="bg-gradient-to-t w-full relative text-7xl md:text-8xl font-bold from-[#ffffff] to-[#FF7B07] text-transparent bg-clip-text">
              <div className="text-sm absolute bg-white text-black -top-14 right-10 ">
                {/* Triangle */}
                <div
                  className="absolute right-0 top-full w-0 h-0 
                    border-t-[20px] border-t-[#D6863A] 
                    border-l-[40px] border-l-transparent"
                ></div>
                <h3 className="py-2 font-medium text-lg px-4 text-orange">
                  Get Instant Access to Tests & Study Material
                </h3>
              </div>
              <p className="text-right"> 02</p>
            </div>
          </div>
        </div>
        <div>
          <div className="flex items-center">
            <div className="w-[20%] h-[2px] bg-gradient-to-t from-[#ffffff] to-[#FF7B07]"></div>
            <div className="bg-gradient-to-t w-full relative text-7xl md:text-8xl font-bold from-[#ffffff] to-[#FF7B07] text-transparent bg-clip-text order-1 md:order-none before:content-[''] before:bg-red-500 before:w-16 before:h-[2px]">
              <div className="text-sm absolute bg-white text-black -top-14 left-10 ">
                {/* Triangle */}
                <div
                  className="absolute left-0 top-full w-0 h-0 
                    border-t-[20px] border-t-[#D6863A] 
                    border-r-[40px] border-r-transparent"
                ></div>
                <h3 className="py-2 font-medium text-lg px-4">
                  Enroll in Your Preferred Test Series
                </h3>
              </div>
              <p> 03</p>
            </div>
          </div>
        </div>
        <div>
          <div className="flex items-center flex-row-reverse">
            <div className="w-[20%] h-[2px] bg-gradient-to-t from-[#ffffff] to-[#FF7B07]"></div>
            <div className="bg-gradient-to-t w-full relative text-7xl md:text-8xl font-bold from-[#ffffff] to-[#FF7B07] text-transparent bg-clip-text">
              <div className="text-sm absolute bg-white text-black -top-14 right-10 ">
                {/* Triangle */}
                <div
                  className="absolute right-0 top-full w-0 h-0 
                    border-t-[20px] border-t-[#D6863A] 
                    border-l-[40px] border-l-transparent"
                ></div>
                <h3 className="py-2 font-medium text-lg px-4 text-orange">
                  Get Instant Access to Tests & Study Material
                </h3>
              </div>
              <p className="text-right"> 04</p>
            </div>
          </div>
        </div>
        <div>
          <div className="flex items-center">
            <div className="w-[20%] h-[2px] bg-gradient-to-t from-[#ffffff] to-[#FF7B07]"></div>
            <div className="bg-gradient-to-t w-full relative text-7xl md:text-8xl font-bold from-[#ffffff] to-[#FF7B07] text-transparent bg-clip-text order-1 md:order-none before:content-[''] before:bg-red-500 before:w-16 before:h-[2px]">
              <div className="text-sm absolute bg-white text-black -top-14 left-10 ">
                {/* Triangle */}
                <div
                  className="absolute left-0 top-full w-0 h-0 
                    border-t-[20px] border-t-[#D6863A] 
                    border-r-[40px] border-r-transparent"
                ></div>
                <h3 className="py-2 font-medium text-lg px-4">
                  Enroll in Your Preferred Test Series
                </h3>
              </div>
              <p> 05</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWork;
