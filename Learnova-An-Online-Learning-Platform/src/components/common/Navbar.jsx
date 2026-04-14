// import { useEffect, useState, useRef } from "react"
// import { AiOutlineMenu, AiOutlineShoppingCart, AiOutlineClose } from "react-icons/ai"
// import { BsChevronDown } from "react-icons/bs"
// import { useSelector } from "react-redux"
// import { Link, matchPath, useLocation } from "react-router-dom"

// import logo from "../../assets/Logo/lnovas.png"
// import { NavbarLinks } from "../../data/navbar-links"
// import { apiConnector } from "../../services/apiconnector"
// import { categories } from "../../services/apis"
// import { ACCOUNT_TYPE } from "../../utils/constants"
// import ProfileDropdown from "../core/Auth/ProfileDropDown"

// function Navbar() {
//   const { token } = useSelector((state) => state.auth)
//   const { user } = useSelector((state) => state.profile)
//   const { totalItems } = useSelector((state) => state.cart)
//   const location = useLocation()

//   const [subLinks, setSubLinks] = useState([])
//   const [loading, setLoading] = useState(false)
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
//   const [mobileCatalogOpen, setMobileCatalogOpen] = useState(false)
//   const menuRef = useRef(null)

//   useEffect(() => {
//     ;(async () => {
//       setLoading(true)
//       try {
//         const res = await apiConnector("GET", categories.CATEGORIES_API)
//         setSubLinks(res.data.data)
//       } catch (error) {
//         console.log("Could not fetch Categories.", error)
//       }
//       setLoading(false)
//     })()
//   }, [])

//   // Close menu on route change
//   useEffect(() => {
//     setMobileMenuOpen(false)
//     setMobileCatalogOpen(false)
//   }, [location])

//   // Close menu on outside click
//   useEffect(() => {
//     const handleOutsideClick = (e) => {
//       if (menuRef.current && !menuRef.current.contains(e.target)) {
//         setMobileMenuOpen(false)
//         setMobileCatalogOpen(false)
//       }
//     }
//     document.addEventListener("mousedown", handleOutsideClick)
//     return () => document.removeEventListener("mousedown", handleOutsideClick)
//   }, [])

//   const matchRoute = (route) => {
//     return matchPath({ path: route }, location.pathname)
//   }

//   return (
//     <div
//       ref={menuRef}
//       className={`relative flex h-14 items-center justify-center border-b-[1px] border-b-richblack-700 ${
//         location.pathname !== "/" ? "bg-richblack-800" : ""
//       } transition-all duration-200`}
//     >
//       <div className="flex w-11/12 max-w-maxContent items-center justify-between">
//         {/* Logo */}
//         <Link to="/">
//           <img src={logo} alt="Learnova" className="h-20 w-auto" />
//         </Link>

//         {/* Desktop Nav Links */}
//         <nav className="hidden md:block">
//           <ul className="flex gap-x-6 text-richblack-25">
//             {NavbarLinks.map((link, index) => (
//               <li key={index}>
//                 {link.title === "Catalog" ? (
//                   <div
//                     className={`group relative flex cursor-pointer items-center gap-1 ${
//                       matchRoute("/catalog/:catalogName")
//                         ? "text-yellow-25"
//                         : "text-richblack-25"
//                     }`}
//                   >
//                     <p>{link.title}</p>
//                     <BsChevronDown />
//                     <div className="invisible absolute left-[50%] top-[50%] z-[1000] flex w-[200px] translate-x-[-50%] translate-y-[3em] flex-col rounded-lg bg-richblack-5 p-4 text-richblack-900 opacity-0 transition-all duration-150 group-hover:visible group-hover:translate-y-[1.65em] group-hover:opacity-100 lg:w-[300px]">
//                       <div className="absolute left-[50%] top-0 -z-10 h-6 w-6 translate-x-[80%] translate-y-[-40%] rotate-45 select-none rounded bg-richblack-5"></div>
//                       {loading ? (
//                         <p className="text-center">Loading...</p>
//                       ) : subLinks && subLinks.length ? (
//                         subLinks
//                           .filter((subLink) => subLink?.courses?.length > 0)
//                           .map((subLink, i) => (
//                             <Link
//                               to={`/catalog/${subLink.name.split(" ").join("-").toLowerCase()}`}
//                               className="rounded-lg bg-transparent py-4 pl-4 hover:bg-richblack-50"
//                               key={i}
//                             >
//                               <p>{subLink.name}</p>
//                             </Link>
//                           ))
//                       ) : (
//                         <p className="text-center">No Courses Found</p>
//                       )}
//                     </div>
//                   </div>
//                 ) : (
//                   <Link to={link?.path}>
//                     <p className={`${matchRoute(link?.path) ? "text-yellow-25" : "text-richblack-25"}`}>
//                       {link.title}
//                     </p>
//                   </Link>
//                 )}
//               </li>
//             ))}
//           </ul>
//         </nav>

//         {/* Desktop Right Side */}
//         <div className="hidden items-center gap-x-4 md:flex">
//           {user && user?.accountType !== ACCOUNT_TYPE.INSTRUCTOR && (
//             <Link to="/dashboard/cart" className="relative">
//               <AiOutlineShoppingCart className="text-2xl text-richblack-100" />
//               {totalItems > 0 && (
//                 <span className="absolute -bottom-2 -right-2 grid h-5 w-5 place-items-center overflow-hidden rounded-full bg-richblack-600 text-center text-xs font-bold text-yellow-100">
//                   {totalItems}
//                 </span>
//               )}
//             </Link>
//           )}
//           {token === null && (
//             <>
//               <Link to="/login">
//                 <button className="rounded-[8px] border border-richblack-700 bg-richblack-800 px-[12px] py-[8px] text-richblack-100">
//                   Log in
//                 </button>
//               </Link>
//               <Link to="/signup">
//                 <button className="rounded-[8px] border border-richblack-700 bg-richblack-800 px-[12px] py-[8px] text-richblack-100">
//                   Sign up
//                 </button>
//               </Link>
//             </>
//           )}
//           {token !== null && <ProfileDropdown />}
//         </div>

//         {/* Hamburger - Mobile */}
//         <button
//           className="md:hidden p-2"
//           onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
//         >
//           {mobileMenuOpen
//             ? <AiOutlineClose fontSize={24} fill="#AFB2BF" />
//             : <AiOutlineMenu fontSize={24} fill="#AFB2BF" />
//           }
//         </button>
//       </div>

//       {/* Mobile Menu */}
//       {mobileMenuOpen && (
//         <div className="absolute top-14 left-0 z-[1000] w-full bg-richblack-800 flex flex-col items-start gap-4 px-6 py-4 md:hidden border-b border-richblack-700 shadow-lg">

//           {/* Nav Links */}
//           {NavbarLinks.map((link, index) => (
//             <div key={index} className="w-full">
//               {link.title === "Catalog" ? (
//                 <div className="w-full">
//                   <button
//                     className={`flex items-center gap-2 text-base w-full ${
//                       matchRoute("/catalog/:catalogName") ? "text-yellow-25" : "text-richblack-25"
//                     }`}
//                     onClick={() => setMobileCatalogOpen(!mobileCatalogOpen)}
//                   >
//                     <span>{link.title}</span>
//                     <BsChevronDown className={`transition-transform ${mobileCatalogOpen ? "rotate-180" : ""}`} />
//                   </button>

//                   {/* Catalog Dropdown - Mobile */}
//                   {mobileCatalogOpen && (
//                     <div className="mt-2 ml-4 flex flex-col gap-2">
//                       {loading ? (
//                         <p className="text-richblack-25">Loading...</p>
//                       ) : subLinks && subLinks.length ? (
//                         subLinks
//                           .filter((subLink) => subLink?.courses?.length > 0)
//                           .map((subLink, i) => (
//                             <Link
//                               key={i}
//                               to={`/catalog/${subLink.name.split(" ").join("-").toLowerCase()}`}
//                               className="text-richblack-25 hover:text-yellow-25 py-1"
//                               onClick={() => setMobileMenuOpen(false)}
//                             >
//                               {subLink.name}
//                             </Link>
//                           ))
//                       ) : (
//                         <p className="text-richblack-25">No Courses Found</p>
//                       )}
//                     </div>
//                   )}
//                 </div>
//               ) : (
//                 <Link
//                   to={link?.path}
//                   onClick={() => setMobileMenuOpen(false)}
//                   className={`text-base ${
//                     link?.path && matchRoute(link?.path) ? "text-yellow-25" : "text-richblack-25"
//                   }`}
//                 >
//                   {link.title}
//                 </Link>
//               )}
//             </div>
//           ))}

//           <div className="w-full h-[1px] bg-richblack-700" />

//           {/* Cart - Mobile */}
//           {user && user?.accountType !== ACCOUNT_TYPE.INSTRUCTOR && (
//             <Link
//               to="/dashboard/cart"
//               className="flex items-center gap-2 text-richblack-25"
//               onClick={() => setMobileMenuOpen(false)}
//             >
//               <AiOutlineShoppingCart className="text-2xl" />
//               <span>Cart</span>
//               {totalItems > 0 && (
//                 <span className="grid h-5 w-5 place-items-center rounded-full bg-richblack-600 text-xs font-bold text-yellow-100">
//                   {totalItems}
//                 </span>
//               )}
//             </Link>
//           )}

//           {/* Login/Signup - Mobile */}
//           {token === null && (
//             <div className="flex gap-4 w-full">
//               <Link to="/login" onClick={() => setMobileMenuOpen(false)} className="flex-1">
//                 <button className="w-full rounded-[8px] border border-richblack-700 bg-richblack-800 px-[12px] py-[8px] text-richblack-100">
//                   Log in
//                 </button>
//               </Link>
//               <Link to="/signup" onClick={() => setMobileMenuOpen(false)} className="flex-1">
//                 <button className="w-full rounded-[8px] border border-richblack-700 bg-richblack-800 px-[12px] py-[8px] text-richblack-100">
//                   Sign up
//                 </button>
//               </Link>
//             </div>
//           )}

//           {/* Profile - Mobile */}
//           {token !== null && <ProfileDropdown />}
//         </div>
//       )}
//     </div>
//   )
// }

// export default Navbar





import { useEffect, useState, useRef } from "react"
import { AiOutlineMenu, AiOutlineShoppingCart, AiOutlineClose } from "react-icons/ai"
import { BsChevronDown } from "react-icons/bs"
import { useSelector } from "react-redux"
import { Link, matchPath, useLocation } from "react-router-dom"

import logo from "../../assets/Logo/lnovas.png"
import { NavbarLinks } from "../../data/navbar-links"
import { apiConnector } from "../../services/apiconnector"
import { categories } from "../../services/apis"
import { ACCOUNT_TYPE } from "../../utils/constants"
import ProfileDropdown from "../core/Auth/ProfileDropDown"

function Navbar() {
  const { token } = useSelector((state) => state.auth)
  const { user } = useSelector((state) => state.profile)
  const { totalItems } = useSelector((state) => state.cart)
  const location = useLocation()

  const [subLinks, setSubLinks] = useState([])
  const [loading, setLoading] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [mobileCatalogOpen, setMobileCatalogOpen] = useState(false)
  const menuRef = useRef(null)

  useEffect(() => {
    ;(async () => {
      setLoading(true)
      try {
        const res = await apiConnector("GET", categories.CATEGORIES_API)
        setSubLinks(res.data.data)
      } catch (error) {
        console.log("Could not fetch Categories.", error)
      }
      setLoading(false)
    })()
  }, [])

  useEffect(() => {
    setMobileMenuOpen(false)
    setMobileCatalogOpen(false)
  }, [location])

  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setMobileMenuOpen(false)
        setMobileCatalogOpen(false)
      }
    }
    document.addEventListener("mousedown", handleOutsideClick)
    return () => document.removeEventListener("mousedown", handleOutsideClick)
  }, [])

  const matchRoute = (route) => {
    return matchPath({ path: route }, location.pathname)
  }

  return (
    <div
      ref={menuRef}
      className={`relative flex h-14 items-center justify-center border-b-[1px] border-b-richblack-700 ${
        location.pathname !== "/" ? "bg-richblack-800" : ""
      } transition-all duration-200`}
    >
      <div className="flex w-11/12 max-w-maxContent items-center justify-between">
        {/* Logo */}
        <Link to="/">
          <img src={logo} alt="Learnova" className="h-20 w-auto" />
        </Link>

        {/* Desktop Nav Links */}
        <nav className="hidden md:block">
          <ul className="flex gap-x-6 text-richblack-25">
            {NavbarLinks.map((link, index) => (
              <li key={index}>
                {link.title === "Catalog" ? (
                  <div
                    className={`group relative flex cursor-pointer items-center gap-1 ${
                      matchRoute("/catalog/:catalogName")
                        ? "text-yellow-25"
                        : "text-richblack-25"
                    }`}
                  >
                    <p>{link.title}</p>
                    <BsChevronDown />
                    <div className="invisible absolute left-[50%] top-[50%] z-[1000] flex w-[200px] translate-x-[-50%] translate-y-[3em] flex-col rounded-lg bg-richblack-5 p-4 text-richblack-900 opacity-0 transition-all duration-150 group-hover:visible group-hover:translate-y-[1.65em] group-hover:opacity-100 lg:w-[300px]">
                      <div className="absolute left-[50%] top-0 -z-10 h-6 w-6 translate-x-[80%] translate-y-[-40%] rotate-45 select-none rounded bg-richblack-5"></div>
                      {loading ? (
                        <p className="text-center">Loading...</p>
                      ) : subLinks && subLinks.length ? (
                        subLinks
                          .filter((subLink) => subLink?.courses?.length > 0)
                          .map((subLink, i) => (
                            <Link
                              to={`/catalog/${subLink.name.split(" ").join("-").toLowerCase()}`}
                              className="rounded-lg bg-transparent py-4 pl-4 hover:bg-richblack-50"
                              key={i}
                            >
                              <p>{subLink.name}</p>
                            </Link>
                          ))
                      ) : (
                        <p className="text-center">No Courses Found</p>
                      )}
                    </div>
                  </div>
                ) : (
                  <Link to={link?.path}>
                    <p
                      className={`${
                        matchRoute(link?.path) ? "text-yellow-25" : "text-richblack-25"
                      }`}
                    >
                      {link.title}
                    </p>
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </nav>

        {/* Desktop Right Side */}
        <div className="hidden items-center gap-x-4 md:flex">
          {user && user?.accountType !== ACCOUNT_TYPE.INSTRUCTOR && (
            <Link to="/dashboard/cart" className="relative">
              <AiOutlineShoppingCart className="text-2xl text-richblack-100" />
              {totalItems > 0 && (
                <span className="absolute -bottom-2 -right-2 grid h-5 w-5 place-items-center overflow-hidden rounded-full bg-richblack-600 text-center text-xs font-bold text-yellow-100">
                  {totalItems}
                </span>
              )}
            </Link>
          )}
          {token === null && (
            <>
              <Link to="/login">
                <button className="rounded-[8px] border border-richblack-700 bg-richblack-800 px-[12px] py-[8px] text-richblack-100">
                  Log in
                </button>
              </Link>
              <Link to="/signup">
                <button className="rounded-[8px] border border-richblack-700 bg-richblack-800 px-[12px] py-[8px] text-richblack-100">
                  Sign up
                </button>
              </Link>
            </>
          )}
          {token !== null && <ProfileDropdown />}
        </div>

        {/* Hamburger - Mobile */}
        <button
          className="md:hidden p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? (
            <AiOutlineClose fontSize={24} fill="#AFB2BF" />
          ) : (
            <AiOutlineMenu fontSize={24} fill="#AFB2BF" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="absolute top-14 left-0 z-[1000] w-full bg-richblack-800 flex flex-col items-start gap-4 px-6 py-4 md:hidden border-b border-richblack-700 shadow-lg">

          {/* Nav Links */}
          {NavbarLinks.map((link, index) => (
            <div key={index} className="w-full">
              {link.title === "Catalog" ? (
                <div className="w-full">
                  <button
                    className={`flex items-center gap-2 text-base w-full ${
                      matchRoute("/catalog/:catalogName")
                        ? "text-yellow-25"
                        : "text-richblack-25"
                    }`}
                    onClick={() => setMobileCatalogOpen(!mobileCatalogOpen)}
                  >
                    <span>{link.title}</span>
                    <BsChevronDown
                      className={`transition-transform ${
                        mobileCatalogOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  {mobileCatalogOpen && (
                    <div className="mt-2 ml-4 flex flex-col gap-2">
                      {loading ? (
                        <p className="text-richblack-25">Loading...</p>
                      ) : subLinks && subLinks.length ? (
                        subLinks
                          .filter((subLink) => subLink?.courses?.length > 0)
                          .map((subLink, i) => (
                            <Link
                              key={i}
                              to={`/catalog/${subLink.name
                                .split(" ")
                                .join("-")
                                .toLowerCase()}`}
                              className="text-richblack-25 hover:text-yellow-25 py-1"
                              onClick={() => setMobileMenuOpen(false)}
                            >
                              {subLink.name}
                            </Link>
                          ))
                      ) : (
                        <p className="text-richblack-25">No Courses Found</p>
                      )}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  to={link?.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`text-base ${
                    link?.path && matchRoute(link?.path)
                      ? "text-yellow-25"
                      : "text-richblack-25"
                  }`}
                >
                  {link.title}
                </Link>
              )}
            </div>
          ))}

          <div className="w-full h-[1px] bg-richblack-700" />

          {/* Cart - Mobile */}
          {user && user?.accountType !== ACCOUNT_TYPE.INSTRUCTOR && (
            <Link
              to="/dashboard/cart"
              className="flex items-center gap-2 text-richblack-25"
              onClick={() => setMobileMenuOpen(false)}
            >
              <AiOutlineShoppingCart className="text-2xl" />
              <span>Cart</span>
              {totalItems > 0 && (
                <span className="grid h-5 w-5 place-items-center rounded-full bg-richblack-600 text-xs font-bold text-yellow-100">
                  {totalItems}
                </span>
              )}
            </Link>
          )}

          {/* Login/Signup - Mobile */}
          {token === null && (
            <div className="flex gap-4 w-full">
              <Link
                to="/login"
                onClick={() => setMobileMenuOpen(false)}
                className="flex-1"
              >
                <button className="w-full rounded-[8px] border border-richblack-700 bg-richblack-800 px-[12px] py-[8px] text-richblack-100">
                  Log in
                </button>
              </Link>
              <Link
                to="/signup"
                onClick={() => setMobileMenuOpen(false)}
                className="flex-1"
              >
                <button className="w-full rounded-[8px] border border-richblack-700 bg-richblack-800 px-[12px] py-[8px] text-richblack-100">
                  Sign up
                </button>
              </Link>
            </div>
          )}

          {/* Profile - Mobile */}
          {token !== null && (
            <div className="w-full">
              <ProfileDropdown mobile={true} />
            </div>
          )}
        </div>
      )}
    </div>
  )
}

export default Navbar
