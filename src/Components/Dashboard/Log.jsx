import React, { useState } from "react";
import { Calendar } from "@/components/ui/calendar";

export default function Log() {
  const [date, setDate] = useState(new Date());
  const [activeLog, setActiveLog] = useState("Attendance Log");
  const [rowsToShow, setRowsToShow] = useState(8); // Initially show 8 rows

  const attendanceLogData = [
    ["John Doe", "9:00 AM", "5:00 PM", "Present", "01/01/2024"],
    // ...more attendance data
  ];

  const leaveLogData = [
    ["Sick Leave", "5/05/2024", "5/10/2024", 5, "Not feeling well", "Approved"],
    // ...more leave data
  ];

  const holidayData = [
    ["New Year", "01/01/2025"],
    ["Republic Day", "26/01/2025"],
    ["Holi", "08/03/2025"],
    ["Good Friday", "18/04/2025"],
    ["Independence Day", "15/08/2025"],
    ["Diwali", "12/11/2025"],
    ["Christmas", "25/12/2025"],
  ];

  const columnsAttendance = [
    "Employee Name",
    "Check-in",
    "Check-out",
    "Status",
    "Date",
  ];
  const columnsLeave = ["Leave Type", "From", "To", "Days", "Reason", "Status"];

  const tableData =
    activeLog === "Attendance Log" ? attendanceLogData : leaveLogData;
  const columns =
    activeLog === "Attendance Log" ? columnsAttendance : columnsLeave;

  const handleViewMore = () => {
    setRowsToShow(tableData.length); // Show all rows when clicked
  };

  return (
    <div className="mt-6 grid grid-cols-3 gap-4 items-start">
      <section className="col-span-2 bg-white p-4 rounded-lg shadow flex flex-col h-[500px]">
        {/* Attendance/Leave Log Section */}
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
        <div className="flex-grow">
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
              {tableData.slice(0, rowsToShow).map((row, rowIndex) => (
                <tr
                  key={rowIndex}
                  className={rowIndex % 2 === 0 ? "bg-gray-100" : "bg-white"}
                >
                  {row.map((cell, cellIndex) => (
                    <td key={cellIndex} className="p-2">
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* View More (Underlined Text) */}
        {tableData.length > 8 && rowsToShow < tableData.length && (
          <div className="flex justify-center mt-4">
            <span
              onClick={handleViewMore}
              className="cursor-pointer text-blue-500 hover:underline"
            >
              View More
            </span>
          </div>
        )}
      </section>

      {/* Calendar Section (Right) */}
      <section className="bg-white p-4 rounded-lg shadow flex flex-col">
        <div className="w-full">
          <Calendar
            mode="single"
            selected={date}
            onSelect={setDate}
            className="rounded-md border w-full h-full"
          />
        </div>

        {/* Holiday Section */}
        <div className="mt-4 bg-white rounded-lg shadow p-4 w-full">
          <div className="flex justify-between items-center mb-2">
            <h2 className="text-lg font-semibold">Holidays (2025)</h2>
            <span className="text-blue-500 cursor-pointer hover:underline">
              View All
            </span>
          </div>
          <div>
            {holidayData.map(([holiday, date], index) => (
              <div key={index} className="flex justify-between mb-2">
                <span>{holiday}</span>
                <span>{date}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
