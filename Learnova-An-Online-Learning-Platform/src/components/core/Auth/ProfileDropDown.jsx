// import { useRef, useState } from "react"
// import { AiOutlineCaretDown } from "react-icons/ai"
// import { VscDashboard, VscSignOut } from "react-icons/vsc"
// import { useDispatch, useSelector } from "react-redux"
// import { Link, useNavigate } from "react-router-dom"

// import useOnClickOutside from "../../../hooks/useOnClickOutside"
// import { logout } from "../../../services/operations/authAPI"

// export default function ProfileDropdown() {
//   const { user } = useSelector((state) => state.profile)
//   const dispatch = useDispatch()
//   const navigate = useNavigate()
//   const [open, setOpen] = useState(false)
//   const ref = useRef(null)

//   useOnClickOutside(ref, () => setOpen(false))

//   if (!user) return null

//   return (
//     <button className="relative" onClick={() => setOpen(true)}>
//       <div className="flex items-center gap-x-1">
//         <img
//           src={user?.image}
//           alt={`profile-${user?.firstName}`}
//           className="aspect-square w-[30px] rounded-full object-cover"
//         />
//         <AiOutlineCaretDown className="text-sm text-richblack-100" />
//       </div>
//       {open && (
//         <div
//           onClick={(e) => e.stopPropagation()}
//           className="absolute top-[118%] right-0 z-[1000] divide-y-[1px] divide-richblack-700 overflow-hidden rounded-md border-[1px] border-richblack-700 bg-richblack-800"
//           ref={ref}
//         >
//           <Link to="/dashboard/my-profile" onClick={() => setOpen(false)}>
//             <div className="flex w-full items-center gap-x-1 py-[10px] px-[12px] text-sm text-richblack-100 hover:bg-richblack-700 hover:text-richblack-25">
//               <VscDashboard className="text-lg" />
//               Dashboard
//             </div>
//           </Link>
//           <div
//             onClick={() => {
//               dispatch(logout(navigate))
//               setOpen(false)
//             }}
//             className="flex w-full items-center gap-x-1 py-[10px] px-[12px] text-sm text-richblack-100 hover:bg-richblack-700 hover:text-richblack-25"
//           >
//             <VscSignOut className="text-lg" />
//             Logout
//           </div>
//         </div>
//       )}
//     </button>
//   )
// }



import { useRef, useState } from "react"
import { AiOutlineCaretDown } from "react-icons/ai"
import { VscDashboard, VscSignOut } from "react-icons/vsc"
import { useDispatch, useSelector } from "react-redux"
import { Link, useNavigate } from "react-router-dom"

import useOnClickOutside from "../../../hooks/useOnClickOutside"
import { logout } from "../../../services/operations/authAPI"

export default function ProfileDropdown({ mobile = false }) {
  const { user } = useSelector((state) => state.profile)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [open, setOpen] = useState(false)
  const ref = useRef(null)

  useOnClickOutside(ref, () => setOpen(false))

  if (!user) return null

  return (
    <div className="w-full" ref={ref}>
      {/* Profile Button */}
      <button
        className="flex items-center gap-x-2"
        onClick={() => setOpen((prev) => !prev)}
      >
        <img
          src={user?.image}
          alt={`profile-${user?.firstName}`}
          className="aspect-square w-[32px] rounded-full object-cover"
        />
        {mobile && (
          <span className="text-richblack-25 text-sm font-medium">
            {user?.firstName} {user?.lastName}
          </span>
        )}
        <AiOutlineCaretDown
          className={`text-sm text-richblack-100 transition-transform duration-200 ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>

      {/* Dropdown - Mobile: neeche expand, Desktop: absolute */}
      {open && (
        <div
          className={`
            z-[1000] min-w-[160px] divide-y-[1px] divide-richblack-700 
            overflow-hidden rounded-md border-[1px] border-richblack-700 bg-richblack-800
            ${mobile
              ? "relative mt-2 ml-2 w-full"
              : "absolute top-[118%] right-0"
            }
          `}
        >
          <Link to="/dashboard/my-profile" onClick={() => setOpen(false)}>
            <div className="flex w-full items-center gap-x-2 py-[10px] px-[12px] text-sm text-richblack-100 hover:bg-richblack-700 hover:text-richblack-25">
              <VscDashboard className="text-lg" />
              Dashboard
            </div>
          </Link>
          <div
            onClick={() => {
              dispatch(logout(navigate))
              setOpen(false)
            }}
            className="flex w-full cursor-pointer items-center gap-x-2 py-[10px] px-[12px] text-sm text-richblack-100 hover:bg-richblack-700 hover:text-richblack-25"
          >
            <VscSignOut className="text-lg" />
            Logout
          </div>
        </div>
      )}
    </div>
  )
}