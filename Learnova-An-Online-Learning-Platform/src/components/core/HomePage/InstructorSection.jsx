import React from 'react'
import CTAButton from "../../../components/core/HomePage/Button"
import { FaArrowRight } from "react-icons/fa"
import Instructor from "../../../assets/Images/Instructor.png"
import HighlightText from './HighlightText'

const InstructorSection = () => {
  return (
    <div className="w-full">
      <div className="flex flex-col lg:flex-row gap-10 md:gap-16 lg:gap-20 items-center">
        
        {/* Left - Image */}
        <div className="w-full lg:w-[50%] flex justify-center">
          <img
            src={Instructor}
            alt="Instructor"
            className="shadow-white shadow-[-20px_-20px_0_0] w-[280px] sm:w-[350px] md:w-[400px] lg:w-full object-contain"
          />
        </div>

        {/* Right - Content */}
        <div className="w-full lg:w-[50%] flex gap-6 md:gap-10 flex-col text-center lg:text-left items-center lg:items-start">
          <h1 className="text-3xl sm:text-4xl font-semibold">
            Become an
            <HighlightText text={"instructor"} />
          </h1>

          <p className="font-medium text-[14px] md:text-[16px] text-richblack-300 w-full sm:w-[90%] lg:w-[90%] lg:text-justify">
            Instructors from around the world teach millions of students on
            Learnova. We provide the tools and skills to teach what you
            love.
          </p>

          <div className="w-fit">
            <CTAButton active={true} linkto={"/signup"}>
              <div className="flex items-center gap-3">
                Start Teaching Today
                <FaArrowRight />
              </div>
            </CTAButton>
          </div>
        </div>

      </div>
    </div>
  )
}

export default InstructorSection