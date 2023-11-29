"use client";
import React, { useEffect, useState } from "react";
import Navbar from "../../../components/Navbar";
import Homeeventcard from "../../../components/Homeeventcard";
import axios from "axios";
import Footer from "../../../components/Footer";

type Props = {};

const Home: React.FC<Props> = ({}) => {
  const [selectedSport, setSelectedSport] = useState<string | null>(null);
  const [Events, setEvents] = useState<any[]>([]);
  const [sportlists, setSportlists] = useState<any[]>([]);

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    const fetchEvents = async () => {
      if (selectedSport) {
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
            "X-RapidAPI-Key":
              "66350d8674msha95718691150d6dp105fc9jsnc7f20d776be0",
            "X-RapidAPI-Host": "livescore-sports.p.rapidapi.com",
          },
        };

        try {
          const response = await axios.request(options);
          const data = response.data.DATA;
          setEvents(data.slice(0, 10));
          console.log(data);
        } catch (error) {
          console.error(error);
        }
      }
    };

    if (selectedSport) {
      fetchEvents();
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

  const fetchData = async () => {
    const options = {
      method: "GET",
      url: "https://livescore-sports.p.rapidapi.com/v1/meta/sports",
      headers: {
        "X-RapidAPI-Key": "66350d8674msha95718691150d6dp105fc9jsnc7f20d776be0",
        "X-RapidAPI-Host": "livescore-sports.p.rapidapi.com",
      },
    };

    try {
      const response = await axios.request(options);
      const data = response.data;
      setSportlists(data.DATA);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <section className="flex flex-col">
      <Navbar />
      <div className="flex-1 bg-gray-100">
        <div className="h-full container mx-auto p-5 flex flex-col">
          <div className="flex flex-col">
            <span className="text-xl md:text-2xl font-bold">
              Welcome to the Thrilling World of Sporting Events!
            </span>
            <span className="max-md:text-sm mt-3">Monday, 13 Jun 2023</span>
          </div>
          <div className="mt-10 flex justify-between items-center mb-14">
            <span className="font-semibold w-1/2">Today&apos;s events</span>
            <select
              className="w-1/2 md:w-96 p-2 rounded-md bg-white"
              value={selectedSport || ""}
              onChange={handleSportChange}
            >
              {sportlists.map((sport, index) => (
                <option key={index} value={sport.name}>
                  {sport.name}
                </option>
              ))}
            </select>
          </div>
          <div className="w-full flex flex-col space-y-1">
            {Events.map((event, index) => (
              <Homeeventcard key={index} event={event} />
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </section>
  );
};

export default Home;
