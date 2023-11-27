import React from "react";
import { SPORTARTICLES } from "../constants";
import ContestsCard from "./ContestsCard";

type Props = {};

const Contests = (props: Props) => {
  const currentDate = new Date().toLocaleDateString();

  return (
    <div className="container flex flex-col space-y-2 mx-auto p-5">
      <div className="flex justify-between items-center my-3">
        <span className="md:font-bold md:text-2xl font-semibold">Contests</span>
        <span className="text-sm">{currentDate}</span>
      </div>
      <div className="flex md:grid md:grid-cols-2 gap-4 max-md:overflow-scroll my-5">
        {SPORTARTICLES.map((article, index) => (
          <div key={index} className="max-md:w-full max-md:shrink-0">
            <ContestsCard article={article} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Contests;
