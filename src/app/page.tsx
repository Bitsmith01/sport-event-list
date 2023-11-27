"use client"
import { useEffect, useState } from "react";
import axios from "axios";
import Image from "next/image";
import styles from "./page.module.css";
import Navbar from "../../components/Navbar";
import Hero from "../../components/Hero";
import Contests from "../../components/Contests";
import Popular from "../../components/Popular";
import { Key } from "../../constants";


export default function Home() {
  const [sportlists, setSportlists] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const options = {
      method: "GET",
      url: "https://livescore-sports.p.rapidapi.com/v1/meta/sports",
      headers: Key,
    };

    try {
      const response = await axios.request(options);
      const data = response.data;
      console.log(data);
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
    </>
  );
}
