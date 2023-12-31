import React from "react";
import latestresultbg from "../public/bg-01.jpg";
import Image from "next/image";
import Ligers from "../public/team-logo-03.png";
import Bayern from "../public/Chelsea_FC.svg.webp";
import { motion, AnimatePresence } from "framer-motion";

type Props = {};

const Results = (props: Props) => {
  return (
    <section className="flex flex-col relative">
      <div className="w-full -z-10 absolute">
        <Image
          src={latestresultbg}
          alt="Player"
          className="h-[40rem] object-cover"
        />
      </div>
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.70 }}
        className="h-fit container mx-auto flex flex-col justify-start items-center"
      >
        <span className="text-xl md:text-[48px] font-[400] my-5 p-5">
          Latest Results
        </span>
        <div className="w-full md:flex md:justify-center md:items-center md:flex-1 md:mt-6">
          <div className="w-full h-1/3">
            <div className="w-full flex flex-col justify-center items-center md:flex-row md:space-x-3">
              <span className="text-3xl font-bold text-white max-md:hidden">
                Ligers
              </span>
              <Image
                src={Ligers}
                alt="Ligers"
                className="h-[200px] w-[200px]"
              />
            </div>
          </div>
          <div className="flex flex-col justify-center items-center h-1/3 my-3 space-y-2">
            <span className="text-xl text-white font-bold">La Liga</span>
            <span className="text-5xl text-white font-bold">00:00</span>
          </div>
          <div className="w-full h-1/3">
            <div className="w-full flex flex-col justify-center items-center md:flex-row md:space-x-3">
              <Image
                src={Bayern}
                alt="Bayern"
                className="h-[200px] w-[200px]"
              />
              <span className="text-3xl font-bold text-white max-md:hidden">
                Chelsea FC
              </span>
            </div>
          </div>
        </div>
        <div className="h-56 mt-[4rem] w-full bg-[#35343c] flex flex-col p-4 relative">
          <div className="flex justify-between items-center">
            <span className="text-[28px] font-semibold">Match Schedule</span>
            <span className="underline cursor-pointer text-white max-md:hidden animate-pulse">
              See more Schedule events
            </span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="red"
              className="w-6 h-6 md:hidden animate-bounceX"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
              />
            </svg>
          </div>
          <div className="flex overflow-x-auto space-x-2">
            <div className="border-[1px] flex justify-around items-center my-6 md:w-1/3 w-full shrink-0">
              <Image
                src={Ligers}
                alt="Barcelone"
                className="h-[100px] w-[100px]"
              />
              <span className="text-xl text-white">3h:45 PM</span>
              <Image
                src={Ligers}
                alt="Barcelone"
                className="h-[100px] w-[100px]"
              />
            </div>
            <div className="border-[1px] flex justify-around items-center my-6 md:w-1/3 w-full shrink-0">
              <Image
                src={Ligers}
                alt="Barcelone"
                className="h-[100px] w-[100px]"
              />
              <span className="text-xl text-white">3h:45 PM</span>
              <Image
                src={Ligers}
                alt="Barcelone"
                className="h-[100px] w-[100px]"
              />
            </div>
            <div className="border-[1px] flex justify-around items-center my-6 md:w-1/3 w-full shrink-0">
              <Image
                src={Ligers}
                alt="Barcelone"
                className="h-[100px] w-[100px]"
              />
              <span className="text-xl text-white">3h:45 PM</span>
              <Image
                src={Ligers}
                alt="Barcelone"
                className="h-[100px] w-[100px]"
              />
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Results;
