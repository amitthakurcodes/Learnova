// import { FcGoogle } from "react-icons/fc"
// import { useSelector } from "react-redux"

// import frameImg from "../../../assets/Images/frame.png"
// import LoginForm from "./LoginForm"
// import SignupForm from "./SignupForm"

// function Template({ title, description1, description2, image, formType }) {
//   const { loading } = useSelector((state) => state.auth)

//   return (
//     // <div className="grid min-h-[calc(100vh-3.5rem)] place-items-center">

//     <div className="flex min-h-[calc(100vh-3.5rem)] items-start justify-center">
//       {loading ? (
//         <div className="spinner"></div>
//       ) : (
//         <div className="mx-auto flex w-11/12 max-w-maxContent flex-col-reverse justify-between gap-y-12 py-12 md:flex-row md:gap-y-0 md:gap-x-12">
//           <div className="mx-auto w-11/12 max-w-[450px] md:mx-0">
//             <h1 className="text-[1.875rem] font-semibold leading-[2.375rem] text-richblack-5">
//               {title}
//             </h1>
//             <p className="mt-4 text-[1.125rem] leading-[1.625rem]">
//               <span className="text-richblack-100">{description1}</span>{" "}
//               <span className="font-edu-sa font-bold italic text-blue-100">
//                 {description2}
//               </span>
//             </p>
//             {formType === "signup" ? <SignupForm /> : <LoginForm />}
//           </div>

//           <div className="relative mx-auto w-11/12 max-w-[450px] md:mx-0">
//             <img
//               src={image}
//               alt="Students"
//               className="w-full h-full object-cover rounded-2xl shadow-2xl"
//             />

//             {/* optional overlay for better text vibe */}
//             <div className="absolute inset-0 bg-black/20 rounded-2xl"></div>
//           </div>
//         </div>
//       )}
//     </div>
//   )
// }

// export default Template





// import { useSelector } from "react-redux"
// import LoginForm from "./LoginForm"
// import SignupForm from "./SignupForm"

// function Template({ title, description1, description2, image, formType }) {
//   const { loading } = useSelector((state) => state.auth)

//   return (
//     <div className="min-h-[calc(100vh-3.5rem)] flex items-center justify-center bg-gradient-to-br from-[#020617] via-[#0f172a] to-[#020617]">
//       {loading ? (
//         <div className="spinner"></div>
//       ) : (
//         <div className="mx-auto flex w-11/12 max-w-6xl flex-col-reverse items-center justify-between gap-10 py-12 md:flex-row">
          
//           {/* LEFT SIDE */}
//           <div className="w-full max-w-[450px]">
//             <h1 className="text-3xl md:text-4xl font-bold leading-tight text-white">
//               {title}
//             </h1>

//             <p className="mt-4 text-base md:text-lg leading-relaxed">
//               <span className="text-gray-300">{description1}</span>{" "}
//               <span className="font-semibold italic text-blue-400">
//                 {description2}
//               </span>
//             </p>

//             {/* FORM WRAPPER (Glass effect) */}
//             <div className="mt-8 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-lg p-6 shadow-xl">
//               {formType === "signup" ? <SignupForm /> : <LoginForm />}
//             </div>
//           </div>

//           {/* RIGHT SIDE IMAGE */}
//           <div className="w-full max-w-[450px]">
//             <div className="relative">
//               <img
//                 src={image}
//                 alt="Students"
//                 className="w-full h-[380px] object-cover object-center rounded-2xl shadow-2xl transition duration-300 hover:scale-105"
//               />

//               {/* overlay */}
//               <div className="absolute inset-0 bg-black/30 rounded-2xl"></div>
//             </div>
//           </div>

//         </div>
//       )}
//     </div>
//   )
// }

// export default Template





// import { useSelector } from "react-redux"
// import LoginForm from "./LoginForm"
// import SignupForm from "./SignupForm"

// function Template({ title, description1, description2, image, formType }) {
//   const { loading } = useSelector((state) => state.auth)

//   return (
//     <div className="min-h-[calc(100vh-3.5rem)] flex items-center justify-center bg-gradient-to-br from-[#020617] via-[#020617] to-[#0f172a] px-4">
//       {loading ? (
//         <div className="spinner"></div>
//       ) : (
//         <div className="mx-auto flex w-full max-w-6xl flex-col-reverse items-center justify-center gap-12 py-12 md:flex-row md:justify-between">
          
//           {/* LEFT SECTION */}
//           <div className="w-full max-w-[500px] text-center md:text-left">
            
//             {/* HEADING */}
//             <h1 className="text-3xl md:text-4xl font-bold leading-tight text-white drop-shadow-lg">
//               {title}
//             </h1>

//             {/* DESCRIPTION */}
//             {/* <p className="mt-4 text-base md:text-lg leading-relaxed max-w-[450px] mx-auto md:mx-0">
//               <span className="text-gray-200">{description1}</span>{" "}
//               <span className="font-semibold italic text-blue-300">
//                 {description2}
//               </span>
//             </p> */}

//             <p className="mt-4 text-base md:text-lg leading-relaxed max-w-[450px] mx-auto md:mx-0">
//   <span className="text-white font-medium block">
//     {description1}
//   </span>
//   <span className="font-semibold italic text-blue-300 block mt-1">
//     {description2}
//   </span>
// </p>

//             {/* FORM */}
//             <div className="mt-8 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-lg p-6 shadow-xl">
//               {formType === "signup" ? <SignupForm /> : <LoginForm />}
//             </div>
//           </div>

//           {/* RIGHT IMAGE SECTION */}
//           <div className="w-full max-w-[450px]">
//             <div className="relative">
//               <img
//                 src={image}
//                 alt="Students"
//                 className="w-full h-[380px] object-cover object-center rounded-2xl shadow-2xl transition duration-300 hover:scale-105"
//               />

//               {/* OVERLAY */}
//               <div className="absolute inset-0 bg-black/30 rounded-2xl"></div>
//             </div>
//           </div>

//         </div>
//       )}
//     </div>
//   )
// }

// export default Template







// import { useSelector } from "react-redux"
// import LoginForm from "./LoginForm"
// import SignupForm from "./SignupForm"

// function Template({ title, description1, description2, image, formType }) {
//   const { loading } = useSelector((state) => state.auth)

//   return (
//     <div className="min-h-[calc(100vh-3.5rem)] flex items-center justify-center bg-gradient-to-br from-[#020617] via-[#020617] to-[#0f172a] px-4 py-8">
//       {loading ? (
//         <div className="spinner"></div>
//       ) : (
//         <div className="mx-auto flex w-full max-w-6xl flex-col items-center justify-center gap-10 md:flex-row md:items-start md:justify-between">

//           {/* LEFT SECTION - Form */}
//           <div className="w-full max-w-[480px]">

//             {/* Heading */}
//             <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-tight text-white drop-shadow-lg text-center md:text-left">
//               {title}
//             </h1>

//             {/* Description */}
//             <p className="mt-3 text-sm sm:text-base md:text-lg leading-relaxed max-w-[450px] mx-auto md:mx-0 text-center md:text-left">
//               <span className="text-white font-medium block">
//                 {description1}
//               </span>
//               <span className="font-semibold italic text-blue-300 block mt-1">
//                 {description2}
//               </span>
//             </p>

//             {/* Form Card */}
//             <div className="mt-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-lg p-5 sm:p-6 shadow-xl">
//               {formType === "signup" ? <SignupForm /> : <LoginForm />}
//             </div>
//           </div>

//           {/* RIGHT SECTION - Image */}
//           <div className="w-full max-w-[420px] hidden md:block">
//             <div className="relative">
//               <img
//                 src={image}
//                 alt="Students"
//                 className="w-full h-[420px] object-cover object-center rounded-2xl shadow-2xl transition duration-300 hover:scale-105"
//               />
//               <div className="absolute inset-0 bg-black/30 rounded-2xl"></div>
//             </div>
//           </div>

//         </div>
//       )}
//     </div>
//   )
// }

// export default Template








import { useSelector } from "react-redux"
import LoginForm from "./LoginForm"
import SignupForm from "./SignupForm"

function Template({ title, description1, description2, image, formType }) {
  const { loading } = useSelector((state) => state.auth)

  return (
    <div className="min-h-[calc(100vh-3.5rem)] flex items-center justify-center bg-gradient-to-br from-[#020617] via-[#020617] to-[#0f172a] px-4 py-8">
      {loading ? (
        <div className="spinner"></div>
      ) : (
        <div className="mx-auto flex w-full max-w-6xl flex-col items-center justify-center gap-10 md:flex-row md:items-center md:justify-between">

          {/* LEFT SECTION - Form */}
          <div className="w-full md:w-1/2 max-w-[480px]">

            {/* Heading */}
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-tight text-white drop-shadow-lg text-center md:text-left">
              {title}
            </h1>

            {/* Description */}
            <p className="mt-3 text-sm sm:text-base md:text-lg leading-relaxed mx-auto md:mx-0 text-center md:text-left">
              <span className="text-white font-medium block">
                {description1}
              </span>
              <span className="font-semibold italic text-blue-300 block mt-1">
                {description2}
              </span>
            </p>

            {/* Form Card */}
            <div className="mt-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-lg p-5 sm:p-6 shadow-xl">
              {formType === "signup" ? <SignupForm /> : <LoginForm />}
            </div>
          </div>

          {/* RIGHT SECTION - Image */}
          <div className="w-full md:w-1/2 max-w-[480px] hidden md:flex items-center justify-center">
            <div className="relative w-full">
              <img
                src={image}
                alt="Students"
                className="w-full h-auto max-h-[560px] object-contain rounded-2xl shadow-2xl transition duration-300 hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/20 rounded-2xl"></div>
            </div>
          </div>

        </div>
      )}
    </div>
  )
}

export default Template