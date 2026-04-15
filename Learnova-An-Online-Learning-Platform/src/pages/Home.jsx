// import { FaArrowRight } from "react-icons/fa"
// import { Link } from "react-router-dom"

// import Banner from "../assets/Images/banner.mp4"
// import Footer from "../components/common/Footer"
// import ReviewSlider from "../components/common/ReviewSlider"
// import CTAButton from "../components/core/HomePage/Button"
// import CodeBlocks from "../components/core/HomePage/CodeBlocks"
// import ExploreMore from "../components/core/HomePage/ExploreMore"
// import HighlightText from "../components/core/HomePage/HighlightText"
// import InstructorSection from "../components/core/HomePage/InstructorSection"
// import LearningLanguageSection from "../components/core/HomePage/LearningLanguageSection"
// import TimelineSection from "../components/core/HomePage/TimelineSection"

// function Home() {
//   return (
//     <div>
//       {/* Section 1 */}
//       <div className="relative mx-auto flex w-11/12 max-w-maxContent flex-col items-center justify-between gap-8 text-white">
        
//         {/* Become an Instructor Button */}
//         <Link to={"/signup"}>
//           <div className="group mx-auto mt-10 md:mt-16 w-fit rounded-full bg-richblack-800 p-1 font-bold text-richblack-200 drop-shadow-[0_1.5px_rgba(255,255,255,0.25)] transition-all duration-200 hover:scale-95 hover:drop-shadow-none">
//             <div className="flex flex-row items-center gap-2 rounded-full px-6 md:px-10 py-[5px] transition-all duration-200 group-hover:bg-richblack-900">
//               <p className="text-sm md:text-base">Become an Instructor</p>
//               <FaArrowRight />
//             </div>
//           </div>
//         </Link>

//         {/* Heading */}
//         <div className="text-center text-3xl sm:text-4xl font-semibold px-2">
//           Empower Your Future with
//           <HighlightText text={"Coding Skills"} />
//         </div>

//         {/* Sub Heading */}
//         <div className="-mt-3 w-full sm:w-[90%] text-center text-base md:text-lg font-bold text-richblack-300 px-2">
//           With our online coding courses, you can learn at your own pace, from
//           anywhere in the world, and get access to a wealth of resources,
//           including hands-on projects, quizzes, and personalized feedback from
//           instructors.
//         </div>

//         {/* CTA Buttons */}
//         <div className="mt-4 md:mt-8 flex flex-row gap-4 md:gap-7">
//           <CTAButton active={true} linkto={"/signup"}>
//             Learn More
//           </CTAButton>
//           <CTAButton active={false} linkto={"/login"}>
//             Book a Demo
//           </CTAButton>
//         </div>

//         {/* Video */}
//         <div className="mx-2 md:mx-3 my-5 md:my-7 w-full shadow-[10px_-5px_50px_-5px] shadow-blue-200">
//           <video
//             className="w-full shadow-[20px_20px_rgba(255,255,255)]"
//             muted
//             loop
//             autoPlay
//           >
//             <source src={Banner} type="video/mp4" />
//           </video>
//         </div>

//         {/* Code Section 1 */}
//         <div className="w-full">
//           <CodeBlocks
//             position={"lg:flex-row"}
//             heading={
//               <div className="text-3xl sm:text-4xl font-semibold">
//                 Unlock your
//                 <HighlightText text={"coding potential"} /> with our online
//                 courses.
//               </div>
//             }
//             subheading={
//               "Our courses are designed and taught by industry experts who have years of experience in coding and are passionate about sharing their knowledge with you."
//             }
//             ctabtn1={{
//               btnText: "Try it Yourself",
//               link: "/signup",
//               active: true,
//             }}
//             ctabtn2={{
//               btnText: "Learn More",
//               link: "/signup",
//               active: false,
//             }}
//             codeColor={"text-yellow-25"}
//             codeblock={`<!DOCTYPE html>\n <html lang="en">\n<head>\n<title>This is myPage</title>\n</head>\n<body>\n<h1><a href="/">Header</a></h1>\n<nav> <a href="/one">One</a> <a href="/two">Two</a> <a href="/three">Three</a>\n</nav>\n</body>`}
//             backgroundGradient={<div className="codeblock1 absolute"></div>}
//           />
//         </div>

//         {/* Code Section 2 */}
//         <div className="w-full">
//           <CodeBlocks
//             position={"lg:flex-row-reverse"}
//             heading={
//               <div className="w-full text-3xl sm:text-4xl font-semibold lg:w-[50%]">
//                 Start
//                 <HighlightText text={"coding in seconds"} />
//               </div>
//             }
//             subheading={
//               "Go ahead, give it a try. Our hands-on learning environment means you'll be writing real code from your very first lesson."
//             }
//             ctabtn1={{
//               btnText: "Continue Lesson",
//               link: "/signup",
//               active: true,
//             }}
//             ctabtn2={{
//               btnText: "Learn More",
//               link: "/signup",
//               active: false,
//             }}
//             codeColor={"text-white"}
//             codeblock={`import React from "react";\n import CTAButton from "./Button";\nimport TypeAnimation from "react-type";\nimport { FaArrowRight } from "react-icons/fa";\n\nconst Home = () => {\nreturn (\n<div>Home</div>\n)\n}\nexport default Home;`}
//             backgroundGradient={<div className="codeblock2 absolute"></div>}
//           />
//         </div>

//         {/* Explore Section */}
//         <div className="w-full">
//           <ExploreMore />
//         </div>
//       </div>

//       {/* Section 2 */}
//       <div className="bg-pure-greys-5 text-richblack-700">
//         <div className="homepage_bg h-[200px] sm:h-[260px] md:h-[320px]">
//           <div className="mx-auto flex w-11/12 max-w-maxContent flex-col items-center justify-between gap-8">
//             <div className="h-[80px] sm:h-[120px] lg:h-[150px]"></div>
//             <div className="flex flex-col sm:flex-row gap-4 md:gap-7 text-white lg:mt-8">
//               <CTAButton active={true} linkto={"/signup"}>
//                 <div className="flex items-center gap-2">
//                   Explore Full Catalog
//                   <FaArrowRight />
//                 </div>
//               </CTAButton>
//               <CTAButton active={false} linkto={"/login"}>
//                 Learn More
//               </CTAButton>
//             </div>
//           </div>
//         </div>

//         <div className="mx-auto flex w-11/12 max-w-maxContent flex-col items-center justify-between gap-8">
//           {/* Job that is in Demand */}
//           <div className="mb-10 mt-[-60px] sm:mt-[-80px] lg:mt-20 flex flex-col justify-between gap-7 lg:flex-row lg:gap-0">
//             <div className="text-3xl sm:text-4xl font-semibold lg:w-[45%]">
//               Get the skills you need for a{" "}
//               <HighlightText text={"job that is in demand."} />
//             </div>
//             <div className="flex flex-col items-start gap-6 md:gap-10 lg:w-[40%]">
//               <div className="text-[15px] md:text-[16px]">
//                 The modern Learnova is the dictates its own terms. Today, to
//                 be a competitive specialist requires more than professional
//                 skills.
//               </div>
//               <CTAButton active={true} linkto={"/signup"}>
//                 Learn More
//               </CTAButton>
//             </div>
//           </div>

//           {/* Timeline Section */}
//           <TimelineSection />

//           {/* Learning Language Section */}
//           <LearningLanguageSection />
//         </div>
//       </div>

//       {/* Section 3 */}
//       <div className="relative mx-auto my-12 md:my-20 flex w-11/12 max-w-maxContent flex-col items-center justify-between gap-8 bg-richblack-900 text-white">
//         {/* Instructor Section */}
//         <InstructorSection />

//         {/* Reviews */}
//         <h1 className="text-center text-3xl sm:text-4xl font-semibold mt-4 md:mt-8">
//           Reviews from other learners
//         </h1>
//         <ReviewSlider />
//       </div>

//       {/* Footer */}
//       <Footer />
//     </div>
//   )
// }

// export default Home






import { FaArrowRight } from "react-icons/fa"
import { Link } from "react-router-dom"

import Banner from "../assets/Images/banner.mp4"
import Footer from "../components/common/Footer"
import ReviewSlider from "../components/common/ReviewSlider"
import CTAButton from "../components/core/HomePage/Button"
import CodeBlocks from "../components/core/HomePage/CodeBlocks"
import ExploreMore from "../components/core/HomePage/ExploreMore"
import HighlightText from "../components/core/HomePage/HighlightText"
import InstructorSection from "../components/core/HomePage/InstructorSection"
import LearningLanguageSection from "../components/core/HomePage/LearningLanguageSection"
import TimelineSection from "../components/core/HomePage/TimelineSection"

function Home() {
  return (
    <div>
      {/* Section 1 */}
      <div className="relative mx-auto flex w-11/12 max-w-maxContent flex-col items-center justify-between gap-8 text-white">
        
        {/* Become an Instructor Button */}
        <Link to={"/signup"}>
          <div className="group mx-auto mt-10 md:mt-16 w-fit rounded-full bg-richblack-800 p-1 font-bold text-richblack-200 drop-shadow-[0_1.5px_rgba(255,255,255,0.25)] transition-all duration-200 hover:scale-95 hover:drop-shadow-none">
            <div className="flex flex-row items-center gap-2 rounded-full px-6 md:px-10 py-[5px] transition-all duration-200 group-hover:bg-richblack-900">
              <p className="text-sm md:text-base">Become an Instructor</p>
              <FaArrowRight />
            </div>
          </div>
        </Link>

        {/* Heading */}
        <div className="text-center text-3xl sm:text-4xl font-semibold px-2">
          Empower Your Future with
          <HighlightText text={"Coding Skills"} />
        </div>

        {/* Sub Heading */}
        <div className="-mt-3 w-full sm:w-[90%] text-center text-base md:text-lg font-bold text-richblack-300 px-2">
          With our online coding courses, you can learn at your own pace, from
          anywhere in the world, and get access to a wealth of resources,
          including hands-on projects, quizzes, and personalized feedback from
          instructors.
        </div>

        {/* CTA Buttons */}
        <div className="mt-4 md:mt-8 flex flex-row gap-4 md:gap-7">
          <CTAButton active={true} linkto={"/signup"}>
            Learn More
          </CTAButton>
          <CTAButton active={false} linkto={"/login"}>
            Book a Demo
          </CTAButton>
        </div>

        {/* Video */}
        <div className="mx-2 md:mx-3 my-5 md:my-7 w-full shadow-[10px_-5px_50px_-5px] shadow-blue-200">
          <video
            className="w-full shadow-[20px_20px_rgba(255,255,255)]"
            muted
            loop
            autoPlay
          >
            <source src={Banner} type="video/mp4" />
          </video>
        </div>

        {/* Code Section 1 */}
        <div className="w-full">
          <CodeBlocks
            position={"lg:flex-row"}
            heading={
              <div className="text-3xl sm:text-4xl font-semibold">
                Unlock your
                <HighlightText text={"coding potential"} /> with our online
                courses.
              </div>
            }
            subheading={
              "Our courses are designed and taught by industry experts who have years of experience in coding and are passionate about sharing their knowledge with you."
            }
            ctabtn1={{
              btnText: "Try it Yourself",
              link: "/signup",
              active: true,
            }}
            ctabtn2={{
              btnText: "Learn More",
              link: "/signup",
              active: false,
            }}
            codeColor={"text-yellow-25"}
            codeblock={`<!DOCTYPE html>\n <html lang="en">\n<head>\n<title>This is myPage</title>\n</head>\n<body>\n<h1><a href="/">Header</a></h1>\n<nav> <a href="/one">One</a> <a href="/two">Two</a> <a href="/three">Three</a>\n</nav>\n</body>`}
            backgroundGradient={<div className="codeblock1 absolute"></div>}
          />
        </div>

        {/* Code Section 2 */}
        <div className="w-full">
          <CodeBlocks
            position={"lg:flex-row-reverse"}
            heading={
              <div className="w-full text-3xl sm:text-4xl font-semibold lg:w-[50%]">
                Start
                <HighlightText text={"coding in seconds"} />
              </div>
            }
            subheading={
              "Go ahead, give it a try. Our hands-on learning environment means you'll be writing real code from your very first lesson."
            }
            ctabtn1={{
              btnText: "Continue Lesson",
              link: "/signup",
              active: true,
            }}
            ctabtn2={{
              btnText: "Learn More",
              link: "/signup",
              active: false,
            }}
            codeColor={"text-white"}
            codeblock={`import React from "react";\n import CTAButton from "./Button";\nimport TypeAnimation from "react-type";\nimport { FaArrowRight } from "react-icons/fa";\n\nconst Home = () => {\nreturn (\n<div>Home</div>\n)\n}\nexport default Home;`}
            backgroundGradient={<div className="codeblock2 absolute"></div>}
          />
        </div>

        {/* Explore Section */}
        <div className="w-full">
          <ExploreMore />
        </div>
      </div>

      {/* Section 2 */}
      <div className="bg-pure-greys-5 text-richblack-700">
        <div className="homepage_bg h-[200px] sm:h-[260px] md:h-[320px]  ">
          <div className="mx-auto flex w-11/12 max-w-maxContent flex-col items-center justify-between gap-8">
            <div className="h-[80px] sm:h-[120px] lg:h-[150px]"></div>
           <div className="flex flex-col sm:flex-row gap-4 md:gap-7 text-white lg:mt-8 -mt-6">
              <CTAButton active={true} linkto={"/signup"}>
                <div className="flex items-center gap-2 ">
                  Explore Full Catalog
                  <FaArrowRight />
                </div>
              </CTAButton>
              <CTAButton active={false} linkto={"/login"}>
                Learn More
              </CTAButton>
            </div>
          </div>
        </div>

        <div className="mx-auto flex w-11/12 max-w-maxContent flex-col items-center justify-between gap-8">
          {/* Job that is in Demand - FIXED: removed negative margins that caused overlap on mobile */}
          <div className="mb-10 mt-8 sm:mt-10 lg:mt-20 flex flex-col justify-between gap-7 lg:flex-row lg:gap-0">
            <div className="text-3xl sm:text-4xl font-semibold lg:w-[45%]">
              Get the skills you need for a{" "}
              <HighlightText text={"job that is in demand."} />
            </div>
            <div className="flex flex-col items-start gap-6 md:gap-10 lg:w-[40%]">
              <div className="text-[15px] md:text-[16px]">
            Learnova helps you shape your own learning path. Today, being competitive requires not just skills, but continuous learning and real-world experience.
              </div>
              <CTAButton active={true} linkto={"/signup"}>
                Learn More
              </CTAButton>
            </div>
          </div>

          {/* Timeline Section */}
          <TimelineSection />

          {/* Learning Language Section */}
          <LearningLanguageSection />
        </div>
      </div>

      {/* Section 3 */}
      <div className="relative mx-auto my-12 md:my-20 flex w-11/12 max-w-maxContent flex-col items-center justify-between gap-8 bg-richblack-900 text-white">
        {/* Instructor Section */}
        <InstructorSection />

        {/* Reviews */}
        <h1 className="text-center text-3xl sm:text-4xl font-semibold mt-4 md:mt-8">
          Reviews from other learners
        </h1>
        <ReviewSlider />
      </div>

      {/* Footer */}
      <Footer />
    </div>
  )
}

export default Home