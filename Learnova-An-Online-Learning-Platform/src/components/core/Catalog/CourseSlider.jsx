// import React from 'react'
// import {Swiper, SwiperSlide} from "swiper/react"
// import "swiper/css"
// import "swiper/css/free-mode"
// import "swiper/css/pagination"
// import { FreeMode, Pagination } from 'swiper'
// import Course_Card from './Course_Card'

// const CourseSlider = ({Courses}) => {
//   return (
//     <>
//       {Courses?.length ? (
//         <div className="px-2">
//           <Swiper
//             slidesPerView={1}
//             spaceBetween={20}
//             loop={Courses.length > 3}
//             modules={[FreeMode, Pagination]}
//             breakpoints={{
//               640: {
//                 slidesPerView: 2,
//                 spaceBetween: 20,
//               },
//               1024: {
//                 slidesPerView: 3,
//                 spaceBetween: 25,
//               },
//             }}
//             className="w-full"
//           >
//             {Courses?.map((course, i) => (
//               <SwiperSlide key={i}>
//                 <Course_Card course={course} Height={"h-[200px] sm:h-[220px]"} />
//               </SwiperSlide>
//             ))}
//           </Swiper>
//         </div>
//       ) : (
//         <p className="text-xl text-richblack-5">No Course Found</p>
//       )}
//     </>
//   )
// }

// export default CourseSlider




// import React from 'react'
// import { Swiper, SwiperSlide } from "swiper/react"
// import "swiper/css"
// import "swiper/css/free-mode"
// import "swiper/css/pagination"
// import { FreeMode, Pagination } from 'swiper'
// import Course_Card from './Course_Card'

// const CourseSlider = ({ Courses }) => {
//   return (
//     <>
//       {Courses?.length ? (
//         <Swiper
//           slidesPerView={1}
//           spaceBetween={12}
//           loop={Courses.length > 3}
//           modules={[FreeMode, Pagination]}
//           breakpoints={{
//             640: {
//               slidesPerView: 2,
//               spaceBetween: 20,
//             },
//             1024: {
//               slidesPerView: 3,
//               spaceBetween: 25,
//             },
//           }}
//           className="w-full !px-2"
//         >
//           {Courses?.map((course, i) => (
//             <SwiperSlide key={i} className="!h-auto">
//               <Course_Card course={course} Height={"h-[200px] sm:h-[220px]"} />
//             </SwiperSlide>
//           ))}
//         </Swiper>
//       ) : (
//         <p className="text-xl text-richblack-5">No Course Found</p>
//       )}
//     </>
//   )
// }

// export default CourseSlider






import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
import "swiper/css/free-mode"
import "swiper/css/pagination"
import { FreeMode, Pagination } from 'swiper'
import Course_Card from './Course_Card'

const CourseSlider = ({ Courses }) => {
  return (
    <>
      {Courses?.length ? (
        <div className="px-2">
          <Swiper
            slidesPerView={1}
            spaceBetween={12}
            loop={Courses.length > 3}
            modules={[FreeMode, Pagination]}
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 25,
              },
            }}
            className="w-full"
          >
            {Courses?.map((course, i) => (
              <SwiperSlide key={i}>
                <Course_Card course={course} Height={"h-[200px] sm:h-[220px]"} />
               
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      ) : (
        <p className="text-xl text-richblack-5">No Course Found</p>
      )}
    </>
  )
}

export default CourseSlider