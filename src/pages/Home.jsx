import React from "react";
import HomeBackground from "../assets/HomeBackground.svg";
import HomeBackground2 from "../assets/Ellipse 9.svg";
import HomeBackground3 from "../assets/Ellipse 8.svg";
import "../styles/Home.css";

import Description from "../components/Description";
import Bakici from "../components/Bakici";
import HomeFirst from './../components/HomeFirst';
import BakiciOlma from "../components/BakiciOlma";
import HomeCarousel from "../components/HomeCarousel";
import HomeLastComp from "../components/HomeLastComp";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const Home = () => {
  return (
    <div className="Hame">
      <img className="HomeBackground1" src={HomeBackground} alt="" />
      <img className="HomeBackground2" src={HomeBackground2} alt="" />
      <img className="HomeBackground3" src={HomeBackground3} alt="" />
      <Navbar />
      <HomeFirst />
      <Description />
      <Bakici />
      <BakiciOlma />
      <HomeCarousel />
      <HomeLastComp />
      <Footer />
    </div>
  );
};

export default Home;
