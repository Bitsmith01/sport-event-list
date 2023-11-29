import axios from "axios";
import React, { useState, useEffect } from "react";
import Eventcard from "./Eventcard";
import Link from "next/link";

type PopularProps = {
  sportlists: any[];
};

const Popular: React.FC<PopularProps> = ({ sportlists }) => {
  const [selectedSport, setSelectedSport] = useState<string | null>(null);
  const [popularevent, setPopularevent] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchPopularevents = async () => {
      if (selectedSport) {
        setLoading(true);
        const currentDate = new Date().toISOString().split("T")[0];
        const options = {
          method: "GET",
          url: "https://livescore-sports.p.rapidapi.com/v1/events/list",
          params: {
            sport: selectedSport,
            timezone: "0",
            locale: "EN",
            date: currentDate,
          },
          headers: {
            "X-RapidAPI-Key": process.env.NEXT_PUBLIC_API_KEY,
            "X-RapidAPI-Host": process.env.NEXT_PUBLIC_API_HOST,
          },
        };

        try {
          const response = await axios.request(options);
          const data = response.data.DATA;
          setPopularevent(data.slice(0, 4));
          console.log(response.data.DATA[0].EVENTS[0].HOME_TEAM[0].NAME);
        } catch (error) {
          console.error(error);
        } finally {
          setLoading(false);
        }
      }
    };

    if (selectedSport) {
      fetchPopularevents();
    }
  }, [selectedSport]);

  useEffect(() => {
    if (sportlists.length > 0) {
      setSelectedSport(sportlists[0].name);
    }
  }, [sportlists]);

  const handleSportChange = (
    event: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>
  ) => {
    setSelectedSport(event.target.value);
  };

  return (
    <section className="container mx-auto p-5">
      <div className="flex justify-between items-center">
        <span className="w-1/2 md:font-bold md:text-2xl font-semibold">
          Popular Events
        </span>
        <div className="flex relative justify-end w-1/2 items-center space-x-1">
          <Link href="/Home" className="flex space-x-1">
            <span className="text-sm max-md:underline">More </span>
            <span className="text-sm max-md:hidden"> events</span>
          </Link>
          <select
            name=""
            id=""
            className="w-full md:w-[40%] p-1 h-9 bg-white border-[1px] rounded-md"
            value={selectedSport || ""}
            onChange={handleSportChange}
          >
            {sportlists.map((sport, index) => (
              <option className="text-black" key={index} value={sport.name}>
                {sport.name}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className="h-96 bg-gray-50 shadow-md mt-6">

        {popularevent.map((event, index) => (
          <div className="h-1/4" key={index}>
            <Eventcard event={event} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Popular;
