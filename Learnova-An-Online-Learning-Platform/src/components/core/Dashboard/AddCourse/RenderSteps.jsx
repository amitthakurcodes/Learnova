// import { FaCheck } from "react-icons/fa"
// import { useSelector } from "react-redux"

// import CourseBuilderForm from "./CourseBuilder/CourseBuilderForm"
// import CourseInformationForm from "./CourseInformation/CourseInformationForm"
// import PublishCourse from "./PublishCourse"


// export default function RenderSteps() {
//   const { step } = useSelector((state) => state.course)

//   const steps = [
//     {
//       id: 1,
//       title: "Course Information",
//     },
//     {
//       id: 2,
//       title: "Course Builder",
//     },
//     {
//       id: 3,
//       title: "Publish",
//     },
//   ]

//   return (
//     <>
//       <div className="relative mb-2 flex w-full justify-center">
//         {steps.map((item) => (
//           <>
//             <div
//               className="flex flex-col items-center "
//               key={item.id}
//             >
//               <button
//                 className={`grid cursor-default aspect-square w-[34px] place-items-center rounded-full border-[1px] ${
//                   step === item.id
//                     ? "border-yellow-50 bg-yellow-900 text-yellow-50"
//                     : "border-richblack-700 bg-richblack-800 text-richblack-300"
//                 } ${step > item.id && "bg-yellow-50 text-yellow-50"}} `}
//               >
//                 {step > item.id ? (
//                   <FaCheck className="font-bold text-richblack-900" />
//                 ) : (
//                   item.id
//                 )}
//               </button>
              
//             </div>
//             {item.id !== steps.length && (
//               <>
//                 <div
//                   className={`h-[calc(34px/2)] w-[33%]  border-dashed border-b-2 ${
//                   step > item.id  ? "border-yellow-50" : "border-richblack-500"
//                 } `}
//                 ></div>
//               </>
//             )}
//           </>
//         ))}
//       </div>

//       <div className="relative mb-16 flex w-full select-none justify-between">
//         {steps.map((item) => (
//           <>
//             <div
//               className="flex min-w-[130px] flex-col items-center gap-y-2"
//               key={item.id}
//             >
              
//               <p
//                 className={`text-sm ${
//                   step >= item.id ? "text-richblack-5" : "text-richblack-500"
//                 }`}
//               >
//                 {item.title}
//               </p>
//             </div>
            
//           </>
//         ))}
//       </div>
//       {/* Render specific component based on current step */}
//       {step === 1 && <CourseInformationForm />}
//       {step === 2 && <CourseBuilderForm />}
//       {step === 3 &&  <PublishCourse /> }
//     </>
//   )
// }


//2
// import { FaCheck } from "react-icons/fa"
// import { useSelector } from "react-redux"

// import CourseBuilderForm from "./CourseBuilder/CourseBuilderForm"
// import CourseInformationForm from "./CourseInformation/CourseInformationForm"
// import PublishCourse from "./PublishCourse"

// export default function RenderSteps() {
//   const { step } = useSelector((state) => state.course)

//   const steps = [
//     { id: 1, title: "Course Information" },
//     { id: 2, title: "Course Builder" },
//     { id: 3, title: "Publish" },
//   ]

//   return (
//     <>
//       <div className="relative mb-2 flex w-full justify-center">
//         {steps.map((item) => (
//           <>
//             <div className="flex flex-col items-center" key={item.id}>
//               <button
//                 className={`grid cursor-default aspect-square w-[34px] place-items-center rounded-full border-[1px] ${
//                   step === item.id
//                     ? "border-yellow-50 bg-yellow-900 text-yellow-50"
//                     : "border-richblack-700 bg-richblack-800 text-richblack-300"
//                 } ${step > item.id && "bg-yellow-50 text-yellow-50"}`}
//               >
//                 {step > item.id ? (
//                   <FaCheck className="font-bold text-richblack-900" />
//                 ) : (
//                   item.id
//                 )}
//               </button>
//             </div>
//             {item.id !== steps.length && (
//               <div
//                 className={`h-[calc(34px/2)] w-[33%] border-dashed border-b-2 ${
//                   step > item.id ? "border-yellow-50" : "border-richblack-500"
//                 }`}
//               ></div>
//             )}
//           </>
//         ))}
//       </div>

//       <div className="relative mb-16 flex w-full select-none justify-between">
//         {steps.map((item) => (
//           <div
//             className="flex flex-1 flex-col items-center gap-y-2"
//             key={item.id}
//           >
//             <p
//               className={`text-xs mt-2 sm:text-sm text-center ${
//                 step >= item.id ? "text-richblack-5" : "text-richblack-500"
//               }`}
//             >
//               {item.title}
//             </p>
//           </div>
//         ))}
//       </div>

//       {step === 1 && <CourseInformationForm />}
//       {step === 2 && <CourseBuilderForm />}
//       {step === 3 && <PublishCourse />}
//     </>
//   )
// }





// import { FaCheck } from "react-icons/fa"
// import { useSelector } from "react-redux"

// import CourseBuilderForm from "./CourseBuilder/CourseBuilderForm"
// import CourseInformationForm from "./CourseInformation/CourseInformationForm"
// import PublishCourse from "./PublishCourse"

// export default function RenderSteps() {
//   const { step } = useSelector((state) => state.course)

//   const steps = [
//     { id: 1, title: "Course Information" },
//     { id: 2, title: "Course Builder" },
//     { id: 3, title: "Publish" },
//   ]

//   return (
//     <>
//       {/* 🔥 STEPPER */}
//       <div className="w-full flex items-center justify-between mb-10">

//         {steps.map((item, index) => (
//           <div key={item.id} className="flex-1 flex flex-col items-center">

//             {/* CIRCLE */}
//             <div
//               className={`flex items-center justify-center w-8 h-8 rounded-full border ${
//                 step === item.id
//                   ? "border-yellow-50 bg-yellow-900 text-yellow-50"
//                   : "border-richblack-700 bg-richblack-800 text-richblack-300"
//               } ${step > item.id && "bg-yellow-50 text-richblack-900"}`}
//             >
//               {step > item.id ? <FaCheck /> : item.id}
//             </div>

//             {/* TEXT */}
//             <p
//               className={`mt-2 text-xs sm:text-sm text-center ${
//                 step >= item.id
//                   ? "text-richblack-5"
//                   : "text-richblack-500"
//               }`}
//             >
//               {item.title}
//             </p>

//             {/* LINE */}
//             {index !== steps.length - 1 && (
//               <div
//                 className={`hidden sm:block absolute w-1/3 h-[2px] border-b-2 border-dashed ${
//                   step > item.id
//                     ? "border-yellow-50"
//                     : "border-richblack-500"
//                 }`}
//                 style={{
//                   top: "16px",
//                   left: "50%",
//                   transform: "translateX(50%)",
//                 }}
//               ></div>
//             )}

//           </div>
//         ))}

//       </div>

//       {/* FORMS */}
//       {step === 1 && <CourseInformationForm />}
//       {step === 2 && <CourseBuilderForm />}
//       {step === 3 && <PublishCourse />}
//     </>
//   )
// }



// import { FaCheck } from "react-icons/fa"
// import { useSelector } from "react-redux"

// import CourseBuilderForm from "./CourseBuilder/CourseBuilderForm"
// import CourseInformationForm from "./CourseInformation/CourseInformationForm"
// import PublishCourse from "./PublishCourse"

// export default function RenderSteps() {
//   const { step } = useSelector((state) => state.course)

//   const steps = [
//     { id: 1, title: "Course Information" },
//     { id: 2, title: "Course Builder" },
//     { id: 3, title: "Publish" },
//   ]

//   return (
//     <>
//       {/* STEPPER */}
//       <div className="w-full flex items-center mb-10">

//         {steps.map((item, index) => (
//           <div key={item.id} className="flex items-center flex-1">

//             {/* STEP */}
//             <div className="flex flex-col items-center w-full">

//               <div
//                 className={`flex items-center justify-center w-8 h-8 rounded-full border ${
//                   step === item.id
//                     ? "border-yellow-50 bg-yellow-900 text-yellow-50"
//                     : "border-richblack-700 bg-richblack-800 text-richblack-300"
//                 } ${step > item.id && "bg-yellow-50 text-richblack-900"}`}
//               >
//                 {step > item.id ? <FaCheck /> : item.id}
//               </div>

//               <p
//                 className={`mt-2 text-xs sm:text-sm text-center ${
//                   step >= item.id
//                     ? "text-richblack-5"
//                     : "text-richblack-500"
//                 }`}
//               >
//                 {item.title}
//               </p>
//             </div>

//             {/* 🔥 LINE FIX */}
//             {index !== steps.length - 1 && (
//               <div
//                 className={`flex-1 h-[2px] ${
//                   step > item.id
//                     ? "bg-yellow-50"
//                     : "bg-richblack-500"
//                 }`}
//               ></div>
//             )}

//           </div>
//         ))}

//       </div>

//       {step === 1 && <CourseInformationForm />}
//       {step === 2 && <CourseBuilderForm />}
//       {step === 3 && <PublishCourse />}
//     </>
//   )
// }



// import { FaCheck } from "react-icons/fa"
// import { useSelector } from "react-redux"

// import CourseBuilderForm from "./CourseBuilder/CourseBuilderForm"
// import CourseInformationForm from "./CourseInformation/CourseInformationForm"
// import PublishCourse from "./PublishCourse"

// export default function RenderSteps() {
//   const { step } = useSelector((state) => state.course)

//   const steps = [
//     { id: 1, title: "Course Information" },
//     { id: 2, title: "Course Builder" },
//     { id: 3, title: "Publish" },
//   ]

//   return (
//     <>
//       {/* 🔥 TOP STEPPER */}
//       <div className="w-full flex items-center justify-between mb-6">

//         {steps.map((item, index) => (
//           <div key={item.id} className="flex items-center flex-1">

//             {/* STEP (circle + text) */}
//             <div className="flex flex-col items-center w-full">

//               {/* CIRCLE */}
//               <div
//                 className={`flex items-center justify-center w-8 h-8 rounded-full border ${
//                   step === item.id
//                     ? "border-yellow-50 bg-yellow-900 text-yellow-50"
//                     : "border-richblack-700 bg-richblack-800 text-richblack-300"
//                 } ${step > item.id && "bg-yellow-50 text-richblack-900"}`}
//               >
//                 {step > item.id ? <FaCheck /> : item.id}
//               </div>

//               {/* TEXT */}
//               <p
//                 className={`mt-2 text-[10px] sm:text-sm text-center ${
//                   step >= item.id
//                     ? "text-richblack-5"
//                     : "text-richblack-500"
//                 }`}
//               >
//                 {item.title}
//               </p>
//             </div>

//             {/* 🔥 DASH LINE (FIXED) */}
//             {index !== steps.length - 1 && (
//               <div
//                 className={`flex-1 h-[2px] border-dashed border-b-2 ${
//                   step > item.id
//                     ? "border-yellow-50"
//                     : "border-richblack-500"
//                 }`}
//               ></div>
//             )}

//           </div>
//         ))}

//       </div>

//       {/* FORMS */}
//       {step === 1 && <CourseInformationForm />}
//       {step === 2 && <CourseBuilderForm />}
//       {step === 3 && <PublishCourse />}
//     </>
//   )
// }




// import { FaCheck } from "react-icons/fa"
// import { useSelector } from "react-redux"

// import CourseBuilderForm from "./CourseBuilder/CourseBuilderForm"
// import CourseInformationForm from "./CourseInformation/CourseInformationForm"
// import PublishCourse from "./PublishCourse"

// export default function RenderSteps() {
//   const { step } = useSelector((state) => state.course)

//   const steps = [
//     { id: 1, title: "Course Information" },
//     { id: 2, title: "Course Builder" },
//     { id: 3, title: "Publish" },
//   ]

//   return (
//     <>
//       {/* Stepper Container */}
//       <div className="relative mb-16 flex w-full items-start justify-center">
//         {steps.map((item, index) => (
//           <div key={item.id} className="flex items-start">

//             {/* Circle + Label ek saath */}
//             <div className="flex flex-col items-center">
//               <button
//                 className={`grid cursor-default aspect-square w-[34px] place-items-center rounded-full border-[1px] ${
//                   step === item.id
//                     ? "border-yellow-50 bg-yellow-900 text-yellow-50"
//                     : "border-richblack-700 bg-richblack-800 text-richblack-300"
//                 } ${step > item.id && "bg-yellow-50 text-yellow-50"}`}
//               >
//                 {step > item.id ? (
//                   <FaCheck className="font-bold text-richblack-900" />
//                 ) : (
//                   item.id
//                 )}
//               </button>

//               {/* Label directly neeche circle ke */}
//               <p
//                 className={`mt-2 text-center text-xs sm:text-sm ${
//                   step >= item.id ? "text-richblack-5" : "text-richblack-500"
//                 }`}
//               >
//                 {item.title}
//               </p>
//             </div>

//             {/* Connector line — last item ke baad nahi aayegi */}
//             {index !== steps.length - 1 && (
//               <div
//                 className={`mt-[17px] h-[1px] w-16 sm:w-24 md:w-32 border-dashed border-b-2 ${
//                   step > item.id ? "border-yellow-50" : "border-richblack-500"
//                 }`}
//               />
//             )}

//           </div>
//         ))}
//       </div>

//       {step === 1 && <CourseInformationForm />}
//       {step === 2 && <CourseBuilderForm />}
//       {step === 3 && <PublishCourse />}
//     </>
//   )
// }





// import { FaCheck } from "react-icons/fa"
// import { useSelector } from "react-redux"

// import CourseBuilderForm from "./CourseBuilder/CourseBuilderForm"
// import CourseInformationForm from "./CourseInformation/CourseInformationForm"
// import PublishCourse from "./PublishCourse"

// export default function RenderSteps() {
//   const { step } = useSelector((state) => state.course)

//   const steps = [
//     { id: 1, title: "Course Information" },
//     { id: 2, title: "Course Builder" },
//     { id: 3, title: "Publish" },
//   ]

//   return (
//     <>
//       {/* Stepper */}
//       <div className="relative mb-16 flex w-full items-start justify-center px-4">
//         {steps.map((item, index) => (
//           <div key={item.id} className="flex items-start">

//             {/* Circle + Label */}
//             <div className="flex flex-col items-center w-[80px] sm:w-[100px] md:w-[120px]">
//               <button
//                 className={`grid cursor-default aspect-square w-[34px] place-items-center rounded-full border-[1px] ${
//                   step === item.id
//                     ? "border-yellow-50 bg-yellow-900 text-yellow-50"
//                     : "border-richblack-700 bg-richblack-800 text-richblack-300"
//                 } ${step > item.id && "bg-yellow-50 text-yellow-50"}`}
//               >
//                 {step > item.id ? (
//                   <FaCheck className="font-bold text-richblack-900" />
//                 ) : (
//                   item.id
//                 )}
//               </button>

//               <p
//                 className={`mt-2 text-center text-xs sm:text-sm leading-tight ${
//                   step >= item.id ? "text-richblack-5" : "text-richblack-500"
//                 }`}
//               >
//                 {item.title}
//               </p>
//             </div>

//             {/* Connector — flex-1 se available space le lega */}
//             {index !== steps.length - 1 && (
//               <div
//                 className={`flex-1 min-w-[20px] mt-[17px] border-dashed border-b-2 ${
//                   step > item.id ? "border-yellow-50" : "border-richblack-500"
//                 }`}
//               />
//             )}

//           </div>
//         ))}
//       </div>

//       {step === 1 && <CourseInformationForm />}
//       {step === 2 && <CourseBuilderForm />}
//       {step === 3 && <PublishCourse />}
//     </>
//   )
// }



import { FaCheck } from "react-icons/fa"
import { useSelector } from "react-redux"

import CourseBuilderForm from "./CourseBuilder/CourseBuilderForm"
import CourseInformationForm from "./CourseInformation/CourseInformationForm"
import PublishCourse from "./PublishCourse"

export default function RenderSteps() {
  const { step } = useSelector((state) => state.course)

  const steps = [
    { id: 1, title: "Course Information" },
    { id: 2, title: "Course Builder" },
    { id: 3, title: "Publish" },
  ]

  return (
    <>
      {/* Row 1: Circles + Dashed Lines */}
      <div className="relative mb-2 flex w-full justify-center">
        {steps.map((item) => (
          <>
            <div
              key={item.id}
              className="flex flex-col items-center flex-shrink-0"
            >
              <button
                className={`grid cursor-default aspect-square w-[34px] place-items-center rounded-full border-[1px] ${
                  step === item.id
                    ? "border-yellow-50 bg-yellow-900 text-yellow-50"
                    : "border-richblack-700 bg-richblack-800 text-richblack-300"
                } ${step > item.id && "bg-yellow-50 text-yellow-50"}`}
              >
                {step > item.id ? (
                  <FaCheck className="font-bold text-richblack-900" />
                ) : (
                  item.id
                )}
              </button>
            </div>

            {item.id !== steps.length && (
              <div
                className={`h-[calc(34px/2)] flex-1 border-dashed border-b-2 ${
                  step > item.id ? "border-yellow-50" : "border-richblack-500"
                }`}
              />
            )}
          </>
        ))}
      </div>

      {/* Row 2: Labels — same structure, circle width match karo */}
      <div className="relative mb-16 flex w-full items-start justify-center">
        {steps.map((item, index) => (
          <>
            <div
              key={item.id}
              className="flex-shrink-0 flex flex-col items-center w-[34px]"
            >
              <p
                className={`text-xs text-center leading-tight w-max max-w-[37px] -translate-x-1/2 left-1/2 relative ${
                  step >= item.id ? "text-richblack-5" : "text-richblack-500"
                }`}
              >
                {item.title}
              </p>
            </div>

            {index !== steps.length - 1 && (
              <div className="flex-1" />
            )}
          </>
        ))}
      </div>

      {step === 1 && <CourseInformationForm />}
      {step === 2 && <CourseBuilderForm />}
      {step === 3 && <PublishCourse />}
    </>
  )
}