"use client";
import { useEffect, useState } from "react";
import axios from "axios";
import Image from "next/image";
import styles from "./page.module.css";
import Navbar from "../../components/Navbar";
import Hero from "../../components/Hero";
import Contests from "../../components/Contests";
import Popular from "../../components/Popular";
import { Key } from "../../constants";
import Footer from "../../components/Footer";
import Login from "../../components/Login";

export default function Home() {
  const [sportlists, setSportlists] = useState([]);
  const rapidApiKey = process.env.RAPIDAPI_KEY;
  const rapidApihosts = process.env.RAPIDAPI_HOSTS;

  useEffect(() => {
    fetchData();
  }, []);

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
    <>
      <Navbar />
      <Hero />
      <Popular sportlists={sportlists} />
      <Contests />
      <Footer />
    </>
  );
}
