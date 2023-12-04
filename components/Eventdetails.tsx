import Image from "next/image";
import React, { useState } from "react";

interface EventDetailsProps {
  info: {
    COUNTRY_NAME?: string;
    EVENTS: {
      MATCH_ID?: string;
      HOME_SCORE?: string;
      AWAY_SCORE?: string;
      HOME_TEAM?: {
        NAME?: string;
        ID?: string;
        BADGE_SOURCE?: string;
        ABBREVIATION: string;
      }[];
      AWAY_TEAM?: {
        NAME?: string;
        ID?: string;
        BADGE_SOURCE?: string;
        ABBREVIATION: string;
      }[];
      MATCH_START_DATE?: string;
    }[];
  };
}

const EventDetails: React.FC<EventDetailsProps> = ({ info }) => {
  const event = info.EVENTS?.[0] || {};
  const homeTeam = event.HOME_TEAM?.[0] || {
    NAME: "Unknown",
    ABBREVIATION: "",
  };
  const awayTeam = event.AWAY_TEAM?.[0] || {
    NAME: "Unknown",
    ABBREVIATION: "",
  };

  const [isButtonClicked, setIsButtonClicked] = useState(false);

  const matchStartDate = event.MATCH_START_DATE || "";
  const parsedDate = new Date(matchStartDate);
  const heuresMinutes = parsedDate.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });

  return (
    <>
      <button
        onClick={() => {
          setIsButtonClicked(true);
        }}
        className="bg-black w-full h-fit rounded-xl p-2 flex items-center justify-end shadow-lg group"
      >
        <div className="flex flex-col w-full md:w-1/2 justify-center items-center">
          <span className="text-sm font-semibold">{heuresMinutes}</span>
          <span className="text-sm font-bold group-hover:text-white">
            {homeTeam?.NAME} - {awayTeam?.NAME}
          </span>
        </div>
        <div className="w-1/2 max-sm:hidden">
          <div className="w-full bg-black h-full rounded-md flex space-x-2">
            <div className="w-1/2 bg-[#1f1f24] rounded-md p-2 flex justify-between items-center">
              <span className="float-left">{event.HOME_SCORE}</span>
              <span className="float-right">1.4</span>
            </div>
            <div className="w-1/2 bg-[#1f1f24] rounded-md p-2 flex justify-between items-center">
              <span className="float-left">{event.AWAY_SCORE}</span>
              <span className="float-right">1.4</span>
            </div>
          </div>
        </div>
      </button>
      {isButtonClicked && (
        <div className="fixed top-0 left-0 w-screen h-screen bg-[#01010128] bg-opacity-75 z-50 flex items-center justify-center">
          <div className="w-[90%] h-fit md:w-[60%] md:h-fit bg-[#12111a] relative backdrop-blur-sm">
            <button
              onClick={() => {
                setIsButtonClicked(false);
              }}
              className="absolute right-4 top-4"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="white"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
            <div className="my-10 flex flex-col justify-center items-center">
              <h2 className="text-white">{info.COUNTRY_NAME}</h2>
              <div className="w-full flex justify-between items-center px-5 my-5 md:w-[500px]">
                {homeTeam?.BADGE_SOURCE && (
                  <Image
                    src={homeTeam.BADGE_SOURCE}
                    alt={`${homeTeam.NAME} badge`}
                    width={50}
                    height={50}
                    className="w-20 h-20 mb-2"
                  />
                )}
                <div className="flex flex-col justify-center items-center space-y-1">
                  <span>{heuresMinutes}</span>
                  <span>00 - 00</span>
                </div>

                {awayTeam?.BADGE_SOURCE && (
                  <Image
                    src={awayTeam.BADGE_SOURCE}
                    alt={`${awayTeam.NAME} badge`}
                    width={50}
                    height={50}
                    className="w-20 h-20"
                  />
                )}
              </div>
              <div className="w-full px-5 ">
                Exciting match between {homeTeam?.NAME} and {awayTeam?.NAME}!
                The competition is fierce as both teams strive for victory.
                Don&lsquo;t miss the action as they battle it out on the field. Stay
                tuned for live scores and thrilling moments !
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default EventDetails;
