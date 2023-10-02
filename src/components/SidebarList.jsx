import React from "react";
import { Link } from "react-router-dom";

const SidebarList = ({ icon, name }) => {
  return (
    <Link to="/">
      <div className="py-1">
        <p className="px-3 py-2 flex bg-gray-200 font-medium w-full cursor-pointer hover:bg-gray-300">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d={icon} />
          </svg>
          <span className="ml-2">{name}</span>
        </p>
      </div>
    </Link>
  );
};

export default SidebarList;
