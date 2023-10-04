import React from "react";
import youtubeLogo from "../assets/youtubeLogo.png";
import { useDispatch } from "react-redux";
import { toggleSidebar } from "../store/slices/sidebarConfigSlice";
import { Link } from "react-router-dom";

const Header = () => {
  const dispatch = useDispatch();

  const handleSidebarView = () => {
    dispatch(toggleSidebar());
  };

  return (
    <div className="flex items-center justify-between py-4 px-5 shadow-lg fixed w-full bg-white z-[1]">
      <div className="flex items-center">
        <button onClick={handleSidebarView}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5"
            />
          </svg>
        </button>
        <Link to="/">
          <img
            src={youtubeLogo}
            alt="youtube logo"
            className="w-20 h-auto ml-4"
          />
        </Link>
      </div>
      <div className="flex items-center">
        <input
          type="text"
          placeholder="Search"
          className="h-10 border border-black w-[550px] py-3 px-5 rounded-l-full"
        />
        <button className="w-14 h-10 border border-black rounded-r-full flex justify-center items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-6 h-6"
          >
            <path
              fillRule="evenodd"
              d="M10.5 3.75a6.75 6.75 0 100 13.5 6.75 6.75 0 000-13.5zM2.25 10.5a8.25 8.25 0 1114.59 5.28l4.69 4.69a.75.75 0 11-1.06 1.06l-4.69-4.69A8.25 8.25 0 012.25 10.5z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>
      <div>
        <button>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-7 h-7"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Header;
