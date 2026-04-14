// import React, { useEffect, useState } from "react"
// import { BiInfoCircle } from "react-icons/bi"
// import { HiOutlineGlobeAlt } from "react-icons/hi"
// import { ReactMarkdown } from "react-markdown/lib/react-markdown"
// import { useDispatch, useSelector } from "react-redux"
// import { useNavigate, useParams } from "react-router-dom"

// import ConfirmationModal from "../components/common/ConfirmationModal"
// import Footer from "../components/common/Footer"
// import RatingStars from "../components/common/RatingStars"
// import CourseAccordionBar from "../components/core/Course/CourseAccordionBar"
// import CourseDetailsCard from "../components/core/Course/CourseDetailsCard"
// import { formatDate } from "../services/formatDate"
// import { fetchCourseDetails } from "../services/operations/courseDetailsAPI"
// import { buyCourse } from "../services/operations/studentFeaturesAPI"
// import GetAvgRating from "../utils/avgRating"
// import Error from "./Error"

// function CourseDetails() {
//   const { user } = useSelector((state) => state.profile)
//   const { token } = useSelector((state) => state.auth)
//   const { loading } = useSelector((state) => state.profile)
//   const { paymentLoading } = useSelector((state) => state.course)
//   const dispatch = useDispatch()
//   const navigate = useNavigate()

//   // Getting courseId from url parameter
//   const { courseId } = useParams()
//   // console.log(`course id: ${courseId}`)

//   // Declear a state to save the course details
//   const [response, setResponse] = useState(null)
//   const [confirmationModal, setConfirmationModal] = useState(null)
//   useEffect(() => {
//     // Calling fetchCourseDetails fucntion to fetch the details
//     ; (async () => {
//       try {
//         const res = await fetchCourseDetails(courseId)
//         // console.log("course details res: ", res)
//         setResponse(res)
//       } catch (error) {
//         console.log("Could not fetch Course Details")
//       }
//     })()
//   }, [courseId])

//   // console.log("response: ", response)

//   // Calculating Avg Review count
//   const [avgReviewCount, setAvgReviewCount] = useState(0)
//   useEffect(() => {
//     const count = GetAvgRating(response?.data?.courseDetails.ratingAndReviews)
//     setAvgReviewCount(count)
//   }, [response])
//   // console.log("avgReviewCount: ", avgReviewCount)

//   // // Collapse all
//   // const [collapse, setCollapse] = useState("")
//   const [isActive, setIsActive] = useState(Array(0))
//   const handleActive = (id) => {
//     // console.log("called", id)
//     setIsActive(
//       !isActive.includes(id)
//         ? isActive.concat([id])
//         : isActive.filter((e) => e != id)
//     )
//   }

//   // Total number of lectures
//   const [totalNoOfLectures, setTotalNoOfLectures] = useState(0)
//   useEffect(() => {
//     let lectures = 0
//     response?.data?.courseDetails?.courseContent?.forEach((sec) => {
//       lectures += sec.subSection.length || 0
//     })
//     setTotalNoOfLectures(lectures)
//   }, [response])

//   if (loading || !response) {
//     return (
//       <div className="grid min-h-[calc(100vh-3.5rem)] place-items-center">
//         <div className="spinner"></div>
//       </div>
//     )
//   }
//   if (!response.success) {
//     return <Error />
//   }

//   const {
//     _id: course_id,
//     courseName,
//     courseDescription,
//     thumbnail,
//     price,
//     whatYouWillLearn,
//     courseContent,
//     ratingAndReviews,
//     instructor,
//     studentsEnrolled,
//     createdAt,
//   } = response.data?.courseDetails

//   const handleBuyCourse = () => {
//     if (token) {
//       buyCourse(token, [courseId], user, navigate, dispatch)
//       return
//     }
//     setConfirmationModal({
//       text1: "You are not logged in!",
//       text2: "Please login to Purchase Course.",
//       btn1Text: "Login",
//       btn2Text: "Cancel",
//       btn1Handler: () => navigate("/login"),
//       btn2Handler: () => setConfirmationModal(null),
//     })
//   }

//   if (paymentLoading) {
//     // console.log("payment loading")
//     return (
//       <div className="grid min-h-[calc(100vh-3.5rem)] place-items-center">
//         <div className="spinner"></div>
//       </div>
//     )
//   }

//   return (
//     <>
//       <div className={`relative w-full bg-richblack-800`}>
//         {/* Hero Section */}
//         <div className="mx-auto box-content px-4 lg:w-[1260px] 2xl:relative ">
//           <div className="mx-auto grid min-h-[450px] max-w-maxContentTab justify-items-center py-8 lg:mx-0 lg:justify-items-start lg:py-0 xl:max-w-[810px]">
//             <div className="relative block max-h-[30rem] lg:hidden">
//               <div className="absolute bottom-0 left-0 h-full w-full shadow-[#161D29_0px_-64px_36px_-28px_inset]"></div>
//               <img
//                 src={thumbnail}
//                 alt="course thumbnail"
//                 className="aspect-auto w-full"
//               />
//             </div>
//             <div
//               className={`z-30 my-5 flex flex-col justify-center gap-4 py-5 text-lg text-richblack-5`}
//             >
//               <div>
//                 <p className="text-4xl font-bold text-richblack-5 sm:text-[42px]">
//                   {courseName}
//                 </p>
//               </div>
//               <p className={`text-richblack-200`}>{courseDescription}</p>
//               <div className="text-md flex flex-wrap items-center gap-2">
//                 <span className="text-yellow-25">{avgReviewCount}</span>
//                 <RatingStars Review_Count={avgReviewCount} Star_Size={24} />
//                 <span>{`(${ratingAndReviews.length} reviews)`}</span>
//                 <span>{`${studentsEnrolled.length} students enrolled`}</span>
//               </div>
//               <div>
//                 <p className="">
//                   Created By {`${instructor.firstName} ${instructor.lastName}`}
//                 </p>
//               </div>
//               <div className="flex flex-wrap gap-5 text-lg">
//                 <p className="flex items-center gap-2">
//                   {" "}
//                   <BiInfoCircle /> Created at {formatDate(createdAt)}
//                 </p>
//                 <p className="flex items-center gap-2">
//                   {" "}
//                   <HiOutlineGlobeAlt /> English
//                 </p>
//               </div>
//             </div>
//             <div className="flex w-full flex-col gap-4 border-y border-y-richblack-500 py-4 lg:hidden">
//               <p className="space-x-3 pb-4 text-3xl font-semibold text-richblack-5">
//                 Rs. {price}
//               </p>
//               <button className="yellowButton" onClick={handleBuyCourse}>
//                 Buy Now
//               </button>
//               <button className="blackButton">Add to Cart</button>
//             </div>
//           </div>
//           {/* Courses Card */}
//           <div className="right-[1rem] top-[60px] mx-auto hidden min-h-[600px] w-1/3 max-w-[410px] translate-y-24 md:translate-y-0 lg:absolute  lg:block">
//             <CourseDetailsCard
//               course={response?.data?.courseDetails}
//               setConfirmationModal={setConfirmationModal}
//               handleBuyCourse={handleBuyCourse}
//             />
//           </div>
//         </div>
//       </div>
//       <div className="mx-auto box-content px-4 text-start text-richblack-5 lg:w-[1260px]">
//         <div className="mx-auto max-w-maxContentTab lg:mx-0 xl:max-w-[810px]">
//           {/* What will you learn section */}
//           <div className="my-8 border border-richblack-600 p-8">
//             <p className="text-3xl font-semibold">What you'll learn</p>
//             <div className="mt-5">
//               <ReactMarkdown>{whatYouWillLearn}</ReactMarkdown>
//             </div>
//           </div>

//           {/* Course Content Section */}
//           <div className="max-w-[830px] ">
//             <div className="flex flex-col gap-3">
//               <p className="text-[28px] font-semibold">Course Content</p>
//               {/* sections/lectures/duration div */}
//               <div className="flex flex-wrap justify-between gap-2">
//                 <div className="flex flex-col sm:flex-row sm:flex-wrap gap-x-4 gap-y-1">
//                   <span>{courseContent.length} {`section(s)`}</span>
//                   <span>{totalNoOfLectures} {`lecture(s)`}</span>
//                   <span>{response.data?.totalDuration} total length</span>
//                 </div>
//                 <div>
//                   <button
//                     className="text-yellow-25"
//                     onClick={() => setIsActive([])}
//                   >
//                     Collapse all sections
//                   </button>
//                 </div>
//               </div>
//             </div>

//             {/* Course Details Accordion */}
//             <div className="py-4">
//               {courseContent?.map((course, index) => (
//                 <CourseAccordionBar
//                   course={course}
//                   key={index}
//                   isActive={isActive}
//                   handleActive={handleActive}
//                 />
//               ))}
//             </div>

//             {/* Author Details */}
//             <div className="mb-12 py-4">
//               <p className="text-[28px] font-semibold">Author</p>
//               <div className="flex items-center gap-4 py-4">
//                 <img
//                   src={
//                     instructor.image
//                       ? instructor.image
//                       : `https://api.dicebear.com/5.x/initials/svg?seed=${instructor.firstName} ${instructor.lastName}`
//                   }
//                   alt="Author"
//                   className="h-14 w-14 rounded-full object-cover"
//                 />
//                 <p className="text-lg">{`${instructor.firstName} ${instructor.lastName}`}</p>
//               </div>
//               <p className="text-richblack-50">
//                 {instructor?.additionalDetails?.about}
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
//       <Footer />
//       {confirmationModal && <ConfirmationModal modalData={confirmationModal} />}
//     </>
//   )
// }

// export default CourseDetails






// // import React, { useEffect, useState } from "react"
// // import { BiInfoCircle } from "react-icons/bi"
// // import { HiOutlineGlobeAlt } from "react-icons/hi"
// // import ReactMarkdown from "react-markdown"
// // import { useDispatch, useSelector } from "react-redux"
// // import { useNavigate, useParams } from "react-router-dom"

// // import ConfirmationModal from "../components/common/ConfirmationModal"
// // import Footer from "../components/common/Footer"
// // import RatingStars from "../components/common/RatingStars"
// // import CourseAccordionBar from "../components/core/Course/CourseAccordionBar"
// // import CourseDetailsCard from "../components/core/Course/CourseDetailsCard"
// // import { formatDate } from "../services/formatDate"
// // import { fetchCourseDetails } from "../services/operations/courseDetailsAPI"
// // import { buyCourse } from "../services/operations/studentFeaturesAPI"
// // import GetAvgRating from "../utils/avgRating"
// // import Error from "./Error"

// // function CourseDetails() {
// //   const { user } = useSelector((state) => state.profile)
// //   const { token } = useSelector((state) => state.auth)
// //   const { loading } = useSelector((state) => state.profile)
// //   const { paymentLoading } = useSelector((state) => state.course)

// //   const dispatch = useDispatch()
// //   const navigate = useNavigate()
// //   const { courseId } = useParams()

// //   const [response, setResponse] = useState(null)
// //   const [confirmationModal, setConfirmationModal] = useState(null)
// //   const [avgReviewCount, setAvgReviewCount] = useState(0)
// //   const [isActive, setIsActive] = useState([])
// //   const [totalNoOfLectures, setTotalNoOfLectures] = useState(0)

// //   // fetch course details
// //   useEffect(() => {
// //     ;(async () => {
// //       try {
// //         const res = await fetchCourseDetails(courseId)
// //         setResponse(res)
// //       } catch (error) {
// //         console.log("Could not fetch Course Details")
// //       }
// //     })()
// //   }, [courseId])

// //   // safe destructuring
// //   const courseDetails = response?.data?.courseDetails || {}

// //   const {
// //     courseName,
// //     courseDescription,
// //     thumbnail,
// //     price,
// //     whatYouWillLearn,
// //     courseContent = [],
// //     ratingAndReviews = [],
// //     instructor = {},
// //     studentsEnrolled = [],
// //     createdAt,
// //   } = courseDetails

// //   // avg rating
// //   useEffect(() => {
// //     if (!ratingAndReviews) return
// //     const count = GetAvgRating(ratingAndReviews)
// //     setAvgReviewCount(count)
// //   }, [ratingAndReviews])

// //   // total lectures
// //   useEffect(() => {
// //     let lectures = 0
// //     courseContent?.forEach((sec) => {
// //       lectures += sec?.subSection?.length || 0
// //     })
// //     setTotalNoOfLectures(lectures)
// //   }, [courseContent])

// //   const handleActive = (id) => {
// //     setIsActive(
// //       !isActive.includes(id)
// //         ? [...isActive, id]
// //         : isActive.filter((e) => e !== id)
// //     )
// //   }

// //   const handleBuyCourse = () => {
// //     if (token) {
// //       buyCourse(token, [courseId], user, navigate, dispatch)
// //       return
// //     }

// //     setConfirmationModal({
// //       text1: "You are not logged in!",
// //       text2: "Please login to Purchase Course.",
// //       btn1Text: "Login",
// //       btn2Text: "Cancel",
// //       btn1Handler: () => navigate("/login"),
// //       btn2Handler: () => setConfirmationModal(null),
// //     })
// //   }

// //   if (loading || !response) {
// //     return (
// //       <div className="grid min-h-[calc(100vh-3.5rem)] place-items-center">
// //         <div className="spinner"></div>
// //       </div>
// //     )
// //   }

// //   if (!response?.success) return <Error />

// //   if (paymentLoading) {
// //     return (
// //       <div className="grid min-h-[calc(100vh-3.5rem)] place-items-center">
// //         <div className="spinner"></div>
// //       </div>
// //     )
// //   }

// //   return (
// //     <>
// //       <div className="relative w-full bg-richblack-800">
// //         {/* HERO SECTION */}
// //         <div className="mx-auto box-content px-4 lg:w-[1260px]">
// //           <div className="mx-auto grid min-h-[450px] max-w-maxContentTab py-8 xl:max-w-[810px]">

// //             {/* Thumbnail mobile */}
// //             <div className="relative block lg:hidden">
// //               <img src={thumbnail} alt="course" className="w-full" />
// //             </div>

// //             {/* DETAILS */}
// //             <div className="my-5 flex flex-col gap-4 text-richblack-5">
// //               <h1 className="text-4xl font-bold">{courseName}</h1>

// //               <p className="text-richblack-200">{courseDescription}</p>

// //               <div className="flex flex-wrap items-center gap-2">
// //                 <span className="text-yellow-25">{avgReviewCount}</span>

// //                 <RatingStars Review_Count={avgReviewCount} Star_Size={24} />

// //                 <span>
// //                   ({ratingAndReviews?.length || 0} reviews)
// //                 </span>

// //                 <span>
// //                   {studentsEnrolled?.length || 0} students enrolled
// //                 </span>
// //               </div>

// //               <p>
// //                 Created By{" "}
// //                 {`${instructor?.firstName || ""} ${instructor?.lastName || ""}`}
// //               </p>

// //               <div className="flex gap-5">
// //                 <p className="flex items-center gap-2">
// //                   <BiInfoCircle /> {formatDate(createdAt)}
// //                 </p>

// //                 <p className="flex items-center gap-2">
// //                   <HiOutlineGlobeAlt /> English
// //                 </p>
// //               </div>
// //             </div>

// //             {/* BUY SECTION MOBILE */}
// //             <div className="flex flex-col gap-4 border-y border-richblack-500 py-4 lg:hidden">
// //               <p className="text-3xl font-semibold text-richblack-5">
// //                 Rs. {price}
// //               </p>

// //               <button className="yellowButton" onClick={handleBuyCourse}>
// //                 Buy Now
// //               </button>
// //             </div>
// //           </div>

// //           {/* RIGHT CARD */}
// //           <div className="hidden lg:block lg:absolute right-[1rem] top-[60px] w-1/3 max-w-[410px]">
// //             <CourseDetailsCard
// //               course={courseDetails}
// //               setConfirmationModal={setConfirmationModal}
// //               handleBuyCourse={handleBuyCourse}
// //             />
// //           </div>
// //         </div>
// //       </div>

// //       {/* WHAT YOU LEARN */}
// //       <div className="mx-auto px-4 lg:w-[1260px] text-richblack-5">
// //         <div className="max-w-[810px]">
// //           <div className="my-8 border border-richblack-600 p-8">
// //             <h2 className="text-3xl font-semibold">What you'll learn</h2>
// //             <ReactMarkdown>{whatYouWillLearn}</ReactMarkdown>
// //           </div>

// //           {/* COURSE CONTENT */}
// //           <div>
// //             <h2 className="text-2xl font-semibold">Course Content</h2>

// //             <div className="flex flex-wrap justify-between gap-2">
// //               <div className="flex gap-2">
// //                 <span>{courseContent?.length || 0} sections</span>
// //                 <span>{totalNoOfLectures} lectures</span>
// //               </div>

// //               <button onClick={() => setIsActive([])} className="text-yellow-25">
// //                 Collapse all
// //               </button>
// //             </div>

// //             {/* ACCORDION */}
// //             <div className="py-4">
// //               {courseContent?.map((course, index) => (
// //                 <CourseAccordionBar
// //                   key={index}
// //                   course={course}
// //                   isActive={isActive}
// //                   handleActive={handleActive}
// //                 />
// //               ))}
// //             </div>

// //             {/* AUTHOR */}
// //             <div className="py-6">
// //               <h2 className="text-2xl font-semibold">Author</h2>

// //               <div className="flex items-center gap-4 py-4">
// //                 <img
// //                   src={
// //                     instructor?.image ||
// //                     `https://api.dicebear.com/5.x/initials/svg?seed=${instructor?.firstName}`
// //                   }
// //                   alt="author"
// //                   className="h-14 w-14 rounded-full"
// //                 />

// //                 <p>
// //                   {instructor?.firstName} {instructor?.lastName}
// //                 </p>
// //               </div>

// //               <p className="text-richblack-50">
// //                 {instructor?.additionalDetails?.about}
// //               </p>
// //             </div>
// //           </div>
// //         </div>
// //       </div>

// //       <Footer />

// //       {confirmationModal && (
// //         <ConfirmationModal modalData={confirmationModal} />
// //       )}
// //     </>
// //   )
// // }

// // export default CourseDetails





// import React, { useEffect, useState } from "react"
// import { BiInfoCircle } from "react-icons/bi"
// import { HiOutlineGlobeAlt } from "react-icons/hi"
// import ReactMarkdown from "react-markdown"
// import { useDispatch, useSelector } from "react-redux"
// import { useNavigate, useParams } from "react-router-dom"

// import ConfirmationModal from "../components/common/ConfirmationModal"
// import Footer from "../components/common/Footer"
// import RatingStars from "../components/common/RatingStars"
// import CourseAccordionBar from "../components/core/Course/CourseAccordionBar"
// import CourseDetailsCard from "../components/core/Course/CourseDetailsCard"
// import { formatDate } from "../services/formatDate"
// import { fetchCourseDetails } from "../services/operations/courseDetailsAPI"
// import { buyCourse } from "../services/operations/studentFeaturesAPI"
// import GetAvgRating from "../utils/avgRating"
// import Error from "./Error"

// function CourseDetails() {
//   const { user } = useSelector((state) => state.profile)
//   const { token } = useSelector((state) => state.auth)
//   const { loading } = useSelector((state) => state.profile)
//   const { paymentLoading } = useSelector((state) => state.course)

//   const dispatch = useDispatch()
//   const navigate = useNavigate()
//   const { courseId } = useParams()

//   const [response, setResponse] = useState(null)
//   const [confirmationModal, setConfirmationModal] = useState(null)
//   const [avgReviewCount, setAvgReviewCount] = useState(0)
//   const [isActive, setIsActive] = useState([])
//   const [totalNoOfLectures, setTotalNoOfLectures] = useState(0)

//   // 🔥 Fetch Course
//   useEffect(() => {
//     ;(async () => {
//       try {
//         const res = await fetchCourseDetails(courseId)
//         setResponse(res)
//       } catch (error) {
//         console.log("Error fetching course")
//       }
//     })()
//   }, [courseId])

//   // 🔥 Safe data extract
//   const courseDetails = response?.data?.courseDetails || {}

//   const {
//     courseName = "",
//     courseDescription = "",
//     thumbnail = "",
//     price = 0,
//     whatYouWillLearn = "",
//     courseContent = [],
//     ratingAndReviews = [],
//     instructor = {},
//     studentsEnrolled = [],
//     createdAt,
//   } = courseDetails

//   // 🔥 Avg Rating Fix (NaN fix)
//   useEffect(() => {
//     if (ratingAndReviews.length > 0) {
//       const count = GetAvgRating(ratingAndReviews)
//       setAvgReviewCount(count || 0)
//     } else {
//       setAvgReviewCount(0)
//     }
//   }, [ratingAndReviews])

//   // 🔥 Total Lectures
//   useEffect(() => {
//     let lectures = 0
//     courseContent.forEach((sec) => {
//       lectures += sec?.subSection?.length || 0
//     })
//     setTotalNoOfLectures(lectures)
//   }, [courseContent])

//   const handleActive = (id) => {
//     setIsActive(
//       !isActive.includes(id)
//         ? [...isActive, id]
//         : isActive.filter((e) => e !== id)
//     )
//   }

//   const handleBuyCourse = () => {
//     if (token) {
//       buyCourse(token, [courseId], user, navigate, dispatch)
//       return
//     }

//     setConfirmationModal({
//       text1: "You are not logged in!",
//       text2: "Please login to Purchase Course.",
//       btn1Text: "Login",
//       btn2Text: "Cancel",
//       btn1Handler: () => navigate("/login"),
//       btn2Handler: () => setConfirmationModal(null),
//     })
//   }

//   // 🔄 Loading
//   if (loading || !response) {
//     return (
//       <div className="grid min-h-screen place-items-center">
//         <div className="spinner"></div>
//       </div>
//     )
//   }

//   if (!response?.success) return <Error />

//   if (paymentLoading) {
//     return (
//       <div className="grid min-h-screen place-items-center">
//         <div className="spinner"></div>
//       </div>
//     )
//   }

//   return (
//     <>
//       {/* HERO */}
//       <div className="bg-richblack-800 text-white">
//         <div className="max-w-[1200px] mx-auto px-4 py-10 flex flex-col lg:flex-row gap-10">

//           {/* LEFT */}
//           <div className="flex-1">
//             <img
//               src={thumbnail}
//               alt="course"
//               className="w-full rounded-lg mb-5 lg:hidden"
//             />

//             <h1 className="text-3xl lg:text-4xl font-bold mb-4">
//               {courseName}
//             </h1>

//             <p className="text-richblack-200 mb-4">
//               {courseDescription}
//             </p>

//             {/* Rating */}
//             <div className="flex flex-wrap items-center gap-2 mb-4">
//               <span className="text-yellow-400">
//                 {avgReviewCount || 0}
//               </span>

//               <RatingStars Review_Count={avgReviewCount || 0} />

//               <span>
//                 ({ratingAndReviews.length || 0} reviews)
//               </span>

//               <span>
//                 {studentsEnrolled.length || 0} students
//               </span>
//             </div>

//             <p className="mb-2">
//               Created By{" "}
//               <b>
//                 {instructor?.firstName} {instructor?.lastName}
//               </b>
//             </p>

//             <div className="flex gap-5 text-sm">
//               <p className="flex items-center gap-2">
//                 <BiInfoCircle /> {formatDate(createdAt)}
//               </p>
//               <p className="flex items-center gap-2">
//                 <HiOutlineGlobeAlt /> English
//               </p>
//             </div>
//           </div>

//           {/* RIGHT CARD */}
//           <div className="lg:w-[350px] w-full">
//             <CourseDetailsCard
//               course={courseDetails}
//               handleBuyCourse={handleBuyCourse}
//               setConfirmationModal={setConfirmationModal}
//             />
//           </div>
//         </div>
//       </div>

//       {/* CONTENT */}
//       <div className="max-w-[1200px] mx-auto px-4 py-10 text-white">

//         {/* Learn */}
//         <div className="border p-6 rounded-lg mb-8">
//           <h2 className="text-2xl font-bold mb-4">
//             What you'll learn
//           </h2>
//           <ReactMarkdown>{whatYouWillLearn}</ReactMarkdown>
//         </div>

//         {/* Course Content */}
//         <div>
//           <h2 className="text-2xl font-bold mb-4">
//             Course Content
//           </h2>

//           <div className="flex flex-wrap justify-between mb-4 text-sm">
//             <div className="flex gap-4">
//               <span>{courseContent.length} sections</span>
//               <span>{totalNoOfLectures} lectures</span>
//               <span>{response?.data?.totalDuration}</span>
//             </div>

//             <button
//               className="text-yellow-400"
//               onClick={() => setIsActive([])}
//             >
//               Collapse All
//             </button>
//           </div>

//           {/* Accordion */}
//           {courseContent.map((course, index) => (
//             <CourseAccordionBar
//               key={index}
//               course={course}
//               isActive={isActive}
//               handleActive={handleActive}
//             />
//           ))}
//         </div>

//         {/* Author */}
//         <div className="mt-10">
//           <h2 className="text-2xl font-bold mb-4">Author</h2>

//           <div className="flex items-center gap-4 mb-4">
//             <img
//               src={
//                 instructor?.image ||
//                 `https://api.dicebear.com/5.x/initials/svg?seed=${instructor?.firstName}`
//               }
//               alt="author"
//               className="w-14 h-14 rounded-full"
//             />
//             <p className="text-lg">
//               {instructor?.firstName} {instructor?.lastName}
//             </p>
//           </div>

//           <p className="text-richblack-200">
//             {instructor?.additionalDetails?.about}
//           </p>
//         </div>
//       </div>

//       <Footer />

//       {confirmationModal && (
//         <ConfirmationModal modalData={confirmationModal} />
//       )}
//     </>
//   )
// }

// export default CourseDetails





import React, { useEffect, useState } from "react"
import { BiInfoCircle } from "react-icons/bi"
import { HiOutlineGlobeAlt } from "react-icons/hi"
import ReactMarkdown from "react-markdown"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate, useParams } from "react-router-dom"

import ConfirmationModal from "../components/common/ConfirmationModal"
import Footer from "../components/common/Footer"
import RatingStars from "../components/common/RatingStars"
import CourseAccordionBar from "../components/core/Course/CourseAccordionBar"
import CourseDetailsCard from "../components/core/Course/CourseDetailsCard"
import { formatDate } from "../services/formatDate"
import { fetchCourseDetails } from "../services/operations/courseDetailsAPI"
import { buyCourse } from "../services/operations/studentFeaturesAPI"
import GetAvgRating from "../utils/avgRating"
import Error from "./Error"

function CourseDetails() {
  const { user } = useSelector((state) => state.profile)
  const { token } = useSelector((state) => state.auth)
  const { loading } = useSelector((state) => state.profile)
  const { paymentLoading } = useSelector((state) => state.course)

  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { courseId } = useParams()

  const [response, setResponse] = useState(null)
  const [confirmationModal, setConfirmationModal] = useState(null)
  const [avgReviewCount, setAvgReviewCount] = useState(0)
  const [isActive, setIsActive] = useState([])
  const [totalNoOfLectures, setTotalNoOfLectures] = useState(0)

  // Fetch
  useEffect(() => {
    ;(async () => {
      try {
        const res = await fetchCourseDetails(courseId)
        setResponse(res)
      } catch (error) {
        console.log("Error fetching course")
      }
    })()
  }, [courseId])

  const courseDetails = response?.data?.courseDetails || {}

  const {
    courseName = "",
    courseDescription = "",
    thumbnail = "",
    price = 0,
    whatYouWillLearn = "",
    courseContent = [],
    ratingAndReviews = [],
    instructor = {},
    studentsEnrolled = [],
    createdAt,
  } = courseDetails

  // Avg Rating
  useEffect(() => {
    if (ratingAndReviews.length > 0) {
      const count = GetAvgRating(ratingAndReviews)
      setAvgReviewCount(count || 0)
    } else {
      setAvgReviewCount(0)
    }
  }, [ratingAndReviews])

  // Lectures
  useEffect(() => {
    let lectures = 0
    courseContent.forEach((sec) => {
      lectures += sec?.subSection?.length || 0
    })
    setTotalNoOfLectures(lectures)
  }, [courseContent])

  const handleActive = (id) => {
    setIsActive(
      !isActive.includes(id)
        ? [...isActive, id]
        : isActive.filter((e) => e !== id)
    )
  }

  const handleBuyCourse = () => {
    if (token) {
      buyCourse(token, [courseId], user, navigate, dispatch)
      return
    }

    setConfirmationModal({
      text1: "You are not logged in!",
      text2: "Please login to Purchase Course.",
      btn1Text: "Login",
      btn2Text: "Cancel",
      btn1Handler: () => navigate("/login"),
      btn2Handler: () => setConfirmationModal(null),
    })
  }

  if (loading || !response) {
    return (
      <div className="grid min-h-screen place-items-center">
        <div className="spinner"></div>
      </div>
    )
  }

  if (!response?.success) return <Error />

  if (paymentLoading) {
    return (
      <div className="grid min-h-screen place-items-center">
        <div className="spinner"></div>
      </div>
    )
  }

  return (
    <>
      {/* 🔥 HERO FULL WIDTH */}
      <div className="w-full bg-richblack-800 text-white">
        <div className="max-w-[1400px] mx-auto px-6 py-12 flex flex-col lg:flex-row gap-12">

          {/* LEFT */}
          <div className="flex-1">
            <img
              src={thumbnail}
              alt="course"
              className="w-full rounded-lg mb-6 lg:hidden"
            />

            <h1 className="text-3xl lg:text-5xl font-bold mb-4">
              {courseName}
            </h1>

            <p className="text-richblack-200 mb-5 text-lg">
              {courseDescription}
            </p>

            <div className="flex flex-wrap items-center gap-3 mb-5">
              <span className="text-yellow-400 font-semibold">
                {avgReviewCount}
              </span>

              <RatingStars Review_Count={avgReviewCount} />

              <span>
                ({ratingAndReviews.length} reviews)
              </span>

              <span>
                {studentsEnrolled.length} students
              </span>
            </div>

            <p className="mb-3">
              Created By{" "}
              <b>
                {instructor?.firstName} {instructor?.lastName}
              </b>
            </p>

            <div className="flex gap-6 text-sm">
              <p className="flex items-center gap-2">
                <BiInfoCircle /> {formatDate(createdAt)}
              </p>
              <p className="flex items-center gap-2">
                <HiOutlineGlobeAlt /> English
              </p>
            </div>
          </div>

          {/* RIGHT CARD */}
          <div className="w-full lg:w-[380px]">
            <CourseDetailsCard
              course={courseDetails}
              handleBuyCourse={handleBuyCourse}
              setConfirmationModal={setConfirmationModal}
            />
          </div>
        </div>
      </div>

      {/* 🔥 CONTENT */}
      <div className="w-full bg-richblack-900 text-white">
        <div className="max-w-[1400px] mx-auto px-6 py-12">

          {/* Learn */}
          <div className="border border-richblack-600 p-6 rounded-xl mb-10">
            <h2 className="text-2xl font-bold mb-4">
              What you'll learn
            </h2>
            <ReactMarkdown>{whatYouWillLearn}</ReactMarkdown>
          </div>

          {/* Course Content */}
          <div>
            <h2 className="text-2xl font-bold mb-4">
              Course Content
            </h2>

            <div className="flex flex-wrap justify-between mb-4 text-sm">
              <div className="flex gap-5">
                <span>{courseContent.length} sections</span>
                <span>{totalNoOfLectures} lectures</span>
                <span>{response?.data?.totalDuration}</span>
              </div>

              <button
                className="text-yellow-400"
                onClick={() => setIsActive([])}
              >
                Collapse All
              </button>
            </div>

            {courseContent.map((course, index) => (
              <CourseAccordionBar
                key={index}
                course={course}
                isActive={isActive}
                handleActive={handleActive}
              />
            ))}
          </div>

          {/* Author */}
          <div className="mt-12">
            <h2 className="text-2xl font-bold mb-4">Author</h2>

            <div className="flex items-center gap-4 mb-4">
              <img
                src={
                  instructor?.image ||
                  `https://api.dicebear.com/5.x/initials/svg?seed=${instructor?.firstName}`
                }
                alt="author"
                className="w-14 h-14 rounded-full"
              />
              <p className="text-lg">
                {instructor?.firstName} {instructor?.lastName}
              </p>
            </div>

            <p className="text-richblack-200 max-w-[800px]">
              {instructor?.additionalDetails?.about}
            </p>
          </div>
        </div>
      </div>

      <Footer />

      {confirmationModal && (
        <ConfirmationModal modalData={confirmationModal} />
      )}
    </>
  )
}

export default CourseDetails