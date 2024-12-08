import React, { useState } from "react";
import { Calendar } from "@/components/ui/calendar";

export default function Log() {
  const [date, setDate] = useState(new Date());
  const [activeLog, setActiveLog] = useState("Attendance Log");

  const attendanceLogData = [
    ["John Doe", "9:00 AM", "5:00 PM", "Present", "01/01/2024"],
    ["Jane Smith", "9:15 AM", "5:00 PM", "Present", "01/01/2024"],
    ["Alice Brown", "9:00 AM", "4:45 PM", "Absent", "01/01/2024"],
  ];

  const leaveLogData = [
    [
      "Mark Johnson",
      "Sick Leave",
      "5/05/2024",
      "5/10/2024",
      5,
      "Not feeling well",
      "Approved",
    ],
    [
      "Emma Wilson",
      "Vacation",
      "7/20/2024",
      "7/25/2024",
      5,
      "Family trip",
      "Pending",
    ],
    [
      "Olivia Davis",
      "Emergency Leave",
      "8/10/2024",
      "8/12/2024",
      2,
      "Family emergency",
      "Denied",
    ],
  ];

  const columnsAttendance = [
    "Employee Name",
    "Check-in",
    "Check-out",
    "Status",
    "Date",
  ];
  const columnsLeave = [
    "Employee Name",
    "Leave Type",
    "From",
    "To",
    "Days",
    "Reason",
    "Status",
  ];

  const tableData =
    activeLog === "Attendance Log" ? attendanceLogData : leaveLogData;
  const columns =
    activeLog === "Attendance Log" ? columnsAttendance : columnsLeave;

  return (
    <div className="mt-6 grid grid-cols-3 gap-4 items-start">
      {/* Log Section (Left) */}
      <section className="col-span-2 bg-white p-4 rounded-lg shadow flex flex-col h-[500px]">
        {/* Toggle to switch between Attendance Log and Leave Log */}
        <div className="flex items-center justify-start mb-4">
          <div className="flex bg-gray-200 rounded-lg shadow divide-x divide-gray-300">
            <button
              className={`px-4 py-2 rounded-l-lg ${
                activeLog === "Attendance Log" ? "bg-white" : "bg-gray-300"
              }`}
              onClick={() => setActiveLog("Attendance Log")}
            >
              Attendance Log
            </button>
            <button
              className={`px-4 py-2 rounded-r-lg ${
                activeLog === "Leave Log" ? "bg-white" : "bg-gray-300"
              }`}
              onClick={() => setActiveLog("Leave Log")}
            >
              Leave Log
            </button>
          </div>
        </div>

        {/* Table */}
        <div className="overflow-auto flex-grow">
          <table className="w-full bg-white rounded-lg shadow overflow-hidden">
            <thead className="bg-gray-300 text-gray-800">
              <tr>
                {columns.map((col, index) => (
                  <th key={index} className="p-2 text-left">
                    {col}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {tableData.map((row, rowIndex) => (
                <tr
                  key={rowIndex}
                  className={rowIndex % 2 === 0 ? "bg-gray-100" : "bg-white"}
                >
                  {row.map((cell, cellIndex) => {
                    // Highlight Status as green for "Approved" or red for "Denied"
                    if (cellIndex === 6) {
                      const statusClass =
                        cell === "Approved"
                          ? "bg-green-500 text-white"
                          : cell === "Denied"
                          ? "bg-red-500 text-white"
                          : "";
                      return (
                        <td key={cellIndex} className={`p-2 ${statusClass}`}>
                          {cell}
                        </td>
                      );
                    }
                    return (
                      <td key={cellIndex} className="p-2">
                        {cell}
                      </td>
                    );
                  })}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Calendar Section (Right) */}
      <section className="bg-white p-4 rounded-lg shadow flex justify-center items-center ">
        <div className="w-full">
          <Calendar
            mode="single"
            selected={date}
            onSelect={setDate}
            className="rounded-md border w-full h-full"
          />
        </div>
      </section>
    </div>
  );
}
