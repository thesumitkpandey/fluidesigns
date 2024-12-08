import React, { useState } from "react";
import { Calendar } from "@/Components/ui/calendar";

export default function Log() {
  const [date, setDate] = useState(new Date());
  const [activeLog, setActiveLog] = useState("Attendance Log");
  const [rowsToShow, setRowsToShow] = useState(8);

  const attendanceLogData = [
    ["John Doe", "9:00 AM", "5:00 PM", "Present", "01/01/2024"],
  ];

  const leaveLogData = [
    ["Casual Leave", "29-09-2024", "30-09-2024", "01", "Wedding", "Approved"],
    ["Sick Leave", "29-09-2024", "30-09-2024", "01", "Wedding", "Rejected"],
    ["Casual Leave", "29-09-2024", "30-09-2024", "01", "Wedding", "Approved"],
    ["Casual Leave", "29-09-2024", "30-09-2024", "01", "Wedding", "Rejected"],
    ["Paid leave", "29-09-2024", "30-09-2024", "01", "Wedding", "Rejected"],
    ["Casual Leave", "29-09-2024", "30-09-2024", "01", "Wedding", "Rejected"],
    ["Sick Leave", "29-09-2024", "30-09-2024", "01", "Wedding", "Rejected"],
  ];

  const holidayData = [
    ["1 Jan, Mon", "New Year(O)"],
    ["14 Jan, Thru", "Makar Sankranti"],
    ["15 Mar, Fri", "Holi"],
    ["30 Mar,Fri", "Gudi Padwa(O)"],
    ["18 Apr, Mon", "Good Friday"],
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
    setRowsToShow(tableData.length);
  };

  return (
    <div className="mt-6 grid grid-cols-3 gap-4 items-start">
      <section className="col-span-2 bg-white p-4 rounded-lg shadow flex flex-col h-[500px]">
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
                    <td
                      key={cellIndex}
                      className={`p-2 ${
                        columns[cellIndex] === "Status"
                          ? cell === "Approved"
                            ? "text-green-500"
                            : cell === "Rejected"
                            ? "text-red-500"
                            : ""
                          : ""
                      }`}
                    >
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

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
      <div className="flex flex-col">
        <section className="bg-white p-4 rounded-lg shadow flex flex-col">
          <div className="w-full">
            <Calendar
              mode="single"
              selected={date}
              onSelect={setDate}
              className="rounded-md border w-full h-full"
            />
          </div>
        </section>
        <section>
          <div className="mt-4 bg-white rounded-lg shadow p-4 w-full">
            <div className="flex justify-between items-center mb-4 text-xl">
              <h2 className=" font-semibold">Holidays (2025)</h2>
              <span className="text-blue-500 cursor-pointer hover:underline">
                View All
              </span>
            </div>
            <hr className="border-t border-gray-300 my-4" />
            <div>
              {holidayData.map(([holiday, date], index) => (
                <div
                  key={index}
                  className="flex justify-between items-center py-3 text-base"
                >
                  <span className="">{holiday}</span>
                  <span className=" text-gray-600">{date}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
