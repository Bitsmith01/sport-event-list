"use client";
import React, { useEffect, useState } from "react";
import ime from "../public/kisspng-github-computer.jpg";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { signIn, useSession, signOut } from "next-auth/react";

type Props = {};

const Navbar = (props: Props) => {
  const [showloginSection, setshowloginSection] = useState(false);
  const { data: session } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (session) {
      localStorage.setItem("user", JSON.stringify(session.user));
    }
  }, [session]);

  const handleLoginClick = () => {
    setshowloginSection(!showloginSection);
  };

  const handleCloseClick = () => {
    setshowloginSection(false);
  };

  const handleLoginBtn = async () => {    
    await signIn("github");
  };

  const handleLogoutBtn = async () => {
    await signOut();
  };
  return (
    <div>
      <div
        className={`h-screen w-screen bg-[#0000006b] z-40 text-white absolute ${
          showloginSection ? "flex" : "hidden"
        } flex-col justify-center items-center p-5`}
      >
        <div className="bg-white w-full mx-auto md:w-[50%] h-[40%] rounded-lg shadow-2xl flex flex-col justify-center items-center relative">
          <button
            className="absolute top-4 right-4 text-white"
            onClick={handleCloseClick}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="black"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
          <span className="text-black h-16 w-24 text-2xl">Sign In</span>
          <div className="w-full flex justify-center items-center">
            <div className="w-[90%] flex justify-center items-center">
              <button
                className="flex h-16 w-[60%] border-[1px] justify-center items-center space-x-3"
                onClick={handleLoginBtn}
              >
                <Image src={ime} width={60} alt="image" />
                <span className="text-black max-md:hidden">
                  Sign in with Github to unlock additional features and
                  personalized experiences.
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
      <nav className="flex container mx-auto p-5 justify-between items-center">
        <div className="cursor-pointer">
          <span className="font-bold md:text-2xl">SPORT</span>
          <span className="font-bold text-[#d41640] md:text-2xl">
            EVENTS
            <span className="text-[#d41640]">.</span>
          </span>
        </div>

        {session ? (
          <button
            className="bg-[#171717] w-fit p-1 md:px-4 text-white rounded-full transition-all text-sm flex justify-center items-center space-x-1"
            onClick={handleLogoutBtn}
          >
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
                d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9"
              />
            </svg>
            <span className="max-md:hidden">Sign Out</span>
          </button>
        ) : (
          <button
            className="bg-[#d41640] hover:bg-black w-fit p-1 md:px-4 text-white rounded-full transition-all text-sm flex justify-center items-center space-x-1"
            onClick={handleLoginClick}
          >
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
            <span className="max-md:hidden">Login</span>
          </button>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
