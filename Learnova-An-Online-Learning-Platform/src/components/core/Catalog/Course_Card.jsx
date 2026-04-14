


import React, { useEffect, useState } from 'react'
import RatingStars from '../../common/RatingStars'
import GetAvgRating from '../../../utils/avgRating'
import { Link } from 'react-router-dom'

const Course_Card = ({ course, Height}) => {
  const [avgReviewCount, setAvgReviewCount] = useState(0)

  useEffect(() => {
    const count = GetAvgRating(course.ratingAndReviews)
    setAvgReviewCount(count)
  }, [course])

  return (
    <Link to={`/courses/${course._id}`} className="block w-full pr-10">
 
      <div className="group rounded-xl overflow-hidden hover:shadow-[0_0_20px_0] hover:shadow-richblack-500 transition-all duration-200">
        
        {/* Thumbnail */}
        <div className={`rounded-xl overflow-hidden w-full ${Height ? Height : "aspect-video"}`}>
          <img
            src={course?.thumbnail}
            alt={course?.courseName}
            className="w-full h-full object-cover transition-transform duration-200 group-hover:scale-105"
          />
        </div>

        {/* Details */}
        <div className="flex flex-col gap-2 px-1 py-3">
          <p className="text-base sm:text-lg lg:text-xl text-richblack-5 font-semibold line-clamp-2">
            {course?.courseName}
          </p>
          <p className="text-xs sm:text-sm text-richblack-50">
            {course?.instructor?.firstName} {course?.instructor?.lastName}
          </p>
          <div className="flex items-center gap-2 flex-wrap">
            <span className="text-yellow-5 font-semibold text-sm">
              {avgReviewCount || 0}
            </span>
            <RatingStars Review_Count={avgReviewCount} />
            <span className="text-richblack-400 text-xs sm:text-sm">
              {course?.ratingAndReviews?.length} Ratings
            </span>
          </div>
          <p className="text-base sm:text-lg lg:text-xl text-richblack-5 font-bold">
            Rs. {course?.price}
          </p>
        </div>
      </div>
    </Link>
  )
}

export default Course_Card



