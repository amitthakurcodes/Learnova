import React from "react";
import { FooterLink2 } from "../../data/footer-links";
import { Link } from "react-router-dom";

import Logo from "../../assets/Logo/lnovas.png";
import { FaFacebook, FaGoogle, FaTwitter, FaYoutube } from "react-icons/fa";

const BottomFooter = ["Privacy Policy", "Cookie Policy", "Terms"];
const Resources = [
  "Articles", "Blog", "Chart Sheet", "Code challenges",
  "Docs", "Projects", "Videos", "Workspaces",
];
const Plans = ["Paid memberships", "For students", "Business solutions"];
const Community = ["Forums", "Chapters", "Events"];

const Footer = () => {
  return (
    <div className="bg-richblack-800">
      <div className="mx-auto w-11/12 max-w-maxContent py-14 text-richblack-400">
        
        {/* Main Footer Grid */}
        <div className="border-b border-richblack-700 pb-10">
          <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-6">
            
            {/* Company */}
            <div className="col-span-1 flex flex-col gap-3">
              {/* <img src={Logo} alt="Learnova" className="h-10 w-auto object-contain" /> */}
              <h1 className="text-richblack-50 font-semibold text-[16px]">Company</h1>
              <div className="flex flex-col gap-2">
                {["About", "Careers", "Affiliates"].map((ele, i) => (
                  <Link
                    key={i}
                    to={ele.toLowerCase()}
                    className="text-[14px] hover:text-richblack-50 transition-all duration-200"
                  >
                    {ele}
                  </Link>
                ))}
              </div>
              <div className="flex gap-3 text-lg mt-2">
                <FaFacebook className="hover:text-richblack-50 cursor-pointer transition-all" />
                <FaGoogle className="hover:text-richblack-50 cursor-pointer transition-all" />
                <FaTwitter className="hover:text-richblack-50 cursor-pointer transition-all" />
                <FaYoutube className="hover:text-richblack-50 cursor-pointer transition-all" />
              </div>
            </div>

            {/* Resources + Support */}
            <div className="col-span-1 flex flex-col gap-3">
              <h1 className="text-richblack-50 font-semibold text-[16px]">Resources</h1>
              <div className="flex flex-col gap-2">
                {Resources.map((ele, i) => (
                  <Link
                    key={i}
                    to={ele.split(" ").join("-").toLowerCase()}
                    className="text-[14px] hover:text-richblack-50 transition-all duration-200"
                  >
                    {ele}
                  </Link>
                ))}
              </div>
              <h1 className="text-richblack-50 font-semibold text-[16px] mt-4">Support</h1>
              <Link
                to="/help-center"
                className="text-[14px] hover:text-richblack-50 transition-all duration-200"
              >
                Help Center
              </Link>
            </div>

            {/* Plans + Community */}
            <div className="col-span-1 flex flex-col gap-3">
              <h1 className="text-richblack-50 font-semibold text-[16px]">Plans</h1>
              <div className="flex flex-col gap-2">
                {Plans.map((ele, i) => (
                  <Link
                    key={i}
                    to={ele.split(" ").join("-").toLowerCase()}
                    className="text-[14px] hover:text-richblack-50 transition-all duration-200"
                  >
                    {ele}
                  </Link>
                ))}
              </div>
              <h1 className="text-richblack-50 font-semibold text-[16px] mt-4">Community</h1>
              <div className="flex flex-col gap-2">
                {Community.map((ele, i) => (
                  <Link
                    key={i}
                    to={ele.split(" ").join("-").toLowerCase()}
                    className="text-[14px] hover:text-richblack-50 transition-all duration-200"
                  >
                    {ele}
                  </Link>
                ))}
              </div>
            </div>

            {/* FooterLink2 - Dynamic Sections */}
            {FooterLink2.map((ele, i) => (
              <div key={i} className="col-span-1 flex flex-col gap-3">
                <h1 className="text-richblack-50 font-semibold text-[16px]">
                  {ele.title}
                </h1>
                <div className="flex flex-col gap-2">
                  {ele.links.map((link, index) => (
                    <Link
                      key={index}
                      to={link.link}
                      className="text-[14px] hover:text-richblack-50 transition-all duration-200"
                    >
                      {link.title}
                    </Link>
                  ))}
                </div>
              </div>
            ))}

          </div>
        </div>

        {/* Bottom Footer */}
        <div className="flex flex-col items-center justify-between gap-4 pt-8 text-sm sm:flex-row">
          <div className="flex flex-wrap justify-center gap-1">
            {BottomFooter.map((ele, i) => (
              <div
                key={i}
                className={`px-3 ${
                  i !== BottomFooter.length - 1
                    ? "border-r border-richblack-700"
                    : ""
                }`}
              >
                <Link
                  to={ele.split(" ").join("-").toLowerCase()}
                  className="hover:text-richblack-50 transition-all duration-200"
                >
                  {ele}
                </Link>
              </div>
            ))}
          </div>
          <div className="text-center">Made with ❤️ © 2026 Learnova</div>
        </div>

      </div>
    </div>
  );
};

export default Footer;