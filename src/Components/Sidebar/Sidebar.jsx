import React from "react";
import { SidebarElement } from "./SidebarElement";
import { CiHome } from "react-icons/ci";
import { CiCalendar } from "react-icons/ci";
import { FaRegCalendarAlt } from "react-icons/fa";
import { BiDetail } from "react-icons/bi";
import { RiUserSettingsLine } from "react-icons/ri";
import { MdOutlineHelpOutline } from "react-icons/md";
import { LuLogOut } from "react-icons/lu";

export default function Sidebar() {
  return (
    <aside className="fixed left-0 top-0 w-64 h-screen bg-white shadow-md flex flex-col px-6 py-5">
      <div className="flex items-center mb-5">
        <img className="h-16 w-auto" src="/public/logo.svg" alt="Logo" />
      </div>
      <hr className="border-t border-gray-300 w-full" />

      <nav className="flex-grow">
        <ul className="space-y-3">
          <SidebarElement name="Home" symbol={<CiHome />} />
          <SidebarElement name="My Attendance" symbol={<CiCalendar />} />
          <SidebarElement name="My Leaves" symbol={<FaRegCalendarAlt />} />
          <SidebarElement name="Company Details" symbol={<BiDetail />} />
          <SidebarElement
            name="Profile & Settings"
            symbol={<RiUserSettingsLine />}
          />
        </ul>
      </nav>

      <nav className="mt-5">
        <hr className="border-t border-gray-300 mb-4" />
        <ul className="space-y-3">
          <SidebarElement
            name="Help & Support"
            symbol={<MdOutlineHelpOutline />}
          />
          <SidebarElement name="Logout" symbol={<LuLogOut />} />
        </ul>
      </nav>
    </aside>
  );
}
