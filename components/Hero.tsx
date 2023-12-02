import React from "react";
import image1 from "../public/emily-WOBRFCzgLdk-unsplash.jpg";
import Image from "next/image";
import banner from "../public/banner-bg.jpg";
import sport from "../public/cricket-big-removebg-preview.png";
import { motion, AnimatePresence } from "framer-motion";

type Props = {};

const Hero = (props: Props) => {
  return (
    <section className="relative w-full h-[500px] max-md:h-[400px] flex flex-col max-md:justify-start justify-center items-center">
      <div className="absolute -z-10 w-full mx-auto">
        <Image
          src={banner}
          className="w-full h-[500px] max-md:h-[400px]"
          alt="Banner"
        />
      </div>
      <div className="flex max-md:justify-center justify-center items-center container mx-auto h-full md:h-full">
        <AnimatePresence>
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 15 }}
            transition={{ delay: 0.25 }}
            className="w-1/2 max-md:w-full p-5"
          >
            <span className="text-[90px] max-md:text-[40px] font-[600] leading-[1.1] text-white">
              SPORT IS JUST AWERSOME
            </span>
            <p className="text-white my-[20px] text-[20px] max-md:text-sm max-md:space-y-3 leading-[28px]">
              Explore the incredible world of sports on our dedicated platform.
              From the thrill of competitions to the health benefits, discover
              why sports are just awesome. Join us for an unparalleled sports
              experience!
            </p>
            <button className="w-[160px] h-[53px] bg-white text-black hover:bg-black hover:text-white">
              Sign In
            </button>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 15 }}
            transition={{ delay: 0.25 }}
            className="w-1/2 max-md:hidden flex justify-center items-center p-10"
          >
            <Image src={sport} alt="Sport" className="w-[400px] h-[400px]" />
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Hero;
