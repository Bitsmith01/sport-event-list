import React from "react";
import { SPORTARTICLES } from "../constants";
import ContestsCard from "./ContestsCard";
import paterne from "../public/pattern-07.png"
import Image from "next/image";

type Props = {};

const Contests = (props: Props) => {
  const currentDate = new Date().toLocaleDateString();

  return (
    <div className="container flex flex-col space-y-3 md:space-y-2 mx-auto max-md:px-5 md:p-5 relative max-md:my-5">
      <Image
      src={paterne}
      alt="paterne"
      className="absolute top-[2.8rem] left-[-120px] max-md:hidden animate-bounce-slow"/>
      <div className="flex justify-between items-center">
        <span className="md:font-bold md:text-2xl text-xl mb-5">Latests news</span>
        <span className="text-sm">{currentDate}</span>
      </div>
      <div className="flex md:grid md:grid-cols-2 gap-4 max-md:overflow-scroll my-5">
        {SPORTARTICLES.map((article, index) => (
          <div key={index} className="max-md:w-full max-md:shrink-0">
            <ContestsCard article={article} />
          </div>
        ))}
      </div>
      <Image
      src={paterne}
      alt="paterne"
      className="absolute bottom-[2.8rem] right-[-120px] max-md:hidden animate-bounce-slow"/>
    </div>
  );
};

export default Contests;
