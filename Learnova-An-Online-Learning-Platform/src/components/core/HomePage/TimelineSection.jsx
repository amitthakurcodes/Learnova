import React from "react";
import TimeLineImage from "../../../assets/Images/TimelineImage.png";
import Logo1 from "../../../assets/TimeLineLogo/Logo1.svg";
import Logo2 from "../../../assets/TimeLineLogo/Logo2.svg";
import Logo3 from "../../../assets/TimeLineLogo/Logo3.svg";
import Logo4 from "../../../assets/TimeLineLogo/Logo4.svg";

const TimeLine = [
  {
    Logo: Logo1,
    Heading: "Leadership",
    Description: "Fully committed to the success company",
  },
  {
    Logo: Logo2,
    Heading: "Responsibility",
    Description: "Students will always be our top priority",
  },
  {
    Logo: Logo3,
    Heading: "Flexibility",
    Description: "The ability to switch is an important skills",
  },
  {
    Logo: Logo4,
    Heading: "Solve the problem",
    Description: "Code your way to a solution",
  },
];

const TimelineSection = () => {
  return (
    <div className="w-full">
      <div className="flex flex-col lg:flex-row gap-10 md:gap-16 lg:gap-20 mb-16 md:mb-20 items-center">
        
        {/* Left - Timeline Items */}
        <div className="w-full lg:w-[45%] flex flex-col gap-8 lg:gap-3">
          {TimeLine.map((ele, i) => (
            <div className="flex flex-col lg:gap-3" key={i}>
              <div className="flex gap-4 md:gap-6">
                {/* Logo */}
                <div className="w-[44px] h-[44px] md:w-[52px] md:h-[52px] bg-white rounded-full flex justify-center items-center shadow-[0_0_62px_0] shadow-[#00000012] flex-shrink-0">
                  <img src={ele.Logo} alt={ele.Heading} className="w-5 h-5 md:w-6 md:h-6" />
                </div>
                {/* Text */}
                <div>
                  <h2 className="font-semibold text-[16px] md:text-[18px]">
                    {ele.Heading}
                  </h2>
                  <p className="text-sm md:text-base text-richblack-300">
                    {ele.Description}
                  </p>
                </div>
              </div>
              {/* Dotted Line */}
              <div
                className={`${
                  TimeLine.length - 1 === i ? "hidden" : "hidden lg:block"
                } h-14 border-dotted border-r border-richblack-100 bg-richblack-400/0 w-[26px]`}
              ></div>
            </div>
          ))}
        </div>

        {/* Right - Image + Stats */}
        <div className="relative w-full lg:w-[55%] flex justify-center">
          <div className="relative w-fit h-fit shadow-blue-200 shadow-[0px_0px_30px_0px]">
            <img
              src={TimeLineImage}
              alt="timelineImage"
              className="shadow-white shadow-[20px_20px_0px_0px] object-cover w-full h-[280px] sm:h-[350px] lg:h-fit"
            />

            {/* Stats Box */}
            <div className="absolute bottom-0 left-[50%] translate-x-[-50%] translate-y-[50%] bg-caribbeangreen-700 flex flex-row text-white uppercase py-4 lg:py-10 w-[90%] lg:w-auto z-10">
              {/* Section 1 */}
              <div className="flex gap-3 md:gap-5 items-center border-r border-caribbeangreen-300 px-4 md:px-7 lg:px-14">
                <h1 className="text-2xl md:text-3xl font-bold w-[40px] md:w-[75px]">
                  10
                </h1>
                <h1 className="text-caribbeangreen-300 text-xs md:text-sm w-[60px] md:w-[75px]">
                  Years experiences
                </h1>
              </div>

              {/* Section 2 */}
              <div className="flex gap-3 md:gap-5 items-center px-4 md:px-7 lg:px-14">
                <h1 className="text-2xl md:text-3xl font-bold w-[40px] md:w-[75px]">
                  250
                </h1>
                <h1 className="text-caribbeangreen-300 text-xs md:text-sm w-[60px] md:w-[75px]">
                  types of courses
                </h1>
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* Spacer for stats box overlap */}
      <div className="h-16 md:h-20 lg:h-0"></div>
    </div>
  );
};

export default TimelineSection;