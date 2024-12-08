import React from "react";
import ProfileElements from "./ProfileElements";

export default function Profile() {
  return (
    <div className="flex flex-1 flex-col bg-gray-100">
      <div className="bg-white rounded-lg shadow-lg p-6">
        {/* User Info Section */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Left Section */}
          <div className="flex items-center gap-4">
            <img
              src="https://via.placeholder.com/50"
              alt="Profile"
              className="w-12 h-12 rounded-full"
            />
            <div>
              <h2 className="text-xl font-semibold">Rebbecca</h2>
              <p className="text-sm text-gray-500">rebbecca@fluidesign.in</p>
            </div>
          </div>

          {/* Right Section */}
          <div className="flex flex-col items-center md:items-end gap-4">
            <div className="flex flex-col md:flex-row items-center gap-4">
              <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg shadow-sm">
                Apply Leave
              </button>
              <button className="px-4 py-2 bg-black text-white rounded-lg shadow-sm">
                Selfie Clock In
              </button>
            </div>
            {/* Countdown */}
            <p className="text-lg font-semibold">00:00:00</p>
          </div>
        </div>
        <hr className="border-t border-gray-300 my-4" />
        {/* Profile Elements */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mt-6">
          <div className="relative">
            <ProfileElements name="Month" value="October" />
            <div className="hidden md:block absolute top-0 right-0 h-full w-px bg-gray-300"></div>
          </div>
          <div className="relative">
            <ProfileElements name="Present Days" value="15" />
            <div className="hidden md:block absolute top-0 right-0 h-full w-px bg-gray-300"></div>
          </div>
          <div className="relative">
            <ProfileElements name="Total Leaves Balance" value="02" />
            <div className="hidden md:block absolute top-0 right-0 h-full w-px bg-gray-300"></div>
          </div>
          <div className="relative">
            <ProfileElements name="Outstanding Anomalies" value="15" />
            <div className="hidden md:block absolute top-0 right-0 h-full w-px bg-gray-300"></div>
          </div>
          <div>
            <ProfileElements name="Avg. Working Hours" value="9hrs 30min" />
          </div>
        </div>
      </div>
    </div>
  );
}
