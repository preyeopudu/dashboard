import React, { useState } from "react";
import "./styles/home.css";
import Sidebar from "../components/Sidebar";
import HeroSection from "../components/HeroSection";
import Card from "../components/Card";

const Home = () => {
  const [open, setOpen] = useState(false);

  const HandleClick = () => {
    setOpen(!open);
  };
  return (
    <div className="homeContainer">
      <Sidebar HandleClick={HandleClick} open={open} />
      <HeroSection HandleClick={HandleClick} />
      <Card />
    </div>
  );
};

export default Home;
