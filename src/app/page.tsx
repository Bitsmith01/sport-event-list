import Image from "next/image";
import styles from "./page.module.css";
import Navbar from "../../components/Navbar";
import Hero from "../../components/Hero";
import Contests from "../../components/Contests";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Contests />
    </>
  );
}
