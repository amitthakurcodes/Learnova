// import { useSelector } from "react-redux"

// import RenderCartCourses from "./RenderCartCourses"
// import RenderTotalAmount from "./RenderTotalAmount"

// export default function Cart() {
//   const { total, totalItems } = useSelector((state) => state.cart)

//   return (
//     <>
//       <h1 className="mb-14 text-3xl font-medium text-richblack-5">Cart</h1>
//       <p className="border-b border-b-richblack-400 pb-2 font-semibold text-richblack-400">
//         {totalItems} Courses in Cart
//       </p>
//       {total > 0 ? (
//         <div className="mt-8 flex flex-col-reverse items-start gap-x-10 gap-y-6 lg:flex-row">
//           <RenderCartCourses />
//           <RenderTotalAmount />
//         </div>
//       ) : (
//         <p className="mt-14 text-center text-3xl text-richblack-100">
//           Your cart is empty
//         </p>
//       )}
//     </>
//   )
// }




import { useSelector } from "react-redux"
import RenderCartCourses from "./RenderCartCourses"
import RenderTotalAmount from "./RenderTotalAmount"

export default function Cart() {
  const { total, totalItems } = useSelector((state) => state.cart)

  return (
    <div className="px-4 lg:px-8">
      <h1 className="mb-10 text-2xl lg:text-3xl font-semibold text-richblack-5">
        Cart
      </h1>

      <p className="border-b border-b-richblack-400 pb-3 font-medium text-richblack-300">
        {totalItems} Courses in Cart
      </p>

      {total > 0 ? (
        <div className="mt-8 flex flex-col lg:flex-row gap-8">
          {/* LEFT */}
          <div className="w-full lg:w-[70%]">
            <RenderCartCourses />
          </div>

          {/* RIGHT (desktop) */}
          <div className="hidden lg:block w-[30%]">
            <RenderTotalAmount />
          </div>

          {/* MOBILE FIX (sticky bottom) */}
          <div className="lg:hidden fixed bottom-0 left-0 w-full z-50 border-t border-richblack-600 bg-richblack-800 p-4">
            <RenderTotalAmount />
          </div>
        </div>
      ) : (
        <p className="mt-14 text-center text-2xl text-richblack-200">
          Your cart is empty
        </p>
      )}
    </div>
  )
}