import React from "react";
import { SidebarElement } from "./SidebarElement";
import logo from "../../../public/logo.svg";
import { IoHome } from "react-icons/io5";
import { FaCalendarDay } from "react-icons/fa";
import { FaCalendarDays } from "react-icons/fa6";
import { BiSolidDetail } from "react-icons/bi";
import { RiUserSettingsLine } from "react-icons/ri";
import { MdOutlineHelpOutline } from "react-icons/md";
import { LuLogOut } from "react-icons/lu";
export default function ({ name }) {
  return (
    <div className="w-64  h-screen flex flex-col p-5">
      <div className="flex items-center justify-center text-gray-700 hover:bg-gray-200 hover:text-black px-3 py-2 rounded cursor-pointer mb-5">
        <img className="h-full w-full" src={logo} alt="Logo" />
      </div>

      <nav className="flex-grow">
        <ul className="space-y-3">
          <SidebarElement name="Home" symbol={<IoHome />} />
          <SidebarElement name="My Attendance" symbol={<FaCalendarDay />} />
          <SidebarElement name="My Leaves" symbol={<FaCalendarDays />} />
          <SidebarElement name="Company Details" symbol={<BiSolidDetail />} />
          <SidebarElement
            name="Profile & Settings"
            symbol={<RiUserSettingsLine />}
          />
        </ul>
      </nav>

      {/* Additional Buttons */}
      <nav className="space-y-3">
        <SidebarElement
          name="Help & Support"
          symbol={<MdOutlineHelpOutline />}
        />
        <SidebarElement name="Contact Us" symbol={<LuLogOut />} />
      </nav>
    </div>
  );
}
