import React from "react";

export const SidebarElement = ({ name, symbol }) => {
  return (
    <li className="flex items-center text-gray-800 hover:bg-gray-200 hover:text-black px-3 py-2 rounded cursor-pointer space-x-2">
      <span className="text-lg">{symbol}</span>
      <span>{name}</span>
    </li>
  );
};
