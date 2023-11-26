import React from "react";
import image1 from "../public/emily-WOBRFCzgLdk-unsplash.jpg"
import Image from "next/image";

type Props = {};

const Hero = (props: Props) => {
  return (
    <section className="container mx-auto flex flex-col space-y-3 md:space-y-10 relative mt-2 md:mt-6">
      <div className="flex items-center justify-center px-5 py-2">
        <span className="text-sm font-bold text-center md:text-2xl md:w-[60%]">
          Embark on the Thrill of <span className="underline text-red-500">Sporting Events</span> : Experience the
          Action, Feel the Emotion, Immerse Yourself in the Heart of Passion !
        </span>
      </div>
      <div className="h-96 mx-5 rounded-3xl bag relative">
        <Image src={image1} alt="image" className="h-full w-full rounded-3xl object-cover z-10 absolute" />
        <div className="h-full w-full bg-[#01010167] rounded-3xl z-30 absolute"></div>
      </div>
    </section>
  );
};

export default Hero;
