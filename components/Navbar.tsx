import React from "react";

type Props = {};

const Navbar = (props: Props) => {
  return (
    <nav className="flex container mx-auto p-5 justify-between">
      <div className="cursor-pointer">
        <span className="font-bold md:text-2xl">SPORT</span>
        <span className="font-bold text-green-500 md:text-2xl">
          EVENTS
          <span className="text-black">.</span>
        </span>
      </div>
      <button className="bg-[#171717] w-24 text-white rounded-full transition-all text-sm md:flex justify-center items-center space-x-1 hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-5 h-5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
          />
        </svg>
        <span>Login</span>
      </button>
      <button className="md:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </svg>
      </button>
    </nav>
  );
};

export default Navbar;
