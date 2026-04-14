import React from "react";
import { HiUsers } from "react-icons/hi";
import { ImTree } from "react-icons/im";

const CourseCard = ({ cardData, currentCard, setCurrentCard }) => {
  const isActive = currentCard === cardData?.heading;

  return (
    <div
      className={`w-full sm:w-[48%] lg:w-[30%] ${
        isActive
          ? "bg-white shadow-[12px_12px_0_0] shadow-yellow-50"
          : "bg-richblack-800"
      } text-richblack-25 min-h-[250px] lg:h-[300px] box-border cursor-pointer transition-all duration-200`}
      onClick={() => setCurrentCard(cardData?.heading)}
    >
      {/* Top Section */}
      <div className="border-b-[2px] border-richblack-400 border-dashed h-[80%] p-4 md:p-6 flex flex-col gap-3">
        <div
          className={`${
            isActive ? "text-richblack-800" : "text-richblack-25"
          } font-semibold text-[16px] md:text-[20px]`}
        >
          {cardData?.heading}
        </div>

        <div className={`text-sm md:text-base ${
          isActive ? "text-richblack-600" : "text-richblack-400"
        }`}>
          {cardData?.description}
        </div>
      </div>

      {/* Bottom Section */}
      <div
        className={`flex justify-between ${
          isActive ? "text-blue-300" : "text-richblack-300"
        } px-4 md:px-6 py-3 font-medium`}
      >
        {/* Level */}
        <div className="flex items-center gap-2 text-[14px] md:text-[16px]">
          <HiUsers />
          <p>{cardData?.level}</p>
        </div>

        {/* Lessons */}
        <div className="flex items-center gap-2 text-[14px] md:text-[16px]">
          <ImTree />
          <p>{cardData?.lessionNumber} Lessons</p>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;