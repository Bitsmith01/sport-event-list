import Image from "next/image";
import React from "react";

type EventCardProps = {
  event: {
    title: string;
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
    }[];
  };
};

const EventCard: React.FC<EventCardProps> = ({ event }) => {
  const homeTeamName =
    event.EVENTS?.[0]?.HOME_TEAM?.[0]?.ABBREVIATION || "Unknown";
  const badgeSource = event.EVENTS?.[0]?.HOME_TEAM?.[0]?.BADGE_SOURCE || "";
  const awayTeamName = event.EVENTS?.[0]?.AWAY_TEAM?.[0]?.ABBREVIATION || "Unknown";
  const badgeSAway = event.EVENTS?.[0]?.AWAY_TEAM?.[0]?.BADGE_SOURCE || "";

  return (
    <div className="flex justify-center items-center border-[1px] h-full">
      <div className="w-1/3 flex justify-center  items-center space-x-8">
        <span className="text-sm md:text-lg w-16 max-md:hidden">
          {homeTeamName}
        </span>
        <div className="h-12 w-12 md:h-16 md:w-16 rounded-full overflow-hidden">
          <Image
            src={badgeSource}
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
      <div className="w-1/3 flex justify-center  items-center space-x-8">
        <div className="h-12 w-12 md:h-16 md:w-16 rounded-full overflow-hidden">
          <Image
            src={badgeSAway}
            layout="responsive"
            width={500}
            height={300}
            objectFit="cover"
            alt={awayTeamName}
          />
        </div>
        <span className="text-sm md:text-lg w-16 max-md:hidden">
          {awayTeamName}
        </span>
      </div>
    </div>
  );
};

export default EventCard;
