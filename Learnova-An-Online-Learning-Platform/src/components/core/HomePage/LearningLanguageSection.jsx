import React from 'react'
import HighlightText from './HighlightText'
import CTAButton from "../../../components/core/HomePage/Button"
import Know_your_progress from "../../../assets/Images/Know_your_progress.png"
import Compare_with_others from "../../../assets/Images/Compare_with_others.svg"
import Plan_your_lessons from "../../../assets/Images/Plan_your_lessons.svg"

const LearningLanguageSection = () => {
  return (
    <div className="w-full">
      {/* Heading */}
      <div className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-center my-8 md:my-10">
        Your swiss knife for
        <HighlightText text={"learning any language"} />
      </div>

      {/* Description */}
      <p className="text-center text-richblack-700 font-medium w-[90%] sm:w-[75%] mx-auto leading-6 text-sm md:text-base mt-3">
        Using spin making learning multiple languages easy. with 20+
        languages realistic voice-over, progress tracking, custom schedule
        and more.
      </p>

      {/* Images */}
      <div className="flex flex-col lg:flex-row items-center justify-center mt-6 lg:mt-0 overflow-hidden">
        <img
          src={Know_your_progress}
          alt="Know your progress"
          className="object-contain w-[280px] sm:w-[320px] lg:w-auto lg:-mr-32"
        />
        <img
          src={Compare_with_others}
          alt="Compare with others"
          className="object-contain w-[280px] sm:w-[320px] lg:w-auto -mt-8 sm:-mt-12 lg:-mb-10 lg:-mt-0"
        />
        <img
          src={Plan_your_lessons}
          alt="Plan your lessons"
          className="object-contain w-[280px] sm:w-[320px] lg:w-auto -mt-8 sm:-mt-16 lg:-ml-36 lg:-mt-5"
        />
      </div>

      {/* CTA Button */}
      <div className="w-fit mx-auto mb-8 lg:mb-20 mt-4 lg:-mt-5">
        <CTAButton active={true} linkto={"/signup"}>
          Learn More
        </CTAButton>
      </div>
    </div>
  )
}

export default LearningLanguageSection