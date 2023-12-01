import React from "react";
import Image from "next/image";

type Props = {
  article: {
    image: string;
    league: string;
    title: string;
  };
};

const ContestsCard = ({ article }: Props) => {
  return (
    <div className="h-96 shadow-2xl rounded-md">
      <div className="h-3/4 relative">
        <Image
          src={article.image}
          width={500}
          height={300}
          className="z-10"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            borderRadius: "0.375rem",
          }}
          alt="Contest Image"
        />
        <span className="absolute z-10 rounded-md bg-[#d41640] w-[100px] text-center h-[80px] flex justify-center items-center text-sm px-5 text-white font-semibold top-[20px] left-[20px]">
          {article.league}
        </span>
      </div>
      <div className="h-1/4 p-5">
        <span>{article.title}</span>
      </div>
    </div>
  );
};

export default ContestsCard;
