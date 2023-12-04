"use client";
import React, { useEffect, useState } from "react";
import Navbar from "../../../components/Navbar";
import Homeeventcard from "../../../components/Homeeventcard";
import axios from "axios";
import Footer from "../../../components/Footer";
import load from "../../../public/Progress_indicator-pana-removebg-preview.png";
import Image from "next/image";
import Foot from "../../../public/premiereleague.jpg";
import SoccerCard from "../../../components/Competioneventcards";
import hockey from "../../../public/hockey.jpg";
import Tenis from "../../../public/Tenis.jpg";
import basket from "../../../public/NBA-logo-illustration-958x575.jpg";
import Eventdetails from "../../../components/Eventdetails";

type Props = {};

const Home: React.FC<Props> = () => {
  const [selectedSport, setSelectedSport] = useState<string | null>(null);
  const [events, setEvents] = useState<any[]>([]);
  const [sportlists, setSportlists] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const options = {
          method: "GET",
          url: "https://livescore-sports.p.rapidapi.com/v1/meta/sports",
          headers: {
            "X-RapidAPI-Key": process.env.NEXT_PUBLIC_API_KEY,
            "X-RapidAPI-Host": process.env.NEXT_PUBLIC_API_HOST,
          },
        };

        const response = await axios.request(options);
        const data = response.data;
        setSportlists(data.DATA);
      } catch (error) {
        console.error(error);
      }
    };

    fetchCategories();
  }, []);

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    const fetchEvents = async () => {
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
          setEvents(data.slice(0, 10));
        } catch (error) {
          console.error(error);
        } finally {
          setLoading(false);
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
        "X-RapidAPI-Key": process.env.NEXT_PUBLIC_API_KEY,
        "X-RapidAPI-Host": process.env.NEXT_PUBLIC_API_HOST,
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
      <div className="flex-1">
        <div className="h-full container mx-auto p-5 flex flex-col">
          <div className="flex flex-col">
            <span className="text-xl md:text-2xl mt-3">Hi Oloni,</span>
            <span className="text-xl md:text-2xl font-bold">
              Welcome to the Thrilling World of Sporting Events!
            </span>
          </div>

          <div className="flex space-x-3 mt-5 overflow-scroll h-96">
            <SoccerCard Type="Soccer" image={Foot} />
            <SoccerCard Type="Tennis" image={Tenis} />
            <SoccerCard Type="Hockey" image={hockey} />
            <SoccerCard Type="Basketball" image={basket} />
          </div>
          <div className="w-full bg-[#1f1f24] my-6 p-2 rounded-xl min-h-[500px]">
            <div className="flex justify-between items-center mb-6">
              <span className="font-bold text-xl max-md:text-sm">
                Today&lsquo;s events
              </span>
              <div className="relative flex justify-between items-center">
                <select
                  name=""
                  id=""
                  className="w-[200px] h-6 bg-black rounded-md px-2 cursor-pointer font-semibold"
                  onChange={handleSportChange}
                  value={selectedSport || ""}
                >
                  {sportlists.map((sport) => (
                    <option key={sport.id} value={sport.name}>
                      {sport.name}
                    </option>
                  ))}
                </select>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="white"
                  className="w-5 h-5 absolute right-1"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                  />
                </svg>
              </div>
            </div>
            {loading ? (
              <div className="flex flex-col items-center justify-center h-[500px] w-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-8 h-8 animate-spin"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99"
                  />
                </svg>
              </div>
            ) : (
              <div className="w-full flex flex-col space-y-1 my-2">
                {events.length > 0 ? (
                  events.map((event) => (
                    <Eventdetails key={event.id} info={event} />
                  ))
                ) : (
                  <p>No events available for today.</p>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </section>
  );
};

export default Home;
