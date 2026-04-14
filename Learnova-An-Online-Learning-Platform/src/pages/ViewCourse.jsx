// import { useEffect, useState } from "react"
// import { useDispatch, useSelector } from "react-redux"
// import { Outlet, useParams } from "react-router-dom"

// import CourseReviewModal from "../components/core/ViewCourse/CourseReviewModal"
// import VideoDetailsSidebar from "../components/core/ViewCourse/VideoDetailsSidebar"
// import { getFullDetailsOfCourse } from "../services/operations/courseDetailsAPI"
// import {
//   setCompletedLectures,
//   setCourseSectionData,
//   setEntireCourseData,
//   setTotalNoOfLectures,
// } from "../slices/viewCourseSlice"

// export default function ViewCourse() {
//   const { courseId } = useParams()
//   const { token } = useSelector((state) => state.auth)
//   const dispatch = useDispatch()
//   const [reviewModal, setReviewModal] = useState(false)

//   useEffect(() => {
//     ;(async () => {
//       const courseData = await getFullDetailsOfCourse(courseId, token)
//       // console.log("Course Data here... ", courseData.courseDetails)
//       dispatch(setCourseSectionData(courseData.courseDetails.courseContent))
//       dispatch(setEntireCourseData(courseData.courseDetails))
//       dispatch(setCompletedLectures(courseData.completedVideos))
//       let lectures = 0
//       courseData?.courseDetails?.courseContent?.forEach((sec) => {
//         lectures += sec.subSection.length
//       })
//       dispatch(setTotalNoOfLectures(lectures))
//     })()
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, [])

//   return (
//     <>
//       <div className="relative flex min-h-[calc(100vh-3.5rem)]">
//         <VideoDetailsSidebar setReviewModal={setReviewModal} />
//         <div className="h-[calc(100vh-3.5rem)] flex-1 overflow-auto">
//           <div className="mx-6">
//             <Outlet />
//           </div>
//         </div>
//       </div>
//       {reviewModal && <CourseReviewModal setReviewModal={setReviewModal} />}
//     </>
//   )
// }






import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Outlet, useParams } from "react-router-dom"
import { HiMenuAlt1, HiX } from "react-icons/hi"

import CourseReviewModal from "../components/core/ViewCourse/CourseReviewModal"
import VideoDetailsSidebar from "../components/core/ViewCourse/VideoDetailsSidebar"
import { getFullDetailsOfCourse } from "../services/operations/courseDetailsAPI"
import {
  setCompletedLectures,
  setCourseSectionData,
  setEntireCourseData,
  setTotalNoOfLectures,
} from "../slices/viewCourseSlice"

export default function ViewCourse() {
  const { courseId } = useParams()
  const { token } = useSelector((state) => state.auth)
  const dispatch = useDispatch()
  const [reviewModal, setReviewModal] = useState(false)
  const [sidebarOpen, setSidebarOpen] = useState(false)

  useEffect(() => {
    ;(async () => {
      const courseData = await getFullDetailsOfCourse(courseId, token)
      dispatch(setCourseSectionData(courseData.courseDetails.courseContent))
      dispatch(setEntireCourseData(courseData.courseDetails))
      dispatch(setCompletedLectures(courseData.completedVideos))
      let lectures = 0
      courseData?.courseDetails?.courseContent?.forEach((sec) => {
        lectures += sec.subSection.length
      })
      dispatch(setTotalNoOfLectures(lectures))
    })()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <>
      <div className="relative flex min-h-[calc(100vh-3.5rem)]">

        {/* Mobile Toggle Button */}
        <button
          className="lg:hidden fixed top-[4rem] left-3 z-[100] bg-richblack-700 text-white p-2 rounded-md shadow-md"
          onClick={() => setSidebarOpen(!sidebarOpen)}
        >
          {sidebarOpen ? <HiX size={22} /> : <HiMenuAlt1 size={22} />}
        </button>

        {/* Overlay — sidebar ke peeche click karne pe band ho */}
        {sidebarOpen && (
          <div
            className="lg:hidden fixed inset-0 z-[40] bg-black bg-opacity-50"
            onClick={() => setSidebarOpen(false)}
          />
        )}

        {/* Sidebar */}
        <div
          className={`
            fixed lg:relative z-[50] h-full lg:h-auto
            transition-transform duration-300 ease-in-out
            ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}
            lg:translate-x-0
          `}
        >
          <VideoDetailsSidebar setReviewModal={setReviewModal} />
        </div>

        {/* Main Content */}
        <div className="h-[calc(100vh-3.5rem)] flex-1 overflow-auto">
          <div className="mx-6 mt-12 lg:mt-0">
            <Outlet />
          </div>
        </div>

      </div>

      {reviewModal && <CourseReviewModal setReviewModal={setReviewModal} />}
    </>
  )
}