// Importez useState depuis "react"
import React, { useState } from "react";
import Image from "next/image";

type HomeEventCardProps = {
  event: {
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
};

const HomeEventCard: React.FC<HomeEventCardProps> = ({ event }) => {
  const homeTeamAbreviation =
    event.EVENTS?.[0]?.HOME_TEAM?.[0]?.ABBREVIATION || "Unknown";
  const homeTeamName = event.EVENTS?.[0]?.HOME_TEAM?.[0]?.NAME || "Unknown";
  const badgeSourceHome = event.EVENTS?.[0]?.HOME_TEAM?.[0]?.BADGE_SOURCE || "";
  const awayTeamAbreviation =
    event.EVENTS?.[0]?.AWAY_TEAM?.[0]?.ABBREVIATION || "Unknown";
  const awayTeamName = event.EVENTS?.[0]?.AWAY_TEAM?.[0]?.NAME || "Unknown";
  const badgeSourceAway = event.EVENTS?.[0]?.AWAY_TEAM?.[0]?.BADGE_SOURCE || "";
  const [isButtonClicked, setIsButtonClicked] = useState(false);

  const matchStartDate = event.EVENTS?.[0]?.MATCH_START_DATE || "";
  const parsedDate = new Date(matchStartDate);
  const heuresMinutes = parsedDate.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });

  return (
    <div className="relative">
      <button
        className="w-full bg-white"
        onClick={() => setIsButtonClicked(!isButtonClicked)}
      >
        <div className="flex justify-center items-center border-[1px] h-full">
          <div className="w-1/3 flex justify-center items-center space-x-8">
            <span className="text-sm md:text-lg w-16 max-md:hidden">
              {homeTeamAbreviation}
            </span>
            <div className="h-10 w-10 md:h-14 md:w-14 rounded-full overflow-hidden bg-white">
              <Image
                src={badgeSourceHome}
                layout="responsive"
                width={500}
                height={300}
                objectFit="cover"
                alt={homeTeamName}
              />
            </div>
          </div>
          <span className="h-12 w-1/3 md:h-16 md:w-16 flex justify-center items-center">
            VS
          </span>
          <div className="w-1/3 flex justify-center items-center space-x-8">
            <div className="h-10 w-10 md:h-14 md:w-14 rounded-full overflow-hidden bg-white">
              <Image
                src={badgeSourceAway}
                layout="responsive"
                width={500}
                height={300}
                objectFit="cover"
                alt={awayTeamName}
              />
            </div>
            <span className="text-sm md:text-lg w-16 max-md:hidden">
              {awayTeamAbreviation}
            </span>
          </div>
        </div>
      </button>
      {isButtonClicked && (
        <div className=" bg-white w-full h-fit p-5 flex justify-center items-center">
          <p className="px-5">
            The teams {homeTeamName} and {awayTeamName} are poised to face each
            other today in {event.COUNTRY_NAME} at {heuresMinutes}. Fans eagerly
            anticipate the thrilling clash as the competition unfolds on the
            field. It promises to be a captivating match filled with suspense
            and excitement.
          </p>
        </div>
      )}
    </div>
  );
};

export default HomeEventCard;
