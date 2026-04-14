import React, { useState } from "react";
import { HomePageExplore } from "../../../data/homepage-explore";
import CourseCard from "./CourseCard";
import HighlightText from "./HighlightText";

const tabsName = [
  "Free",
  "New to coding",
  "Most popular",
  "Skills paths",
  "Career paths",
];

const ExploreMore = () => {
  const [currentTab, setCurrentTab] = useState(tabsName[0]);
  const [courses, setCourses] = useState(HomePageExplore[0].courses);
  const [currentCard, setCurrentCard] = useState(
    HomePageExplore[0].courses[0].heading
  );

  const setMyCards = (value) => {
    setCurrentTab(value);
    const result = HomePageExplore.filter((course) => course.tag === value);
    setCourses(result[0].courses);
    setCurrentCard(result[0].courses[0].heading);
  };

  return (
    <div className="w-full">
      {/* Heading */}
      <div className="text-center my-8 md:my-10">
        <div className="text-2xl sm:text-3xl lg:text-4xl font-semibold">
          Unlock the
          <HighlightText text={"Power of Code"} />
        </div>
        <p className="text-center text-richblack-300 text-base md:text-lg font-semibold mt-1">
          Learn to Build Anything You Can Imagine
        </p>
      </div>

      {/* Tabs — Desktop */}
      <div className="hidden lg:flex gap-5 -mt-5 mx-auto w-max bg-richblack-800 text-richblack-200 p-1 rounded-full font-medium drop-shadow-[0_1.5px_rgba(255,255,255,0.25)]">
        {tabsName.map((ele, index) => (
          <div
            key={index}
            className={`text-[16px] flex flex-row items-center gap-2 ${
              currentTab === ele
                ? "bg-richblack-900 text-richblack-5 font-medium"
                : "text-richblack-200"
            } px-7 py-[7px] rounded-full transition-all duration-200 cursor-pointer hover:bg-richblack-900 hover:text-richblack-5`}
            onClick={() => setMyCards(ele)}
          >
            {ele}
          </div>
        ))}
      </div>

      {/* Tabs — Mobile (horizontal scroll) */}
      <div className="flex lg:hidden overflow-x-auto gap-3 pb-2 -mt-3 scrollbar-hide">
        {tabsName.map((ele, index) => (
          <div
            key={index}
            className={`whitespace-nowrap text-sm flex items-center ${
              currentTab === ele
                ? "bg-richblack-900 text-richblack-5 font-medium"
                : "bg-richblack-800 text-richblack-200"
            } px-4 py-2 rounded-full transition-all duration-200 cursor-pointer hover:bg-richblack-900 hover:text-richblack-5`}
            onClick={() => setMyCards(ele)}
          >
            {ele}
          </div>
        ))}
      </div>

      {/* Spacer - Desktop only */}
      <div className="hidden lg:block lg:h-[200px]"></div>

      {/* Cards Group */}
      <div className="lg:absolute gap-6 lg:gap-0 flex lg:justify-between flex-col sm:flex-row flex-wrap w-full lg:bottom-[0] lg:left-[50%] lg:translate-x-[-50%] lg:translate-y-[50%] text-black mb-7 lg:mb-0 px-3 lg:px-0">
        {courses.map((ele, index) => (
          <CourseCard
            key={index}
            cardData={ele}
            currentCard={currentCard}
            setCurrentCard={setCurrentCard}
          />
        ))}
      </div>
    </div>
  );
};

export default ExploreMore;