// import { useDispatch, useSelector } from "react-redux"
// import { Table, Tbody, Td, Th, Thead, Tr } from "react-super-responsive-table"

// import { setCourse, setEditCourse } from "../../../../slices/courseSlice"
// import "react-super-responsive-table/dist/SuperResponsiveTableStyle.css"
// import { useState } from "react"
// import { FaCheck } from "react-icons/fa"
// import { FiEdit2 } from "react-icons/fi"
// import { HiClock } from "react-icons/hi"
// import { RiDeleteBin6Line } from "react-icons/ri"
// import { useNavigate } from "react-router-dom"

// import { formatDate } from "../../../../services/formatDate"
// import {
//   deleteCourse,
//   fetchInstructorCourses,
// } from "../../../../services/operations/courseDetailsAPI"
// import { COURSE_STATUS } from "../../../../utils/constants"
// import ConfirmationModal from "../../../common/ConfirmationModal"

// export default function CoursesTable({ courses, setCourses }) {
//   const dispatch = useDispatch()
//   const navigate = useNavigate()
//   const { token } = useSelector((state) => state.auth)
//   const [loading, setLoading] = useState(false)
//   const [confirmationModal, setConfirmationModal] = useState(null)
//   const TRUNCATE_LENGTH = 30

//   const handleCourseDelete = async (courseId) => {
//     setLoading(true)
//     await deleteCourse({ courseId: courseId }, token)
//     const result = await fetchInstructorCourses(token)
//     if (result) {
//       setCourses(result)
//     }
//     setConfirmationModal(null)
//     setLoading(false)
//   }

//   // console.log("All Course ", courses)

//   return (
//     <>
//       <Table className="rounded-xl border border-richblack-800 ">
//         <Thead>
//           <Tr className="flex gap-x-10 rounded-t-md border-b border-b-richblack-800 px-6 py-2">
//             <Th className="flex-1 text-left text-sm font-medium uppercase text-richblack-100">
//               Courses
//             </Th>
//             <Th className="text-left text-sm font-medium uppercase text-richblack-100">
//               Duration
//             </Th>
//             <Th className="text-left text-sm font-medium uppercase text-richblack-100">
//               Price
//             </Th>
//             <Th className="text-left text-sm font-medium uppercase text-richblack-100">
//               Actions
//             </Th>
//           </Tr>
//         </Thead>
//         <Tbody>
//           {courses?.length === 0 ? (
//             <Tr>
//               <Td className="py-10 text-center text-2xl font-medium text-richblack-100">
//                 No courses found
//                 {/* TODO: Need to change this state */}
//               </Td>
//             </Tr>
//           ) : (
//             courses?.map((course) => (
//               <Tr
//                 key={course._id}
//                 className="flex gap-x-10 border-b border-richblack-800 px-6 py-8"
//               >
//                 <Td className="flex flex-1 gap-x-4">
//                   <img
//                     src={course?.thumbnail}
//                     alt={course?.courseName}
//                     className="h-[148px] w-[220px] rounded-lg object-cover"
//                   />
//                   <div className="flex flex-col justify-between">
//                     <p className="text-lg font-semibold text-richblack-5">
//                       {course.courseName}
//                     </p>
//                     <p className="text-xs text-richblack-300">
//                       {course.courseDescription.split(" ").length >
//                       TRUNCATE_LENGTH
//                         ? course.courseDescription
//                             .split(" ")
//                             .slice(0, TRUNCATE_LENGTH)
//                             .join(" ") + "..."
//                         : course.courseDescription}
//                     </p>
//                     <p className="text-[12px] text-white">
//                       Created: {formatDate(course.createdAt)}
//                     </p>
//                     {course.status === COURSE_STATUS.DRAFT ? (
//                       <p className="flex w-fit flex-row items-center gap-2 rounded-full bg-richblack-700 px-2 py-[2px] text-[12px] font-medium text-pink-100">
//                         <HiClock size={14} />
//                         Drafted
//                       </p>
//                     ) : (
//                       <p className="flex w-fit flex-row items-center gap-2 rounded-full bg-richblack-700 px-2 py-[2px] text-[12px] font-medium text-yellow-100">
//                         <div className="flex h-3 w-3 items-center justify-center rounded-full bg-yellow-100 text-richblack-700">
//                           <FaCheck size={8} />
//                         </div>
//                         Published
//                       </p>
//                     )}
//                   </div>
//                 </Td>
//                 <Td className="text-sm font-medium text-richblack-100">
//                   2hr 30min
//                 </Td>
//                 <Td className="text-sm font-medium text-richblack-100">
//                   ₹{course.price}
//                 </Td>
//                 <Td className="text-sm font-medium text-richblack-100 ">
//                   <button
//                     disabled={loading}
//                     onClick={() => {
//                       navigate(`/dashboard/edit-course/${course._id}`)
//                     }}
//                     title="Edit"
//                     className="px-2 transition-all duration-200 hover:scale-110 hover:text-caribbeangreen-300"
//                   >
//                     <FiEdit2 size={20} />
//                   </button>
//                   <button
//                     disabled={loading}
//                     onClick={() => {
//                       setConfirmationModal({
//                         text1: "Do you want to delete this course?",
//                         text2:
//                           "All the data related to this course will be deleted",
//                         btn1Text: !loading ? "Delete" : "Loading...  ",
//                         btn2Text: "Cancel",
//                         btn1Handler: !loading
//                           ? () => handleCourseDelete(course._id)
//                           : () => {},
//                         btn2Handler: !loading
//                           ? () => setConfirmationModal(null)
//                           : () => {},
//                       })
//                     }}
//                     title="Delete"
//                     className="px-1 transition-all duration-200 hover:scale-110 hover:text-[#ff0000]"
//                   >
//                     <RiDeleteBin6Line size={20} />
//                   </button>
//                 </Td>
//               </Tr>
//             ))
//           )}
//         </Tbody>
//       </Table>
//       {confirmationModal && <ConfirmationModal modalData={confirmationModal} />}
//     </>
//   )
// }




// import { useDispatch, useSelector } from "react-redux"
// import { useState } from "react"
// import { FaCheck } from "react-icons/fa"
// import { FiEdit2 } from "react-icons/fi"
// import { HiClock } from "react-icons/hi"
// import { RiDeleteBin6Line } from "react-icons/ri"
// import { useNavigate } from "react-router-dom"

// import { setCourse, setEditCourse } from "../../../../slices/courseSlice"
// import { formatDate } from "../../../../services/formatDate"
// import {
//   deleteCourse,
//   fetchInstructorCourses,
// } from "../../../../services/operations/courseDetailsAPI"
// import { COURSE_STATUS } from "../../../../utils/constants"
// import ConfirmationModal from "../../../common/ConfirmationModal"

// export default function CoursesTable({ courses, setCourses }) {
//   const dispatch = useDispatch()
//   const navigate = useNavigate()
//   const { token } = useSelector((state) => state.auth)
//   const [loading, setLoading] = useState(false)
//   const [confirmationModal, setConfirmationModal] = useState(null)
//   const TRUNCATE_LENGTH = 30

//   const handleCourseDelete = async (courseId) => {
//     setLoading(true)
//     await deleteCourse({ courseId: courseId }, token)
//     const result = await fetchInstructorCourses(token)
//     if (result) {
//       setCourses(result)
//     }
//     setConfirmationModal(null)
//     setLoading(false)
//   }

//   return (
//     <>
//       <div className="rounded-xl border border-richblack-800 overflow-hidden">

//         {/* Table Header - sirf desktop pe dikhega */}
//         <div className="hidden sm:grid sm:grid-cols-[1fr_100px_80px_80px] gap-4 border-b border-richblack-800 px-4 sm:px-6 py-3 bg-richblack-900">
//           <p className="text-sm font-medium uppercase text-richblack-100">Courses</p>
//           <p className="text-sm font-medium uppercase text-richblack-100">Duration</p>
//           <p className="text-sm font-medium uppercase text-richblack-100">Price</p>
//           <p className="text-sm font-medium uppercase text-richblack-100">Actions</p>
//         </div>

//         {/* Rows */}
//         {courses?.length === 0 ? (
//           <div className="py-10 text-center text-xl font-medium text-richblack-100">
//             No courses found
//           </div>
//         ) : (
//           courses?.map((course) => (
//             <div
//               key={course._id}
//               className="border-b border-richblack-800 px-4 sm:px-6 py-5 
//                          flex flex-col sm:grid sm:grid-cols-[1fr_100px_80px_80px] 
//                          gap-4 sm:items-center"
//             >
//               {/* Course Info */}
//               <div className="flex gap-3 sm:gap-4">
//                 <img
//                   src={course?.thumbnail}
//                   alt={course?.courseName}
//                   className="h-[90px] w-[130px] sm:h-[130px] sm:w-[180px] rounded-lg object-cover flex-shrink-0"
//                 />
//                 <div className="flex flex-col justify-between gap-1">
//                   <p className="text-sm sm:text-base font-semibold text-richblack-5 line-clamp-2">
//                     {course.courseName}
//                   </p>
//                   <p className="text-xs text-richblack-300 line-clamp-2 hidden sm:block">
//                     {course.courseDescription.split(" ").length > TRUNCATE_LENGTH
//                       ? course.courseDescription
//                           .split(" ")
//                           .slice(0, TRUNCATE_LENGTH)
//                           .join(" ") + "..."
//                       : course.courseDescription}
//                   </p>
//                   <p className="text-[11px] text-white">
//                     Created: {formatDate(course.createdAt)}
//                   </p>
//                   {course.status === COURSE_STATUS.DRAFT ? (
//                     <p className="flex w-fit items-center gap-1 rounded-full bg-richblack-700 px-2 py-[2px] text-[11px] font-medium text-pink-100">
//                       <HiClock size={12} />
//                       Drafted
//                     </p>
//                   ) : (
//                     <p className="flex w-fit items-center gap-1 rounded-full bg-richblack-700 px-2 py-[2px] text-[11px] font-medium text-yellow-100">
//                       <span className="flex h-3 w-3 items-center justify-center rounded-full bg-yellow-100 text-richblack-700">
//                         <FaCheck size={7} />
//                       </span>
//                       Published
//                     </p>
//                   )}
//                 </div>
//               </div>

//               {/* Mobile: Duration + Price + Actions in one row */}
//               <div className="flex items-center justify-between sm:contents">
//                 {/* Duration */}
//                 <div className="sm:block">
//                   <p className="text-xs text-richblack-400 sm:hidden">Duration</p>
//                   <p className="text-sm font-medium text-richblack-100">2hr 30min</p>
//                 </div>

//                 {/* Price */}
//                 <div className="sm:block">
//                   <p className="text-xs text-richblack-400 sm:hidden">Price</p>
//                   <p className="text-sm font-medium text-richblack-100">₹{course.price}</p>
//                 </div>

//                 {/* Actions */}
//                 <div className="flex items-center gap-1">
//                   <button
//                     disabled={loading}
//                     onClick={() => navigate(`/dashboard/edit-course/${course._id}`)}
//                     title="Edit"
//                     className="p-2 transition-all duration-200 hover:scale-110 hover:text-caribbeangreen-300"
//                   >
//                     <FiEdit2 size={18} />
//                   </button>
//                   <button
//                     disabled={loading}
//                     onClick={() => {
//                       setConfirmationModal({
//                         text1: "Do you want to delete this course?",
//                         text2: "All the data related to this course will be deleted",
//                         btn1Text: !loading ? "Delete" : "Loading...",
//                         btn2Text: "Cancel",
//                         btn1Handler: !loading
//                           ? () => handleCourseDelete(course._id)
//                           : () => {},
//                         btn2Handler: !loading
//                           ? () => setConfirmationModal(null)
//                           : () => {},
//                       })
//                     }}
//                     title="Delete"
//                     className="p-2 transition-all duration-200 hover:scale-110 hover:text-[#ff0000]"
//                   >
//                     <RiDeleteBin6Line size={18} />
//                   </button>
//                 </div>
//               </div>
//             </div>
//           ))
//         )}
//       </div>

//       {confirmationModal && <ConfirmationModal modalData={confirmationModal} />}
//     </>
//   )
// }





import { useDispatch, useSelector } from "react-redux"
import { useState } from "react"
import { FaCheck } from "react-icons/fa"
import { FiEdit2 } from "react-icons/fi"
import { HiClock } from "react-icons/hi"
import { RiDeleteBin6Line } from "react-icons/ri"
import { useNavigate } from "react-router-dom"

import { formatDate } from "../../../../services/formatDate"
import {
  deleteCourse,
  fetchInstructorCourses,
} from "../../../../services/operations/courseDetailsAPI"
import { COURSE_STATUS } from "../../../../utils/constants"
import ConfirmationModal from "../../../common/ConfirmationModal"

export default function CoursesTable({ courses, setCourses }) {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { token } = useSelector((state) => state.auth)
  const [loading, setLoading] = useState(false)
  const [confirmationModal, setConfirmationModal] = useState(null)
  const TRUNCATE_LENGTH = 20

  const handleCourseDelete = async (courseId) => {
    setLoading(true)
    await deleteCourse({ courseId: courseId }, token)
    const result = await fetchInstructorCourses(token)
    if (result) {
      setCourses(result)
    }
    setConfirmationModal(null)
    setLoading(false)
  }

  return (
    <>
      <div className="rounded-xl border border-richblack-800 overflow-hidden w-full">

        {/* Desktop Header */}
        <div className="hidden sm:grid sm:grid-cols-[1fr_100px_80px_80px] gap-4 border-b border-richblack-800 px-6 py-3 bg-richblack-900">
          <p className="text-sm font-medium uppercase text-richblack-100">Courses</p>
          <p className="text-sm font-medium uppercase text-richblack-100">Duration</p>
          <p className="text-sm font-medium uppercase text-richblack-100">Price</p>
          <p className="text-sm font-medium uppercase text-richblack-100">Actions</p>
        </div>

        {courses?.length === 0 ? (
          <div className="py-10 text-center text-xl font-medium text-richblack-100">
            No courses found
          </div>
        ) : (
          courses?.map((course) => (
            <div
              key={course._id}
              className="border-b border-richblack-800 p-4 flex flex-col gap-3
                         sm:grid sm:grid-cols-[1fr_100px_80px_80px] sm:items-center sm:px-6 sm:py-5"
            >
              {/* Course Info - Image + Text */}
              <div className="flex gap-3 w-full overflow-hidden">
                <img
                  src={course?.thumbnail}
                  alt={course?.courseName}
                  className="h-[80px] w-[110px] sm:h-[120px] sm:w-[160px] rounded-lg object-cover flex-shrink-0"
                />
                <div className="flex flex-col gap-1 min-w-0 flex-1">
                  <p className="text-sm font-semibold text-richblack-5 break-words leading-snug">
                    {course.courseName}
                  </p>
                  <p className="text-[11px] text-richblack-300 hidden sm:block line-clamp-2">
                    {course.courseDescription.split(" ").length > TRUNCATE_LENGTH
                      ? course.courseDescription
                        .split(" ")
                        .slice(0, TRUNCATE_LENGTH)
                        .join(" ") + "..."
                      : course.courseDescription}
                  </p>
                  <p className="text-[11px] text-richblack-300">
                    Created: {formatDate(course.createdAt)}
                  </p>
                  {course.status === COURSE_STATUS.DRAFT ? (
                    <p className="flex w-fit items-center gap-1 rounded-full bg-richblack-700 px-2 py-[2px] text-[10px] font-medium text-pink-100">
                      <HiClock size={11} />
                      Drafted
                    </p>
                  ) : (
                    <p className="flex w-fit items-center gap-1 rounded-full bg-richblack-700 px-2 py-[2px] text-[10px] font-medium text-yellow-100">
                      <span className="flex h-3 w-3 items-center justify-center rounded-full bg-yellow-100 text-richblack-700">
                        <FaCheck size={6} />
                      </span>
                      Published
                    </p>
                  )}
                </div>
              </div>

              {/* Mobile: Duration + Price + Actions */}
              
              <div className="flex items-start justify-between sm:contents border-t border-richblack-700 pt-3 sm:border-0 sm:pt-0">

                <div className="flex flex-col gap-1">
                  <p className="text-[10px] font-medium uppercase text-richblack-400 sm:hidden">Duration</p>
                  <p className="text-sm font-medium text-richblack-100">2hr 30min</p>
                </div>

                <div className="flex flex-col gap-1">
                  <p className="text-[10px] font-medium uppercase text-richblack-400 sm:hidden">Price</p>
                  <p className="text-sm font-medium text-richblack-100">₹{course.price}</p>
                </div>

                <div className="flex flex-col gap-1">
                  <p className="text-[10px] font-medium uppercase text-richblack-400 sm:hidden">Actions</p>
                  <div className="flex items-center gap-1">
                    <button
                      disabled={loading}
                      onClick={() => navigate(`/dashboard/edit-course/${course._id}`)}
                      title="Edit"
                      className="p-1 transition-all duration-200 hover:scale-110 hover:text-caribbeangreen-300 text-richblack-100"
                    >
                      <FiEdit2 size={17} />
                    </button>
                    <button
                      disabled={loading}
                      onClick={() => {
                        setConfirmationModal({
                          text1: "Do you want to delete this course?",
                          text2: "All the data related to this course will be deleted",
                          btn1Text: !loading ? "Delete" : "Loading...",
                          btn2Text: "Cancel",
                          btn1Handler: !loading ? () => handleCourseDelete(course._id) : () => { },
                          btn2Handler: !loading ? () => setConfirmationModal(null) : () => { },
                        })
                      }}
                      title="Delete"
                      className="p-1 transition-all duration-200 hover:scale-110 hover:text-[#ff0000] text-richblack-100"
                    >
                      <RiDeleteBin6Line size={17} />
                    </button>
                  </div>
                </div>

              </div>

            </div>
          ))
        )}
      </div>

      {confirmationModal && <ConfirmationModal modalData={confirmationModal} />}
    </>
  )
}